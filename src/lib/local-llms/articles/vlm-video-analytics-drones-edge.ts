// Slug: vlm-video-analytics-drones-edge
// Cluster: edge-ai (Observe)
import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-02',
    current_hardware_mentioned: ['Hailo-10H', 'Hailo-15', 'Ambarella N-series', 'NVIDIA Jetson Orin', 'NVIDIA Jetson Thor', 'Qualcomm QRB5165', 'ModalAI VOXL 2'],
    theme: 'Cameras & Drones',
    heroImage: '/images/vlm-video-analytics-drones-edge-hero-en.webp',
    title: 'VLMs in Cameras and on Drones 2026: On-Device Video Understanding',
    seoTitle: 'VLMs in Cameras & Drones 2026: On-Device Video AI',
    intro:
      'Cameras and drones share one constraint that decides where video AI runs: bandwidth, not compute, is the reason inference moves onto the device. This guide compares in-camera, edge-appliance, and cloud architectures for video analytics, explains the shift from fixed-class detection to open-vocabulary VLM search, and covers the compute platforms shipping in cameras and on drone airframes today.',
    metaDescription:
      'Cameras and drones move VLM inference on-device for bandwidth, not privacy. Hailo, Ambarella, Jetson, and VOXL 2 compared for real deployments in 2026.',
    twitterDescription:
      'Why video AI moves on-device: bandwidth economics beat privacy as the reason. Hailo-10H, Ambarella N-series, Jetson Thor, and VOXL 2 compared for cameras and drones.',
    publishDate: '2026-09-02',
    dateModified: '2026-09-02',
    readTime: '13 min read',
    educationalLevel: 'Advanced',
    audience: 'Systems integrators, video security architects, and commercial drone operations leads',
    primaryTerm: 'on-device video understanding',
    targetKeywords: [
      'on-device video analytics 2026',
      'VLM camera inference edge',
      'drone onboard AI compute',
      'open-vocabulary video search',
      'Hailo-10H camera AI',
      'edge video bandwidth cost',
      'VOXL 2 drone autopilot AI',
    ],
    leadAnswerBlock:
      '**Cameras and drones move inference on-device because bandwidth and link limits — not privacy — make streaming raw video impractical.** A single continuous 4K security stream costs more in transport and storage over its retention window than the accelerator that processes it on the camera. A drone at operational range faces an intermittent, low-bandwidth, sometimes-contested radio link, so onboard compute is the only way it can act on what it sees. Both cases now support the same shift: from fixed-class object detection toward open-vocabulary VLM search that finds a described event instead of matching a fixed list of classes.',
    quickAnswerTop: {
      en: {
        question: 'Why do cameras and drones run VLMs on-device instead of in the cloud?',
        answer:
          'Bandwidth and link limits force it, not privacy: a continuous 4K security stream costs more in transport and storage than an in-camera accelerator, and a drone at range has an intermittent, sometimes-contested radio link that a cloud dependency cannot tolerate. Camera-side chips like Hailo-10H run under 5W; drones like ModalAI\'s VOXL 2 (Qualcomm QRB5165) put autopilot, navigation, and inference in one ~16 g package.',
        bullets: [
          'Hailo-10H / Hailo-15: sub-5W in-camera GenAI accelerators shown at ISC West 2026',
          'Ambarella N-series: 8K edge AI vision SoC launched at CES 2026',
          'NVIDIA Jetson Thor: supports up to 32 MIPI CSI-2 camera inputs',
          'ModalAI VOXL 2 (Qualcomm QRB5165): ~16 g drone autopilot + compute + GPS-denied VIO',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Why Bandwidth Drives Video AI to the Edge', anchor: '#bandwidth-economics' },
      { label: 'In-Camera, Edge Appliance, or Cloud?', anchor: '#architectures' },
      { label: 'From Detection to Description', anchor: '#detection-to-description' },
      { label: 'Estimate Your Bandwidth and Storage Cost', anchor: '#bandwidth-calculator' },
      { label: 'How to Evaluate a Deployment', anchor: '#evaluation-steps' },
      { label: 'Why Drones Process Video Onboard', anchor: '#drones-onboard' },
      { label: 'Commercial Applications Shipping Today', anchor: '#commercial-applications' },
      { label: 'Platform Comparison', anchor: '#platform-comparison' },
      { label: 'What Hardware to Buy', anchor: '#buying-categories' },
      { label: "What Doesn't Work On-Device Yet", anchor: '#locallens-limits' },
      { label: 'Jurisdiction and Procurement Rules', anchor: '#jurisdiction' },
      { label: 'Frequently Asked Questions', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Bandwidth and link limits, not privacy, are why camera and drone inference moves on-device: a continuous 4K stream costs more in transport and storage than the chip that processes it locally.',
          'Video analytics is shifting from fixed-class detection toward open-vocabulary VLM search — describing an event in plain language instead of matching a pre-trained class list.',
          'Camera silicon: Hailo-10H and Hailo-15 target sub-5W in-camera GenAI; Ambarella\'s N-series (launched CES 2026) adds an 8K edge AI vision SoC with multi-sensor perception.',
          'Edge appliances (NVIDIA Jetson Orin/Thor) aggregate many camera feeds on-premise; Jetson Thor supports up to 32 MIPI CSI-2 camera inputs in one box.',
          'Drones run compute on the airframe: Qualcomm QRB5165 via ModalAI VOXL 2 combines autopilot, GPS-denied visual-inertial odometry, and inference in an ~16 g package.',
          'Most real deployments are hybrid — a lightweight fixed-class detector runs continuously; the VLM only processes triggered clips, not every frame.',
          'A VLM does not replace fixed-class detection — it adds open-vocabulary search on top of a detector that still does the continuous, per-frame triage work.',
        ],
      },
      'bandwidth-economics': {
        id: 'bandwidth-economics',
        title: 'Why Does Video AI Move to the Edge Before Privacy Ever Comes Up?',
        content: [
          '**Bandwidth and physical link limits are the primary reason camera and drone inference moves on-device — the economic argument arrives before the privacy argument does.** A 4K camera streaming continuously at 15–30 fps generates a sustained bitrate that, multiplied across a multi-camera site and a 30-day retention window, accumulates transport and storage cost faster than the one-time cost of an in-camera or edge-appliance accelerator. The calculator further down this page lets you run that math for your own camera count and retention window.',
          'Drones face the same constraint from the opposite direction: instead of too much data to move cheaply, they have too little reliable link to depend on. A drone at operational range has an intermittent, low-bandwidth, and sometimes contested radio link — a mission that depends on a live cloud connection to interpret what the drone sees stops working exactly when the aircraft needs to act autonomously, such as during GPS jamming or beyond visual line of sight.',
          'This is a different framing from the privacy-first argument this site\'s existing local-LLM content tends to use for consumer and desktop AI. For cameras and drones, the buyer\'s first question is "can I afford to move this much video, and can I count on the link staying up" — privacy and data residency are real secondary benefits, not the reason the architecture exists.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Video AI moves on-device because transport and storage costs, and unreliable radio links, make cloud-dependent inference impractical before privacy is even a factor.' },
          { type: 'plain-terms', text: 'Moving every camera\'s video to a server costs money and needs a link that stays connected; processing it where it is captured avoids both problems.' },
        ],
      },
      architectures: {
        id: 'architectures',
        title: 'Should You Run Inference In-Camera, on an Edge Appliance, or in the Cloud?',
        content: [
          '**Three architectures handle camera video AI today, and most production deployments combine at least two of them.** The right choice depends on camera count per site, retention requirements, and how much per-unit cost the hardware budget can absorb.',
          '**In-camera inference** embeds the accelerator inside the camera itself — Hailo-10H and Hailo-15 target this design point at sub-5W power draw. Use this when each camera needs to make its own decision (motion-triggered recording, on-device tamper detection) and the camera\'s bill-of-materials can absorb one chip per unit.',
          '**On-premise edge appliance** aggregates many camera feeds into one box running NVIDIA Jetson Orin or Jetson Thor. Use this when a site has more cameras than it makes sense to instrument individually — Jetson Thor\'s support for up to 32 MIPI CSI-2 camera inputs is a strong signal this platform is meant for exactly this multi-camera aggregation role, not single-stream inference.',
          '**Cloud processing** still fits low-camera-count sites with no real-time requirement, where full-archive retroactive search across months of footage matters more than per-clip latency and where the bandwidth cost of a handful of streams is acceptable.',
          'In practice, most deployments described later in this article are hybrid: fixed-class detection runs continuously in-camera or on the edge appliance, cloud storage holds an archive for retroactive search, and VLM inference runs only against clips a lower-cost detector already flagged.',
        ],
      },
      'detection-to-description': {
        id: 'detection-to-description',
        title: 'How Is Video Analytics Shifting from Detection to Description?',
        content: [
          '**Video analytics is moving from fixed-class object detection toward open-vocabulary VLM search — the most recent shift in this market.** A fixed-class detector answers "is there a person, vehicle, or one of roughly 80 pre-trained COCO categories in this frame?" An open-vocabulary VLM answers a described query — "find the clip where someone left a bag near the loading dock" — against footage the fixed-class detector was never trained to recognize as a category.',
          '**A VLM does not replace the fixed-class detector — it works on top of it.** A vision-language model will not run at 30 frames per second per stream inside a sub-5W camera power budget; the compute and latency cost of full VLM inference is too high for continuous, every-frame processing at that power envelope. Instead, the fixed-class detector keeps doing the continuous, low-power triage work — motion, presence, basic classification — and only the clips it flags get passed to the VLM for open-vocabulary description or search.',
          'This two-tier design is why in-camera silicon like Hailo-10H is described as a "GenAI at the edge" accelerator rather than a full VLM-at-every-frame processor: the chip is sized for triggered, intermittent VLM inference on top of continuous lightweight detection, not for running a vision-language model at full frame rate.',
        ],
        items: [
          'Fixed-class detection: continuous, low-power, answers "is this one of N pre-trained categories?"',
          'Open-vocabulary VLM search: triggered, higher-power, answers a natural-language description against a specific clip',
          'The two are additive, not competing — the detector decides what to show the VLM, not the other way around',
          'Desktop and server-class VLM setups (LLaVA, Qwen3-VL, and similar models) share the same model families used for this triggered clip-level analysis — see the [desktop VLM comparison below](#related-reading) before evaluating an embedded deployment',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Open-vocabulary VLM search finds a described event in footage a fixed-class detector was never trained to recognize as a category, but it runs on triggered clips, not every frame.' },
          { type: 'plain-terms', text: 'The old way: "flag anything that matches person/car/dog." The new way: "find the clip where someone left a bag by the dock" — in your own words, after a cheaper detector has already flagged the clip.' },
        ],
      },
      'bandwidth-calculator': {
        id: 'bandwidth-calculator',
        title: 'How Much Bandwidth and Storage Does Your Camera Site Actually Need?',
        content: [
          '**Enter your camera count, resolution, frame rate, and retention window below to estimate continuous bandwidth and storage cost.** Use this before choosing between in-camera, edge-appliance, or cloud architectures — the number that comes out usually settles the argument on its own.',
        ],
        component: 'EdgeVideoBandwidthCalculator',
      },
      'evaluation-steps': {
        id: 'evaluation-steps',
        title: 'How Do You Evaluate a Camera or Drone VLM Deployment?',
        content: [
          '**Six checks separate a deployment that works from one that fails in the field.** Run them in this order before committing to a specific silicon platform.',
        ],
        numberedItems: [
          { title: 'Define the trigger, not the stream', whyItMatters: 'Decide what event triggers VLM inference (motion, a fixed-class detector alarm, a scheduled interval) before choosing hardware — running a VLM against every frame of every stream is not a power or cost budget that exists in 2026.' },
          { title: 'Measure the link budget before choosing silicon', whyItMatters: 'For drones, measure available uplink bandwidth and worst-case latency at operational range before selecting a compute platform — the airframe\'s radio link, not the compute chip, is usually the binding constraint.' },
          { title: 'Keep detection and description as separate stages', whyItMatters: 'Run a lightweight fixed-class detector continuously and route only flagged clips to the VLM — this is the only way to fit VLM inference inside a camera or drone power budget.' },
          { title: 'Match power budget to the physical enclosure', whyItMatters: 'A fanless camera housing caps thermal budget around 5W; a drone payload is capped by weight and flight-time trade-offs, not power draw alone — size the silicon to the enclosure, not the other way around.' },
          { title: 'Validate GPS-denied operation if the mission can lose GPS or the command link', whyItMatters: 'Visual-inertial odometry (VIO) needs to be tested specifically, not assumed to work, before relying on it beyond visual line of sight or in contested electromagnetic environments.' },
          { title: 'Pilot on one site or one airframe before scaling', whyItMatters: 'Validate false-positive rate, query latency, and battery/thermal behavior on a single deployment before committing budget to a fleet-wide rollout.' },
        ],
      },
      'drones-onboard': {
        id: 'drones-onboard',
        title: 'Why Do Drones Process Video Onboard Instead of Streaming It?',
        content: [
          '**Drones move compute onto the airframe for three reasons: link margin, latency, and GPS-denied navigation — not because onboard compute is cheaper.** A drone\'s radio link degrades with range, terrain, and interference in ways a fixed camera\'s ethernet cable never does; a mission that depends on a continuous cloud connection to interpret video fails exactly when the aircraft is furthest from its operator and needs autonomy most.',
          '**ModalAI\'s VOXL 2, built around the Qualcomm QRB5165, is the reference platform for compute-on-airframe design.** It is PX4-compatible, supports GPS-denied visual-inertial odometry (VIO) for navigation when satellite positioning is unavailable or jammed, and packages autopilot, compute, and navigation sensors into an autopilot-class module of roughly 16 grams — small enough that it competes with payload and battery for the same weight budget, not with a separate power supply.',
          '**Weight and power are hard constraints on an airframe in a way they are not for a camera bolted to a wall.** Every gram of onboard compute is a gram not available for battery capacity, sensor payload, or flight endurance — a drone platform cannot simply add a rack unit the way an on-premise camera site can add an edge appliance.',
        ],
        items: [
          'Link margin: radio connectivity degrades with range, terrain, and contested spectrum in ways wired camera infrastructure does not',
          'Latency: a live decision (obstacle avoidance, target tracking) cannot wait on a round-trip to a cloud server',
          'GPS-denied navigation: visual-inertial odometry lets the aircraft maintain position and heading when satellite positioning is unavailable',
          'Weight budget: an autopilot-class compute module in the ~16 g class trades directly against battery and payload, unlike a stationary camera\'s enclosure',
        ],
      },
      'commercial-applications': {
        id: 'commercial-applications',
        title: 'Where Are Camera and Drone VLMs Already Used Commercially?',
        content: [
          '**Four commercial categories account for most shipping deployments today: infrastructure and utility inspection, precision agriculture, survey and mapping, and public safety.**',
        ],
        items: [
          'Infrastructure and utility inspection: drones fitted with onboard compute inspect transmission lines, pipelines, and cell towers, flagging visible defects without streaming raw footage back for review',
          'Precision agriculture: onboard vision distinguishes crop stress, weed pressure, and irrigation issues per-field, feeding decisions back to farm management systems without a continuous cloud link over rural areas with weak connectivity',
          'Survey and mapping: photogrammetry and inspection drones process imagery onboard or at an edge appliance to reduce the volume of raw data that needs to be transported and stored per flight',
          'Public safety: fixed camera networks combine continuous fixed-class detection with triggered VLM search — for example, retrieving a described incident from an archive instead of manually reviewing hours of footage',
        ],
        callouts: [
          { type: 'note', text: 'Military programs are also shaping this silicon market. Shield AI\'s Hivemind autonomy software was selected for the US Air Force\'s YFQ-44A Collaborative Combat Aircraft (CCA) program, and Anduril\'s Lattice software has been tested on the same airframe. This program-level demand for autonomy stacks is one driver behind investment in edge inference silicon, though the certification path, buyer, and requirements for defense programs are entirely different from the commercial deployments described above and are outside the scope of this guide.' },
        ],
      },
      'platform-comparison': {
        id: 'platform-comparison',
        title: 'Comparison: Compute Platforms for Cameras and Drones',
        content: [
          'Cross-reference the [edge silicon guide](/local-llms/edge-ai-hardware-for-local-llms) for full Jetson Orin and Jetson Thor specifications — this table stays scoped to the camera- and drone-specific platforms most relevant to video analytics.',
        ],
        columns: ['Platform', 'Power Budget', 'Best For', 'Status'],
        rows: [
          { Platform: 'Hailo-10H / Hailo-15', 'Power Budget': '<5W', 'Best For': 'In-camera GenAI, edge VLM triage', Status: 'Shown at ISC West 2026' },
          { Platform: 'Ambarella N-series', 'Power Budget': 'Edge AI vision SoC', 'Best For': '8K multi-sensor perception', Status: 'Launched CES 2026' },
          { Platform: 'NVIDIA Jetson Orin / Thor', 'Power Budget': '15–130W class', 'Best For': 'Multi-camera edge appliance', Status: 'Thor: up to 32 MIPI cameras' },
          { Platform: 'Qualcomm QRB5165 (VOXL 2)', 'Power Budget': 'Drone-class module', 'Best For': 'Autopilot + VIO + inference', Status: 'PX4-compatible, ~16 g' },
        ],
      },
      'buying-categories': {
        id: 'buying-categories',
        title: 'What Hardware Do You Need to Get Started?',
        content: [
          '**Four hardware categories cover most camera and drone VLM projects; check current retailer and distributor listings for pricing, since it changes frequently.**',
        ],
        items: [
          'Camera modules and developer kits: reference camera boards paired with an edge accelerator, used to prototype an in-camera pipeline before committing to a custom camera design',
          'Hailo M.2 accelerator modules: add sub-5W AI inference to an existing camera or embedded compute board over an M.2 slot, without redesigning the camera\'s main board',
          'Edge video appliances: NVIDIA Jetson Orin and Jetson Thor developer kits, used to prototype the multi-camera aggregation architecture described above before deploying a fleet of on-premise appliances',
          'Drone developer platforms: ModalAI VOXL 2 developer kits, used to prototype PX4-based autopilot and onboard-inference pipelines before integrating into a production airframe',
        ],
      },
      'locallens-limits': {
        id: 'locallens-limits',
        title: "What Doesn't Work On-Device Yet?",
        content: [
          '**Three capabilities remain cloud-tier or research-stage as of 2026, and no camera- or drone-class accelerator changes that this year.**',
        ],
        items: [
          'Long-horizon video understanding: reasoning across a full multi-hour recording in one pass, rather than triggered clip-level analysis, still exceeds the memory and compute budget of edge accelerators',
          'Cross-camera re-identification at scale: tracking one described subject reliably across many camera feeds and sites remains a workload better suited to a centralized system with access to the full multi-camera archive',
          'Large context over hours of footage: an open-vocabulary query that needs to reason over an entire day\'s recording, rather than a specific flagged clip, still needs more context and compute than an edge accelerator\'s power budget supports',
        ],
      },
      jurisdiction: {
        id: 'jurisdiction',
        title: 'What Jurisdiction and Procurement Rules Apply?',
        content: [
          '**US federal and federal-adjacent procurement restricts Chinese-origin drone hardware through NDAA provisions and the Blue UAS framework — a live commercial constraint, not just a capability question.** A buyer\'s platform choice for any project touching federal, state, or critical-infrastructure procurement is constrained by country-of-origin rules on the airframe and its components, independent of what that hardware can technically do. Blue UAS is the Defense Innovation Unit\'s vetted list of drone platforms cleared for government use; a systems integrator selling into this market needs to confirm platform eligibility before specifying hardware, not after.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Why do camera and drone AI systems run inference on-device instead of in the cloud?',
            a: 'Bandwidth and link limits, not privacy, are the primary reason. A continuous 4K camera stream costs more in transport and storage over its retention window than the accelerator that processes it locally, and a drone at operational range has an intermittent, sometimes contested radio link that a cloud dependency cannot tolerate.',
          },
          {
            q: 'What is the difference between fixed-class detection and open-vocabulary VLM search?',
            a: 'A fixed-class detector answers whether a frame contains one of a pre-trained set of categories (roughly 80 in a typical COCO-trained model). An open-vocabulary VLM answers a described query — for example, "find the clip where someone left a bag near the loading dock" — against content the fixed-class detector was never trained to recognize as a category.',
          },
          {
            q: 'Can a vision-language model run in real time on a sub-5W camera accelerator?',
            a: 'Not at full frame rate. A VLM will not run at 30 frames per second per stream inside a sub-5W power budget. In practice, a lightweight fixed-class detector runs continuously at low power, and only the clips it flags are passed to the VLM for open-vocabulary description — the VLM runs on triggered clips, not every frame.',
          },
          {
            q: 'What compute platform do commercial drones use for onboard AI?',
            a: 'ModalAI\'s VOXL 2, built around the Qualcomm QRB5165, is a widely used reference platform. It is PX4-compatible, supports GPS-denied visual-inertial odometry for navigation, and packages autopilot, compute, and navigation sensors into a module of roughly 16 grams.',
          },
          {
            q: 'How much bandwidth does a single 4K security camera actually need?',
            a: 'It depends on frame rate, scene complexity, and codec — use the [bandwidth calculator](#bandwidth-calculator) on this page to estimate continuous bandwidth and storage cost for your specific camera count, resolution, frame rate, and retention window rather than relying on a single rule-of-thumb number.',
          },
          {
            q: 'Should I choose Hailo-10H or Ambarella\'s N-series for a new camera design?',
            a: 'They target overlapping but distinct positions: Hailo-10H and Hailo-15 focus on sub-5W in-camera GenAI inference, while Ambarella\'s N-series (launched CES 2026) is positioned as an 8K edge AI vision SoC with multi-sensor perception. The right choice depends on your camera\'s resolution target, power budget, and whether you need multi-sensor fusion in the same chip.',
          },
          {
            q: 'Why do drones need GPS-denied navigation, and how does VOXL 2 handle it?',
            a: 'GPS signals can be jammed, spoofed, or simply unavailable indoors or in contested environments. VOXL 2 supports visual-inertial odometry (VIO), which fuses camera and inertial sensor data to estimate position and heading without relying on satellite positioning.',
          },
          {
            q: 'Are Chinese-origin drones restricted in the US commercial and government market?',
            a: 'For US federal and federal-adjacent procurement, yes — NDAA provisions and the Blue UAS framework restrict Chinese-origin drone hardware from government use. This is a procurement and country-of-origin rule, separate from the hardware\'s technical capability, and it applies before a systems integrator specifies a platform for that market.',
          },
          {
            q: 'Do I need an edge appliance, or can each camera run inference on its own?',
            a: 'It depends on camera count per site. A handful of cameras can each run in-camera inference independently (Hailo-10H/15-class chips). A site with many cameras usually benefits from an on-premise edge appliance (NVIDIA Jetson Orin or Thor) that aggregates feeds centrally — Jetson Thor supports up to 32 MIPI CSI-2 camera inputs in one box, which is a strong signal of its intended multi-camera role.',
          },
          {
            q: "What can't on-device VLMs do yet for video analytics?",
            a: 'Three capabilities remain cloud-tier or research-stage as of 2026: long-horizon reasoning across a full multi-hour recording in one pass, cross-camera re-identification of one subject at scale, and open-vocabulary queries that need context spanning an entire day\'s footage rather than a specific flagged clip.',
          },
        ],
      },
      'related-reading': {
        id: 'related-reading',
        title: 'Related Reading',
        content: [
          'For desktop VLM basics, see [Best Local Vision Models 2026: LLaVA, Qwen3-VL & Ollama](/power-local-llm/local-vision-models-llava-ollama-2026), then come back here for embedded and camera deployment — that guide covers desktop and server-class vision-language model setup; this one covers the camera- and drone-specific constraints of power, bandwidth, and airframe weight.',
        ],
        items: [
          '[Edge AI Hardware for Local LLMs](/local-llms/edge-ai-hardware-for-local-llms) — full specifications for the Jetson Orin and Jetson Thor platforms referenced in the comparison table above',
          '[VLA Models for Robots: Local Inference](/local-llms/vla-models-robots-local-inference) — the sibling article on the same silicon constraint applied to robot action models instead of video understanding',
          '[Local LLM Security & Privacy Checklist](/local-llms/local-llm-security-privacy-checklist) — data-handling considerations that still apply once video analytics moves on-device',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'VLMs in Cameras and on Drones 2026: On-Device Video Understanding',
      description:
        'Cameras and drones move VLM inference on-device for bandwidth, not privacy. Hailo, Ambarella, Jetson, and VOXL 2 compared for real deployments in 2026.',
      datePublished: '2026-09-02',
      dateModified: '2026-09-02',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
        sameAs: 'https://www.linkedin.com/in/hanskuepper/',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      inLanguage: 'en',
      url: 'https://www.promptquorum.com/local-llms/vlm-video-analytics-drones-edge',
      image: 'https://www.promptquorum.com/images/vlm-video-analytics-drones-edge-hero-en.webp',
      educationalLevel: 'Advanced',
      proficiencyLevel: 'Advanced',
      audience: {
        '@type': 'Audience',
        audienceType: 'Systems integrators, video security architects, and commercial drone operations leads',
      },
      about: [
        { '@type': 'Thing', name: 'Vision-language models' },
        { '@type': 'Thing', name: 'Edge AI' },
        { '@type': 'Thing', name: 'Video analytics' },
        { '@type': 'Thing', name: 'Drone autonomy' },
      ],
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways'],
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/local-llms/vlm-video-analytics-drones-edge',
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-02',
    current_hardware_mentioned: ['Hailo-10H', 'Hailo-15', 'Ambarella N-series', 'NVIDIA Jetson Orin', 'NVIDIA Jetson Thor', 'Qualcomm QRB5165', 'ModalAI VOXL 2'],
    theme: 'Cameras & Drones',
    heroImage: '/images/vlm-video-analytics-drones-edge-hero-de.webp',
    title: 'VLMs in Kameras und Drohnen 2026: Videoverständnis direkt auf dem Gerät',
    seoTitle: 'VLMs in Kameras & Drohnen 2026: KI-Video vor Ort',
    intro:
      'Kameras und Drohnen teilen eine Einschränkung, die entscheidet, wo Video-KI läuft: Bandbreite, nicht Rechenleistung, ist der Grund, warum Inferenz auf das Gerät wandert. Dieser Leitfaden vergleicht In-Kamera-, Edge-Appliance- und Cloud-Architekturen für Videoanalyse, erklärt den Wandel von klassenbasierter Erkennung zu offener VLM-Suche und behandelt die Recheneinheiten, die heute in Kameras und auf Drohnen-Plattformen verbaut sind.',
    metaDescription:
      'Kameras und Drohnen verlagern VLM-Inferenz aufs Gerät wegen Bandbreite, nicht Datenschutz. Hailo, Ambarella, Jetson und VOXL 2 im Vergleich für 2026.',
    twitterDescription:
      'Warum Video-KI aufs Gerät wandert: Bandbreiten-Ökonomie schlägt Datenschutz als Grund. Hailo-10H, Ambarella N-Serie, Jetson Thor und VOXL 2 im Vergleich für Kameras und Drohnen.',
    publishDate: '2026-09-02',
    dateModified: '2026-09-02',
    readTime: '13 Min. Lesezeit',
    educationalLevel: 'Advanced',
    audience: 'Systemintegratoren, Videosicherheitsarchitekten und Verantwortliche für kommerzielle Drohneneinsätze',
    primaryTerm: 'Videoverständnis auf dem Gerät',
    targetKeywords: [
      'Videoanalyse auf dem Gerät 2026',
      'VLM Kamera-Inferenz Edge',
      'Drohnen KI-Recheneinheit an Bord',
      'offene Vokabular-Videosuche',
      'Hailo-10H Kamera-KI',
      'Edge-Video Bandbreitenkosten',
      'VOXL 2 Drohnen-Autopilot KI',
    ],
    leadAnswerBlock:
      '**Kameras und Drohnen verlagern Inferenz auf das Gerät, weil Bandbreiten- und Verbindungsgrenzen — nicht Datenschutz — das Streamen von Rohvideo unpraktisch machen.** Ein einzelner durchgehender 4K-Sicherheitsstream kostet über sein Aufbewahrungsfenster hinweg mehr an Transport und Speicher als der Beschleuniger, der ihn direkt an der Kamera verarbeitet. Eine Drohne in Einsatzreichweite hat eine unterbrochene, bandbreitenarme und mitunter gestörte Funkverbindung, sodass Rechenleistung an Bord der einzige Weg ist, auf das Gesehene zu reagieren. Beide Fälle stützen denselben Wandel: von klassenbasierter Objekterkennung hin zu offener VLM-Suche, die ein beschriebenes Ereignis findet, statt eine feste Klassenliste abzugleichen.',
    quickAnswerTop: {
      de: {
        question: 'Warum führen Kameras und Drohnen VLMs auf dem Gerät statt in der Cloud aus?',
        answer:
          'Bandbreiten- und Verbindungsgrenzen erzwingen es, nicht der Datenschutz: Ein durchgehender 4K-Sicherheitsstream kostet mehr an Transport und Speicher als ein In-Kamera-Beschleuniger, und eine Drohne in Reichweite hat eine unterbrochene, mitunter gestörte Funkverbindung, die eine Cloud-Abhängigkeit nicht toleriert. Kamerachips wie Hailo-10H laufen mit unter 5 W; Drohnen wie ModalAIs VOXL 2 (Qualcomm QRB5165) vereinen Autopilot, Navigation und Inferenz in einem Modul von rund 16 g.',
        bullets: [
          'Hailo-10H / Hailo-15: In-Kamera-GenAI-Beschleuniger mit unter 5 W, gezeigt auf der ISC West 2026',
          'Ambarella N-Serie: 8K Edge-AI-Vision-SoC, vorgestellt auf der CES 2026',
          'NVIDIA Jetson Thor: unterstützt bis zu 32 MIPI-CSI-2-Kameraeingänge',
          'ModalAI VOXL 2 (Qualcomm QRB5165): ~16 g Drohnen-Autopilot + Recheneinheit + GPS-freie VIO',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'Wichtigste Erkenntnisse', anchor: '#key-takeaways' },
      { label: 'Warum Bandbreite Video-KI an den Rand treibt', anchor: '#bandwidth-economics' },
      { label: 'In-Kamera, Edge-Appliance oder Cloud?', anchor: '#architectures' },
      { label: 'Von Erkennung zu Beschreibung', anchor: '#detection-to-description' },
      { label: 'Bandbreiten- und Speicherkosten schätzen', anchor: '#bandwidth-calculator' },
      { label: 'Ein Deployment bewerten', anchor: '#evaluation-steps' },
      { label: 'Warum Drohnen Video an Bord verarbeiten', anchor: '#drones-onboard' },
      { label: 'Kommerzielle Anwendungen heute', anchor: '#commercial-applications' },
      { label: 'Plattformvergleich', anchor: '#platform-comparison' },
      { label: 'Welche Hardware Sie kaufen sollten', anchor: '#buying-categories' },
      { label: 'Was auf dem Gerät noch nicht funktioniert', anchor: '#locallens-limits' },
      { label: 'Rechtsraum und Beschaffungsregeln', anchor: '#jurisdiction' },
      { label: 'Häufig gestellte Fragen', anchor: '#faq' },
      { label: 'Weiterführende Artikel', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Bandbreiten- und Verbindungsgrenzen, nicht Datenschutz, sind der Grund, warum Kamera- und Drohnen-Inferenz aufs Gerät wandert: Ein durchgehender 4K-Stream kostet mehr an Transport und Speicher als der Chip, der ihn lokal verarbeitet.',
          'Videoanalyse verschiebt sich von klassenbasierter Erkennung zu offener VLM-Suche — ein Ereignis wird in normaler Sprache beschrieben, statt gegen eine vortrainierte Klassenliste abgeglichen.',
          'Kamera-Silizium: Hailo-10H und Hailo-15 zielen auf In-Kamera-GenAI unter 5 W; Ambarellas N-Serie (vorgestellt auf der CES 2026) ergänzt einen 8K Edge-AI-Vision-SoC mit Multisensor-Wahrnehmung.',
          'Edge-Appliances (NVIDIA Jetson Orin/Thor) bündeln viele Kamerafeeds vor Ort; Jetson Thor unterstützt bis zu 32 MIPI-CSI-2-Kameraeingänge in einem Gerät.',
          'Drohnen führen Rechenleistung auf der Plattform selbst aus: Qualcomm QRB5165 über ModalAI VOXL 2 vereint Autopilot, GPS-freie visuell-inertiale Odometrie und Inferenz in einem Modul von rund 16 g.',
          'Die meisten realen Einsätze sind hybrid — ein leichter klassenbasierter Detektor läuft durchgehend; das VLM verarbeitet nur ausgelöste Clips, nicht jedes Bild.',
          'Ein VLM ersetzt die klassenbasierte Erkennung nicht — es ergänzt offene Suche auf einem Detektor, der weiterhin die durchgehende Bild-für-Bild-Vorsortierung übernimmt.',
        ],
      },
      'bandwidth-economics': {
        id: 'bandwidth-economics',
        title: 'Warum wandert Video-KI an den Rand, bevor Datenschutz überhaupt zur Sprache kommt?',
        content: [
          '**Bandbreiten- und physische Verbindungsgrenzen sind der Hauptgrund, warum Kamera- und Drohnen-Inferenz aufs Gerät wandert — das ökonomische Argument kommt vor dem Datenschutzargument.** Eine 4K-Kamera, die durchgehend mit 15–30 fps streamt, erzeugt eine dauerhafte Bitrate, die über mehrere Kameras an einem Standort und ein 30-tägiges Aufbewahrungsfenster hinweg schneller Transport- und Speicherkosten anhäuft als die einmalige Anschaffung eines In-Kamera- oder Edge-Appliance-Beschleunigers. Der Rechner weiter unten auf dieser Seite lässt Sie diese Rechnung für Ihre eigene Kameraanzahl und Aufbewahrungsdauer durchführen.',
          'Drohnen stehen vor derselben Einschränkung aus der entgegengesetzten Richtung: Statt zu viel Daten, die günstig bewegt werden müssten, haben sie zu wenig verlässliche Verbindung, auf die sie sich verlassen könnten. Eine Drohne in Einsatzreichweite hat eine unterbrochene, bandbreitenarme und mitunter gestörte Funkverbindung — eine Mission, die auf eine durchgehende Cloud-Verbindung angewiesen ist, um das Gesehene zu interpretieren, versagt genau dann, wenn das Fluggerät autonom handeln muss, etwa bei GPS-Störung oder außerhalb der Sichtverbindung.',
          'Das ist ein anderer Rahmen als das datenschutzorientierte Argument, das bestehende lokale-LLM-Inhalte dieser Seite für Verbraucher- und Desktop-KI meist verwenden. Bei Kameras und Drohnen lautet die erste Frage des Käufers: „Kann ich mir leisten, so viel Video zu bewegen, und kann ich mich darauf verlassen, dass die Verbindung stabil bleibt" — Datenschutz und Datenresidenz sind reale sekundäre Vorteile, nicht der Grund, warum die Architektur existiert.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Video-KI wandert aufs Gerät, weil Transport- und Speicherkosten sowie unzuverlässige Funkverbindungen cloud-abhängige Inferenz unpraktisch machen, noch bevor Datenschutz ein Faktor ist.' },
          { type: 'plain-terms', text: 'Das Video jeder Kamera zu einem Server zu bewegen kostet Geld und braucht eine Verbindung, die stabil bleibt; die Verarbeitung dort, wo es aufgenommen wird, vermeidet beide Probleme.' },
        ],
      },
      architectures: {
        id: 'architectures',
        title: 'In-Kamera, Edge-Appliance oder Cloud: Welche Architektur passt?',
        content: [
          '**Drei Architekturen bedienen heute Kamera-Video-KI, und die meisten Produktiveinsätze kombinieren mindestens zwei davon.** Die richtige Wahl hängt von der Kameraanzahl pro Standort, den Aufbewahrungsanforderungen und davon ab, wie viel Stückkosten das Hardwarebudget verkraftet.',
          '**In-Kamera-Inferenz** bettet den Beschleuniger direkt in die Kamera ein — Hailo-10H und Hailo-15 zielen auf genau diesen Designpunkt bei unter 5 W Leistungsaufnahme. Nutzen Sie dies, wenn jede Kamera ihre eigene Entscheidung treffen muss (bewegungsausgelöste Aufzeichnung, Manipulationserkennung am Gerät) und die Stückliste der Kamera einen Chip pro Einheit verkraftet.',
          '**Die Edge-Appliance vor Ort** bündelt viele Kamerafeeds in einem Gerät mit NVIDIA Jetson Orin oder Jetson Thor. Nutzen Sie dies, wenn ein Standort mehr Kameras hat, als sich einzeln sinnvoll ausstatten lassen — dass Jetson Thor bis zu 32 MIPI-CSI-2-Kameraeingänge unterstützt, ist ein starkes Signal, dass diese Plattform genau für diese Multi-Kamera-Bündelung gedacht ist, nicht für Einzelstream-Inferenz.',
          '**Cloud-Verarbeitung** passt weiterhin zu Standorten mit wenigen Kameras ohne Echtzeitanforderung, bei denen die retrospektive Suche im Gesamtarchiv über Monate hinweg wichtiger ist als die Latenz pro Clip und bei denen die Bandbreitenkosten für eine Handvoll Streams vertretbar sind.',
          'In der Praxis sind die später in diesem Artikel beschriebenen Einsätze meist hybrid: Klassenbasierte Erkennung läuft durchgehend in der Kamera oder auf der Edge-Appliance, Cloud-Speicher hält ein Archiv für retrospektive Suche vor, und VLM-Inferenz läuft nur gegen Clips, die ein günstigerer Detektor bereits markiert hat.',
        ],
      },
      'detection-to-description': {
        id: 'detection-to-description',
        title: 'Wie verschiebt sich Videoanalyse von Erkennung zu Beschreibung?',
        content: [
          '**Videoanalyse verschiebt sich von klassenbasierter Objekterkennung zu offener VLM-Suche — der jüngste Wandel in diesem Markt.** Ein klassenbasierter Detektor beantwortet: „Ist in diesem Bild eine Person, ein Fahrzeug oder eine der rund 80 vortrainierten COCO-Kategorien zu sehen?" Ein VLM mit offenem Vokabular beantwortet eine beschriebene Anfrage — „Finde den Clip, in dem jemand eine Tasche in der Nähe der Laderampe abgestellt hat" — gegen Filmmaterial, das der klassenbasierte Detektor nie darauf trainiert wurde, als Kategorie zu erkennen.',
          '**Ein VLM ersetzt den klassenbasierten Detektor nicht — es arbeitet auf ihm auf.** Ein Vision-Language-Modell läuft nicht mit 30 Bildern pro Sekunde pro Stream innerhalb eines Leistungsbudgets von unter 5 W; die Rechen- und Latenzkosten voller VLM-Inferenz sind für durchgehende Bild-für-Bild-Verarbeitung in diesem Leistungsrahmen zu hoch. Stattdessen übernimmt der klassenbasierte Detektor weiterhin die durchgehende, stromsparende Vorsortierung — Bewegung, Präsenz, Grundklassifikation — und nur die von ihm markierten Clips werden an das VLM zur offenen Beschreibung oder Suche weitergegeben.',
          'Dieses zweistufige Design ist der Grund, warum In-Kamera-Silizium wie Hailo-10H als „GenAI am Rand"-Beschleuniger beschrieben wird und nicht als vollständiger VLM-für-jedes-Bild-Prozessor: Der Chip ist für ausgelöste, unterbrochene VLM-Inferenz zusätzlich zu durchgehender leichter Erkennung dimensioniert, nicht für ein Vision-Language-Modell mit voller Bildrate.',
        ],
        items: [
          'Klassenbasierte Erkennung: durchgehend, stromsparend, beantwortet „ist dies eine von N vortrainierten Kategorien?"',
          'Offene VLM-Suche: ausgelöst, höherer Stromverbrauch, beantwortet eine natürlichsprachliche Beschreibung gegen einen bestimmten Clip',
          'Beide ergänzen sich, sie konkurrieren nicht — der Detektor entscheidet, was dem VLM gezeigt wird, nicht umgekehrt',
          'Desktop- und serverseitige VLM-Aufbauten (LLaVA, Qwen3-VL und ähnliche Modelle) nutzen dieselben Modellfamilien wie diese ausgelöste Clip-Analyse — siehe den [Desktop-VLM-Vergleich unten](#related-reading), bevor Sie ein eingebettetes Deployment bewerten',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Offene VLM-Suche findet ein beschriebenes Ereignis in Filmmaterial, das ein klassenbasierter Detektor nie als Kategorie erkennen gelernt hat, läuft aber nur auf ausgelösten Clips, nicht auf jedem Bild.' },
          { type: 'plain-terms', text: 'Der alte Weg: „markiere alles, was zu Person/Auto/Hund passt." Der neue Weg: „finde den Clip, in dem jemand eine Tasche an der Rampe abgestellt hat" — in eigenen Worten, nachdem ein günstigerer Detektor den Clip bereits markiert hat.' },
        ],
      },
      'bandwidth-calculator': {
        id: 'bandwidth-calculator',
        title: 'Wie viel Bandbreite und Speicher braucht Ihr Kamerastandort wirklich?',
        content: [
          '**Geben Sie unten Ihre Kameraanzahl, Auflösung, Bildrate und Aufbewahrungsdauer ein, um durchgehende Bandbreite und Speicherkosten zu schätzen.** Nutzen Sie dies, bevor Sie sich zwischen In-Kamera-, Edge-Appliance- oder Cloud-Architektur entscheiden — die Zahl, die dabei herauskommt, entscheidet die Diskussion meist von selbst.',
        ],
        component: 'EdgeVideoBandwidthCalculator',
      },
      'evaluation-steps': {
        id: 'evaluation-steps',
        title: 'Wie bewerten Sie ein Kamera- oder Drohnen-VLM-Deployment?',
        content: [
          '**Sechs Prüfungen trennen ein funktionierendes Deployment von einem, das im Feld scheitert.** Führen Sie diese in dieser Reihenfolge durch, bevor Sie sich auf eine bestimmte Silizium-Plattform festlegen.',
        ],
        numberedItems: [
          { title: 'Legen Sie den Auslöser fest, nicht den Stream', whyItMatters: 'Entscheiden Sie, welches Ereignis VLM-Inferenz auslöst (Bewegung, ein Alarm des klassenbasierten Detektors, ein geplantes Intervall), bevor Sie Hardware auswählen — ein VLM gegen jedes Bild jedes Streams laufen zu lassen, ist 2026 kein realistisches Strom- oder Kostenbudget.' },
          { title: 'Messen Sie das Verbindungsbudget, bevor Sie Silizium wählen', whyItMatters: 'Messen Sie bei Drohnen die verfügbare Uplink-Bandbreite und die Worst-Case-Latenz in Einsatzreichweite, bevor Sie eine Rechenplattform auswählen — die Funkverbindung des Fluggeräts, nicht der Rechenchip, ist meist die bindende Einschränkung.' },
          { title: 'Halten Sie Erkennung und Beschreibung als getrennte Stufen', whyItMatters: 'Lassen Sie einen leichten klassenbasierten Detektor durchgehend laufen und leiten Sie nur markierte Clips an das VLM weiter — nur so passt VLM-Inferenz in ein Kamera- oder Drohnen-Leistungsbudget.' },
          { title: 'Passen Sie das Leistungsbudget an das physische Gehäuse an', whyItMatters: 'Ein lüfterloses Kameragehäuse begrenzt das thermische Budget auf rund 5 W; eine Drohnennutzlast ist durch Gewicht und Flugzeit-Kompromisse begrenzt, nicht allein durch Leistungsaufnahme — dimensionieren Sie das Silizium für das Gehäuse, nicht umgekehrt.' },
          { title: 'Validieren Sie GPS-freien Betrieb, wenn die Mission GPS oder die Kommandoverbindung verlieren kann', whyItMatters: 'Visuell-inertiale Odometrie (VIO) muss gezielt getestet werden, nicht als funktionierend vorausgesetzt werden, bevor man sich außerhalb der Sichtverbindung oder in gestörten elektromagnetischen Umgebungen darauf verlässt.' },
          { title: 'Testen Sie an einem Standort oder Fluggerät, bevor Sie skalieren', whyItMatters: 'Validieren Sie Falsch-Positiv-Rate, Anfragelatenz und Batterie-/Thermalverhalten bei einem einzelnen Einsatz, bevor Sie Budget für eine flottenweite Einführung bereitstellen.' },
        ],
      },
      'drones-onboard': {
        id: 'drones-onboard',
        title: 'Warum verarbeiten Drohnen Video an Bord, statt es zu streamen?',
        content: [
          '**Drohnen verlagern Rechenleistung auf die Plattform aus drei Gründen: Verbindungsspielraum, Latenz und GPS-freie Navigation — nicht weil Rechenleistung an Bord günstiger wäre.** Die Funkverbindung einer Drohne verschlechtert sich mit Reichweite, Gelände und Störungen auf eine Weise, wie es das Ethernetkabel einer festen Kamera nie tut; eine Mission, die auf eine durchgehende Cloud-Verbindung angewiesen ist, um Video zu interpretieren, versagt genau dann, wenn das Fluggerät am weitesten vom Bediener entfernt ist und Autonomie am dringendsten braucht.',
          '**ModalAIs VOXL 2, aufgebaut um den Qualcomm QRB5165, ist die Referenzplattform für Rechenleistung auf der Fluggerät-Plattform.** Sie ist PX4-kompatibel, unterstützt GPS-freie visuell-inertiale Odometrie (VIO) zur Navigation, wenn Satellitenpositionierung nicht verfügbar oder gestört ist, und vereint Autopilot, Recheneinheit und Navigationssensoren in einem Autopilot-Modul von rund 16 Gramm — klein genug, um mit Nutzlast und Batterie um dasselbe Gewichtsbudget zu konkurrieren, nicht mit einer separaten Stromversorgung.',
          '**Gewicht und Leistung sind auf einer Fluggerät-Plattform harte Einschränkungen, wie sie es für eine an die Wand geschraubte Kamera nicht sind.** Jedes Gramm Rechenleistung an Bord ist ein Gramm, das nicht für Batteriekapazität, Sensornutzlast oder Flugausdauer zur Verfügung steht — eine Drohnenplattform kann nicht einfach eine Rack-Einheit hinzufügen, wie es ein Kamerastandort vor Ort mit einer Edge-Appliance kann.',
        ],
        items: [
          'Verbindungsspielraum: Funkverbindung verschlechtert sich mit Reichweite, Gelände und gestörtem Spektrum, wie es kabelgebundene Kamera-Infrastruktur nicht tut',
          'Latenz: Eine Live-Entscheidung (Hindernisvermeidung, Zielverfolgung) kann nicht auf eine Hin- und Rückfahrt zu einem Cloud-Server warten',
          'GPS-freie Navigation: Visuell-inertiale Odometrie lässt das Fluggerät Position und Kurs halten, wenn Satellitenpositionierung nicht verfügbar ist',
          'Gewichtsbudget: Ein Autopilot-Rechenmodul der ~16-g-Klasse konkurriert direkt mit Batterie und Nutzlast, anders als das Gehäuse einer stationären Kamera',
        ],
      },
      'commercial-applications': {
        id: 'commercial-applications',
        title: 'Wo werden Kamera- und Drohnen-VLMs bereits kommerziell eingesetzt?',
        content: [
          '**Vier kommerzielle Kategorien machen den Großteil der heute ausgelieferten Einsätze aus: Infrastruktur- und Versorgungsinspektion, Präzisionslandwirtschaft, Vermessung und Kartierung sowie öffentliche Sicherheit.**',
        ],
        items: [
          'Infrastruktur- und Versorgungsinspektion: Mit Rechenleistung an Bord ausgestattete Drohnen inspizieren Übertragungsleitungen, Pipelines und Mobilfunkmasten und markieren sichtbare Mängel, ohne Rohmaterial zur Prüfung zurückzustreamen',
          'Präzisionslandwirtschaft: Bildverarbeitung an Bord unterscheidet Pflanzenstress, Unkrautdruck und Bewässerungsprobleme je Feld und speist Entscheidungen in Farmmanagementsysteme ein, ohne durchgehende Cloud-Verbindung in ländlichen Gebieten mit schwacher Konnektivität',
          'Vermessung und Kartierung: Photogrammetrie- und Inspektionsdrohnen verarbeiten Bildmaterial an Bord oder auf einer Edge-Appliance, um die pro Flug zu transportierende und zu speichernde Rohdatenmenge zu reduzieren',
          'Öffentliche Sicherheit: Feste Kameranetzwerke kombinieren durchgehende klassenbasierte Erkennung mit ausgelöster VLM-Suche — etwa um einen beschriebenen Vorfall aus einem Archiv abzurufen, statt stundenlanges Filmmaterial manuell zu sichten',
        ],
        callouts: [
          { type: 'note', text: 'Auch militärische Programme prägen diesen Silizium-Markt. Die Autonomiesoftware Hivemind von Shield AI wurde für das Collaborative-Combat-Aircraft-Programm (CCA) YFQ-44A der US-Luftwaffe ausgewählt, und die Software Lattice von Anduril wurde auf demselben Fluggerät getestet. Diese programmbezogene Nachfrage nach Autonomie-Stacks ist einer der Treiber für Investitionen in Edge-Inferenz-Silizium, auch wenn Zertifizierungsweg, Käufer und Anforderungen bei Verteidigungsprogrammen sich grundlegend von den oben beschriebenen kommerziellen Einsätzen unterscheiden und außerhalb des Rahmens dieses Leitfadens liegen.' },
        ],
      },
      'platform-comparison': {
        id: 'platform-comparison',
        title: 'Vergleich: Recheneinheiten für Kameras und Drohnen',
        content: [
          'Für vollständige Spezifikationen zu Jetson Orin und Jetson Thor siehe den [Edge-Silizium-Leitfaden](/de/local-llms/edge-ai-hardware-for-local-llms) — diese Tabelle bleibt auf die kamera- und drohnenspezifischen Plattformen fokussiert, die für Videoanalyse am relevantesten sind.',
        ],
        columns: ['Plattform', 'Leistungsbudget', 'Am besten für', 'Status'],
        rows: [
          { Plattform: 'Hailo-10H / Hailo-15', Leistungsbudget: '<5 W', 'Am besten für': 'In-Kamera-GenAI, VLM-Vorsortierung', Status: 'Gezeigt auf ISC West 2026' },
          { Plattform: 'Ambarella N-Serie', Leistungsbudget: 'Edge-AI-Vision-SoC', 'Am besten für': '8K Multisensor-Wahrnehmung', Status: 'Vorgestellt auf CES 2026' },
          { Plattform: 'NVIDIA Jetson Orin / Thor', Leistungsbudget: '15–130 W Klasse', 'Am besten für': 'Multi-Kamera-Edge-Appliance', Status: 'Thor: bis zu 32 MIPI-Kameras' },
          { Plattform: 'Qualcomm QRB5165 (VOXL 2)', Leistungsbudget: 'Drohnen-Klasse-Modul', 'Am besten für': 'Autopilot + VIO + Inferenz', Status: 'PX4-kompatibel, ~16 g' },
        ],
      },
      'buying-categories': {
        id: 'buying-categories',
        title: 'Welche Hardware brauchen Sie zum Einstieg?',
        content: [
          '**Vier Hardwarekategorien decken die meisten Kamera- und Drohnen-VLM-Projekte ab; prüfen Sie aktuelle Angebote bei Händlern und Distributoren, da sich Preise häufig ändern.**',
        ],
        items: [
          'Kameramodule und Entwicklerkits: Referenz-Kameraplatinen kombiniert mit einem Edge-Beschleuniger, genutzt um eine In-Kamera-Pipeline zu prototypisieren, bevor man sich auf ein eigenes Kameradesign festlegt',
          'Hailo-M.2-Beschleunigermodule: Fügen einer bestehenden Kamera oder Embedded-Rechenplatine KI-Inferenz unter 5 W über einen M.2-Steckplatz hinzu, ohne die Hauptplatine der Kamera neu zu entwerfen',
          'Edge-Video-Appliances: Entwicklerkits von NVIDIA Jetson Orin und Jetson Thor, genutzt um die oben beschriebene Multi-Kamera-Bündelungsarchitektur zu prototypisieren, bevor eine Flotte von Vor-Ort-Appliances ausgerollt wird',
          'Drohnen-Entwicklerplattformen: ModalAI-VOXL-2-Entwicklerkits, genutzt um PX4-basierte Autopilot- und Onboard-Inferenz-Pipelines zu prototypisieren, bevor sie in eine Produktionsplattform integriert werden',
        ],
      },
      'locallens-limits': {
        id: 'locallens-limits',
        title: 'Was funktioniert auf dem Gerät noch nicht?',
        content: [
          '**Drei Fähigkeiten bleiben Stand 2026 Cloud-Klasse oder Forschungsstadium, und kein Kamera- oder Drohnen-Beschleuniger ändert das dieses Jahr.**',
        ],
        items: [
          'Langfristiges Videoverständnis: Schlussfolgern über eine mehrstündige Aufzeichnung in einem Durchgang, statt ausgelöster Clip-Analyse, übersteigt weiterhin Speicher- und Rechenbudget von Edge-Beschleunigern',
          'Kamerenübergreifende Re-Identifikation im großen Maßstab: Ein beschriebenes Subjekt zuverlässig über viele Kamerafeeds und Standorte hinweg zu verfolgen, bleibt eine Aufgabe, die besser zu einem zentralisierten System mit Zugriff auf das vollständige Multi-Kamera-Archiv passt',
          'Großer Kontext über Stunden von Filmmaterial: Eine offene Anfrage, die über die Aufzeichnung eines ganzen Tages schlussfolgern muss, statt über einen bestimmten markierten Clip, braucht weiterhin mehr Kontext und Rechenleistung, als das Leistungsbudget eines Edge-Beschleunigers hergibt',
        ],
      },
      jurisdiction: {
        id: 'jurisdiction',
        title: 'Welche rechtlichen und beschaffungsbezogenen Regeln gelten?',
        content: [
          '**In der EU bestimmen die EASA-Drohnenkategorien — Offen, Speziell, Zulassungspflichtig — welche Autonomiestufe pro Einsatz zulässig ist, und CE-Kennzeichnung sowie die Funkanlagenrichtlinie (RED) gelten für die Hardware.** Für ein Kamera- oder Drohnenprojekt in Deutschland oder der EU ist die Einsatzkategorie keine bloße Formalität — sie bestimmt, welche Autonomiefunktionen (etwa automatisierte Erkennungs- und Reaktionslogik) ohne zusätzliche Genehmigung betrieben werden dürfen. Ein Systemintegrator sollte die geplante EASA-Kategorie klären, bevor Hardware und Autonomiefunktionen spezifiziert werden, nicht danach. CE-Kennzeichnung und RED-Konformität betreffen die Funkkomponenten und die elektromagnetische Verträglichkeit der Plattform selbst, unabhängig von der Autonomiesoftware, die darauf läuft.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Warum führen Kamera- und Drohnen-KI-Systeme Inferenz auf dem Gerät statt in der Cloud aus?',
            a: 'Bandbreiten- und Verbindungsgrenzen, nicht Datenschutz, sind der Hauptgrund. Ein durchgehender 4K-Kamerastream kostet über sein Aufbewahrungsfenster hinweg mehr an Transport und Speicher als der Beschleuniger, der ihn lokal verarbeitet, und eine Drohne in Einsatzreichweite hat eine unterbrochene, mitunter gestörte Funkverbindung, die eine Cloud-Abhängigkeit nicht toleriert.',
          },
          {
            q: 'Was ist der Unterschied zwischen klassenbasierter Erkennung und offener VLM-Suche?',
            a: 'Ein klassenbasierter Detektor beantwortet, ob ein Bild eine von einem vortrainierten Kategoriensatz enthält (rund 80 bei einem typischen COCO-trainierten Modell). Ein VLM mit offenem Vokabular beantwortet eine beschriebene Anfrage — etwa „finde den Clip, in dem jemand eine Tasche bei der Laderampe abgestellt hat" — gegen Inhalte, die der klassenbasierte Detektor nie darauf trainiert wurde, als Kategorie zu erkennen.',
          },
          {
            q: 'Kann ein Vision-Language-Modell in Echtzeit auf einem Kamerabeschleuniger mit unter 5 W laufen?',
            a: 'Nicht mit voller Bildrate. Ein VLM läuft nicht mit 30 Bildern pro Sekunde pro Stream innerhalb eines Leistungsbudgets von unter 5 W. In der Praxis läuft ein leichter klassenbasierter Detektor durchgehend mit geringem Stromverbrauch, und nur die von ihm markierten Clips werden an das VLM zur offenen Beschreibung weitergegeben — das VLM läuft auf ausgelösten Clips, nicht auf jedem Bild.',
          },
          {
            q: 'Welche Recheneinheit nutzen kommerzielle Drohnen für KI an Bord?',
            a: 'ModalAIs VOXL 2, aufgebaut um den Qualcomm QRB5165, ist eine weit verbreitete Referenzplattform. Sie ist PX4-kompatibel, unterstützt GPS-freie visuell-inertiale Odometrie zur Navigation und vereint Autopilot, Recheneinheit und Navigationssensoren in einem Modul von rund 16 Gramm.',
          },
          {
            q: 'Wie viel Bandbreite braucht eine einzelne 4K-Sicherheitskamera tatsächlich?',
            a: 'Das hängt von Bildrate, Szenenkomplexität und Codec ab — nutzen Sie den [Bandbreitenrechner](#bandwidth-calculator) auf dieser Seite, um durchgehende Bandbreite und Speicherkosten für Ihre konkrete Kameraanzahl, Auflösung, Bildrate und Aufbewahrungsdauer zu schätzen, statt sich auf eine einzelne Faustregel zu verlassen.',
          },
          {
            q: 'Sollte ich Hailo-10H oder Ambarellas N-Serie für ein neues Kameradesign wählen?',
            a: 'Beide zielen auf überlappende, aber unterschiedliche Positionen: Hailo-10H und Hailo-15 fokussieren auf In-Kamera-GenAI-Inferenz unter 5 W, während Ambarellas N-Serie (vorgestellt auf der CES 2026) als 8K Edge-AI-Vision-SoC mit Multisensor-Wahrnehmung positioniert ist. Die richtige Wahl hängt von Ihrem Auflösungsziel, dem Leistungsbudget und davon ab, ob Sie Multisensor-Fusion im selben Chip benötigen.',
          },
          {
            q: 'Warum brauchen Drohnen GPS-freie Navigation, und wie handhabt VOXL 2 das?',
            a: 'GPS-Signale können gestört, gefälscht oder schlicht innen oder in umkämpften Umgebungen nicht verfügbar sein. VOXL 2 unterstützt visuell-inertiale Odometrie (VIO), die Kamera- und Trägheitssensordaten fusioniert, um Position und Kurs ohne Satellitenpositionierung zu schätzen.',
          },
          {
            q: 'Welche EASA-Kategorie gilt für kommerzielle Drohneninspektion in der EU?',
            a: 'Das hängt vom Einsatz ab: Die EASA unterscheidet die Kategorien Offen (geringes Risiko, Standardregeln), Speziell (eine Risikobewertung mit spezifischer Betriebsgenehmigung ist meist für Infrastruktur- und Industrieinspektionen erforderlich) und Zulassungspflichtig (vergleichbar der bemannten Luftfahrt). Ein Systemintegrator sollte die Kategorie vor der Hardware- und Autonomiespezifikation klären, nicht danach.',
          },
          {
            q: 'Brauche ich eine Edge-Appliance, oder kann jede Kamera Inferenz eigenständig ausführen?',
            a: 'Das hängt von der Kameraanzahl pro Standort ab. Eine Handvoll Kameras kann jeweils eigenständig In-Kamera-Inferenz ausführen (Chips der Hailo-10H/15-Klasse). Ein Standort mit vielen Kameras profitiert meist von einer Edge-Appliance vor Ort (NVIDIA Jetson Orin oder Thor), die Feeds zentral bündelt — Jetson Thor unterstützt bis zu 32 MIPI-CSI-2-Kameraeingänge in einem Gerät, ein starkes Signal für seine vorgesehene Multi-Kamera-Rolle.',
          },
          {
            q: 'Was können VLMs auf dem Gerät für Videoanalyse noch nicht leisten?',
            a: 'Drei Fähigkeiten bleiben Stand 2026 Cloud-Klasse oder Forschungsstadium: langfristiges Schlussfolgern über eine mehrstündige Aufzeichnung in einem Durchgang, kamerenübergreifende Re-Identifikation eines Subjekts im großen Maßstab, und offene Anfragen, die Kontext über die Aufzeichnung eines ganzen Tages statt über einen bestimmten markierten Clip benötigen.',
          },
        ],
      },
      'related-reading': {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        content: [
          'Für Desktop-VLM-Grundlagen siehe [Best Local Vision Models 2026: LLaVA, Qwen3-VL & Ollama](/de/power-local-llm/local-vision-models-llava-ollama-2026), und kommen Sie danach hierher zurück für eingebettete Kamera-Deployments zurück — jener Leitfaden behandelt Desktop- und serverseitige Vision-Language-Model-Einrichtung; dieser hier behandelt die kamera- und drohnenspezifischen Einschränkungen bei Leistung, Bandbreite und Fluggerätgewicht.',
        ],
        items: [
          '[Edge-AI-Hardware für lokale LLMs](/de/local-llms/edge-ai-hardware-for-local-llms) — vollständige Spezifikationen zu den in der Vergleichstabelle oben referenzierten Jetson-Orin- und Jetson-Thor-Plattformen',
          '[VLA-Modelle für Roboter: Lokale Inferenz](/de/local-llms/vla-models-robots-local-inference) — der Schwesterartikel zur selben Silizium-Einschränkung, angewendet auf Roboter-Aktionsmodelle statt auf Videoverständnis',
          '[Checkliste für Sicherheit & Datenschutz bei lokalen LLMs](/de/local-llms/local-llm-security-privacy-checklist) — Überlegungen zur Datenhandhabung, die weiterhin gelten, sobald Videoanalyse aufs Gerät wandert',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'VLMs in Kameras und Drohnen 2026: Videoverständnis direkt auf dem Gerät',
      description:
        'Kameras und Drohnen verlagern VLM-Inferenz aufs Gerät wegen Bandbreite, nicht Datenschutz. Hailo, Ambarella, Jetson und VOXL 2 im Vergleich für 2026.',
      datePublished: '2026-09-02',
      dateModified: '2026-09-02',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
        sameAs: 'https://www.linkedin.com/in/hanskuepper/',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      inLanguage: 'de',
      url: 'https://www.promptquorum.com/de/local-llms/vlm-video-analytics-drones-edge',
      image: 'https://www.promptquorum.com/images/vlm-video-analytics-drones-edge-hero-de.webp',
      educationalLevel: 'Advanced',
      proficiencyLevel: 'Advanced',
      audience: {
        '@type': 'Audience',
        audienceType: 'Systemintegratoren, Videosicherheitsarchitekten und Verantwortliche für kommerzielle Drohneneinsätze',
      },
      about: [
        { '@type': 'Thing', name: 'Vision-Language-Modelle' },
        { '@type': 'Thing', name: 'Edge AI' },
        { '@type': 'Thing', name: 'Videoanalyse' },
        { '@type': 'Thing', name: 'Drohnenautonomie' },
      ],
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways'],
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/de/local-llms/vlm-video-analytics-drones-edge',
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-02',
    current_hardware_mentioned: ['Hailo-10H', 'Hailo-15', 'Ambarella N-series', 'NVIDIA Jetson Orin', 'NVIDIA Jetson Thor', 'Qualcomm QRB5165', 'ModalAI VOXL 2'],
    theme: 'Cameras & Drones',
    heroImage: '/images/vlm-video-analytics-drones-edge-hero-fr.webp',
    title: 'VLM dans les caméras et sur les drones 2026 : comprendre la vidéo en local',
    seoTitle: 'VLM caméras & drones 2026 : IA vidéo embarquée',
    intro:
      "Caméras et drones partagent une contrainte qui décide où s'exécute l'IA vidéo : la bande passante, pas le calcul, est la raison pour laquelle l'inférence se déplace vers l'appareil. Ce guide compare les architectures en caméra, en appliance de périphérie et en cloud pour l'analyse vidéo, explique le passage de la détection à classes fixes à la recherche VLM à vocabulaire ouvert, et couvre les plateformes de calcul déployées aujourd'hui dans les caméras et sur les drones.",
    metaDescription:
      "Caméras et drones déplacent l'inférence VLM en local pour la bande passante, pas la confidentialité. Hailo, Ambarella, Jetson et VOXL 2 comparés pour 2026.",
    twitterDescription:
      "Pourquoi l'IA vidéo passe en local : l'économie de la bande passante prime sur la confidentialité. Hailo-10H, Ambarella série N, Jetson Thor et VOXL 2 comparés pour caméras et drones.",
    publishDate: '2026-09-02',
    dateModified: '2026-09-02',
    readTime: '13 min de lecture',
    educationalLevel: 'Advanced',
    audience: "Intégrateurs système, architectes vidéosurveillance et responsables d'exploitation de drones commerciaux",
    primaryTerm: 'compréhension vidéo embarquée',
    targetKeywords: [
      'analyse vidéo embarquée 2026',
      'inférence VLM caméra edge',
      'calcul embarqué drone IA',
      'recherche vidéo vocabulaire ouvert',
      'Hailo-10H IA caméra',
      'coût bande passante vidéo edge',
      'VOXL 2 autopilote drone IA',
    ],
    leadAnswerBlock:
      "**Caméras et drones déplacent l'inférence en local car les limites de bande passante et de liaison — pas la confidentialité — rendent le streaming vidéo brut impraticable.** Un flux de sécurité 4K continu coûte, sur sa fenêtre de rétention, plus cher en transport et stockage que l'accélérateur qui le traite directement dans la caméra. Un drone en portée opérationnelle fait face à une liaison radio intermittente, à faible bande passante et parfois contestée, si bien que le calcul embarqué est le seul moyen d'agir sur ce qu'il observe. Les deux cas soutiennent le même changement : de la détection d'objets à classes fixes vers une recherche VLM à vocabulaire ouvert, qui trouve un événement décrit plutôt que de faire correspondre une liste de classes figée.",
    quickAnswerTop: {
      fr: {
        question: "Pourquoi les caméras et les drones exécutent-ils les VLM en local plutôt que dans le cloud ?",
        answer:
          "Les limites de bande passante et de liaison l'imposent, pas la confidentialité : un flux de sécurité 4K continu coûte plus cher en transport et stockage qu'un accélérateur embarqué dans la caméra, et un drone en portée a une liaison radio intermittente, parfois contestée, qu'une dépendance au cloud ne peut tolérer. Des puces côté caméra comme Hailo-10H fonctionnent sous 5 W ; des drones comme le VOXL 2 de ModalAI (Qualcomm QRB5165) réunissent autopilote, navigation et inférence dans un module d'environ 16 g.",
        bullets: [
          'Hailo-10H / Hailo-15 : accélérateurs GenAI embarqués sous 5 W, présentés à ISC West 2026',
          "Ambarella série N : SoC de vision IA embarquée 8K lancé au CES 2026",
          'NVIDIA Jetson Thor : prend en charge jusqu\'à 32 entrées caméra MIPI CSI-2',
          'ModalAI VOXL 2 (Qualcomm QRB5165) : autopilote drone + calcul + VIO sans GPS, ~16 g',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'Points clés', anchor: '#key-takeaways' },
      { label: "Pourquoi la bande passante pousse l'IA vidéo vers la périphérie", anchor: '#bandwidth-economics' },
      { label: 'Caméra, appliance de périphérie ou cloud ?', anchor: '#architectures' },
      { label: 'De la détection à la description', anchor: '#detection-to-description' },
      { label: 'Estimer votre coût de bande passante et de stockage', anchor: '#bandwidth-calculator' },
      { label: 'Comment évaluer un déploiement', anchor: '#evaluation-steps' },
      { label: 'Pourquoi les drones traitent la vidéo à bord', anchor: '#drones-onboard' },
      { label: "Applications commerciales déjà déployées", anchor: '#commercial-applications' },
      { label: 'Comparatif des plateformes', anchor: '#platform-comparison' },
      { label: 'Quel matériel acheter', anchor: '#buying-categories' },
      { label: "Ce qui ne fonctionne pas encore en local", anchor: '#locallens-limits' },
      { label: 'Juridiction et règles d\'acquisition', anchor: '#jurisdiction' },
      { label: 'Questions fréquemment posées', anchor: '#faq' },
      { label: 'Pour aller plus loin', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          "Les limites de bande passante et de liaison, pas la confidentialité, expliquent pourquoi l'inférence caméra et drone passe en local : un flux 4K continu coûte plus cher en transport et stockage que la puce qui le traite localement.",
          "L'analyse vidéo passe de la détection à classes fixes à la recherche VLM à vocabulaire ouvert — décrire un événement en langage naturel plutôt que faire correspondre une liste de classes préentraînée.",
          "Silicium caméra : Hailo-10H et Hailo-15 visent le GenAI embarqué sous 5 W ; la série N d'Ambarella (lancée au CES 2026) ajoute un SoC de vision IA 8K avec perception multi-capteurs.",
          "Les appliances de périphérie (NVIDIA Jetson Orin/Thor) agrègent de nombreux flux caméra sur site ; Jetson Thor prend en charge jusqu'à 32 entrées caméra MIPI CSI-2.",
          "Les drones exécutent le calcul sur la cellule : le Qualcomm QRB5165 via ModalAI VOXL 2 combine autopilote, odométrie visuo-inertielle sans GPS et inférence dans un module d'environ 16 g.",
          "La plupart des déploiements réels sont hybrides — un détecteur léger à classes fixes tourne en continu ; le VLM ne traite que les clips déclenchés, pas chaque image.",
          "Un VLM ne remplace pas la détection à classes fixes — il ajoute une recherche à vocabulaire ouvert par-dessus un détecteur qui continue le travail de tri continu, image par image.",
        ],
      },
      'bandwidth-economics': {
        id: 'bandwidth-economics',
        title: "Pourquoi l'IA vidéo passe-t-elle en local avant même que la confidentialité ne soit évoquée ?",
        content: [
          "**Les limites de bande passante et de liaison physique sont la principale raison pour laquelle l'inférence caméra et drone passe en local — l'argument économique arrive avant l'argument de confidentialité.** Une caméra 4K en streaming continu à 15–30 im/s génère un débit soutenu qui, multiplié sur plusieurs caméras d'un même site et une fenêtre de rétention de 30 jours, accumule des coûts de transport et de stockage plus vite que le coût unique d'un accélérateur embarqué ou d'une appliance de périphérie. Le calculateur plus bas sur cette page permet de faire ce calcul pour votre propre nombre de caméras et fenêtre de rétention.",
          "Les drones font face à la même contrainte dans le sens inverse : au lieu de trop de données à déplacer à moindre coût, ils disposent de trop peu de liaison fiable sur laquelle compter. Un drone en portée opérationnelle a une liaison radio intermittente, à faible bande passante et parfois contestée — une mission qui dépend d'une connexion cloud continue pour interpréter ce que le drone observe échoue précisément quand l'appareil doit agir de façon autonome, par exemple lors d'un brouillage GPS ou hors de portée visuelle directe.",
          "Ce cadrage diffère de l'argument de confidentialité que privilégie le contenu existant de ce site sur les LLM locaux pour l'IA grand public et de bureau. Pour les caméras et les drones, la première question de l'acheteur est « puis-je me permettre de déplacer autant de vidéo, et puis-je compter sur la stabilité de la liaison » — la confidentialité et la résidence des données sont de réels bénéfices secondaires, pas la raison d'être de l'architecture.",
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: "L'IA vidéo passe en local parce que les coûts de transport et de stockage, ainsi que des liaisons radio peu fiables, rendent l'inférence dépendante du cloud impraticable avant même que la confidentialité entre en jeu." },
          { type: 'plain-terms', text: "Déplacer la vidéo de chaque caméra vers un serveur coûte de l'argent et exige une liaison stable ; la traiter là où elle est captée évite les deux problèmes." },
        ],
      },
      architectures: {
        id: 'architectures',
        title: "Faut-il exécuter l'inférence en caméra, sur une appliance de périphérie ou dans le cloud ?",
        content: [
          "**Trois architectures gèrent aujourd'hui l'IA vidéo des caméras, et la plupart des déploiements en production en combinent au moins deux.** Le bon choix dépend du nombre de caméras par site, des exigences de rétention et de la marge que le budget matériel peut absorber par unité.",
          "**L'inférence en caméra** intègre l'accélérateur directement dans la caméra — Hailo-10H et Hailo-15 visent précisément ce point de conception sous 5 W. À utiliser quand chaque caméra doit prendre sa propre décision (enregistrement déclenché par mouvement, détection d'altération embarquée) et que la nomenclature de la caméra peut absorber une puce par unité.",
          "**L'appliance de périphérie sur site** agrège de nombreux flux caméra dans un boîtier exécutant NVIDIA Jetson Orin ou Jetson Thor. À utiliser quand un site compte plus de caméras qu'il n'est raisonnable d'équiper individuellement — le fait que Jetson Thor prenne en charge jusqu'à 32 entrées caméra MIPI CSI-2 est un signal fort que cette plateforme est conçue précisément pour ce rôle d'agrégation multi-caméra, pas pour l'inférence sur un seul flux.",
          "**Le traitement cloud** reste adapté aux sites à faible nombre de caméras sans exigence temps réel, où la recherche rétroactive dans l'archive complète sur plusieurs mois compte plus que la latence par clip et où le coût de bande passante d'une poignée de flux est acceptable.",
          "En pratique, la plupart des déploiements décrits plus loin dans cet article sont hybrides : la détection à classes fixes tourne en continu en caméra ou sur l'appliance de périphérie, le stockage cloud conserve une archive pour la recherche rétroactive, et l'inférence VLM ne s'exécute que sur les clips qu'un détecteur moins coûteux a déjà signalés.",
        ],
      },
      'detection-to-description': {
        id: 'detection-to-description',
        title: "Comment l'analyse vidéo passe-t-elle de la détection à la description ?",
        content: [
          "**L'analyse vidéo passe de la détection d'objets à classes fixes à la recherche VLM à vocabulaire ouvert — le changement le plus récent de ce marché.** Un détecteur à classes fixes répond à « cette image contient-elle une personne, un véhicule, ou l'une des quelque 80 catégories COCO préentraînées ? ». Un VLM à vocabulaire ouvert répond à une requête décrite — « trouve le clip où quelqu'un a déposé un sac près du quai de chargement » — sur des images que le détecteur à classes fixes n'a jamais appris à reconnaître comme catégorie.",
          "**Un VLM ne remplace pas le détecteur à classes fixes — il s'appuie dessus.** Un modèle vision-langage ne tournera pas à 30 images par seconde par flux dans un budget de puissance inférieur à 5 W ; le coût de calcul et de latence de l'inférence VLM complète est trop élevé pour un traitement continu image par image à ce niveau de puissance. À la place, le détecteur à classes fixes continue le travail de tri continu à faible consommation — mouvement, présence, classification de base — et seuls les clips qu'il signale sont transmis au VLM pour description ou recherche à vocabulaire ouvert.",
          "Cette conception à deux niveaux explique pourquoi un silicium embarqué comme Hailo-10H est décrit comme un accélérateur « GenAI en périphérie » plutôt qu'un processeur VLM à pleine cadence : la puce est dimensionnée pour une inférence VLM déclenchée et intermittente, en complément d'une détection légère continue, pas pour faire tourner un modèle vision-langage à pleine fréquence d'image.",
        ],
        items: [
          "Détection à classes fixes : continue, faible consommation, répond à « est-ce l'une des N catégories préentraînées ? »",
          "Recherche VLM à vocabulaire ouvert : déclenchée, consommation plus élevée, répond à une description en langage naturel sur un clip précis",
          "Les deux s'additionnent, ils ne se concurrencent pas — le détecteur décide ce qui est montré au VLM, pas l'inverse",
          "Les configurations VLM de bureau et serveur (LLaVA, Qwen3-VL et modèles similaires) partagent les mêmes familles de modèles utilisées pour cette analyse de clips déclenchée — voir le [comparatif VLM de bureau ci-dessous](#related-reading) avant d'évaluer un déploiement embarqué",
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: "La recherche VLM à vocabulaire ouvert trouve un événement décrit dans des images qu'un détecteur à classes fixes n'a jamais appris à reconnaître, mais elle ne s'exécute que sur des clips déclenchés, pas sur chaque image." },
          { type: 'plain-terms', text: "L'ancienne méthode : « signaler tout ce qui correspond à personne/voiture/chien ». La nouvelle méthode : « trouve le clip où quelqu'un a déposé un sac près du quai » — avec vos propres mots, après qu'un détecteur moins coûteux a déjà signalé le clip." },
        ],
      },
      'bandwidth-calculator': {
        id: 'bandwidth-calculator',
        title: 'De combien de bande passante et de stockage votre site caméra a-t-il réellement besoin ?',
        content: [
          "**Saisissez ci-dessous votre nombre de caméras, la résolution, la fréquence d'images et la fenêtre de rétention pour estimer la bande passante continue et le coût de stockage.** À utiliser avant de choisir entre une architecture en caméra, en appliance de périphérie ou en cloud — le chiffre obtenu tranche généralement le débat à lui seul.",
        ],
        component: 'EdgeVideoBandwidthCalculator',
      },
      'evaluation-steps': {
        id: 'evaluation-steps',
        title: 'Comment évaluer un déploiement VLM caméra ou drone ?',
        content: [
          "**Six vérifications distinguent un déploiement qui fonctionne d'un déploiement qui échoue sur le terrain.** Effectuez-les dans cet ordre avant de vous engager sur une plateforme silicium précise.",
        ],
        numberedItems: [
          { title: 'Définir le déclencheur, pas le flux', whyItMatters: "Décidez quel événement déclenche l'inférence VLM (mouvement, alarme d'un détecteur à classes fixes, intervalle programmé) avant de choisir le matériel — faire tourner un VLM sur chaque image de chaque flux n'est un budget de puissance ou de coût réaliste pour aucun déploiement en 2026." },
          { title: 'Mesurer le budget de liaison avant de choisir le silicium', whyItMatters: "Pour les drones, mesurez la bande passante montante disponible et la latence dans le pire des cas à la portée opérationnelle avant de choisir une plateforme de calcul — la liaison radio de la cellule, pas la puce de calcul, est généralement la contrainte limitante." },
          { title: 'Garder détection et description comme des étapes séparées', whyItMatters: "Faites tourner un détecteur léger à classes fixes en continu et n'acheminez que les clips signalés vers le VLM — c'est le seul moyen de faire tenir l'inférence VLM dans un budget de puissance caméra ou drone." },
          { title: "Adapter le budget de puissance au boîtier physique", whyItMatters: "Un boîtier caméra sans ventilateur plafonne le budget thermique autour de 5 W ; une charge utile de drone est plafonnée par le poids et les compromis d'autonomie de vol, pas seulement par la consommation — dimensionnez le silicium pour le boîtier, pas l'inverse." },
          { title: "Valider le fonctionnement sans GPS si la mission peut perdre le GPS ou la liaison de commande", whyItMatters: "L'odométrie visuo-inertielle (VIO) doit être testée spécifiquement, pas supposée fonctionner, avant de s'y fier hors de portée visuelle directe ou dans des environnements électromagnétiques contestés." },
          { title: 'Piloter sur un site ou une cellule avant de passer à l\'échelle', whyItMatters: "Validez le taux de faux positifs, la latence des requêtes et le comportement batterie/thermique sur un déploiement unique avant d'engager un budget pour un déploiement sur toute la flotte." },
        ],
      },
      'drones-onboard': {
        id: 'drones-onboard',
        title: 'Pourquoi les drones traitent-ils la vidéo à bord plutôt que de la streamer ?',
        content: [
          "**Les drones déplacent le calcul sur la cellule pour trois raisons : la marge de liaison, la latence et la navigation sans GPS — pas parce que le calcul embarqué serait moins cher.** La liaison radio d'un drone se dégrade avec la portée, le terrain et les interférences d'une façon que le câble Ethernet d'une caméra fixe ne connaît jamais ; une mission qui dépend d'une connexion cloud continue pour interpréter la vidéo échoue précisément quand l'appareil est le plus éloigné de son opérateur et a le plus besoin d'autonomie.",
          "**Le VOXL 2 de ModalAI, construit autour du Qualcomm QRB5165, est la plateforme de référence pour la conception de calcul embarqué sur cellule.** Il est compatible PX4, prend en charge l'odométrie visuo-inertielle (VIO) sans GPS pour naviguer quand le positionnement satellite est indisponible ou brouillé, et regroupe autopilote, calcul et capteurs de navigation dans un module de classe autopilote d'environ 16 grammes — assez petit pour concurrencer la charge utile et la batterie pour le même budget de poids, pas une alimentation électrique séparée.",
          "**Le poids et la puissance sont des contraintes strictes sur une cellule, d'une façon qu'ils ne le sont pas pour une caméra fixée au mur.** Chaque gramme de calcul embarqué est un gramme indisponible pour la capacité de batterie, la charge utile de capteurs ou l'autonomie de vol — une plateforme drone ne peut pas simplement ajouter une unité de rack comme un site caméra sur site peut ajouter une appliance de périphérie.",
        ],
        items: [
          "Marge de liaison : la connectivité radio se dégrade avec la portée, le terrain et le spectre contesté d'une façon que l'infrastructure caméra filaire ne connaît pas",
          "Latence : une décision en temps réel (évitement d'obstacle, suivi de cible) ne peut pas attendre un aller-retour vers un serveur cloud",
          "Navigation sans GPS : l'odométrie visuo-inertielle permet à l'appareil de conserver sa position et son cap quand le positionnement satellite est indisponible",
          "Budget de poids : un module de calcul de classe autopilote d'environ 16 g entre directement en concurrence avec la batterie et la charge utile, contrairement au boîtier d'une caméra fixe",
        ],
      },
      'commercial-applications': {
        id: 'commercial-applications',
        title: 'Où les VLM caméra et drone sont-ils déjà utilisés commercialement ?',
        content: [
          "**Quatre catégories commerciales représentent la majorité des déploiements en production aujourd'hui : inspection d'infrastructures et de réseaux, agriculture de précision, relevé et cartographie, et sécurité publique.**",
        ],
        items: [
          "Inspection d'infrastructures et de réseaux : des drones équipés de calcul embarqué inspectent lignes de transmission, oléoducs et pylônes télécom, en signalant les défauts visibles sans streamer les images brutes pour révision",
          "Agriculture de précision : la vision embarquée distingue le stress des cultures, la pression des adventices et les problèmes d'irrigation par parcelle, en alimentant les décisions des systèmes de gestion agricole sans liaison cloud continue dans des zones rurales à faible connectivité",
          "Relevé et cartographie : les drones de photogrammétrie et d'inspection traitent l'imagerie à bord ou sur une appliance de périphérie pour réduire le volume de données brutes à transporter et à stocker par vol",
          "Sécurité publique : les réseaux de caméras fixes combinent détection à classes fixes continue et recherche VLM déclenchée — par exemple pour retrouver un incident décrit dans une archive plutôt que de visionner manuellement des heures d'images",
        ],
        callouts: [
          { type: 'note', text: "Les programmes militaires façonnent aussi ce marché du silicium. Le logiciel d'autonomie Hivemind de Shield AI a été retenu pour le programme Collaborative Combat Aircraft (CCA) YFQ-44A de l'US Air Force, et le logiciel Lattice d'Anduril a été testé sur la même cellule. Cette demande au niveau des programmes pour des piles d'autonomie est l'un des moteurs de l'investissement dans le silicium d'inférence embarquée, bien que le parcours de certification, l'acheteur et les exigences des programmes de défense soient entièrement différents des déploiements commerciaux décrits ci-dessus et sortent du cadre de ce guide." },
        ],
      },
      'platform-comparison': {
        id: 'platform-comparison',
        title: 'Comparatif : plateformes de calcul pour caméras et drones',
        content: [
          "Pour les spécifications complètes de Jetson Orin et Jetson Thor, consultez le [guide du silicium embarqué](/fr/local-llms/edge-ai-hardware-for-local-llms) — ce tableau reste centré sur les plateformes spécifiques aux caméras et aux drones les plus pertinentes pour l'analyse vidéo.",
        ],
        columns: ['Plateforme', 'Budget de puissance', 'Idéal pour', 'Statut'],
        rows: [
          { Plateforme: 'Hailo-10H / Hailo-15', 'Budget de puissance': '<5 W', 'Idéal pour': 'GenAI embarquée, tri VLM', Statut: 'Présenté à ISC West 2026' },
          { Plateforme: 'Ambarella série N', 'Budget de puissance': 'SoC vision IA embarquée', 'Idéal pour': 'Perception multi-capteurs 8K', Statut: 'Lancé au CES 2026' },
          { Plateforme: 'NVIDIA Jetson Orin / Thor', 'Budget de puissance': 'Classe 15–130 W', 'Idéal pour': 'Appliance multi-caméra', Statut: 'Thor : jusqu\'à 32 caméras MIPI' },
          { Plateforme: 'Qualcomm QRB5165 (VOXL 2)', 'Budget de puissance': 'Module classe drone', 'Idéal pour': 'Autopilote + VIO + inférence', Statut: 'Compatible PX4, ~16 g' },
        ],
      },
      'buying-categories': {
        id: 'buying-categories',
        title: 'Quel matériel faut-il pour démarrer ?',
        content: [
          "**Quatre catégories de matériel couvrent la plupart des projets VLM caméra et drone ; vérifiez les offres actuelles des revendeurs et distributeurs, les prix changeant fréquemment.**",
        ],
        items: [
          "Modules caméra et kits de développement : cartes caméra de référence associées à un accélérateur embarqué, utilisées pour prototyper un pipeline en caméra avant de s'engager sur un design caméra sur mesure",
          "Modules accélérateurs Hailo M.2 : ajoutent une inférence IA sous 5 W à une caméra ou une carte de calcul embarquée existante via un connecteur M.2, sans refondre la carte principale de la caméra",
          "Appliances vidéo de périphérie : kits de développement NVIDIA Jetson Orin et Jetson Thor, utilisés pour prototyper l'architecture d'agrégation multi-caméra décrite plus haut avant de déployer une flotte d'appliances sur site",
          "Plateformes de développement drone : kits de développement ModalAI VOXL 2, utilisés pour prototyper des pipelines d'autopilote PX4 et d'inférence embarquée avant intégration sur une cellule de production",
        ],
      },
      'locallens-limits': {
        id: 'locallens-limits',
        title: 'Que ne fait-on pas encore en local ?',
        content: [
          "**Trois capacités restent, en 2026, du ressort du cloud ou de la recherche, et aucun accélérateur classe caméra ou drone ne change cela cette année.**",
        ],
        items: [
          "Compréhension vidéo à long horizon : raisonner sur un enregistrement de plusieurs heures en une seule passe, plutôt que sur une analyse de clip déclenchée, dépasse encore le budget mémoire et calcul des accélérateurs embarqués",
          "Ré-identification inter-caméras à grande échelle : suivre de façon fiable un sujet décrit sur de nombreux flux caméra et sites reste une tâche mieux adaptée à un système centralisé ayant accès à l'archive multi-caméra complète",
          "Grand contexte sur des heures d'images : une requête à vocabulaire ouvert qui doit raisonner sur l'enregistrement d'une journée entière, plutôt que sur un clip précis signalé, demande encore plus de contexte et de calcul que ce que permet le budget de puissance d'un accélérateur embarqué",
        ],
      },
      jurisdiction: {
        id: 'jurisdiction',
        title: 'Quelles règles juridiques et d\'acquisition s\'appliquent ?',
        content: [
          "**Dans l'UE, les catégories de drones de l'EASA — Ouverte, Spécifique, Certifiée — déterminent le niveau d'autonomie autorisé par opération, et le marquage CE ainsi que la directive RED (Radio Equipment Directive) s'appliquent au matériel.** Pour un projet caméra ou drone en France ou dans l'UE, la catégorie d'exploitation n'est pas une simple formalité — elle détermine quelles fonctions d'autonomie (par exemple une logique automatisée de détection et de réaction) peuvent être exploitées sans autorisation supplémentaire. La CNIL recommande par ailleurs le traitement local pour les données professionnelles sensibles (financières, médicales, juridiques) captées par ce type de systèmes. Un intégrateur système devrait clarifier la catégorie EASA visée avant de spécifier le matériel et les fonctions d'autonomie, pas après.",
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          {
            q: "Pourquoi les systèmes d'IA caméra et drone exécutent-ils l'inférence en local plutôt que dans le cloud ?",
            a: "Les limites de bande passante et de liaison, pas la confidentialité, en sont la principale raison. Un flux caméra 4K continu coûte, sur sa fenêtre de rétention, plus cher en transport et stockage que l'accélérateur qui le traite localement, et un drone en portée opérationnelle a une liaison radio intermittente, parfois contestée, qu'une dépendance au cloud ne peut tolérer.",
          },
          {
            q: "Quelle est la différence entre détection à classes fixes et recherche VLM à vocabulaire ouvert ?",
            a: "Un détecteur à classes fixes répond si une image contient l'une des catégories préentraînées (environ 80 pour un modèle typique entraîné sur COCO). Un VLM à vocabulaire ouvert répond à une requête décrite — par exemple « trouve le clip où quelqu'un a déposé un sac près du quai de chargement » — sur des contenus que le détecteur à classes fixes n'a jamais appris à reconnaître comme catégorie.",
          },
          {
            q: "Un modèle vision-langage peut-il tourner en temps réel sur un accélérateur caméra sous 5 W ?",
            a: "Pas à pleine cadence. Un VLM ne tourne pas à 30 images par seconde par flux dans un budget de puissance inférieur à 5 W. En pratique, un détecteur léger à classes fixes tourne en continu à faible consommation, et seuls les clips qu'il signale sont transmis au VLM pour description à vocabulaire ouvert — le VLM s'exécute sur des clips déclenchés, pas sur chaque image.",
          },
          {
            q: "Quelle plateforme de calcul les drones commerciaux utilisent-ils pour l'IA embarquée ?",
            a: "Le VOXL 2 de ModalAI, construit autour du Qualcomm QRB5165, est une plateforme de référence largement utilisée. Il est compatible PX4, prend en charge l'odométrie visuo-inertielle sans GPS pour la navigation, et regroupe autopilote, calcul et capteurs de navigation dans un module d'environ 16 grammes.",
          },
          {
            q: "De combien de bande passante une seule caméra de sécurité 4K a-t-elle réellement besoin ?",
            a: "Cela dépend de la fréquence d'images, de la complexité de la scène et du codec — utilisez le [calculateur de bande passante](#bandwidth-calculator) de cette page pour estimer la bande passante continue et le coût de stockage pour votre nombre de caméras, résolution, fréquence d'images et fenêtre de rétention précis, plutôt que de vous fier à un chiffre forfaitaire.",
          },
          {
            q: "Faut-il choisir Hailo-10H ou la série N d'Ambarella pour un nouveau design de caméra ?",
            a: "Ils visent des positions qui se recoupent mais restent distinctes : Hailo-10H et Hailo-15 se concentrent sur l'inférence GenAI embarquée sous 5 W, tandis que la série N d'Ambarella (lancée au CES 2026) est positionnée comme un SoC de vision IA 8K avec perception multi-capteurs. Le bon choix dépend de la résolution visée, du budget de puissance et du besoin ou non de fusion multi-capteurs dans la même puce.",
          },
          {
            q: "Pourquoi les drones ont-ils besoin d'une navigation sans GPS, et comment le VOXL 2 la gère-t-il ?",
            a: "Les signaux GPS peuvent être brouillés, usurpés ou simplement indisponibles en intérieur ou dans des environnements contestés. Le VOXL 2 prend en charge l'odométrie visuo-inertielle (VIO), qui fusionne les données caméra et capteurs inertiels pour estimer position et cap sans dépendre du positionnement satellite.",
          },
          {
            q: "Quelle catégorie EASA s'applique à l'inspection commerciale par drone dans l'UE ?",
            a: "Cela dépend de l'opération : l'EASA distingue les catégories Ouverte (faible risque, règles standard), Spécifique (une évaluation des risques avec autorisation d'exploitation spécifique est généralement requise pour l'inspection d'infrastructures et d'installations industrielles) et Certifiée (comparable à l'aviation habitée). Un intégrateur système devrait clarifier la catégorie avant de spécifier le matériel et les fonctions d'autonomie, pas après.",
          },
          {
            q: "Faut-il une appliance de périphérie, ou chaque caméra peut-elle exécuter l'inférence seule ?",
            a: "Cela dépend du nombre de caméras par site. Une poignée de caméras peut chacune exécuter l'inférence en caméra de façon indépendante (puces de classe Hailo-10H/15). Un site avec de nombreuses caméras bénéficie généralement d'une appliance de périphérie sur site (NVIDIA Jetson Orin ou Thor) qui agrège les flux de façon centralisée — Jetson Thor prend en charge jusqu'à 32 entrées caméra MIPI CSI-2 dans un seul boîtier, un signal fort de son rôle multi-caméra prévu.",
          },
          {
            q: "Que ne peuvent pas encore faire les VLM en local pour l'analyse vidéo ?",
            a: "Trois capacités restent, en 2026, du ressort du cloud ou de la recherche : le raisonnement à long horizon sur un enregistrement de plusieurs heures en une seule passe, la ré-identification inter-caméras d'un sujet à grande échelle, et les requêtes à vocabulaire ouvert nécessitant un contexte couvrant l'enregistrement d'une journée entière plutôt qu'un clip précis signalé.",
          },
        ],
      },
      'related-reading': {
        id: 'related-reading',
        title: 'Pour aller plus loin',
        content: [
          "Pour les bases des VLM de bureau, consultez [Best Local Vision Models 2026 : LLaVA, Qwen3-VL & Ollama](/fr/power-local-llm/local-vision-models-llava-ollama-2026), puis revenez ici pour le déploiement embarqué et en caméra — ce guide couvre la mise en place de modèles vision-langage de bureau et serveur ; celui-ci couvre les contraintes spécifiques aux caméras et drones en matière de puissance, de bande passante et de poids de cellule.",
        ],
        items: [
          "[Matériel Edge AI pour LLM locaux](/fr/local-llms/edge-ai-hardware-for-local-llms) — spécifications complètes des plateformes Jetson Orin et Jetson Thor référencées dans le tableau comparatif ci-dessus",
          "[Modèles VLA pour robots : inférence locale](/fr/local-llms/vla-models-robots-local-inference) — l'article jumeau sur la même contrainte silicium appliquée aux modèles d'action robotique plutôt qu'à la compréhension vidéo",
          "[Liste de contrôle sécurité et confidentialité des LLM locaux](/fr/local-llms/local-llm-security-privacy-checklist) — considérations sur le traitement des données qui s'appliquent toujours une fois l'analyse vidéo passée en local",
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'VLM dans les caméras et sur les drones 2026 : comprendre la vidéo en local',
      description:
        "Caméras et drones déplacent l'inférence VLM en local pour la bande passante, pas la confidentialité. Hailo, Ambarella, Jetson et VOXL 2 comparés pour 2026.",
      datePublished: '2026-09-02',
      dateModified: '2026-09-02',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
        sameAs: 'https://www.linkedin.com/in/hanskuepper/',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      inLanguage: 'fr',
      url: 'https://www.promptquorum.com/fr/local-llms/vlm-video-analytics-drones-edge',
      image: 'https://www.promptquorum.com/images/vlm-video-analytics-drones-edge-hero-fr.webp',
      educationalLevel: 'Advanced',
      proficiencyLevel: 'Advanced',
      audience: {
        '@type': 'Audience',
        audienceType: "Intégrateurs système, architectes vidéosurveillance et responsables d'exploitation de drones commerciaux",
      },
      about: [
        { '@type': 'Thing', name: 'Modèles vision-langage' },
        { '@type': 'Thing', name: 'IA embarquée' },
        { '@type': 'Thing', name: 'Analyse vidéo' },
        { '@type': 'Thing', name: 'Autonomie des drones' },
      ],
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways'],
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/fr/local-llms/vlm-video-analytics-drones-edge',
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-02',
    current_hardware_mentioned: ['Hailo-10H', 'Hailo-15', 'Ambarella N-series', 'NVIDIA Jetson Orin', 'NVIDIA Jetson Thor', 'Qualcomm QRB5165', 'ModalAI VOXL 2'],
    theme: 'Cameras & Drones',
    heroImage: '/images/vlm-video-analytics-drones-edge-hero-es.webp',
    title: 'VLM en cámaras y drones 2026: comprensión de vídeo en el dispositivo',
    seoTitle: 'VLM en cámaras y drones 2026: IA de vídeo local',
    intro:
      'Cámaras y drones comparten una restricción que decide dónde se ejecuta la IA de vídeo: el ancho de banda, no el cómputo, es la razón por la que la inferencia se traslada al dispositivo. Esta guía compara las arquitecturas en cámara, en appliance de borde y en la nube para el análisis de vídeo, explica el cambio de la detección por clases fijas a la búsqueda VLM de vocabulario abierto, y cubre las plataformas de cómputo que hoy se envían en cámaras y drones.',
    metaDescription:
      'Cámaras y drones mueven la inferencia VLM al dispositivo por ancho de banda, no privacidad. Comparamos Hailo, Ambarella, Jetson y VOXL 2 para 2026.',
    twitterDescription:
      'Por qué la IA de vídeo se mueve al dispositivo: la economía del ancho de banda gana a la privacidad. Hailo-10H, Ambarella serie N, Jetson Thor y VOXL 2 comparados para cámaras y drones.',
    publishDate: '2026-09-02',
    dateModified: '2026-09-02',
    readTime: '13 min de lectura',
    educationalLevel: 'Advanced',
    audience: 'Integradores de sistemas, arquitectos de videoseguridad y responsables de operaciones de drones comerciales',
    primaryTerm: 'comprensión de vídeo en el dispositivo',
    targetKeywords: [
      'análisis de vídeo en el dispositivo 2026',
      'inferencia VLM cámara edge',
      'cómputo a bordo drone IA',
      'búsqueda de vídeo vocabulario abierto',
      'Hailo-10H IA cámara',
      'coste ancho de banda vídeo edge',
      'VOXL 2 piloto automático drone IA',
    ],
    leadAnswerBlock:
      '**Cámaras y drones mueven la inferencia al dispositivo porque los límites de ancho de banda y de enlace — no la privacidad — hacen impracticable transmitir vídeo en bruto.** Un flujo de seguridad 4K continuo cuesta, durante su ventana de retención, más en transporte y almacenamiento que el acelerador que lo procesa directamente en la cámara. Un dron en rango operativo enfrenta un enlace de radio intermitente, de bajo ancho de banda y a veces disputado, por lo que el cómputo a bordo es la única forma de actuar sobre lo que observa. Ambos casos respaldan el mismo cambio: de la detección de objetos por clases fijas hacia la búsqueda VLM de vocabulario abierto, que encuentra un evento descrito en lugar de comparar contra una lista fija de clases.',
    quickAnswerTop: {
      es: {
        question: '¿Por qué las cámaras y los drones ejecutan VLM en el dispositivo en lugar de en la nube?',
        answer:
          'Los límites de ancho de banda y de enlace lo obligan, no la privacidad: un flujo de seguridad 4K continuo cuesta más en transporte y almacenamiento que un acelerador integrado en la cámara, y un dron en rango tiene un enlace de radio intermitente, a veces disputado, que una dependencia de la nube no puede tolerar. Chips de cámara como Hailo-10H funcionan con menos de 5 W; drones como el VOXL 2 de ModalAI (Qualcomm QRB5165) integran piloto automático, navegación e inferencia en un módulo de unos 16 g.',
        bullets: [
          'Hailo-10H / Hailo-15: aceleradores GenAI en cámara por debajo de 5 W, mostrados en ISC West 2026',
          'Ambarella serie N: SoC de visión IA edge de 8K lanzado en CES 2026',
          'NVIDIA Jetson Thor: admite hasta 32 entradas de cámara MIPI CSI-2',
          'ModalAI VOXL 2 (Qualcomm QRB5165): piloto automático de dron + cómputo + VIO sin GPS, ~16 g',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways' },
      { label: 'Por qué el ancho de banda lleva la IA de vídeo al borde', anchor: '#bandwidth-economics' },
      { label: '¿En cámara, appliance de borde o nube?', anchor: '#architectures' },
      { label: 'De la detección a la descripción', anchor: '#detection-to-description' },
      { label: 'Estime su coste de ancho de banda y almacenamiento', anchor: '#bandwidth-calculator' },
      { label: 'Cómo evaluar un despliegue', anchor: '#evaluation-steps' },
      { label: 'Por qué los drones procesan el vídeo a bordo', anchor: '#drones-onboard' },
      { label: 'Aplicaciones comerciales ya en marcha', anchor: '#commercial-applications' },
      { label: 'Comparativa de plataformas', anchor: '#platform-comparison' },
      { label: 'Qué hardware comprar', anchor: '#buying-categories' },
      { label: 'Qué no funciona aún en el dispositivo', anchor: '#locallens-limits' },
      { label: 'Jurisdicción y normas de adquisición', anchor: '#jurisdiction' },
      { label: 'Preguntas frecuentes', anchor: '#faq' },
      { label: 'Lecturas relacionadas', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Los límites de ancho de banda y de enlace, no la privacidad, explican por qué la inferencia de cámaras y drones se mueve al dispositivo: un flujo 4K continuo cuesta más en transporte y almacenamiento que el chip que lo procesa localmente.',
          'El análisis de vídeo pasa de la detección por clases fijas a la búsqueda VLM de vocabulario abierto — describir un evento en lenguaje natural en lugar de compararlo con una lista de clases preentrenada.',
          'Silicio de cámara: Hailo-10H y Hailo-15 apuntan a GenAI en cámara por debajo de 5 W; la serie N de Ambarella (lanzada en CES 2026) suma un SoC de visión IA edge de 8K con percepción multisensor.',
          'Los appliances de borde (NVIDIA Jetson Orin/Thor) agregan muchas cámaras en un mismo sitio; Jetson Thor admite hasta 32 entradas de cámara MIPI CSI-2.',
          'Los drones ejecutan cómputo en la aeronave: Qualcomm QRB5165 vía ModalAI VOXL 2 combina piloto automático, odometría visual-inercial sin GPS e inferencia en un módulo de unos 16 g.',
          'La mayoría de los despliegues reales son híbridos — un detector ligero por clases fijas corre de forma continua; el VLM solo procesa clips activados, no cada fotograma.',
          'Un VLM no sustituye la detección por clases fijas — añade búsqueda de vocabulario abierto sobre un detector que sigue haciendo el trabajo continuo de triaje por fotograma.',
        ],
      },
      'bandwidth-economics': {
        id: 'bandwidth-economics',
        title: '¿Por qué la IA de vídeo se mueve al borde antes de que la privacidad entre en juego?',
        content: [
          '**Los límites de ancho de banda y de enlace físico son la razón principal por la que la inferencia de cámaras y drones se mueve al dispositivo — el argumento económico llega antes que el argumento de privacidad.** Una cámara 4K en streaming continuo a 15–30 fps genera una tasa de bits sostenida que, multiplicada por varias cámaras en un mismo sitio y una ventana de retención de 30 días, acumula costes de transporte y almacenamiento más rápido que el coste único de un acelerador en cámara o de un appliance de borde. La calculadora más abajo en esta página permite hacer ese cálculo para su propio número de cámaras y ventana de retención.',
          'Los drones enfrentan la misma restricción desde la dirección opuesta: en lugar de demasiados datos que mover a bajo coste, tienen muy poco enlace fiable en el que confiar. Un dron en rango operativo tiene un enlace de radio intermitente, de bajo ancho de banda y a veces disputado — una misión que depende de una conexión continua a la nube para interpretar lo que ve el dron falla precisamente cuando la aeronave necesita actuar de forma autónoma, por ejemplo durante interferencia de GPS o fuera del alcance visual directo.',
          'Este planteamiento difiere del argumento centrado en la privacidad que suele usar el contenido existente de este sitio sobre LLM locales para IA de consumo y escritorio. Para cámaras y drones, la primera pregunta del comprador es "¿puedo permitirme mover tanto vídeo, y puedo contar con que el enlace se mantenga estable?" — la privacidad y la residencia de datos son beneficios secundarios reales, no la razón de ser de la arquitectura.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'La IA de vídeo se mueve al dispositivo porque los costes de transporte y almacenamiento, junto con enlaces de radio poco fiables, hacen impracticable la inferencia dependiente de la nube antes de que la privacidad sea siquiera un factor.' },
          { type: 'plain-terms', text: 'Mover el vídeo de cada cámara a un servidor cuesta dinero y exige un enlace que se mantenga estable; procesarlo donde se capta evita ambos problemas.' },
        ],
      },
      architectures: {
        id: 'architectures',
        title: '¿Debe ejecutar la inferencia en cámara, en un appliance de borde o en la nube?',
        content: [
          '**Hoy existen tres arquitecturas para la IA de vídeo de cámaras, y la mayoría de los despliegues en producción combinan al menos dos.** La elección correcta depende del número de cámaras por sitio, los requisitos de retención y cuánto coste por unidad puede absorber el presupuesto de hardware.',
          '**La inferencia en cámara** integra el acelerador dentro de la propia cámara — Hailo-10H y Hailo-15 apuntan exactamente a este punto de diseño con un consumo por debajo de 5 W. Úsela cuando cada cámara deba tomar su propia decisión (grabación activada por movimiento, detección de manipulación en el dispositivo) y la lista de materiales de la cámara pueda absorber un chip por unidad.',
          '**El appliance de borde en las instalaciones** agrega muchas cámaras en un solo equipo con NVIDIA Jetson Orin o Jetson Thor. Úselo cuando un sitio tenga más cámaras de las que tiene sentido instrumentar individualmente — que Jetson Thor admita hasta 32 entradas de cámara MIPI CSI-2 es una señal clara de que esta plataforma está pensada precisamente para este rol de agregación multi-cámara, no para inferencia de un solo flujo.',
          '**El procesamiento en la nube** sigue siendo adecuado para sitios con pocas cámaras sin requisito de tiempo real, donde la búsqueda retroactiva en el archivo completo durante meses importa más que la latencia por clip y donde el coste de ancho de banda de unos pocos flujos es aceptable.',
          'En la práctica, la mayoría de los despliegues descritos más adelante en este artículo son híbridos: la detección por clases fijas corre de forma continua en cámara o en el appliance de borde, el almacenamiento en la nube conserva un archivo para búsqueda retroactiva, y la inferencia VLM solo se ejecuta contra clips que un detector más económico ya ha marcado.',
        ],
      },
      'detection-to-description': {
        id: 'detection-to-description',
        title: '¿Cómo está cambiando el análisis de vídeo de la detección a la descripción?',
        content: [
          '**El análisis de vídeo pasa de la detección de objetos por clases fijas a la búsqueda VLM de vocabulario abierto — el cambio más reciente en este mercado.** Un detector por clases fijas responde "¿hay una persona, un vehículo, o una de las aproximadamente 80 categorías COCO preentrenadas en este fotograma?". Un VLM de vocabulario abierto responde a una consulta descrita — "encuentra el clip donde alguien dejó una bolsa cerca del muelle de carga" — sobre metraje que el detector por clases fijas nunca fue entrenado para reconocer como categoría.',
          '**Un VLM no sustituye al detector por clases fijas — trabaja sobre él.** Un modelo de visión-lenguaje no se ejecutará a 30 fotogramas por segundo por flujo dentro de un presupuesto de potencia inferior a 5 W; el coste de cómputo y latencia de la inferencia VLM completa es demasiado alto para el procesamiento continuo fotograma a fotograma en ese margen de potencia. En su lugar, el detector por clases fijas sigue haciendo el trabajo continuo de triaje de bajo consumo — movimiento, presencia, clasificación básica — y solo los clips que marca se pasan al VLM para descripción o búsqueda de vocabulario abierto.',
          'Este diseño de dos niveles explica por qué el silicio en cámara como Hailo-10H se describe como acelerador de "GenAI en el borde" en lugar de un procesador VLM a fotograma completo: el chip está dimensionado para inferencia VLM activada e intermitente sobre una detección ligera continua, no para ejecutar un modelo de visión-lenguaje a plena tasa de fotogramas.',
        ],
        items: [
          'Detección por clases fijas: continua, bajo consumo, responde "¿es esto una de N categorías preentrenadas?"',
          'Búsqueda VLM de vocabulario abierto: activada, mayor consumo, responde a una descripción en lenguaje natural sobre un clip específico',
          'Ambas se suman, no compiten — el detector decide qué se muestra al VLM, no al revés',
          'Las configuraciones VLM de escritorio y servidor (LLaVA, Qwen3-VL y modelos similares) comparten las mismas familias de modelos usadas para este análisis de clips activado — vea la [comparativa de VLM de escritorio más abajo](#related-reading) antes de evaluar un despliegue embebido',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'La búsqueda VLM de vocabulario abierto encuentra un evento descrito en metraje que un detector por clases fijas nunca aprendió a reconocer como categoría, pero se ejecuta sobre clips activados, no en cada fotograma.' },
          { type: 'plain-terms', text: 'La forma antigua: "marca todo lo que coincida con persona/coche/perro". La forma nueva: "encuentra el clip donde alguien dejó una bolsa junto al muelle" — con tus propias palabras, después de que un detector más económico ya haya marcado el clip.' },
        ],
      },
      'bandwidth-calculator': {
        id: 'bandwidth-calculator',
        title: '¿Cuánto ancho de banda y almacenamiento necesita realmente su sitio de cámaras?',
        content: [
          '**Introduzca abajo su número de cámaras, resolución, tasa de fotogramas y ventana de retención para estimar el ancho de banda continuo y el coste de almacenamiento.** Úselo antes de elegir entre arquitectura en cámara, appliance de borde o nube — la cifra resultante suele zanjar el debate por sí sola.',
        ],
        component: 'EdgeVideoBandwidthCalculator',
      },
      'evaluation-steps': {
        id: 'evaluation-steps',
        title: '¿Cómo se evalúa un despliegue VLM de cámara o dron?',
        content: [
          '**Seis comprobaciones separan un despliegue que funciona de uno que falla sobre el terreno.** Realícelas en este orden antes de comprometerse con una plataforma de silicio específica.',
        ],
        numberedItems: [
          { title: 'Defina el disparador, no el flujo', whyItMatters: 'Decida qué evento activa la inferencia VLM (movimiento, una alarma de un detector por clases fijas, un intervalo programado) antes de elegir el hardware — ejecutar un VLM contra cada fotograma de cada flujo no es un presupuesto de potencia o coste realista en 2026.' },
          { title: 'Mida el presupuesto de enlace antes de elegir el silicio', whyItMatters: 'Para drones, mida el ancho de banda de subida disponible y la latencia en el peor caso al rango operativo antes de elegir una plataforma de cómputo — el enlace de radio de la aeronave, no el chip de cómputo, suele ser la restricción vinculante.' },
          { title: 'Mantenga la detección y la descripción como etapas separadas', whyItMatters: 'Ejecute un detector ligero por clases fijas de forma continua y envíe al VLM solo los clips marcados — es la única forma de encajar la inferencia VLM en un presupuesto de potencia de cámara o dron.' },
          { title: 'Ajuste el presupuesto de potencia al recinto físico', whyItMatters: 'Un recinto de cámara sin ventilador limita el presupuesto térmico a unos 5 W; una carga útil de dron está limitada por el peso y los compromisos de autonomía de vuelo, no solo por el consumo — dimensione el silicio para el recinto, no al revés.' },
          { title: 'Valide la operación sin GPS si la misión puede perder el GPS o el enlace de mando', whyItMatters: 'La odometría visual-inercial (VIO) debe probarse específicamente, no darse por hecha, antes de confiar en ella más allá del alcance visual directo o en entornos electromagnéticos disputados.' },
          { title: 'Pilote en un sitio o una aeronave antes de escalar', whyItMatters: 'Valide la tasa de falsos positivos, la latencia de consultas y el comportamiento de batería/térmico en un único despliegue antes de comprometer presupuesto para un despliegue a escala de flota.' },
        ],
      },
      'drones-onboard': {
        id: 'drones-onboard',
        title: '¿Por qué los drones procesan el vídeo a bordo en lugar de transmitirlo?',
        content: [
          '**Los drones trasladan el cómputo a la aeronave por tres razones: margen de enlace, latencia y navegación sin GPS — no porque el cómputo a bordo sea más barato.** El enlace de radio de un dron se degrada con el alcance, el terreno y las interferencias de una forma que el cable ethernet de una cámara fija jamás experimenta; una misión que depende de una conexión continua a la nube para interpretar el vídeo falla precisamente cuando la aeronave está más lejos de su operador y más necesita autonomía.',
          '**El VOXL 2 de ModalAI, construido alrededor del Qualcomm QRB5165, es la plataforma de referencia para el diseño de cómputo a bordo de la aeronave.** Es compatible con PX4, admite odometría visual-inercial (VIO) sin GPS para navegar cuando el posicionamiento satelital no está disponible o está interferido, y empaqueta piloto automático, cómputo y sensores de navegación en un módulo de clase piloto automático de unos 16 gramos — lo bastante pequeño como para competir con la carga útil y la batería por el mismo presupuesto de peso, no con una fuente de alimentación separada.',
          '**El peso y la potencia son restricciones estrictas en una aeronave de una forma que no lo son para una cámara atornillada a una pared.** Cada gramo de cómputo a bordo es un gramo no disponible para capacidad de batería, carga útil de sensores o autonomía de vuelo — una plataforma de dron no puede simplemente añadir una unidad de rack como puede hacerlo un sitio de cámaras en las instalaciones con un appliance de borde.',
        ],
        items: [
          'Margen de enlace: la conectividad de radio se degrada con el alcance, el terreno y el espectro disputado de una forma que la infraestructura de cámara cableada no experimenta',
          'Latencia: una decisión en tiempo real (evitar obstáculos, seguimiento de objetivo) no puede esperar un viaje de ida y vuelta a un servidor en la nube',
          'Navegación sin GPS: la odometría visual-inercial permite a la aeronave mantener posición y rumbo cuando el posicionamiento satelital no está disponible',
          'Presupuesto de peso: un módulo de cómputo de clase piloto automático de unos 16 g compite directamente con la batería y la carga útil, a diferencia del recinto de una cámara estacionaria',
        ],
      },
      'commercial-applications': {
        id: 'commercial-applications',
        title: '¿Dónde se usan ya comercialmente los VLM de cámara y dron?',
        content: [
          '**Cuatro categorías comerciales explican la mayoría de los despliegues en producción hoy: inspección de infraestructura y servicios públicos, agricultura de precisión, levantamiento y cartografía, y seguridad pública.**',
        ],
        items: [
          'Inspección de infraestructura y servicios públicos: drones equipados con cómputo a bordo inspeccionan líneas de transmisión, oleoductos y torres de telefonía, marcando defectos visibles sin transmitir el metraje bruto para su revisión',
          'Agricultura de precisión: la visión a bordo distingue el estrés del cultivo, la presión de malezas y problemas de riego por parcela, alimentando decisiones en sistemas de gestión agrícola sin depender de una conexión continua a la nube en zonas rurales con conectividad débil',
          'Levantamiento y cartografía: los drones de fotogrametría e inspección procesan imágenes a bordo o en un appliance de borde para reducir el volumen de datos brutos que hay que transportar y almacenar por vuelo',
          'Seguridad pública: las redes de cámaras fijas combinan detección continua por clases fijas con búsqueda VLM activada — por ejemplo, para recuperar un incidente descrito de un archivo en lugar de revisar manualmente horas de metraje',
        ],
        callouts: [
          { type: 'note', text: 'Los programas militares también están moldeando este mercado de silicio. El software de autonomía Hivemind de Shield AI fue seleccionado para el programa Collaborative Combat Aircraft (CCA) YFQ-44A de la Fuerza Aérea de EE. UU., y el software Lattice de Anduril ha sido probado en la misma aeronave. Esta demanda a nivel de programa por pilas de autonomía es uno de los impulsores de la inversión en silicio de inferencia en el borde, aunque el camino de certificación, el comprador y los requisitos de los programas de defensa son completamente distintos de los despliegues comerciales descritos arriba y quedan fuera del alcance de esta guía.' },
        ],
      },
      'platform-comparison': {
        id: 'platform-comparison',
        title: 'Comparativa: plataformas de cómputo para cámaras y drones',
        content: [
          'Consulte la [guía de silicio de borde](/es/local-llms/edge-ai-hardware-for-local-llms) para las especificaciones completas de Jetson Orin y Jetson Thor — esta tabla se centra en las plataformas específicas de cámaras y drones más relevantes para el análisis de vídeo.',
        ],
        columns: ['Plataforma', 'Presupuesto de potencia', 'Ideal para', 'Estado'],
        rows: [
          { Plataforma: 'Hailo-10H / Hailo-15', 'Presupuesto de potencia': '<5 W', 'Ideal para': 'GenAI en cámara, triaje VLM', Estado: 'Mostrado en ISC West 2026' },
          { Plataforma: 'Ambarella serie N', 'Presupuesto de potencia': 'SoC visión IA edge', 'Ideal para': 'Percepción multisensor 8K', Estado: 'Lanzado en CES 2026' },
          { Plataforma: 'NVIDIA Jetson Orin / Thor', 'Presupuesto de potencia': 'Clase 15–130 W', 'Ideal para': 'Appliance multi-cámara', Estado: 'Thor: hasta 32 cámaras MIPI' },
          { Plataforma: 'Qualcomm QRB5165 (VOXL 2)', 'Presupuesto de potencia': 'Módulo clase dron', 'Ideal para': 'Piloto automático + VIO + inferencia', Estado: 'Compatible PX4, ~16 g' },
        ],
      },
      'buying-categories': {
        id: 'buying-categories',
        title: '¿Qué hardware necesita para empezar?',
        content: [
          '**Cuatro categorías de hardware cubren la mayoría de los proyectos VLM de cámara y dron; verifique las ofertas actuales de distribuidores y minoristas, ya que los precios cambian con frecuencia.**',
        ],
        items: [
          'Módulos de cámara y kits de desarrollo: placas de cámara de referencia combinadas con un acelerador de borde, usadas para prototipar un pipeline en cámara antes de comprometerse con un diseño de cámara a medida',
          'Módulos aceleradores Hailo M.2: añaden inferencia de IA por debajo de 5 W a una cámara o placa de cómputo embebido existente mediante un slot M.2, sin rediseñar la placa principal de la cámara',
          'Appliances de vídeo de borde: kits de desarrollo NVIDIA Jetson Orin y Jetson Thor, usados para prototipar la arquitectura de agregación multi-cámara descrita arriba antes de desplegar una flota de appliances en las instalaciones',
          'Plataformas de desarrollo para drones: kits de desarrollo ModalAI VOXL 2, usados para prototipar pipelines de piloto automático basado en PX4 e inferencia a bordo antes de integrarlos en una aeronave de producción',
        ],
      },
      'locallens-limits': {
        id: 'locallens-limits',
        title: '¿Qué no funciona aún en el dispositivo?',
        content: [
          '**Tres capacidades siguen siendo de nivel nube o etapa de investigación en 2026, y ningún acelerador de clase cámara o dron cambia eso este año.**',
        ],
        items: [
          'Comprensión de vídeo a largo horizonte: razonar sobre una grabación de varias horas en una sola pasada, en lugar de un análisis de clip activado, sigue superando el presupuesto de memoria y cómputo de los aceleradores de borde',
          'Re-identificación entre cámaras a escala: seguir de forma fiable a un sujeto descrito a través de muchas cámaras y sitios sigue siendo una carga de trabajo mejor adaptada a un sistema centralizado con acceso al archivo completo multi-cámara',
          'Gran contexto sobre horas de metraje: una consulta de vocabulario abierto que necesite razonar sobre la grabación de un día entero, en lugar de un clip específico marcado, sigue necesitando más contexto y cómputo del que soporta el presupuesto de potencia de un acelerador de borde',
        ],
      },
      jurisdiction: {
        id: 'jurisdiction',
        title: '¿Qué normas jurídicas y de adquisición se aplican?',
        content: [
          '**En la UE, las categorías de drones de la EASA — Abierta, Específica, Certificada — determinan el nivel de autonomía permitido por operación, y el marcado CE junto con la Directiva de Equipos Radioeléctricos (RED) se aplican al hardware.** Para un proyecto de cámara o dron en España o la UE, la categoría de operación no es un mero trámite — determina qué funciones de autonomía (por ejemplo, una lógica automatizada de detección y reacción) pueden operarse sin autorización adicional. Un integrador de sistemas debería aclarar la categoría EASA prevista antes de especificar el hardware y las funciones de autonomía, no después. Para proyectos fuera de la UE (por ejemplo, en Latinoamérica), las reglas de operación de drones varían por país y deben verificarse por separado con la autoridad de aviación civil correspondiente.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Por qué los sistemas de IA de cámaras y drones ejecutan la inferencia en el dispositivo en lugar de en la nube?',
            a: 'Los límites de ancho de banda y de enlace, no la privacidad, son la razón principal. Un flujo de cámara 4K continuo cuesta, durante su ventana de retención, más en transporte y almacenamiento que el acelerador que lo procesa localmente, y un dron en rango operativo tiene un enlace de radio intermitente, a veces disputado, que una dependencia de la nube no puede tolerar.',
          },
          {
            q: '¿Cuál es la diferencia entre la detección por clases fijas y la búsqueda VLM de vocabulario abierto?',
            a: 'Un detector por clases fijas responde si un fotograma contiene una de un conjunto de categorías preentrenadas (unas 80 en un modelo típico entrenado con COCO). Un VLM de vocabulario abierto responde a una consulta descrita — por ejemplo, "encuentra el clip donde alguien dejó una bolsa cerca del muelle de carga" — sobre contenido que el detector por clases fijas nunca fue entrenado para reconocer como categoría.',
          },
          {
            q: '¿Puede un modelo de visión-lenguaje ejecutarse en tiempo real en un acelerador de cámara de menos de 5 W?',
            a: 'No a plena tasa de fotogramas. Un VLM no se ejecuta a 30 fotogramas por segundo por flujo dentro de un presupuesto de potencia inferior a 5 W. En la práctica, un detector ligero por clases fijas corre de forma continua con bajo consumo, y solo los clips que marca se pasan al VLM para descripción de vocabulario abierto — el VLM se ejecuta sobre clips activados, no en cada fotograma.',
          },
          {
            q: '¿Qué plataforma de cómputo usan los drones comerciales para la IA a bordo?',
            a: 'El VOXL 2 de ModalAI, construido alrededor del Qualcomm QRB5165, es una plataforma de referencia ampliamente utilizada. Es compatible con PX4, admite odometría visual-inercial sin GPS para navegación, y empaqueta piloto automático, cómputo y sensores de navegación en un módulo de unos 16 gramos.',
          },
          {
            q: '¿Cuánto ancho de banda necesita realmente una sola cámara de seguridad 4K?',
            a: 'Depende de la tasa de fotogramas, la complejidad de la escena y el códec — use la [calculadora de ancho de banda](#bandwidth-calculator) de esta página para estimar el ancho de banda continuo y el coste de almacenamiento para su número de cámaras, resolución, tasa de fotogramas y ventana de retención específicos, en lugar de confiar en una única cifra genérica.',
          },
          {
            q: '¿Debería elegir Hailo-10H o la serie N de Ambarella para un nuevo diseño de cámara?',
            a: 'Apuntan a posiciones que se solapan pero son distintas: Hailo-10H y Hailo-15 se centran en la inferencia GenAI en cámara por debajo de 5 W, mientras que la serie N de Ambarella (lanzada en CES 2026) se posiciona como un SoC de visión IA de 8K con percepción multisensor. La elección correcta depende de la resolución objetivo, el presupuesto de potencia y si necesita fusión multisensor en el mismo chip.',
          },
          {
            q: '¿Por qué los drones necesitan navegación sin GPS, y cómo la maneja el VOXL 2?',
            a: 'Las señales GPS pueden ser interferidas, suplantadas o simplemente no estar disponibles en interiores o en entornos disputados. El VOXL 2 admite odometría visual-inercial (VIO), que fusiona datos de cámara y sensores inerciales para estimar posición y rumbo sin depender del posicionamiento satelital.',
          },
          {
            q: '¿Qué categoría EASA se aplica a la inspección comercial por dron en la UE?',
            a: 'Depende de la operación: la EASA distingue las categorías Abierta (bajo riesgo, reglas estándar), Específica (normalmente se requiere una evaluación de riesgo con autorización de operación específica para inspección de infraestructura e instalaciones industriales) y Certificada (comparable a la aviación tripulada). Un integrador de sistemas debería aclarar la categoría antes de especificar el hardware y las funciones de autonomía, no después.',
          },
          {
            q: '¿Necesito un appliance de borde, o cada cámara puede ejecutar la inferencia por su cuenta?',
            a: 'Depende del número de cámaras por sitio. Un puñado de cámaras puede ejecutar cada una la inferencia en cámara de forma independiente (chips de clase Hailo-10H/15). Un sitio con muchas cámaras suele beneficiarse de un appliance de borde en las instalaciones (NVIDIA Jetson Orin o Thor) que agrega los flujos de forma centralizada — Jetson Thor admite hasta 32 entradas de cámara MIPI CSI-2 en un solo equipo, una señal clara de su rol multi-cámara previsto.',
          },
          {
            q: '¿Qué no pueden hacer todavía los VLM en el dispositivo para el análisis de vídeo?',
            a: 'Tres capacidades siguen siendo de nivel nube o etapa de investigación en 2026: el razonamiento a largo horizonte sobre una grabación de varias horas en una sola pasada, la re-identificación entre cámaras de un sujeto a escala, y las consultas de vocabulario abierto que necesitan contexto que abarque la grabación de un día entero en lugar de un clip específico marcado.',
          },
        ],
      },
      'related-reading': {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        content: [
          'Para conceptos básicos de VLM de escritorio, vea [Best Local Vision Models 2026: LLaVA, Qwen3-VL & Ollama](/es/power-local-llm/local-vision-models-llava-ollama-2026), y vuelva aquí para el despliegue embebido y en cámara — esa guía cubre la configuración de modelos visión-lenguaje de escritorio y servidor; esta cubre las restricciones específicas de cámaras y drones en potencia, ancho de banda y peso de la aeronave.',
        ],
        items: [
          '[Hardware Edge AI para LLM locales](/es/local-llms/edge-ai-hardware-for-local-llms) — especificaciones completas de las plataformas Jetson Orin y Jetson Thor referenciadas en la tabla comparativa de arriba',
          '[Modelos VLA para robots: inferencia local](/es/local-llms/vla-models-robots-local-inference) — el artículo hermano sobre la misma restricción de silicio aplicada a modelos de acción robótica en lugar de comprensión de vídeo',
          '[Lista de verificación de seguridad y privacidad de LLM locales](/es/local-llms/local-llm-security-privacy-checklist) — consideraciones de manejo de datos que siguen aplicando una vez que el análisis de vídeo se mueve al dispositivo',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'VLM en cámaras y drones 2026: comprensión de vídeo en el dispositivo',
      description:
        'Cámaras y drones mueven la inferencia VLM al dispositivo por ancho de banda, no privacidad. Comparamos Hailo, Ambarella, Jetson y VOXL 2 para 2026.',
      datePublished: '2026-09-02',
      dateModified: '2026-09-02',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
        sameAs: 'https://www.linkedin.com/in/hanskuepper/',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      inLanguage: 'es',
      url: 'https://www.promptquorum.com/es/local-llms/vlm-video-analytics-drones-edge',
      image: 'https://www.promptquorum.com/images/vlm-video-analytics-drones-edge-hero-es.webp',
      educationalLevel: 'Advanced',
      proficiencyLevel: 'Advanced',
      audience: {
        '@type': 'Audience',
        audienceType: 'Integradores de sistemas, arquitectos de videoseguridad y responsables de operaciones de drones comerciales',
      },
      about: [
        { '@type': 'Thing', name: 'Modelos de visión-lenguaje' },
        { '@type': 'Thing', name: 'IA de borde' },
        { '@type': 'Thing', name: 'Análisis de vídeo' },
        { '@type': 'Thing', name: 'Autonomía de drones' },
      ],
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways'],
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/es/local-llms/vlm-video-analytics-drones-edge',
      },
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-02',
    current_hardware_mentioned: ['Hailo-10H', 'Hailo-15', 'Ambarella N-series', 'NVIDIA Jetson Orin', 'NVIDIA Jetson Thor', 'Qualcomm QRB5165', 'ModalAI VOXL 2'],
    theme: 'Cameras & Drones',
    heroImage: '/images/vlm-video-analytics-drones-edge-hero-pt.webp',
    title: 'VLMs em câmeras e drones 2026: entendimento de vídeo no dispositivo',
    seoTitle: 'VLMs em câmeras e drones 2026: IA de vídeo local',
    intro:
      'Câmeras e drones compartilham uma restrição que decide onde a IA de vídeo é executada: largura de banda, não poder de computação, é o motivo pelo qual a inferência migra para o dispositivo. Este guia compara arquiteturas em câmera, em appliance de borda e em nuvem para análise de vídeo, explica a mudança da detecção por classes fixas para a busca VLM de vocabulário aberto, e cobre as plataformas de computação embarcadas hoje em câmeras e drones.',
    metaDescription:
      'Câmeras e drones movem a inferência VLM para o dispositivo por largura de banda, não privacidade. Comparamos Hailo, Ambarella, Jetson e VOXL 2 para 2026.',
    twitterDescription:
      'Por que a IA de vídeo migra para o dispositivo: a economia da largura de banda vence a privacidade como motivo. Hailo-10H, Ambarella série N, Jetson Thor e VOXL 2 comparados para câmeras e drones.',
    publishDate: '2026-09-02',
    dateModified: '2026-09-02',
    readTime: '13 min de leitura',
    educationalLevel: 'Advanced',
    audience: 'Integradores de sistemas, arquitetos de videossegurança e líderes de operações de drones comerciais',
    primaryTerm: 'entendimento de vídeo no dispositivo',
    targetKeywords: [
      'análise de vídeo no dispositivo 2026',
      'inferência VLM câmera edge',
      'computação embarcada drone IA',
      'busca de vídeo vocabulário aberto',
      'Hailo-10H IA câmera',
      'custo de banda vídeo edge',
      'VOXL 2 piloto automático drone IA',
    ],
    leadAnswerBlock:
      '**Câmeras e drones movem a inferência para o dispositivo porque limites de largura de banda e de enlace — não privacidade — tornam impraticável transmitir vídeo bruto continuamente.** Um fluxo de segurança 4K contínuo custa, ao longo de sua janela de retenção, mais em transporte e armazenamento do que o acelerador que o processa diretamente na câmera. Um drone em alcance operacional enfrenta um enlace de rádio intermitente, de baixa largura de banda e às vezes contestado, então a computação embarcada é a única forma de agir sobre o que ele observa. Ambos os casos sustentam a mesma mudança: da detecção de objetos por classes fixas para a busca VLM de vocabulário aberto, que encontra um evento descrito em vez de comparar com uma lista fixa de classes.',
    quickAnswerTop: {
      pt: {
        question: 'Por que câmeras e drones executam VLMs no dispositivo em vez de na nuvem?',
        answer:
          'Limites de largura de banda e de enlace obrigam a isso, não a privacidade: um fluxo de segurança 4K contínuo custa mais em transporte e armazenamento do que um acelerador embarcado na câmera, e um drone em alcance tem um enlace de rádio intermitente, às vezes contestado, que uma dependência de nuvem não tolera. Chips de câmera como o Hailo-10H operam com menos de 5 W; drones como o VOXL 2 da ModalAI (Qualcomm QRB5165) reúnem piloto automático, navegação e inferência em um módulo de cerca de 16 g.',
        bullets: [
          'Hailo-10H / Hailo-15: aceleradores GenAI embarcados abaixo de 5 W, mostrados na ISC West 2026',
          'Ambarella série N: SoC de visão IA de borda em 8K lançado na CES 2026',
          'NVIDIA Jetson Thor: suporta até 32 entradas de câmera MIPI CSI-2',
          'ModalAI VOXL 2 (Qualcomm QRB5165): piloto automático de drone + computação + VIO sem GPS, ~16 g',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'Principais pontos', anchor: '#key-takeaways' },
      { label: 'Por que a largura de banda leva a IA de vídeo à borda', anchor: '#bandwidth-economics' },
      { label: 'Em câmera, appliance de borda ou nuvem?', anchor: '#architectures' },
      { label: 'Da detecção à descrição', anchor: '#detection-to-description' },
      { label: 'Estime seu custo de banda e armazenamento', anchor: '#bandwidth-calculator' },
      { label: 'Como avaliar uma implantação', anchor: '#evaluation-steps' },
      { label: 'Por que drones processam vídeo a bordo', anchor: '#drones-onboard' },
      { label: 'Aplicações comerciais já em uso', anchor: '#commercial-applications' },
      { label: 'Comparativo de plataformas', anchor: '#platform-comparison' },
      { label: 'Qual hardware comprar', anchor: '#buying-categories' },
      { label: 'O que ainda não funciona no dispositivo', anchor: '#locallens-limits' },
      { label: 'Jurisdição e regras de aquisição', anchor: '#jurisdiction' },
      { label: 'Perguntas frequentes', anchor: '#faq' },
      { label: 'Leitura relacionada', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Limites de largura de banda e de enlace, não privacidade, explicam por que a inferência de câmeras e drones migra para o dispositivo: um fluxo 4K contínuo custa mais em transporte e armazenamento do que o chip que o processa localmente.',
          'A análise de vídeo está migrando da detecção por classes fixas para a busca VLM de vocabulário aberto — descrever um evento em linguagem natural em vez de comparar com uma lista de classes pré-treinada.',
          'Silício de câmera: Hailo-10H e Hailo-15 miram GenAI embarcado abaixo de 5 W; a série N da Ambarella (lançada na CES 2026) soma um SoC de visão IA de borda em 8K com percepção multissensor.',
          'Appliances de borda (NVIDIA Jetson Orin/Thor) agregam muitas câmeras no local; o Jetson Thor suporta até 32 entradas de câmera MIPI CSI-2.',
          'Drones executam computação na própria aeronave: o Qualcomm QRB5165 via ModalAI VOXL 2 combina piloto automático, odometria visual-inercial sem GPS e inferência em um módulo de cerca de 16 g.',
          'A maioria das implantações reais é híbrida — um detector leve por classes fixas roda continuamente; o VLM só processa clipes acionados, não cada quadro.',
          'Um VLM não substitui a detecção por classes fixas — ele adiciona busca de vocabulário aberto sobre um detector que continua fazendo o trabalho contínuo de triagem quadro a quadro.',
        ],
      },
      'bandwidth-economics': {
        id: 'bandwidth-economics',
        title: 'Por que a IA de vídeo migra para a borda antes mesmo de a privacidade entrar em pauta?',
        content: [
          '**Limites de largura de banda e de enlace físico são o motivo principal pelo qual a inferência de câmeras e drones migra para o dispositivo — o argumento econômico chega antes do argumento de privacidade.** Uma câmera 4K em streaming contínuo a 15–30 fps gera uma taxa de bits sustentada que, multiplicada por várias câmeras em um mesmo local e uma janela de retenção de 30 dias, acumula custos de transporte e armazenamento mais rápido do que o custo único de um acelerador embarcado ou de um appliance de borda. A calculadora mais abaixo nesta página permite fazer essa conta para o seu número de câmeras e janela de retenção.',
          'Drones enfrentam a mesma restrição na direção oposta: em vez de dados demais para mover a baixo custo, eles têm pouco enlace confiável no qual contar. Um drone em alcance operacional tem um enlace de rádio intermitente, de baixa largura de banda e às vezes contestado — uma missão que depende de uma conexão contínua à nuvem para interpretar o que o drone vê falha exatamente quando a aeronave precisa agir de forma autônoma, por exemplo durante interferência de GPS ou fora do alcance visual direto.',
          'Esse enquadramento difere do argumento centrado em privacidade que o conteúdo existente deste site sobre LLMs locais costuma usar para IA de consumo e desktop. Para câmeras e drones, a primeira pergunta do comprador é "posso arcar com mover tanto vídeo, e posso contar com a estabilidade do enlace?" — privacidade e residência de dados são benefícios secundários reais, não o motivo de a arquitetura existir.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'A IA de vídeo migra para o dispositivo porque custos de transporte e armazenamento, somados a enlaces de rádio pouco confiáveis, tornam a inferência dependente de nuvem impraticável antes mesmo de a privacidade ser um fator.' },
          { type: 'plain-terms', text: 'Mover o vídeo de cada câmera para um servidor custa dinheiro e exige um enlace que permaneça estável; processá-lo onde é capturado evita os dois problemas.' },
        ],
      },
      architectures: {
        id: 'architectures',
        title: 'Devo executar a inferência em câmera, em um appliance de borda ou na nuvem?',
        content: [
          '**Três arquiteturas atendem a IA de vídeo de câmeras hoje, e a maioria das implantações em produção combina pelo menos duas delas.** A escolha certa depende do número de câmeras por local, dos requisitos de retenção e de quanto custo por unidade o orçamento de hardware consegue absorver.',
          '**A inferência em câmera** embute o acelerador dentro da própria câmera — Hailo-10H e Hailo-15 miram exatamente esse ponto de projeto com consumo abaixo de 5 W. Use isso quando cada câmera precisa tomar sua própria decisão (gravação acionada por movimento, detecção de violação no dispositivo) e a lista de materiais da câmera suporta um chip por unidade.',
          '**O appliance de borda local** agrega muitas câmeras em um único equipamento rodando NVIDIA Jetson Orin ou Jetson Thor. Use isso quando um local tiver mais câmeras do que faz sentido instrumentar individualmente — o Jetson Thor suportar até 32 entradas de câmera MIPI CSI-2 é um forte sinal de que essa plataforma foi pensada exatamente para esse papel de agregação multi-câmera, não para inferência de fluxo único.',
          '**O processamento em nuvem** ainda se encaixa em locais com poucas câmeras e sem exigência de tempo real, onde a busca retroativa no arquivo completo ao longo de meses importa mais do que a latência por clipe e onde o custo de banda de alguns poucos fluxos é aceitável.',
          'Na prática, a maioria das implantações descritas mais adiante neste artigo é híbrida: a detecção por classes fixas roda continuamente na câmera ou no appliance de borda, o armazenamento em nuvem mantém um arquivo para busca retroativa, e a inferência VLM só roda contra clipes que um detector mais barato já sinalizou.',
        ],
      },
      'detection-to-description': {
        id: 'detection-to-description',
        title: 'Como a análise de vídeo está migrando da detecção para a descrição?',
        content: [
          '**A análise de vídeo está migrando da detecção de objetos por classes fixas para a busca VLM de vocabulário aberto — a mudança mais recente nesse mercado.** Um detector por classes fixas responde "há uma pessoa, um veículo, ou uma das cerca de 80 categorias COCO pré-treinadas nesta imagem?". Um VLM de vocabulário aberto responde a uma consulta descrita — "encontre o clipe em que alguém deixou uma bolsa perto da doca de carga" — sobre material que o detector por classes fixas nunca foi treinado para reconhecer como categoria.',
          '**Um VLM não substitui o detector por classes fixas — ele opera em cima dele.** Um modelo de visão e linguagem não roda a 30 quadros por segundo por fluxo dentro de um orçamento de potência abaixo de 5 W; o custo de computação e latência da inferência VLM completa é alto demais para processamento contínuo quadro a quadro nesse envelope de potência. Em vez disso, o detector por classes fixas continua fazendo o trabalho contínuo de triagem de baixo consumo — movimento, presença, classificação básica — e apenas os clipes que ele sinaliza são passados ao VLM para descrição ou busca de vocabulário aberto.',
          'Esse projeto de duas camadas é o motivo pelo qual o silício embarcado como o Hailo-10H é descrito como um acelerador de "GenAI na borda" em vez de um processador VLM em quadro completo: o chip é dimensionado para inferência VLM acionada e intermitente sobre uma detecção leve contínua, não para rodar um modelo de visão e linguagem em taxa de quadros total.',
        ],
        items: [
          'Detecção por classes fixas: contínua, baixo consumo, responde "isso é uma das N categorias pré-treinadas?"',
          'Busca VLM de vocabulário aberto: acionada, consumo maior, responde a uma descrição em linguagem natural sobre um clipe específico',
          'As duas se somam, não competem — o detector decide o que é mostrado ao VLM, não o contrário',
          'Configurações VLM de desktop e servidor (LLaVA, Qwen3-VL e modelos similares) compartilham as mesmas famílias de modelos usadas nessa análise de clipes acionada — veja o [comparativo de VLM de desktop abaixo](#related-reading) antes de avaliar uma implantação embarcada',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'A busca VLM de vocabulário aberto encontra um evento descrito em material que um detector por classes fixas nunca aprendeu a reconhecer como categoria, mas roda sobre clipes acionados, não em cada quadro.' },
          { type: 'plain-terms', text: 'O jeito antigo: "sinalize tudo que combine com pessoa/carro/cachorro". O jeito novo: "encontre o clipe em que alguém deixou uma bolsa perto da doca" — com suas próprias palavras, depois que um detector mais barato já sinalizou o clipe.' },
        ],
      },
      'bandwidth-calculator': {
        id: 'bandwidth-calculator',
        title: 'De quanto de banda e armazenamento seu site de câmeras realmente precisa?',
        content: [
          '**Informe abaixo seu número de câmeras, resolução, taxa de quadros e janela de retenção para estimar banda contínua e custo de armazenamento.** Use isso antes de escolher entre arquitetura em câmera, appliance de borda ou nuvem — o número resultante geralmente encerra a discussão sozinho.',
        ],
        component: 'EdgeVideoBandwidthCalculator',
      },
      'evaluation-steps': {
        id: 'evaluation-steps',
        title: 'Como avaliar uma implantação VLM de câmera ou drone?',
        content: [
          '**Seis verificações separam uma implantação que funciona de uma que falha em campo.** Execute-as nesta ordem antes de se comprometer com uma plataforma de silício específica.',
        ],
        numberedItems: [
          { title: 'Defina o gatilho, não o fluxo', whyItMatters: 'Decida qual evento aciona a inferência VLM (movimento, um alarme de detector por classes fixas, um intervalo programado) antes de escolher o hardware — rodar um VLM contra cada quadro de cada fluxo não é um orçamento de potência ou custo realista em 2026.' },
          { title: 'Meça o orçamento de enlace antes de escolher o silício', whyItMatters: 'Para drones, meça a largura de banda de upload disponível e a latência no pior caso no alcance operacional antes de escolher uma plataforma de computação — o enlace de rádio da aeronave, não o chip de computação, costuma ser a restrição limitante.' },
          { title: 'Mantenha detecção e descrição como etapas separadas', whyItMatters: 'Rode um detector leve por classes fixas continuamente e encaminhe ao VLM apenas os clipes sinalizados — é a única forma de encaixar a inferência VLM em um orçamento de potência de câmera ou drone.' },
          { title: 'Ajuste o orçamento de potência ao invólucro físico', whyItMatters: 'Um invólucro de câmera sem ventilador limita o orçamento térmico a cerca de 5 W; uma carga útil de drone é limitada por peso e trocas de autonomia de voo, não apenas por consumo — dimensione o silício para o invólucro, não o contrário.' },
          { title: 'Valide a operação sem GPS se a missão puder perder o GPS ou o enlace de comando', whyItMatters: 'Odometria visual-inercial (VIO) precisa ser testada especificamente, não presumida como funcional, antes de confiar nela fora do alcance visual direto ou em ambientes eletromagnéticos contestados.' },
          { title: 'Faça um piloto em um local ou aeronave antes de escalar', whyItMatters: 'Valide a taxa de falsos positivos, a latência de consultas e o comportamento de bateria/térmico em uma única implantação antes de comprometer orçamento para uma implantação em toda a frota.' },
        ],
      },
      'drones-onboard': {
        id: 'drones-onboard',
        title: 'Por que os drones processam vídeo a bordo em vez de transmiti-lo?',
        content: [
          '**Drones movem a computação para a aeronave por três motivos: margem de enlace, latência e navegação sem GPS — não porque a computação embarcada seja mais barata.** O enlace de rádio de um drone se degrada com alcance, terreno e interferência de uma forma que o cabo ethernet de uma câmera fixa nunca sofre; uma missão que depende de uma conexão contínua à nuvem para interpretar o vídeo falha exatamente quando a aeronave está mais longe do operador e mais precisa de autonomia.',
          '**O VOXL 2 da ModalAI, construído em torno do Qualcomm QRB5165, é a plataforma de referência para projeto de computação embarcada na aeronave.** É compatível com PX4, suporta odometria visual-inercial (VIO) sem GPS para navegação quando o posicionamento por satélite está indisponível ou sofre interferência, e reúne piloto automático, computação e sensores de navegação em um módulo de classe piloto automático de cerca de 16 gramas — pequeno o suficiente para competir com carga útil e bateria pelo mesmo orçamento de peso, não com uma fonte de alimentação separada.',
          '**Peso e potência são restrições rígidas em uma aeronave de um jeito que não são para uma câmera parafusada na parede.** Cada grama de computação embarcada é um grama indisponível para capacidade de bateria, carga útil de sensores ou autonomia de voo — uma plataforma de drone não pode simplesmente adicionar uma unidade de rack como um site de câmeras local pode adicionar um appliance de borda.',
        ],
        items: [
          'Margem de enlace: a conectividade de rádio se degrada com alcance, terreno e espectro contestado de um jeito que a infraestrutura de câmera cabeada não sofre',
          'Latência: uma decisão em tempo real (desvio de obstáculo, rastreamento de alvo) não pode esperar uma viagem de ida e volta a um servidor em nuvem',
          'Navegação sem GPS: a odometria visual-inercial permite que a aeronave mantenha posição e rumo quando o posicionamento por satélite está indisponível',
          'Orçamento de peso: um módulo de computação de classe piloto automático de cerca de 16 g compete diretamente com bateria e carga útil, ao contrário do invólucro de uma câmera estacionária',
        ],
      },
      'commercial-applications': {
        id: 'commercial-applications',
        title: 'Onde os VLMs de câmera e drone já são usados comercialmente?',
        content: [
          '**Quatro categorias comerciais respondem pela maioria das implantações em produção hoje: inspeção de infraestrutura e utilidades, agricultura de precisão, levantamento e mapeamento, e segurança pública.**',
        ],
        items: [
          'Inspeção de infraestrutura e utilidades: drones equipados com computação embarcada inspecionam linhas de transmissão, dutos e torres de celular, sinalizando defeitos visíveis sem transmitir o material bruto para revisão',
          'Agricultura de precisão: a visão embarcada distingue estresse da lavoura, pressão de plantas daninhas e problemas de irrigação por talhão, alimentando decisões em sistemas de gestão agrícola sem depender de uma conexão contínua à nuvem em áreas rurais com conectividade fraca',
          'Levantamento e mapeamento: drones de fotogrametria e inspeção processam imagens a bordo ou em um appliance de borda para reduzir o volume de dados brutos que precisam ser transportados e armazenados por voo',
          'Segurança pública: redes de câmeras fixas combinam detecção contínua por classes fixas com busca VLM acionada — por exemplo, para recuperar um incidente descrito de um arquivo em vez de revisar manualmente horas de material',
        ],
        callouts: [
          { type: 'note', text: 'Programas militares também estão moldando esse mercado de silício. O software de autonomia Hivemind da Shield AI foi selecionado para o programa Collaborative Combat Aircraft (CCA) YFQ-44A da Força Aérea dos EUA, e o software Lattice da Anduril foi testado na mesma aeronave. Essa demanda em nível de programa por pilhas de autonomia é um dos motores do investimento em silício de inferência de borda, embora o caminho de certificação, o comprador e os requisitos de programas de defesa sejam totalmente diferentes das implantações comerciais descritas acima e estejam fora do escopo deste guia.' },
        ],
      },
      'platform-comparison': {
        id: 'platform-comparison',
        title: 'Comparativo: plataformas de computação para câmeras e drones',
        content: [
          'Consulte o [guia de silício de borda](/pt/local-llms/edge-ai-hardware-for-local-llms) para as especificações completas de Jetson Orin e Jetson Thor — esta tabela permanece focada nas plataformas específicas de câmeras e drones mais relevantes para análise de vídeo.',
        ],
        columns: ['Plataforma', 'Orçamento de potência', 'Ideal para', 'Status'],
        rows: [
          { Plataforma: 'Hailo-10H / Hailo-15', 'Orçamento de potência': '<5 W', 'Ideal para': 'GenAI em câmera, triagem VLM', Status: 'Mostrado na ISC West 2026' },
          { Plataforma: 'Ambarella série N', 'Orçamento de potência': 'SoC visão IA de borda', 'Ideal para': 'Percepção multissensor 8K', Status: 'Lançado na CES 2026' },
          { Plataforma: 'NVIDIA Jetson Orin / Thor', 'Orçamento de potência': 'Classe 15–130 W', 'Ideal para': 'Appliance multi-câmera', Status: 'Thor: até 32 câmeras MIPI' },
          { Plataforma: 'Qualcomm QRB5165 (VOXL 2)', 'Orçamento de potência': 'Módulo classe drone', 'Ideal para': 'Piloto automático + VIO + inferência', Status: 'Compatível PX4, ~16 g' },
        ],
      },
      'buying-categories': {
        id: 'buying-categories',
        title: 'Qual hardware você precisa para começar?',
        content: [
          '**Quatro categorias de hardware cobrem a maioria dos projetos VLM de câmera e drone; verifique as ofertas atuais de revendedores e distribuidores, já que os preços mudam com frequência.**',
        ],
        items: [
          'Módulos de câmera e kits de desenvolvimento: placas de câmera de referência combinadas com um acelerador de borda, usadas para prototipar um pipeline em câmera antes de se comprometer com um design de câmera sob medida',
          'Módulos aceleradores Hailo M.2: adicionam inferência de IA abaixo de 5 W a uma câmera ou placa de computação embarcada existente via slot M.2, sem redesenhar a placa principal da câmera',
          'Appliances de vídeo de borda: kits de desenvolvimento NVIDIA Jetson Orin e Jetson Thor, usados para prototipar a arquitetura de agregação multi-câmera descrita acima antes de implantar uma frota de appliances locais',
          'Plataformas de desenvolvimento para drones: kits de desenvolvimento ModalAI VOXL 2, usados para prototipar pipelines de piloto automático baseados em PX4 e inferência embarcada antes de integrar a uma aeronave de produção',
        ],
      },
      'locallens-limits': {
        id: 'locallens-limits',
        title: 'O que ainda não funciona no dispositivo?',
        content: [
          '**Três capacidades continuam de nível nuvem ou estágio de pesquisa em 2026, e nenhum acelerador de classe câmera ou drone muda isso este ano.**',
        ],
        items: [
          'Entendimento de vídeo de longo horizonte: raciocinar sobre uma gravação de várias horas em uma única passagem, em vez de análise de clipe acionada, ainda excede o orçamento de memória e computação de aceleradores de borda',
          'Reidentificação entre câmeras em escala: rastrear de forma confiável um sujeito descrito em muitas câmeras e locais continua sendo uma carga de trabalho mais adequada a um sistema centralizado com acesso ao arquivo completo multi-câmera',
          'Grande contexto sobre horas de material: uma consulta de vocabulário aberto que precise raciocinar sobre a gravação de um dia inteiro, em vez de um clipe específico sinalizado, ainda precisa de mais contexto e computação do que o orçamento de potência de um acelerador de borda suporta',
        ],
      },
      jurisdiction: {
        id: 'jurisdiction',
        title: 'Quais regras jurisdicionais e de aquisição se aplicam?',
        content: [
          '**No Brasil, a ANAC (Agência Nacional de Aviação Civil) regula drones por meio do sistema SARPAS, com categorias operacionais definidas por peso e finalidade — não pelas categorias da EASA europeia, que não se aplicam diretamente ao mercado brasileiro.** Para um projeto de câmera ou drone no Brasil, a categoria operacional junto à ANAC não é uma formalidade — ela determina quais funções de autonomia podem operar sem autorização adicional, de forma análoga em estrutura, mas distinta em regras específicas, do sistema europeu. Um integrador de sistemas vendendo para o mercado brasileiro deve confirmar o enquadramento junto à ANAC antes de especificar hardware e funções de autonomia, não depois.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Por que sistemas de IA de câmeras e drones executam a inferência no dispositivo em vez de na nuvem?',
            a: 'Limites de largura de banda e de enlace, não privacidade, são o motivo principal. Um fluxo de câmera 4K contínuo custa, ao longo de sua janela de retenção, mais em transporte e armazenamento do que o acelerador que o processa localmente, e um drone em alcance operacional tem um enlace de rádio intermitente, às vezes contestado, que uma dependência de nuvem não tolera.',
          },
          {
            q: 'Qual é a diferença entre detecção por classes fixas e busca VLM de vocabulário aberto?',
            a: 'Um detector por classes fixas responde se uma imagem contém uma de um conjunto de categorias pré-treinadas (cerca de 80 em um modelo típico treinado com COCO). Um VLM de vocabulário aberto responde a uma consulta descrita — por exemplo, "encontre o clipe em que alguém deixou uma bolsa perto da doca de carga" — sobre conteúdo que o detector por classes fixas nunca foi treinado para reconhecer como categoria.',
          },
          {
            q: 'Um modelo de visão e linguagem pode rodar em tempo real em um acelerador de câmera abaixo de 5 W?',
            a: 'Não em taxa de quadros total. Um VLM não roda a 30 quadros por segundo por fluxo dentro de um orçamento de potência abaixo de 5 W. Na prática, um detector leve por classes fixas roda continuamente com baixo consumo, e apenas os clipes que ele sinaliza são passados ao VLM para descrição de vocabulário aberto — o VLM roda sobre clipes acionados, não em cada quadro.',
          },
          {
            q: 'Qual plataforma de computação os drones comerciais usam para IA embarcada?',
            a: 'O VOXL 2 da ModalAI, construído em torno do Qualcomm QRB5165, é uma plataforma de referência amplamente usada. É compatível com PX4, suporta odometria visual-inercial sem GPS para navegação, e reúne piloto automático, computação e sensores de navegação em um módulo de cerca de 16 gramas.',
          },
          {
            q: 'De quanta largura de banda uma única câmera de segurança 4K realmente precisa?',
            a: 'Depende da taxa de quadros, da complexidade da cena e do codec — use a [calculadora de banda](#bandwidth-calculator) desta página para estimar a banda contínua e o custo de armazenamento para seu número de câmeras, resolução, taxa de quadros e janela de retenção específicos, em vez de confiar em um único número genérico.',
          },
          {
            q: 'Devo escolher o Hailo-10H ou a série N da Ambarella para um novo design de câmera?',
            a: 'Eles miram posições que se sobrepõem mas são distintas: Hailo-10H e Hailo-15 focam em inferência GenAI embarcada abaixo de 5 W, enquanto a série N da Ambarella (lançada na CES 2026) é posicionada como um SoC de visão IA de 8K com percepção multissensor. A escolha certa depende da resolução alvo, do orçamento de potência e de precisar ou não de fusão multissensor no mesmo chip.',
          },
          {
            q: 'Por que drones precisam de navegação sem GPS, e como o VOXL 2 lida com isso?',
            a: 'Sinais de GPS podem ser bloqueados, falsificados ou simplesmente indisponíveis em ambientes internos ou contestados. O VOXL 2 suporta odometria visual-inercial (VIO), que combina dados de câmera e sensores inerciais para estimar posição e rumo sem depender do posicionamento por satélite.',
          },
          {
            q: 'Qual categoria da ANAC se aplica à inspeção comercial por drone no Brasil?',
            a: 'Depende da operação e do peso do equipamento: a ANAC define categorias por faixa de peso e finalidade dentro do sistema SARPAS, com exigências de registro e, em alguns casos, autorização operacional específica para inspeção de infraestrutura e instalações industriais. Um integrador de sistemas deve confirmar o enquadramento junto à ANAC antes de especificar o hardware e as funções de autonomia, não depois.',
          },
          {
            q: 'Preciso de um appliance de borda, ou cada câmera pode rodar a inferência sozinha?',
            a: 'Depende do número de câmeras por local. Um punhado de câmeras pode rodar a inferência em câmera de forma independente (chips classe Hailo-10H/15). Um local com muitas câmeras costuma se beneficiar de um appliance de borda local (NVIDIA Jetson Orin ou Thor) que agrega os fluxos de forma centralizada — o Jetson Thor suporta até 32 entradas de câmera MIPI CSI-2 em um único equipamento, um forte sinal de seu papel multi-câmera pretendido.',
          },
          {
            q: 'O que os VLMs no dispositivo ainda não conseguem fazer para análise de vídeo?',
            a: 'Três capacidades continuam de nível nuvem ou estágio de pesquisa em 2026: raciocínio de longo horizonte sobre uma gravação de várias horas em uma única passagem, reidentificação entre câmeras de um sujeito em escala, e consultas de vocabulário aberto que precisam de contexto abrangendo a gravação de um dia inteiro em vez de um clipe específico sinalizado.',
          },
        ],
      },
      'related-reading': {
        id: 'related-reading',
        title: 'Leitura relacionada',
        content: [
          'Para os fundamentos de VLM de desktop, veja [Best Local Vision Models 2026: LLaVA, Qwen3-VL & Ollama](/pt/power-local-llm/local-vision-models-llava-ollama-2026), e volte aqui para implantação embarcada e em câmera — aquele guia cobre a configuração de modelos de visão e linguagem de desktop e servidor; este cobre as restrições específicas de câmeras e drones em potência, banda e peso de aeronave.',
        ],
        items: [
          '[Hardware Edge AI para LLMs locais](/pt/local-llms/edge-ai-hardware-for-local-llms) — especificações completas das plataformas Jetson Orin e Jetson Thor referenciadas na tabela comparativa acima',
          '[Modelos VLA para robôs: inferência local](/pt/local-llms/vla-models-robots-local-inference) — o artigo irmão sobre a mesma restrição de silício aplicada a modelos de ação robótica em vez de entendimento de vídeo',
          '[Checklist de segurança e privacidade de LLMs locais](/pt/local-llms/local-llm-security-privacy-checklist) — considerações sobre tratamento de dados que continuam se aplicando quando a análise de vídeo migra para o dispositivo',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'VLMs em câmeras e drones 2026: entendimento de vídeo no dispositivo',
      description:
        'Câmeras e drones movem a inferência VLM para o dispositivo por largura de banda, não privacidade. Comparamos Hailo, Ambarella, Jetson e VOXL 2 para 2026.',
      datePublished: '2026-09-02',
      dateModified: '2026-09-02',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
        sameAs: 'https://www.linkedin.com/in/hanskuepper/',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      inLanguage: 'pt-BR',
      url: 'https://www.promptquorum.com/pt/local-llms/vlm-video-analytics-drones-edge',
      image: 'https://www.promptquorum.com/images/vlm-video-analytics-drones-edge-hero-pt.webp',
      educationalLevel: 'Advanced',
      proficiencyLevel: 'Advanced',
      audience: {
        '@type': 'Audience',
        audienceType: 'Integradores de sistemas, arquitetos de videossegurança e líderes de operações de drones comerciais',
      },
      about: [
        { '@type': 'Thing', name: 'Modelos de visão e linguagem' },
        { '@type': 'Thing', name: 'IA de borda' },
        { '@type': 'Thing', name: 'Análise de vídeo' },
        { '@type': 'Thing', name: 'Autonomia de drones' },
      ],
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways'],
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/pt/local-llms/vlm-video-analytics-drones-edge',
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-02',
    current_hardware_mentioned: ['Hailo-10H', 'Hailo-15', 'Ambarella N-series', 'NVIDIA Jetson Orin', 'NVIDIA Jetson Thor', 'Qualcomm QRB5165', 'ModalAI VOXL 2'],
    theme: 'Cameras & Drones',
    heroImage: '/images/vlm-video-analytics-drones-edge-hero-ja.webp',
    title: 'カメラとドローンのVLM 2026：オンデバイス映像理解の実践',
    seoTitle: 'カメラ・ドローンVLM 2026：オンデバイス映像AI',
    intro:
      'カメラとドローンには、映像AIをどこで実行するかを決める共通の制約があります。それは演算能力ではなく帯域幅です。本ガイドでは、映像解析のためのカメラ内蔵型・エッジアプライアンス型・クラウド型アーキテクチャを比較し、固定クラス検出からオープンボキャブラリーVLM検索への移行を解説し、カメラとドローン機体に今まさに搭載されている演算プラットフォームを取り上げます。',
    metaDescription:
      'カメラとドローンがVLM推論をオンデバイスに移すのはプライバシーではなく帯域幅のため。Hailo、Ambarella、Jetson、VOXL 2を2026年の実運用向けに比較。',
    twitterDescription:
      '映像AIがオンデバイスに移る理由：プライバシーより帯域幅の経済性。Hailo-10H、Ambarella N シリーズ、Jetson Thor、VOXL 2をカメラ・ドローン向けに比較。',
    publishDate: '2026-09-02',
    dateModified: '2026-09-02',
    readTime: '13分で読める',
    educationalLevel: 'Advanced',
    audience: 'システムインテグレーター、映像セキュリティアーキテクト、商用ドローン運用責任者',
    primaryTerm: 'オンデバイス映像理解',
    targetKeywords: [
      'オンデバイス映像解析 2026',
      'VLM カメラ 推論 エッジ',
      'ドローン 搭載AI 演算',
      'オープンボキャブラリー映像検索',
      'Hailo-10H カメラAI',
      'エッジ映像 帯域幅コスト',
      'VOXL 2 ドローン オートパイロット AI',
    ],
    leadAnswerBlock:
      '**カメラとドローンが推論をオンデバイスに移すのは、プライバシーではなく帯域幅と通信リンクの制約が生の映像ストリーミングを非現実的にするためです。** 連続的な4Kセキュリティストリームは、保存期間全体で見ると、カメラ内で処理するアクセラレーターよりも高い転送・保存コストがかかります。運用距離にあるドローンは断続的で低帯域、時に妨害を受ける可能性のある無線リンクに直面するため、機体上での演算だけが見たものに対応する唯一の手段です。両者は同じ変化を裏付けています——固定クラスの物体検出から、記述されたイベントを固定クラスのリストと照合するのではなく検索するオープンボキャブラリーVLM検索への移行です。',
    quickAnswerTop: {
      ja: {
        question: 'なぜカメラとドローンはクラウドではなくオンデバイスでVLMを実行するのですか？',
        answer:
          'プライバシーではなく帯域幅と通信リンクの制約がその理由です。連続的な4Kセキュリティストリームはカメラ内蔵アクセラレーターより転送・保存コストが高く、運用距離にあるドローンはクラウド依存を許容できない断続的で時に妨害を受ける無線リンクを持っています。Hailo-10Hのようなカメラ側チップは5W未満で動作し、ModalAIのVOXL 2（Qualcomm QRB5165）のようなドローンはオートパイロット、ナビゲーション、推論を約16gのモジュールに統合しています。',
        bullets: [
          'Hailo-10H / Hailo-15：ISC West 2026で発表された5W未満のカメラ内蔵GenAIアクセラレーター',
          'Ambarella Nシリーズ：CES 2026で発表された8Kエッジ AIビジョンSoC',
          'NVIDIA Jetson Thor：最大32のMIPI CSI-2カメラ入力に対応',
          'ModalAI VOXL 2（Qualcomm QRB5165）：約16gのドローンオートパイロット＋演算＋GPSフリーVIO',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: '重要ポイント', anchor: '#key-takeaways' },
      { label: 'なぜ帯域幅が映像AIをエッジに押しやるのか', anchor: '#bandwidth-economics' },
      { label: 'カメラ内蔵・エッジアプライアンス・クラウドのどれを選ぶか', anchor: '#architectures' },
      { label: '検出から記述への移行', anchor: '#detection-to-description' },
      { label: '帯域幅と保存コストを見積もる', anchor: '#bandwidth-calculator' },
      { label: '導入の評価方法', anchor: '#evaluation-steps' },
      { label: 'ドローンが映像を機上で処理する理由', anchor: '#drones-onboard' },
      { label: '既に商用化されている応用例', anchor: '#commercial-applications' },
      { label: 'プラットフォーム比較', anchor: '#platform-comparison' },
      { label: '購入すべきハードウェア', anchor: '#buying-categories' },
      { label: 'オンデバイスではまだできないこと', anchor: '#locallens-limits' },
      { label: '管轄区域と調達ルール', anchor: '#jurisdiction' },
      { label: 'よくある質問', anchor: '#faq' },
      { label: '関連記事', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'プライバシーではなく帯域幅と通信リンクの制約が、カメラ・ドローンの推論をオンデバイスに移す理由です。連続的な4Kストリームはローカルで処理するチップより転送・保存コストが高くなります。',
          '映像解析は固定クラス検出からオープンボキャブラリーVLM検索へ移行しています——事前学習されたクラスリストと照合するのではなく、平易な言葉でイベントを記述して検索します。',
          'カメラ用シリコン：Hailo-10HとHailo-15は5W未満のカメラ内蔵GenAIを狙い、Ambarella Nシリーズ（CES 2026で発表）はマルチセンサー認識を備えた8KエッジAIビジョンSoCを追加しました。',
          'エッジアプライアンス（NVIDIA Jetson Orin/Thor）は多数のカメラフィードを現地で集約します。Jetson Thorは最大32のMIPI CSI-2カメラ入力に対応します。',
          'ドローンは機体上で演算を実行します。Qualcomm QRB5165をベースとしたModalAI VOXL 2は、オートパイロット、GPSフリー視覚慣性オドメトリ、推論を約16gのモジュールに統合しています。',
          '実際の導入の多くはハイブリッドです——軽量な固定クラス検出器が常時稼働し、VLMはトリガーされたクリップのみを処理し、すべてのフレームは処理しません。',
          'VLMは固定クラス検出を置き換えるものではありません——連続的なフレーム単位のトリアージを続ける検出器の上に、オープンボキャブラリー検索を追加するものです。',
        ],
      },
      'bandwidth-economics': {
        id: 'bandwidth-economics',
        title: 'プライバシーが話題になる前に、なぜ映像AIはエッジに移るのか？',
        content: [
          '**帯域幅と物理的な通信リンクの制約が、カメラ・ドローンの推論をオンデバイスに移す主な理由です——経済的な議論がプライバシーの議論より先に来ます。** 15〜30fpsで連続ストリーミングする4Kカメラは持続的なビットレートを生成し、複数カメラを持つ拠点と30日間の保存期間にわたって、カメラ内蔵またはエッジアプライアンスアクセラレーターの一回限りのコストよりも早く転送・保存コストを積み上げます。このページ下部の計算機で、ご自身のカメラ台数と保存期間についてこの計算を実行できます。',
          'ドローンは逆方向から同じ制約に直面します。安く移動させるにはデータが多すぎるのではなく、頼りにできる信頼性の高いリンクが少なすぎるのです。運用距離にあるドローンは断続的で低帯域、時に妨害を受ける可能性のある無線リンクを持っています——ドローンが見たものを解釈するために常時クラウド接続に依存するミッションは、GPS妨害や目視外飛行時など、機体が自律的に行動する必要があるまさにその瞬間に機能しなくなります。',
          'これは、このサイトの既存のローカルLLMコンテンツが消費者向け・デスクトップAIで通常使うプライバシー優先の論法とは異なる切り口です。カメラとドローンの場合、購入者の最初の質問は「これだけの映像を動かす余裕があるか、リンクが安定していると信頼できるか」です——プライバシーとデータ所在地は現実的な副次的利益であり、このアーキテクチャが存在する理由そのものではありません。',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: '映像AIがオンデバイスに移るのは、転送・保存コストと信頼性の低い無線リンクが、プライバシーが要因になる前からクラウド依存の推論を非現実的にするためです。' },
          { type: 'plain-terms', text: '各カメラの映像をサーバーに移すにはお金がかかり、安定したリンクが必要です。撮影された場所で処理すれば両方の問題を回避できます。' },
        ],
      },
      architectures: {
        id: 'architectures',
        title: '推論はカメラ内蔵・エッジアプライアンス・クラウドのどれで実行すべきか？',
        content: [
          '**現在、カメラ映像AIには3つのアーキテクチャがあり、実運用の多くは少なくとも2つを組み合わせています。** 適切な選択は、拠点あたりのカメラ台数、保存要件、ハードウェア予算がユニット単価をどれだけ吸収できるかによって決まります。',
          '**カメラ内蔵推論**はアクセラレーターをカメラ自体に組み込みます——Hailo-10HとHailo-15はまさにこの5W未満の設計点を狙っています。各カメラが自身で判断する必要がある場合（動体検知録画、デバイス上での改ざん検知）、かつカメラの部品表が1台あたり1チップを吸収できる場合に使用します。',
          '**現地のエッジアプライアンス**はNVIDIA Jetson OrinまたはJetson Thorを実行する1台の機器に多数のカメラフィードを集約します。1拠点のカメラ台数が個別に装備するには多すぎる場合に使用します——Jetson Thorが最大32のMIPI CSI-2カメラ入力に対応することは、このプラットフォームがまさにこのマルチカメラ集約の役割を意図していることを示す強いシグナルであり、単一ストリーム推論向けではありません。',
          '**クラウド処理**は、リアルタイム要件がなく、クリップ単位のレイテンシよりも数か月にわたる全アーカイブの遡及検索が重要で、少数のストリームの帯域幅コストが許容できる、カメラ台数の少ない拠点に依然として適しています。',
          '実際には、この記事で後述する導入の多くはハイブリッドです。固定クラス検出はカメラ内蔵またはエッジアプライアンスで常時稼働し、クラウドストレージが遡及検索用のアーカイブを保持し、VLM推論はより低コストな検出器がすでにフラグを立てたクリップに対してのみ実行されます。',
        ],
      },
      'detection-to-description': {
        id: 'detection-to-description',
        title: '映像解析はどのように検出から記述へ移行しているのか？',
        content: [
          '**映像解析は固定クラスの物体検出からオープンボキャブラリーVLM検索へと移行しています——この市場における最新の変化です。** 固定クラス検出器は「この画像に人物、車両、あるいは約80の事前学習済みCOCOカテゴリのいずれかがあるか？」に答えます。オープンボキャブラリーVLMは「積み降ろし場付近に誰かがバッグを置いていったクリップを見つけて」といった記述されたクエリに、固定クラス検出器が一度もカテゴリとして認識するよう訓練されていない映像に対して答えます。',
          '**VLMは固定クラス検出器を置き換えるのではなく、その上で機能します。** ビジョン言語モデルは5W未満の電力予算内でストリームあたり毎秒30フレームでは動作しません。完全なVLM推論の演算・レイテンシコストは、その電力エンベロープで全フレームを継続処理するには高すぎます。代わりに、固定クラス検出器は動体・存在・基本分類といった継続的で低電力なトリアージ作業を続け、フラグが立てられたクリップのみがオープンボキャブラリーでの記述や検索のためにVLMへ渡されます。',
          'この二段構えの設計こそ、Hailo-10Hのようなカメラ内蔵シリコンが全フレームVLMプロセッサではなく「エッジのGenAI」アクセラレーターと呼ばれる理由です。このチップは継続的な軽量検出に加え、トリガーされた断続的なVLM推論向けにサイズ設計されており、全フレームレートでビジョン言語モデルを動かすためではありません。',
        ],
        items: [
          '固定クラス検出：継続的、低電力、「これはN個の事前学習済みカテゴリのどれか？」に答える',
          'オープンボキャブラリーVLM検索：トリガー式、電力消費が高い、特定のクリップに対する自然言語記述に答える',
          '両者は競合するのではなく補完し合う——検出器がVLMに何を見せるかを決め、その逆ではない',
          'デスクトップ・サーバー向けVLM構成（LLaVA、Qwen3-VLなど）は、このトリガー式クリップ解析に使われるのと同じモデルファミリーを共有しています——組み込み導入を評価する前に[下記のデスクトップVLM比較](#related-reading)を参照してください',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'オープンボキャブラリーVLM検索は、固定クラス検出器が一度もカテゴリとして認識するよう訓練されていない映像から記述されたイベントを見つけますが、全フレームではなくトリガーされたクリップに対してのみ動作します。' },
          { type: 'plain-terms', text: '従来の方法：「人物・車・犬に一致するものすべてにフラグを立てる」。新しい方法：「積み降ろし場でバッグを置いていったクリップを見つけて」——安価な検出器がクリップにすでにフラグを立てた後、自分の言葉で。' },
        ],
      },
      'bandwidth-calculator': {
        id: 'bandwidth-calculator',
        title: 'カメラ拠点に実際に必要な帯域幅と保存容量はどれくらいか？',
        content: [
          '**以下にカメラ台数、解像度、フレームレート、保存期間を入力すると、継続的な帯域幅と保存コストを見積もれます。** カメラ内蔵・エッジアプライアンス・クラウドのアーキテクチャを選ぶ前にご利用ください——得られた数字が議論をそのまま決着させることが多いです。',
        ],
        component: 'EdgeVideoBandwidthCalculator',
      },
      'evaluation-steps': {
        id: 'evaluation-steps',
        title: 'カメラまたはドローンのVLM導入をどう評価するか？',
        content: [
          '**6つのチェックが、現場で機能する導入とうまくいかない導入を分けます。** 特定のシリコンプラットフォームに決める前に、この順序で実施してください。',
        ],
        numberedItems: [
          { title: 'ストリームではなくトリガーを定義する', whyItMatters: 'ハードウェアを選ぶ前に、VLM推論を発動させるイベント（動体、固定クラス検出器のアラーム、スケジュールされた間隔）を決めてください——すべてのストリームの全フレームに対してVLMを実行することは、2026年時点で存在する電力やコストの予算ではありません。' },
          { title: 'シリコンを選ぶ前に通信リンクの予算を測定する', whyItMatters: 'ドローンの場合、演算プラットフォームを選ぶ前に、運用距離での利用可能なアップリンク帯域幅と最悪ケースのレイテンシを測定してください——演算チップではなく機体の無線リンクが通常、拘束条件になります。' },
          { title: '検出と記述を別の段階として維持する', whyItMatters: '軽量な固定クラス検出器を常時稼働させ、フラグが立てられたクリップのみをVLMに送ってください——これがVLM推論をカメラやドローンの電力予算に収める唯一の方法です。' },
          { title: '電力予算を物理的な筐体に合わせる', whyItMatters: 'ファンレスのカメラ筐体は熱設計予算を約5Wに制限します。ドローンのペイロードは電力消費だけでなく重量と飛行時間のトレードオフによって制限されます——シリコンではなく筐体に合わせて設計してください。' },
          { title: 'ミッションがGPSまたは指令リンクを失う可能性がある場合、GPSフリー運用を検証する', whyItMatters: '視覚慣性オドメトリ（VIO）は、目視外飛行や妨害を受けた電磁環境で頼る前に、機能すると仮定するのではなく具体的にテストする必要があります。' },
          { title: 'スケールする前に1拠点または1機体でパイロット運用する', whyItMatters: '艦隊全体への展開に予算を投じる前に、単一の導入で誤検知率、クエリレイテンシ、バッテリー・熱の挙動を検証してください。' },
        ],
      },
      'drones-onboard': {
        id: 'drones-onboard',
        title: 'なぜドローンは映像をストリーミングせず機上で処理するのか？',
        content: [
          '**ドローンが演算を機体上に移すのは、通信リンクの余裕、レイテンシ、GPSフリーナビゲーションという3つの理由からであり、機上演算が安いからではありません。** ドローンの無線リンクは距離、地形、干渉によって、固定カメラのイーサネットケーブルでは決して起こらないような形で劣化します。映像を解釈するために常時クラウド接続に依存するミッションは、機体が操縦者から最も離れ、自律性を最も必要とするまさにその瞬間に失敗します。',
          '**Qualcomm QRB5165を中核に構築されたModalAIのVOXL 2は、機体上演算設計のリファレンスプラットフォームです。** PX4に対応し、衛星測位が利用できない、または妨害されている場合のナビゲーションのためにGPSフリー視覚慣性オドメトリ（VIO）をサポートし、オートパイロット、演算、ナビゲーションセンサーを約16グラムのオートパイロットクラスのモジュールにまとめています——ペイロードとバッテリーが同じ重量予算を奪い合うのに十分小さく、別電源とではありません。',
          '**重量と電力は、壁に固定されたカメラでは存在しない形で、機体上では厳格な制約です。** 機上演算の1グラムごとに、バッテリー容量、センサーペイロード、飛行時間に使えない1グラムがあります——ドローンプラットフォームは、現地のカメラ拠点がエッジアプライアンスを追加できるようには、単純にラックユニットを追加できません。',
        ],
        items: [
          '通信リンクの余裕：無線接続は距離、地形、干渉を受けたスペクトルによって、有線カメラインフラでは起こらない形で劣化する',
          'レイテンシ：ライブの判断（障害物回避、目標追跡）はクラウドサーバーへの往復を待てない',
          'GPSフリーナビゲーション：視覚慣性オドメトリにより、衛星測位が利用できないときも機体は位置と方位を維持できる',
          '重量予算：約16gクラスのオートパイロット演算モジュールは、固定カメラの筐体とは異なり、バッテリーとペイロードと直接競合する',
        ],
      },
      'commercial-applications': {
        id: 'commercial-applications',
        title: 'カメラ・ドローンVLMは既にどこで商用利用されているか？',
        content: [
          '**4つの商用カテゴリが今日出荷されている導入の大半を占めます：インフラ・公益設備点検、精密農業、測量・マッピング、そして公共安全です。**',
        ],
        items: [
          'インフラ・公益設備点検：機上演算を搭載したドローンが送電線、パイプライン、携帯電話基地局を点検し、生の映像を確認のためにストリーミングすることなく目視可能な欠陥にフラグを立てる',
          '精密農業：機上ビジョンが圃場ごとに作物ストレス、雑草圧、灌漑問題を区別し、接続が弱い農村地域で常時クラウド接続に頼ることなく農場管理システムへ意思決定をフィードバックする',
          '測量・マッピング：写真測量・点検ドローンが機上またはエッジアプライアンスで画像を処理し、飛行ごとに転送・保存する必要のある生データ量を削減する',
          '公共安全：固定カメラネットワークは継続的な固定クラス検出とトリガー式VLM検索を組み合わせる——例えば、何時間もの映像を手作業で確認する代わりに、記述されたインシデントをアーカイブから取り出す',
        ],
        callouts: [
          { type: 'note', text: '軍事プログラムもこのシリコン市場を形作っています。Shield AIの自律ソフトウェアHivemindは米空軍のCollaborative Combat Aircraft（CCA）YFQ-44Aプログラムに選定され、Andurilのソフトウェア Latticeは同じ機体でテストされました。この自律性スタックに対するプログラムレベルの需要は、エッジ推論シリコンへの投資を後押しする要因の一つですが、防衛プログラムの認証経路、購入者、要件は上記の商用導入とは根本的に異なり、本ガイドの対象範囲外です。' },
        ],
      },
      'platform-comparison': {
        id: 'platform-comparison',
        title: '比較：カメラとドローン向けの演算プラットフォーム',
        content: [
          'Jetson OrinとJetson Thorの完全な仕様については[エッジシリコンガイド](/ja/local-llms/edge-ai-hardware-for-local-llms)を参照してください——この表は映像解析に最も関連するカメラ・ドローン特化型プラットフォームに絞っています。',
        ],
        columns: ['プラットフォーム', '電力予算', '最適な用途', '状況'],
        rows: [
          { プラットフォーム: 'Hailo-10H / Hailo-15', 電力予算: '5W未満', 最適な用途: 'カメラ内蔵GenAI、VLMトリアージ', 状況: 'ISC West 2026で発表' },
          { プラットフォーム: 'Ambarella Nシリーズ', 電力予算: 'エッジAIビジョンSoC', 最適な用途: '8Kマルチセンサー認識', 状況: 'CES 2026で発表' },
          { プラットフォーム: 'NVIDIA Jetson Orin / Thor', 電力予算: '15〜130Wクラス', 最適な用途: 'マルチカメラエッジアプライアンス', 状況: 'Thor：最大32台のMIPIカメラ' },
          { プラットフォーム: 'Qualcomm QRB5165（VOXL 2）', 電力予算: 'ドローンクラスモジュール', 最適な用途: 'オートパイロット＋VIO＋推論', 状況: 'PX4対応、約16g' },
        ],
      },
      'buying-categories': {
        id: 'buying-categories',
        title: '導入に必要なハードウェアは何か？',
        content: [
          '**4つのハードウェアカテゴリがカメラ・ドローンVLMプロジェクトの大半をカバーします。価格は頻繁に変わるため、現在の販売店・ディストリビューターの取り扱いを確認してください。**',
        ],
        items: [
          'カメラモジュールと開発キット：エッジアクセラレーターと組み合わせたリファレンスカメラボードで、独自のカメラ設計に踏み切る前にカメラ内蔵パイプラインを試作するために使用',
          'Hailo M.2アクセラレーターモジュール：M.2スロット経由で既存のカメラや組み込み演算ボードに5W未満のAI推論を追加し、カメラのメインボードを再設計する必要がない',
          'エッジ映像アプライアンス：NVIDIA Jetson OrinとJetson Thorの開発キットで、現地アプライアンスのフリートを展開する前に上記のマルチカメラ集約アーキテクチャを試作するために使用',
          'ドローン開発プラットフォーム：ModalAI VOXL 2開発キットで、量産機体に統合する前にPX4ベースのオートパイロットと機上推論パイプラインを試作するために使用',
        ],
      },
      'locallens-limits': {
        id: 'locallens-limits',
        title: 'オンデバイスではまだ何ができないのか？',
        content: [
          '**3つの能力は2026年時点でクラウドレベルまたは研究段階にとどまっており、今年中にカメラ・ドローンクラスのアクセラレーターがそれを変えることはありません。**',
        ],
        items: [
          '長時間の映像理解：トリガー式のクリップ解析ではなく、数時間に及ぶ録画全体を一度に推論することは、エッジアクセラレーターのメモリ・演算予算を依然として超える',
          '大規模なカメラ横断の再識別：記述された被写体を多数のカメラフィードや拠点にわたって確実に追跡することは、マルチカメラのアーカイブ全体にアクセスできる中央集権的システムに依然として適したワークロードのままである',
          '数時間分の映像にわたる大規模コンテキスト：特定のフラグが立てられたクリップではなく丸一日分の録画にわたって推論する必要があるオープンボキャブラリークエリは、エッジアクセラレーターの電力予算が支えるより多くのコンテキストと演算を依然として必要とする',
        ],
      },
      jurisdiction: {
        id: 'jurisdiction',
        title: 'どのような管轄区域・調達ルールが適用されるか？',
        content: [
          '**日本では、国土交通省（MLIT）の航空局が無人航空機情報基盤システム（DIPS）を通じてドローンの登録・飛行カテゴリを管理しており、経済産業省（METI）はAIガバナンスに関する指針を通じて企業のAI導入に関する文脈を提供しています。** 日本でカメラ・ドローンプロジェクトを行う場合、DIPSへの機体登録とリスクに応じた飛行カテゴリの区分は形式的な手続きではありません——それによって、追加の許可なく運用できる自律機能（自動検知・対応ロジックなど）が決まります。システムインテグレーターは、ハードウェアと自律機能を仕様化する前に、想定する飛行カテゴリと必要な許可・承認をMLITの枠組みで確認すべきです。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'なぜカメラ・ドローンのAIシステムはクラウドではなくオンデバイスで推論を実行するのですか？',
            a: 'プライバシーではなく帯域幅と通信リンクの制約が主な理由です。連続的な4Kカメラストリームは、保存期間全体で見るとローカルで処理するアクセラレーターより転送・保存コストが高く、運用距離にあるドローンはクラウド依存を許容できない断続的で時に妨害を受ける無線リンクを持っています。',
          },
          {
            q: '固定クラス検出とオープンボキャブラリーVLM検索の違いは何ですか？',
            a: '固定クラス検出器は、画像に事前学習済みカテゴリセット（典型的なCOCO学習モデルで約80）のいずれかが含まれるかに答えます。オープンボキャブラリーVLMは「積み降ろし場付近に誰かがバッグを置いていったクリップを見つけて」といった記述されたクエリに、固定クラス検出器が一度もカテゴリとして認識するよう訓練されていない内容に対して答えます。',
          },
          {
            q: 'ビジョン言語モデルは5W未満のカメラアクセラレーターでリアルタイムに動作しますか？',
            a: '全フレームレートでは動作しません。VLMは5W未満の電力予算内でストリームあたり毎秒30フレームでは動作しません。実際には軽量な固定クラス検出器が低電力で常時稼働し、フラグが立てられたクリップのみがオープンボキャブラリー記述のためにVLMへ渡されます——VLMはトリガーされたクリップに対して動作し、全フレームに対してではありません。',
          },
          {
            q: '商用ドローンは機上AIにどの演算プラットフォームを使っていますか？',
            a: 'Qualcomm QRB5165をベースとしたModalAIのVOXL 2は広く使われるリファレンスプラットフォームです。PX4に対応し、GPSフリー視覚慣性オドメトリによるナビゲーションをサポートし、オートパイロット、演算、ナビゲーションセンサーを約16グラムのモジュールにまとめています。',
          },
          {
            q: '単一の4Kセキュリティカメラは実際にどれだけの帯域幅を必要としますか？',
            a: 'フレームレート、シーンの複雑さ、コーデックによって異なります——単一の目安の数字に頼るのではなく、このページの[帯域幅計算機](#bandwidth-calculator)を使って、ご自身の具体的なカメラ台数、解像度、フレームレート、保存期間について継続的な帯域幅と保存コストを見積もってください。',
          },
          {
            q: '新しいカメラ設計にはHailo-10HとAmbarella Nシリーズのどちらを選ぶべきですか？',
            a: '両者は重なりつつも異なる位置を狙っています。Hailo-10HとHailo-15は5W未満のカメラ内蔵GenAI推論に焦点を当てており、Ambarella Nシリーズ（CES 2026で発表）はマルチセンサー認識を備えた8KエッジAIビジョンSoCとして位置づけられています。適切な選択は、目標解像度、電力予算、同じチップ内でのマルチセンサー融合が必要かどうかによって決まります。',
          },
          {
            q: 'なぜドローンにはGPSフリーナビゲーションが必要で、VOXL 2はそれをどう扱いますか？',
            a: 'GPS信号は妨害、なりすまし、あるいは屋内や紛争地域で単に利用できないことがあります。VOXL 2は視覚慣性オドメトリ（VIO）をサポートしており、カメラと慣性センサーのデータを融合して衛星測位に頼ることなく位置と方位を推定します。',
          },
          {
            q: '日本国内での商用ドローン点検にはどのMLIT飛行カテゴリが適用されますか？',
            a: '運用内容によります。国土交通省（MLIT）はDIPSを通じて機体登録とリスクに応じた飛行カテゴリを管理しており、インフラ・産業設備点検には多くの場合、特定飛行としての許可・承認が必要です。システムインテグレーターは、ハードウェアと自律機能を仕様化する前に、該当するカテゴリと必要な許可をMLITに確認すべきです。',
          },
          {
            q: 'エッジアプライアンスは必要ですか、それとも各カメラが単独で推論を実行できますか？',
            a: '拠点あたりのカメラ台数によります。少数のカメラであれば、それぞれが独立してカメラ内蔵推論を実行できます（Hailo-10H/15クラスのチップ）。カメラ台数の多い拠点は通常、フィードを中央で集約する現地のエッジアプライアンス（NVIDIA Jetson OrinまたはThor）の恩恵を受けます——Jetson Thorが1台で最大32のMIPI CSI-2カメラ入力に対応することは、意図されたマルチカメラの役割を示す強いシグナルです。',
          },
          {
            q: 'オンデバイスVLMは映像解析においてまだ何ができませんか？',
            a: '3つの能力は2026年時点でクラウドレベルまたは研究段階にとどまっています：数時間に及ぶ録画全体を一度に推論する長時間の推論、多数のカメラにわたる被写体の大規模な再識別、そして特定のフラグが立てられたクリップではなく丸一日分の録画にわたるコンテキストを必要とするオープンボキャブラリークエリです。',
          },
        ],
      },
      'related-reading': {
        id: 'related-reading',
        title: '関連記事',
        content: [
          'デスクトップVLMの基礎については[Best Local Vision Models 2026: LLaVA, Qwen3-VL & Ollama](/ja/power-local-llm/local-vision-models-llava-ollama-2026)をご覧いただき、組み込み・カメラ導入についてはこちらに戻ってきてください——あちらのガイドはデスクトップ・サーバー向けビジョン言語モデルのセットアップを扱い、本記事は電力、帯域幅、機体重量というカメラ・ドローン特有の制約を扱います。',
        ],
        items: [
          '[ローカルLLM向けエッジAIハードウェア](/ja/local-llms/edge-ai-hardware-for-local-llms) — 上記の比較表で参照したJetson OrinおよびJetson Thorプラットフォームの完全な仕様',
          '[ロボット向けVLAモデル：ローカル推論](/ja/local-llms/vla-models-robots-local-inference) — 映像理解ではなくロボットの行動モデルに適用された、同じシリコン制約に関する姉妹記事',
          '[ローカルLLMセキュリティ＆プライバシーチェックリスト](/ja/local-llms/local-llm-security-privacy-checklist) — 映像解析がオンデバイスに移った後も引き続き適用されるデータ取り扱いの考慮事項',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'カメラとドローンのVLM 2026：オンデバイス映像理解の実践',
      description:
        'カメラとドローンがVLM推論をオンデバイスに移すのはプライバシーではなく帯域幅のため。Hailo、Ambarella、Jetson、VOXL 2を2026年の実運用向けに比較。',
      datePublished: '2026-09-02',
      dateModified: '2026-09-02',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
        sameAs: 'https://www.linkedin.com/in/hanskuepper/',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      inLanguage: 'ja',
      url: 'https://www.promptquorum.com/ja/local-llms/vlm-video-analytics-drones-edge',
      image: 'https://www.promptquorum.com/images/vlm-video-analytics-drones-edge-hero-ja.webp',
      educationalLevel: 'Advanced',
      proficiencyLevel: 'Advanced',
      audience: {
        '@type': 'Audience',
        audienceType: 'システムインテグレーター、映像セキュリティアーキテクト、商用ドローン運用責任者',
      },
      about: [
        { '@type': 'Thing', name: 'ビジョン言語モデル' },
        { '@type': 'Thing', name: 'エッジAI' },
        { '@type': 'Thing', name: '映像解析' },
        { '@type': 'Thing', name: 'ドローンの自律性' },
      ],
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways'],
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/ja/local-llms/vlm-video-analytics-drones-edge',
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-02',
    current_hardware_mentioned: ['Hailo-10H', 'Hailo-15', 'Ambarella N-series', 'NVIDIA Jetson Orin', 'NVIDIA Jetson Thor', 'Qualcomm QRB5165', 'ModalAI VOXL 2'],
    theme: 'Cameras & Drones',
    heroImage: '/images/vlm-video-analytics-drones-edge-hero-zh.webp',
    title: '摄像头与无人机上的VLM 2026：设备端视频理解',
    seoTitle: '摄像头与无人机VLM 2026：设备端视频AI',
    intro:
      '摄像头和无人机面临同一个决定视频AI在哪里运行的约束：带宽而非算力，才是推理迁移到设备端的原因。本指南比较了用于视频分析的摄像头内置、边缘一体机和云端三种架构，解释了从固定类别检测向开放词汇VLM搜索的转变，并介绍了当下摄像头与无人机机身上实际部署的计算平台。',
    metaDescription:
      '摄像头和无人机把VLM推理搬到设备端是因为带宽，而非隐私。本文对比Hailo、Ambarella、Jetson与VOXL 2在2026年的实际部署。',
    twitterDescription:
      '视频AI为何迁移到设备端：带宽经济学胜过隐私。对比Hailo-10H、Ambarella N系列、Jetson Thor与VOXL 2在摄像头和无人机上的应用。',
    publishDate: '2026-09-02',
    dateModified: '2026-09-02',
    readTime: '阅读约13分钟',
    educationalLevel: 'Advanced',
    audience: '系统集成商、视频安防架构师与商用无人机运营负责人',
    primaryTerm: '设备端视频理解',
    targetKeywords: [
      '设备端视频分析 2026',
      'VLM 摄像头推理 边缘',
      '无人机机载AI算力',
      '开放词汇视频搜索',
      'Hailo-10H 摄像头AI',
      '边缘视频带宽成本',
      'VOXL 2 无人机自驾仪 AI',
    ],
    leadAnswerBlock:
      '**摄像头和无人机把推理搬到设备端，是因为带宽和链路限制——而非隐私——使得传输原始视频不切实际。** 一路持续的4K安防视频流，在其保留期内产生的传输和存储成本，超过了在摄像头本地处理它的加速器成本。处于作业距离的无人机面对的是间歇、低带宽、有时还受干扰的无线链路，机载算力是它对所见做出反应的唯一方式。这两种情况都指向同一个转变：从固定类别的目标检测，转向能够找到被描述事件、而非比对固定类别列表的开放词汇VLM搜索。',
    quickAnswerTop: {
      zh: {
        question: '为什么摄像头和无人机在设备端而非云端运行VLM？',
        answer:
          '是带宽和链路限制迫使如此，而非隐私：一路持续的4K安防视频流的传输和存储成本，高于摄像头内置加速器的成本；处于作业距离的无人机拥有间歇、有时受干扰的无线链路，无法承受对云端的依赖。像Hailo-10H这样的摄像头端芯片功耗低于5W；像ModalAI VOXL 2（基于Qualcomm QRB5165）这样的无人机平台，把自驾仪、导航和推理集成在约16克的模块中。',
        bullets: [
          'Hailo-10H / Hailo-15：在ISC West 2026展示的功耗低于5W的摄像头内置生成式AI加速器',
          'Ambarella N系列：CES 2026发布的8K边缘AI视觉SoC',
          'NVIDIA Jetson Thor：最多支持32路MIPI CSI-2摄像头输入',
          'ModalAI VOXL 2（Qualcomm QRB5165）：约16克的无人机自驾仪＋算力＋无GPS视觉惯性里程计',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: '核心要点', anchor: '#key-takeaways' },
      { label: '为什么带宽把视频AI推向边缘', anchor: '#bandwidth-economics' },
      { label: '摄像头内置、边缘一体机还是云端？', anchor: '#architectures' },
      { label: '从检测到描述的转变', anchor: '#detection-to-description' },
      { label: '估算你的带宽与存储成本', anchor: '#bandwidth-calculator' },
      { label: '如何评估一次部署', anchor: '#evaluation-steps' },
      { label: '无人机为何机载处理视频', anchor: '#drones-onboard' },
      { label: '已经商用的应用场景', anchor: '#commercial-applications' },
      { label: '平台对比', anchor: '#platform-comparison' },
      { label: '该采购哪些硬件', anchor: '#buying-categories' },
      { label: '设备端目前还做不到的事', anchor: '#locallens-limits' },
      { label: '司法管辖与采购规则', anchor: '#jurisdiction' },
      { label: '常见问题', anchor: '#faq' },
      { label: '延伸阅读', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '带宽和链路限制，而非隐私，是摄像头与无人机推理迁移到设备端的原因：一路持续的4K视频流的传输和存储成本，高于在本地处理它的芯片。',
          '视频分析正从固定类别检测转向开放词汇VLM搜索——用自然语言描述事件，而不是与预训练的类别列表做匹配。',
          '摄像头芯片：Hailo-10H与Hailo-15瞄准低于5W的摄像头内置生成式AI；Ambarella N系列（CES 2026发布）增加了具备多传感器感知能力的8K边缘AI视觉SoC。',
          '边缘一体机（NVIDIA Jetson Orin/Thor）在本地聚合大量摄像头视频流；Jetson Thor最多支持32路MIPI CSI-2摄像头输入。',
          '无人机在机身上运行算力：基于Qualcomm QRB5165的ModalAI VOXL 2，把自驾仪、无GPS视觉惯性里程计和推理集成在约16克的模块中。',
          '大多数实际部署都是混合式——一个轻量的固定类别检测器持续运行；VLM只处理被触发的片段，而非每一帧。',
          'VLM并不取代固定类别检测——它是在持续做逐帧初筛工作的检测器之上，增加了开放词汇搜索能力。',
        ],
      },
      'bandwidth-economics': {
        id: 'bandwidth-economics',
        title: '为什么视频AI在隐私问题被提起之前就已经迁移到边缘？',
        content: [
          '**带宽和物理链路限制，是摄像头与无人机推理迁移到设备端的主要原因——经济账先于隐私论证出现。** 一台以15–30 fps持续推流的4K摄像头会产生持续的码率，在一个多摄像头站点和30天保留期内累积起来，其传输和存储成本比摄像头内置或边缘一体机加速器的一次性成本增长得更快。本页下方的计算器可以让你针对自己的摄像头数量和保留期做这项测算。',
          '无人机则从相反的方向面对同样的约束：不是数据太多难以廉价搬运,而是可靠链路太少难以依赖。处于作业距离的无人机拥有间歇、低带宽、有时受干扰的无线链路——一项依赖持续云端连接来解读无人机所见的任务，恰恰会在飞行器最需要自主行动的时刻失效，例如GPS受干扰或超出目视距离时。',
          '这与本站现有本地LLM内容在消费级和桌面AI场景中通常采用的隐私优先论证不同。对摄像头和无人机而言，买家的第一个问题是"我能否负担得起搬运这么多视频，能否指望链路保持稳定"——隐私和数据驻留是真实的次要收益，而不是这种架构存在的理由。',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: '视频AI迁移到设备端，是因为传输和存储成本，加上不可靠的无线链路，在隐私成为因素之前就已经让依赖云端的推理变得不切实际。' },
          { type: 'plain-terms', text: '把每台摄像头的视频搬到服务器要花钱，还需要一条保持稳定的链路；在拍摄的地方直接处理则能同时避开这两个问题。' },
        ],
      },
      architectures: {
        id: 'architectures',
        title: '应该在摄像头内置、边缘一体机还是云端运行推理？',
        content: [
          '**目前有三种架构处理摄像头视频AI，大多数生产环境部署至少结合了其中两种。** 正确的选择取决于每个站点的摄像头数量、保留要求，以及硬件预算能承受多少单机成本。',
          '**摄像头内置推理**把加速器直接嵌入摄像头——Hailo-10H和Hailo-15正是瞄准这个功耗低于5W的设计点。当每台摄像头都需要自行做出判断（运动触发录像、设备端防拆检测），且摄像头的物料清单能承受每台一颗芯片时，适合采用这种方式。',
          '**本地边缘一体机**把大量摄像头视频流聚合到一台运行NVIDIA Jetson Orin或Jetson Thor的设备中。当一个站点的摄像头数量多到不适合逐一配置时，适合采用这种方式——Jetson Thor支持最多32路MIPI CSI-2摄像头输入，这是一个强烈的信号，表明该平台正是为这种多摄像头聚合角色而设计，而非单路推理。',
          '**云端处理**仍然适合摄像头数量少、没有实时要求的站点，那里对数月完整档案的回溯搜索比单个片段的延迟更重要，且少量视频流的带宽成本可以接受。',
          '实际上，本文后面描述的大多数部署都是混合式的：固定类别检测在摄像头或边缘一体机上持续运行，云端存储保留一份用于回溯搜索的档案，而VLM推理只针对成本更低的检测器已经标记的片段运行。',
        ],
      },
      'detection-to-description': {
        id: 'detection-to-description',
        title: '视频分析如何从检测转向描述？',
        content: [
          '**视频分析正从固定类别的目标检测转向开放词汇VLM搜索——这是该市场最新的转变。** 固定类别检测器回答的是"这一帧里有没有人、车辆，或者约80个预训练COCO类别中的某一个？"开放词汇VLM回答的是一个被描述的查询——"找到有人在装卸区附近放下一个包的片段"——针对的是固定类别检测器从未被训练识别为某个类别的画面。',
          '**VLM并不取代固定类别检测器——它是在其之上工作的。** 视觉语言模型无法在低于5W的功耗预算内以每流每秒30帧的速度运行；完整VLM推理的算力和延迟成本，对于该功耗范围内的持续逐帧处理来说太高了。取而代之的是，固定类别检测器继续承担运动、存在、基础分类这类持续、低功耗的初筛工作，只有被它标记的片段才会被传给VLM进行开放词汇的描述或搜索。',
          '这种两级设计正是为什么像Hailo-10H这样的摄像头内置芯片被描述为"边缘生成式AI"加速器，而不是全帧VLM处理器：这颗芯片的规格是为在持续轻量检测之上运行触发式、间歇性的VLM推理而设计的，而不是以全帧率运行视觉语言模型。',
        ],
        items: [
          '固定类别检测：持续运行、低功耗，回答"这是N个预训练类别中的哪一个？"',
          '开放词汇VLM搜索：触发式运行、功耗更高，针对特定片段回答自然语言描述',
          '两者是互补关系，而非竞争关系——由检测器决定给VLM看什么，而不是反过来',
          '桌面和服务器级VLM配置（LLaVA、Qwen3-VL等类似模型）与这种触发式片段分析共享相同的模型系列——评估嵌入式部署之前，请参阅[下方的桌面VLM对比](#related-reading)',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: '开放词汇VLM搜索能在固定类别检测器从未学过识别为某个类别的画面中找到被描述的事件，但它只在被触发的片段上运行，而非每一帧。' },
          { type: 'plain-terms', text: '旧方法："标记所有匹配人/车/狗的内容"。新方法："找到有人在装卸区放下包的片段"——用自己的话描述，而且是在成本更低的检测器已经标记该片段之后。' },
        ],
      },
      'bandwidth-calculator': {
        id: 'bandwidth-calculator',
        title: '你的摄像头站点实际需要多少带宽和存储？',
        content: [
          '**在下方输入摄像头数量、分辨率、帧率和保留期，即可估算持续带宽和存储成本。** 请在摄像头内置、边缘一体机或云端架构之间做选择之前使用它——得到的数字通常能自行决定这场争论的结果。',
        ],
        component: 'EdgeVideoBandwidthCalculator',
      },
      'evaluation-steps': {
        id: 'evaluation-steps',
        title: '如何评估摄像头或无人机的VLM部署？',
        content: [
          '**六项检查能区分一次在现场能正常运作的部署与一次会失败的部署。** 在确定具体的芯片平台之前，请按此顺序执行。',
        ],
        numberedItems: [
          { title: '先定义触发条件，而非视频流本身', whyItMatters: '在选择硬件之前，先决定什么事件会触发VLM推理（运动、固定类别检测器的报警、预定的时间间隔）——让VLM针对每路视频流的每一帧运行，在2026年不是任何现实的功耗或成本预算所能承受的。' },
          { title: '在选择芯片之前先测量链路预算', whyItMatters: '对于无人机，在选择计算平台之前，先测量作业距离处可用的上行带宽和最坏情况下的延迟——通常是飞行器的无线链路，而不是计算芯片，构成了约束条件。' },
          { title: '把检测和描述作为分离的两个阶段', whyItMatters: '让轻量的固定类别检测器持续运行，只把被标记的片段发送给VLM——这是让VLM推理适配摄像头或无人机功耗预算的唯一方式。' },
          { title: '让功耗预算与物理外壳相匹配', whyItMatters: '无风扇的摄像头外壳把热设计预算限制在约5W；无人机载荷的限制来自重量和续航之间的取舍，而不仅仅是功耗——应该为外壳选择合适的芯片，而不是反过来。' },
          { title: '如果任务可能失去GPS或指挥链路，就验证无GPS运行能力', whyItMatters: '视觉惯性里程计（VIO）需要专门测试，而不能假设它能正常工作，之后才能在超出目视距离或电磁环境受干扰的情况下依赖它。' },
          { title: '在扩大规模之前，先在一个站点或一架飞行器上试点', whyItMatters: '在为整个机队规模的部署投入预算之前，先在单次部署中验证误报率、查询延迟以及电池/散热表现。' },
        ],
      },
      'drones-onboard': {
        id: 'drones-onboard',
        title: '无人机为什么在机载处理视频，而不是把它传输出去？',
        content: [
          '**无人机把算力搬到机身上有三个原因：链路余量、延迟和无GPS导航——而不是因为机载算力更便宜。** 无人机的无线链路会随距离、地形和干扰而劣化，这是固定摄像头的以太网线永远不会遇到的情况；一项依赖持续云端连接来解读视频的任务，恰恰会在飞行器离操作者最远、最需要自主能力的时刻失效。',
          '**基于Qualcomm QRB5165构建的ModalAI VOXL 2，是机身算力设计的参考平台。** 它兼容PX4，在卫星定位不可用或受干扰时支持无GPS视觉惯性里程计（VIO）导航，并把自驾仪、算力和导航传感器打包进一个约16克的自驾仪级模块——小到足以与载荷和电池争夺同一份重量预算，而不是与一个独立电源争夺空间。',
          '**重量和功耗在机身上是硬性约束，这一点与固定在墙上的摄像头完全不同。** 每一克机载算力，都是一克无法用于电池容量、传感器载荷或飞行续航的重量——无人机平台不能像本地摄像头站点添加边缘一体机那样，简单地加一台机架设备。',
        ],
        items: [
          '链路余量：无线连接会随距离、地形和受干扰的频谱而劣化，这是有线摄像头基础设施不会遇到的情况',
          '延迟：实时决策（避障、目标跟踪）无法等待与云端服务器的一次往返',
          '无GPS导航：视觉惯性里程计让飞行器在卫星定位不可用时仍能保持位置和航向',
          '重量预算：约16g级别的自驾仪算力模块直接与电池和载荷争夺重量，这与固定摄像头的外壳不同',
        ],
      },
      'commercial-applications': {
        id: 'commercial-applications',
        title: '摄像头与无人机VLM目前已在哪些领域商用？',
        content: [
          '**四个商用类别占据了当下大多数已投产部署：基础设施与公用事业巡检、精准农业、测绘、以及公共安全。**',
        ],
        items: [
          '基础设施与公用事业巡检：搭载机载算力的无人机巡检输电线路、管道和通信基站，在不将原始画面回传审核的情况下标记出可见缺陷',
          '精准农业：机载视觉逐地块区分作物胁迫、杂草压力和灌溉问题，把决策反馈给农场管理系统，无需在连接较弱的农村地区依赖持续的云端链路',
          '测绘：摄影测量和巡检无人机在机载或边缘一体机上处理影像，减少每次飞行需要传输和存储的原始数据量',
          '公共安全：固定摄像头网络将持续的固定类别检测与触发式VLM搜索结合起来——例如从档案中检索被描述的事件，而不是人工翻查数小时的画面',
        ],
        callouts: [
          { type: 'note', text: '军事项目也在塑造这一芯片市场。Shield AI的自主软件Hivemind被选定用于美国空军的YFQ-44A协同作战飞机（CCA）项目，Anduril的Lattice软件也曾在同一机身上测试。这种项目层面对自主系统栈的需求，是推动边缘推理芯片投资的因素之一，不过国防项目的认证路径、采购方和要求与上文所述的商用部署完全不同，也不在本指南的范围之内。' },
        ],
      },
      'platform-comparison': {
        id: 'platform-comparison',
        title: '对比：面向摄像头和无人机的计算平台',
        content: [
          '关于Jetson Orin和Jetson Thor的完整规格，请参阅[边缘芯片指南](/zh/local-llms/edge-ai-hardware-for-local-llms)——本表只聚焦于与视频分析最相关的摄像头和无人机专用平台。',
        ],
        columns: ['平台', '功耗预算', '最适合', '状态'],
        rows: [
          { 平台: 'Hailo-10H / Hailo-15', 功耗预算: '低于5W', 最适合: '摄像头内置生成式AI、VLM初筛', 状态: '于ISC West 2026展示' },
          { 平台: 'Ambarella N系列', 功耗预算: '边缘AI视觉SoC', 最适合: '8K多传感器感知', 状态: '于CES 2026发布' },
          { 平台: 'NVIDIA Jetson Orin / Thor', 功耗预算: '15–130W级别', 最适合: '多摄像头边缘一体机', 状态: 'Thor：最多32路MIPI摄像头' },
          { 平台: 'Qualcomm QRB5165（VOXL 2）', 功耗预算: '无人机级模块', 最适合: '自驾仪＋VIO＋推理', 状态: '兼容PX4，约16g' },
        ],
      },
      'buying-categories': {
        id: 'buying-categories',
        title: '起步需要哪些硬件？',
        content: [
          '**四类硬件涵盖了大多数摄像头和无人机VLM项目；由于价格变动频繁，请查看经销商和分销商的最新报价。**',
        ],
        items: [
          '摄像头模块与开发套件：参考摄像头板搭配边缘加速器，用于在投入定制摄像头设计之前，先验证一套摄像头内置流水线的原型',
          'Hailo M.2加速器模块：通过M.2插槽为现有摄像头或嵌入式计算板增加低于5W的AI推理能力，无需重新设计摄像头的主板',
          '边缘视频一体机：NVIDIA Jetson Orin和Jetson Thor开发套件，用于在部署本地一体机机队之前，先验证上文所述的多摄像头聚合架构原型',
          '无人机开发平台：ModalAI VOXL 2开发套件，用于在集成到量产机身之前，先验证基于PX4的自驾仪和机载推理流水线原型',
        ],
      },
      'locallens-limits': {
        id: 'locallens-limits',
        title: '设备端目前还做不到什么？',
        content: [
          '**截至2026年，有三项能力仍停留在云端级别或研究阶段，今年内没有任何摄像头或无人机级加速器会改变这一点。**',
        ],
        items: [
          '长时程视频理解：一次性推理数小时的完整录像，而非触发式的片段分析，仍然超出边缘加速器的内存和算力预算',
          '大规模跨摄像头再识别：在众多摄像头视频流和站点中可靠地追踪一个被描述的对象，仍然是更适合由能访问完整多摄像头档案的中心化系统承担的工作负载',
          '跨越数小时画面的大上下文：一个需要对完整一天的录像、而非某个被标记的特定片段进行推理的开放词汇查询，所需要的上下文和算力仍然超出边缘加速器的功耗预算所能支持的范围',
        ],
      },
      jurisdiction: {
        id: 'jurisdiction',
        title: '适用哪些司法管辖与采购规则？',
        content: [
          '**中国是无人机与机器人硬件的主要制造基地，并且正日益成为其中边缘芯片的主要来源之一。** 在这一背景下可以观察到一个总体趋势：面对对西方部分先进芯片的受限获取，行业内出现了转向国产NPU与更激进量化方案的动向，以在有限的芯片资源下维持设备端推理性能——但具体到某一供应商或产品的技术路线，仍应以其官方公开信息为准，本文不对此做出未经证实的具体断言。对于在中国大陆开展的摄像头或无人机项目，系统集成商应单独核实民用航空、数据安全等相关领域的现行监管要求，而不是依赖境外的监管框架。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '为什么摄像头和无人机AI系统在设备端而非云端运行推理？',
            a: '带宽和链路限制，而非隐私，是主要原因。一路持续的4K摄像头视频流，在其保留期内的传输和存储成本，高于在本地处理它的加速器成本；处于作业距离的无人机拥有间歇、有时受干扰的无线链路，无法承受对云端的依赖。',
          },
          {
            q: '固定类别检测和开放词汇VLM搜索有什么区别？',
            a: '固定类别检测器回答的是一帧画面是否包含一组预训练类别中的某一个（典型的COCO训练模型约有80个类别）。开放词汇VLM回答的是一个被描述的查询——例如"找到有人在装卸区附近放下一个包的片段"——针对的是固定类别检测器从未被训练识别为某个类别的内容。',
          },
          {
            q: '视觉语言模型能否在功耗低于5W的摄像头加速器上实时运行？',
            a: '无法以全帧率运行。VLM无法在低于5W的功耗预算内以每流每秒30帧的速度运行。实际做法是让轻量的固定类别检测器以低功耗持续运行，只有被它标记的片段才会传给VLM进行开放词汇描述——VLM在被触发的片段上运行，而非每一帧。',
          },
          {
            q: '商用无人机使用哪种计算平台来实现机载AI？',
            a: '基于Qualcomm QRB5165构建的ModalAI VOXL 2，是一个被广泛使用的参考平台。它兼容PX4，支持无GPS视觉惯性里程计导航，并把自驾仪、算力和导航传感器打包进一个约16克的模块中。',
          },
          {
            q: '单台4K安防摄像头实际需要多少带宽？',
            a: '这取决于帧率、场景复杂度和编解码器——请使用本页的[带宽计算器](#bandwidth-calculator)，针对你具体的摄像头数量、分辨率、帧率和保留期估算持续带宽和存储成本，而不是依赖一个笼统的经验数字。',
          },
          {
            q: '新的摄像头设计应该选择Hailo-10H还是Ambarella N系列？',
            a: '两者瞄准的定位有所重叠但并不相同：Hailo-10H和Hailo-15专注于功耗低于5W的摄像头内置生成式AI推理，而Ambarella N系列（CES 2026发布）被定位为具备多传感器感知能力的8K边缘AI视觉SoC。正确的选择取决于目标分辨率、功耗预算，以及是否需要在同一颗芯片中完成多传感器融合。',
          },
          {
            q: '无人机为什么需要无GPS导航，VOXL 2是如何处理的？',
            a: 'GPS信号可能被干扰、欺骗，或者在室内及受争议区域根本不可用。VOXL 2支持视觉惯性里程计（VIO），它融合摄像头和惯性传感器数据，在不依赖卫星定位的情况下估算位置和航向。',
          },
          {
            q: '中国大陆的无人机巡检项目需要满足哪些监管要求？',
            a: '这取决于具体运营场景和当地现行的民用航空及数据安全相关规定，系统集成商应直接核实相关主管部门的最新要求，而不是套用欧盟EASA等境外监管框架的分类标准，因为二者的适用范围并不相同。',
          },
          {
            q: '需要边缘一体机，还是每台摄像头可以单独运行推理？',
            a: '这取决于每个站点的摄像头数量。少量摄像头可以各自独立运行摄像头内置推理（Hailo-10H/15级别的芯片）。摄像头数量多的站点通常受益于一台集中聚合视频流的本地边缘一体机（NVIDIA Jetson Orin或Thor）——Jetson Thor单机最多支持32路MIPI CSI-2摄像头输入，这是其预期承担多摄像头角色的有力信号。',
          },
          {
            q: '设备端VLM在视频分析方面目前还做不到什么？',
            a: '截至2026年，有三项能力仍停留在云端级别或研究阶段：对数小时完整录像进行一次性推理的长时程理解、大规模跨摄像头对同一对象的再识别，以及需要覆盖完整一天录像（而非某个被标记的特定片段）上下文的开放词汇查询。',
          },
        ],
      },
      'related-reading': {
        id: 'related-reading',
        title: '延伸阅读',
        content: [
          '关于桌面VLM的基础知识，请参阅[Best Local Vision Models 2026: LLaVA, Qwen3-VL & Ollama](/zh/power-local-llm/local-vision-models-llava-ollama-2026)，之后再回到本文了解嵌入式和摄像头部署——那篇指南涵盖桌面和服务器级视觉语言模型的搭建；本文涵盖的是摄像头和无人机在功耗、带宽和机身重量方面的专属约束。',
        ],
        items: [
          '[面向本地LLM的边缘AI硬件](/zh/local-llms/edge-ai-hardware-for-local-llms) — 上方对比表中引用的Jetson Orin和Jetson Thor平台的完整规格',
          '[面向机器人的VLA模型：本地推理](/zh/local-llms/vla-models-robots-local-inference) — 同样芯片约束应用于机器人动作模型而非视频理解的姊妹文章',
          '[本地LLM安全与隐私检查清单](/zh/local-llms/local-llm-security-privacy-checklist) — 一旦视频分析迁移到设备端，仍然适用的数据处理考量',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '摄像头与无人机上的VLM 2026：设备端视频理解',
      description:
        '摄像头和无人机把VLM推理搬到设备端是因为带宽，而非隐私。本文对比Hailo、Ambarella、Jetson与VOXL 2在2026年的实际部署。',
      datePublished: '2026-09-02',
      dateModified: '2026-09-02',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
        sameAs: 'https://www.linkedin.com/in/hanskuepper/',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      inLanguage: 'zh',
      url: 'https://www.promptquorum.com/zh/local-llms/vlm-video-analytics-drones-edge',
      image: 'https://www.promptquorum.com/images/vlm-video-analytics-drones-edge-hero-zh.webp',
      educationalLevel: 'Advanced',
      proficiencyLevel: 'Advanced',
      audience: {
        '@type': 'Audience',
        audienceType: '系统集成商、视频安防架构师与商用无人机运营负责人',
      },
      about: [
        { '@type': 'Thing', name: '视觉语言模型' },
        { '@type': 'Thing', name: '边缘AI' },
        { '@type': 'Thing', name: '视频分析' },
        { '@type': 'Thing', name: '无人机自主性' },
      ],
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways'],
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/zh/local-llms/vlm-video-analytics-drones-edge',
      },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-02',
    current_hardware_mentioned: ['Hailo-10H', 'Hailo-15', 'Ambarella N-series', 'NVIDIA Jetson Orin', 'NVIDIA Jetson Thor', 'Qualcomm QRB5165', 'ModalAI VOXL 2'],
    theme: 'Cameras & Drones',
    heroImage: '/images/vlm-video-analytics-drones-edge-hero-ar.webp',
    title: 'نماذج VLM في الكاميرات والطائرات المسيّرة 2026: فهم الفيديو على الجهاز',
    seoTitle: 'VLM في الكاميرات والطائرات 2026: ذكاء فيديو محلي',
    intro:
      'تشترك الكاميرات والطائرات المسيّرة في قيد واحد يحدد أين يعمل ذكاء الفيديو الاصطناعي: عرض النطاق الترددي (bandwidth)، وليس القدرة الحاسوبية، هو السبب في انتقال الاستدلال (inference) إلى الجهاز نفسه. يقارن هذا الدليل بين معماريات المعالجة داخل الكاميرا وعلى جهاز طرفي (edge appliance) وفي السحابة لتحليل الفيديو، ويشرح التحول من الكشف بفئات ثابتة إلى بحث VLM بمفردات مفتوحة، ويغطي منصات الحوسبة المستخدمة اليوم فعليًا في الكاميرات وعلى هياكل الطائرات المسيّرة.',
    metaDescription:
      'تنقل الكاميرات والطائرات المسيّرة استدلال VLM إلى الجهاز بسبب عرض النطاق الترددي، لا الخصوصية. مقارنة Hailo وAmbarella وJetson وVOXL 2 لعام 2026.',
    twitterDescription:
      'لماذا ينتقل ذكاء الفيديو إلى الجهاز: اقتصاديات عرض النطاق الترددي تتفوق على الخصوصية كسبب. مقارنة Hailo-10H وAmbarella N-series وJetson Thor وVOXL 2 للكاميرات والطائرات المسيّرة.',
    publishDate: '2026-09-02',
    dateModified: '2026-09-02',
    readTime: '13 دقائق للقراءة',
    educationalLevel: 'Advanced',
    audience: 'مهندسو تكامل الأنظمة، ومعماريو أمن الفيديو، ومسؤولو تشغيل الطائرات المسيّرة التجارية',
    primaryTerm: 'فهم الفيديو على الجهاز',
    targetKeywords: [
      'تحليل الفيديو على الجهاز 2026',
      'استدلال VLM كاميرا edge',
      'حوسبة على متن الطائرة المسيّرة',
      'بحث فيديو بمفردات مفتوحة',
      'Hailo-10H ذكاء اصطناعي كاميرا',
      'تكلفة عرض النطاق فيديو edge',
      'VOXL 2 طيار آلي طائرة مسيّرة',
    ],
    leadAnswerBlock:
      '**تنقل الكاميرات والطائرات المسيّرة الاستدلال إلى الجهاز لأن قيود عرض النطاق الترددي والوصلة — لا الخصوصية — تجعل بث الفيديو الخام أمرًا غير عملي.** تكلفة بث أمني رباعي الدقة (4K) مستمر، على مدى فترة الاحتفاظ بالبيانات، تفوق في النقل والتخزين تكلفة المسرّع (accelerator) الذي يعالجه مباشرة داخل الكاميرا. أما الطائرة المسيّرة على مدى تشغيلي فتواجه وصلة راديوية متقطعة ومنخفضة عرض النطاق وأحيانًا معرّضة للتشويش، ما يجعل الحوسبة على متنها الوسيلة الوحيدة للتصرف بناءً على ما تراه. كلا الحالتين تدعمان التحول نفسه: من كشف الأجسام بفئات ثابتة إلى بحث VLM بمفردات مفتوحة يجد حدثًا موصوفًا بدلًا من مطابقة قائمة فئات ثابتة.',
    quickAnswerTop: {
      ar: {
        question: 'لماذا تشغّل الكاميرات والطائرات المسيّرة نماذج VLM على الجهاز بدلًا من السحابة؟',
        answer:
          'قيود عرض النطاق الترددي والوصلة هي ما يفرض ذلك، لا الخصوصية: بث كاميرا أمنية رباعية الدقة مستمر تكلفته في النقل والتخزين أعلى من مسرّع مدمج في الكاميرا، وطائرة مسيّرة على مدى تشغيلي تملك وصلة راديوية متقطعة وأحيانًا معرّضة للتشويش لا يمكن أن تتحمل الاعتماد على السحابة. شرائح جانب الكاميرا مثل Hailo-10H تعمل بأقل من 5 واط؛ وطائرات مسيّرة مثل VOXL 2 من ModalAI (المبني على Qualcomm QRB5165) تجمع الطيار الآلي والملاحة والاستدلال في وحدة تزن نحو 16 غرامًا.',
        bullets: [
          'Hailo-10H / Hailo-15: مسرّعات GenAI مدمجة في الكاميرا بأقل من 5 واط، عُرضت في ISC West 2026',
          'Ambarella N-series: شريحة رؤية بالذكاء الاصطناعي على الحافة بدقة 8K أُطلقت في CES 2026',
          'NVIDIA Jetson Thor: يدعم حتى 32 مدخل كاميرا من نوع MIPI CSI-2',
          'ModalAI VOXL 2 (Qualcomm QRB5165): طيار آلي لطائرة مسيّرة + حوسبة + ملاحة بصرية-قصورية بلا GPS، نحو 16 غرامًا',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
      { label: 'لماذا يدفع عرض النطاق الترددي ذكاء الفيديو نحو الحافة', anchor: '#bandwidth-economics' },
      { label: 'داخل الكاميرا أم جهاز طرفي أم سحابة؟', anchor: '#architectures' },
      { label: 'من الكشف إلى الوصف', anchor: '#detection-to-description' },
      { label: 'قدّر تكلفة عرض النطاق والتخزين لديك', anchor: '#bandwidth-calculator' },
      { label: 'كيف تُقيّم عملية نشر', anchor: '#evaluation-steps' },
      { label: 'لماذا تعالج الطائرات المسيّرة الفيديو على متنها', anchor: '#drones-onboard' },
      { label: 'تطبيقات تجارية قيد الاستخدام فعليًا', anchor: '#commercial-applications' },
      { label: 'مقارنة المنصات', anchor: '#platform-comparison' },
      { label: 'ما العتاد الذي يجب شراؤه', anchor: '#buying-categories' },
      { label: 'ما لا يعمل بعد على الجهاز', anchor: '#locallens-limits' },
      { label: 'الاختصاص القانوني وقواعد الشراء', anchor: '#jurisdiction' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'قراءات ذات صلة', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'قيود عرض النطاق الترددي والوصلة، لا الخصوصية، هي سبب انتقال استدلال الكاميرات والطائرات المسيّرة إلى الجهاز: بث 4K مستمر تكلفته في النقل والتخزين أعلى من الشريحة التي تعالجه محليًا.',
          'ينتقل تحليل الفيديو من الكشف بفئات ثابتة إلى بحث VLM بمفردات مفتوحة — وصف حدث بلغة طبيعية بدلًا من مطابقته مع قائمة فئات مدرَّبة مسبقًا.',
          'شرائح الكاميرا: تستهدف Hailo-10H وHailo-15 GenAI مدمجًا في الكاميرا بأقل من 5 واط؛ وتضيف سلسلة Ambarella N (أُطلقت في CES 2026) شريحة رؤية بالذكاء الاصطناعي على الحافة بدقة 8K مع إدراك متعدد المستشعرات.',
          'الأجهزة الطرفية (NVIDIA Jetson Orin/Thor) تجمّع تدفقات كاميرات كثيرة محليًا؛ يدعم Jetson Thor حتى 32 مدخل كاميرا MIPI CSI-2.',
          'تشغّل الطائرات المسيّرة الحوسبة على الهيكل نفسه: يجمع Qualcomm QRB5165 عبر ModalAI VOXL 2 بين الطيار الآلي والملاحة البصرية-القصورية بلا GPS والاستدلال في وحدة تزن نحو 16 غرامًا.',
          'معظم عمليات النشر الفعلية هجينة — يعمل كاشف خفيف بفئات ثابتة باستمرار؛ ولا يعالج VLM سوى المقاطع المُفعَّلة، لا كل إطار.',
          'لا يحل VLM محل الكشف بفئات ثابتة — بل يضيف بحثًا بمفردات مفتوحة فوق كاشف يواصل عمل الفرز المستمر إطارًا بإطار.',
        ],
      },
      'bandwidth-economics': {
        id: 'bandwidth-economics',
        title: 'لماذا ينتقل ذكاء الفيديو إلى الحافة قبل أن تُطرح مسألة الخصوصية أصلًا؟',
        content: [
          '**قيود عرض النطاق الترددي والوصلة الفيزيائية هي السبب الرئيسي في انتقال استدلال الكاميرات والطائرات المسيّرة إلى الجهاز — الحجة الاقتصادية تسبق حجة الخصوصية.** تولّد كاميرا 4K تبث باستمرار بمعدل 15–30 إطارًا في الثانية معدل بيانات مستمرًا يتراكم، عبر عدة كاميرات في موقع واحد ونافذة احتفاظ مدتها 30 يومًا، تكاليف نقل وتخزين تفوق سرعةً التكلفة الأحادية لمسرّع مدمج في الكاميرا أو جهاز طرفي. تتيح الآلة الحاسبة أسفل هذه الصفحة إجراء هذا الحساب لعدد الكاميرات ونافذة الاحتفاظ الخاصة بك.',
          'تواجه الطائرات المسيّرة القيد نفسه من الاتجاه المعاكس: بدلًا من بيانات كثيرة يصعب نقلها بتكلفة منخفضة، لديها وصلة موثوقة قليلة يمكن الاعتماد عليها. تملك الطائرة المسيّرة على مدى تشغيلي وصلة راديوية متقطعة ومنخفضة عرض النطاق وأحيانًا معرّضة للتشويش — ومهمة تعتمد على اتصال سحابي مستمر لتفسير ما تراه الطائرة تفشل بالضبط حين تحتاج الطائرة إلى التصرف بشكل مستقل، كما في حالة تشويش GPS أو خارج مدى الرؤية المباشرة.',
          'يختلف هذا الإطار عن حجة الخصوصية أولًا التي يميل إليها محتوى هذا الموقع الحالي عن نماذج LLM المحلية لأغراض الاستهلاك وأجهزة سطح المكتب. بالنسبة للكاميرات والطائرات المسيّرة، أول سؤال يطرحه المشتري هو "هل يمكنني تحمّل نقل هذا القدر من الفيديو، وهل يمكنني الاعتماد على استقرار الوصلة؟" — الخصوصية وإقامة البيانات محليًا فوائد ثانوية حقيقية، وليستا سبب وجود هذه المعمارية.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'ينتقل ذكاء الفيديو إلى الجهاز لأن تكاليف النقل والتخزين، إلى جانب وصلات راديوية غير موثوقة، تجعل الاستدلال المعتمد على السحابة غير عملي حتى قبل أن تصبح الخصوصية عاملًا.' },
          { type: 'plain-terms', text: 'نقل فيديو كل كاميرا إلى خادم يكلّف مالًا ويتطلب وصلة تبقى مستقرة؛ معالجته حيث يُلتقط يتجنب المشكلتين معًا.' },
        ],
      },
      architectures: {
        id: 'architectures',
        title: 'هل تُشغّل الاستدلال داخل الكاميرا، أم على جهاز طرفي، أم في السحابة؟',
        content: [
          '**ثلاث معماريات تتعامل اليوم مع ذكاء فيديو الكاميرات، ومعظم عمليات النشر الإنتاجية تجمع بين اثنتين منها على الأقل.** يعتمد الاختيار الصحيح على عدد الكاميرات لكل موقع، ومتطلبات الاحتفاظ، ومقدار التكلفة لكل وحدة التي تستطيع ميزانية العتاد استيعابها.',
          '**الاستدلال داخل الكاميرا** يدمج المسرّع داخل الكاميرا نفسها — تستهدف Hailo-10H وHailo-15 بالضبط نقطة التصميم هذه باستهلاك أقل من 5 واط. استخدم هذا حين تحتاج كل كاميرا لاتخاذ قرارها الخاص (تسجيل مُفعَّل بالحركة، كشف عبث على الجهاز) وتستطيع قائمة مكونات الكاميرا استيعاب شريحة واحدة لكل وحدة.',
          '**الجهاز الطرفي المحلي** يجمّع تدفقات كاميرات كثيرة في جهاز واحد يعمل بـ NVIDIA Jetson Orin أو Jetson Thor. استخدم هذا حين يضم موقع كاميرات أكثر مما يُعقل تجهيزه فرديًا — دعم Jetson Thor لحتى 32 مدخل كاميرا MIPI CSI-2 إشارة قوية إلى أن هذه المنصة صُممت بالضبط لدور تجميع متعدد الكاميرات، لا لاستدلال تدفق واحد.',
          '**المعالجة السحابية** لا تزال مناسبة للمواقع ذات عدد الكاميرات القليل وبلا متطلب زمن حقيقي، حيث يهم البحث الرجعي في الأرشيف الكامل عبر أشهر أكثر من زمن استجابة المقطع الواحد، وحيث تكون تكلفة عرض النطاق لعدد قليل من التدفقات مقبولة.',
          'عمليًا، معظم عمليات النشر الموصوفة لاحقًا في هذا المقال هجينة: يعمل الكشف بفئات ثابتة باستمرار داخل الكاميرا أو على الجهاز الطرفي، ويحتفظ التخزين السحابي بأرشيف للبحث الرجعي، ولا يعمل استدلال VLM إلا على المقاطع التي سبق أن رصدها كاشف أقل تكلفة.',
        ],
      },
      'detection-to-description': {
        id: 'detection-to-description',
        title: 'كيف يتحول تحليل الفيديو من الكشف إلى الوصف؟',
        content: [
          '**ينتقل تحليل الفيديو من كشف الأجسام بفئات ثابتة إلى بحث VLM بمفردات مفتوحة — وهو أحدث تحول في هذا السوق.** يجيب الكاشف بفئات ثابتة عن سؤال "هل يوجد شخص أو مركبة أو إحدى نحو 80 فئة COCO مدرَّبة مسبقًا في هذا الإطار؟" أما VLM بمفردات مفتوحة فيجيب عن استعلام موصوف — "ابحث عن المقطع الذي ترك فيه شخص حقيبة قرب رصيف التحميل" — على لقطات لم يُدرَّب الكاشف بفئات ثابتة قط على التعرف عليها كفئة.',
          '**لا يحل VLM محل الكاشف بفئات ثابتة — بل يعمل فوقه.** لن يعمل نموذج رؤية-لغة بمعدل 30 إطارًا في الثانية لكل تدفق ضمن ميزانية طاقة أقل من 5 واط؛ فتكلفة الحوسبة وزمن الاستجابة للاستدلال الكامل بـ VLM مرتفعة جدًا للمعالجة المستمرة إطارًا بإطار عند هذا المستوى من الطاقة. بدلًا من ذلك، يواصل الكاشف بفئات ثابتة عمل الفرز المستمر منخفض الاستهلاك — الحركة والوجود والتصنيف الأساسي — ولا يُرسَل إلى VLM سوى المقاطع التي يرصدها للوصف أو البحث بمفردات مفتوحة.',
          'هذا التصميم ذو المستويين هو سبب وصف شرائح مدمجة في الكاميرا مثل Hailo-10H بأنها مسرّع "GenAI على الحافة" بدلًا من معالج VLM لكل إطار: فالشريحة مصمَّمة لاستدلال VLM مُفعَّل ومتقطع فوق كشف خفيف مستمر، لا لتشغيل نموذج رؤية-لغة بمعدل إطارات كامل.',
        ],
        items: [
          'الكشف بفئات ثابتة: مستمر، منخفض الاستهلاك، يجيب "هل هذا واحد من N فئة مدرَّبة مسبقًا؟"',
          'بحث VLM بمفردات مفتوحة: مُفعَّل، استهلاك أعلى، يجيب عن وصف بلغة طبيعية لمقطع محدد',
          'الاثنان يتكاملان، لا يتنافسان — الكاشف يقرر ما يُعرض على VLM، لا العكس',
          'تشترك إعدادات VLM على سطح المكتب والخوادم (LLaVA وQwen3-VL ونماذج مشابهة) في عائلات النماذج نفسها المستخدمة في تحليل المقاطع المُفعَّل هذا — راجع [مقارنة VLM لسطح المكتب أدناه](#related-reading) قبل تقييم عملية نشر مدمجة',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'يجد بحث VLM بمفردات مفتوحة حدثًا موصوفًا في لقطات لم يتعلم كاشف بفئات ثابتة قط التعرف عليها كفئة، لكنه يعمل على مقاطع مُفعَّلة، لا في كل إطار.' },
          { type: 'plain-terms', text: 'الطريقة القديمة: "ارصد كل ما يطابق شخص/سيارة/كلب". الطريقة الجديدة: "ابحث عن المقطع الذي ترك فيه شخص حقيبة قرب الرصيف" — بكلماتك الخاصة، بعد أن يكون كاشف أرخص قد رصد المقطع بالفعل.' },
        ],
      },
      'bandwidth-calculator': {
        id: 'bandwidth-calculator',
        title: 'كم يحتاج موقع الكاميرات لديك فعليًا من عرض النطاق والتخزين؟',
        content: [
          '**أدخل أدناه عدد الكاميرات والدقة ومعدل الإطارات ونافذة الاحتفاظ لتقدير عرض النطاق المستمر وتكلفة التخزين.** استخدم هذا قبل الاختيار بين معمارية داخل الكاميرا أو جهاز طرفي أو سحابة — الرقم الناتج يحسم النقاش عادةً بمفرده.',
        ],
        component: 'EdgeVideoBandwidthCalculator',
      },
      'evaluation-steps': {
        id: 'evaluation-steps',
        title: 'كيف تُقيّم عملية نشر VLM للكاميرا أو الطائرة المسيّرة؟',
        content: [
          '**ست فحوصات تفصل بين عملية نشر تعمل في الميدان وأخرى تفشل فيه.** نفّذها بهذا الترتيب قبل الالتزام بمنصة شرائح محددة.',
        ],
        numberedItems: [
          { title: 'حدّد المُحفِّز، لا التدفق', whyItMatters: 'قرر أي حدث يُفعِّل استدلال VLM (حركة، إنذار من كاشف بفئات ثابتة، فاصل زمني مجدول) قبل اختيار العتاد — تشغيل VLM على كل إطار من كل تدفق ليس ميزانية طاقة أو تكلفة واقعية في عام 2026.' },
          { title: 'قِس ميزانية الوصلة قبل اختيار الشريحة', whyItMatters: 'بالنسبة للطائرات المسيّرة، قِس عرض نطاق الرفع المتاح وأسوأ زمن استجابة عند المدى التشغيلي قبل اختيار منصة الحوسبة — وصلة الراديو الخاصة بالهيكل، لا شريحة الحوسبة، هي عادةً القيد الملزم.' },
          { title: 'أبقِ الكشف والوصف مرحلتين منفصلتين', whyItMatters: 'شغّل كاشفًا خفيفًا بفئات ثابتة باستمرار ووجّه إلى VLM المقاطع المرصودة فقط — هذه الطريقة الوحيدة لجعل استدلال VLM يناسب ميزانية طاقة الكاميرا أو الطائرة المسيّرة.' },
          { title: 'طابق ميزانية الطاقة مع الهيكل الفيزيائي', whyItMatters: 'يحدّ غلاف كاميرا بلا مروحة ميزانية الحرارة إلى نحو 5 واط؛ وتُقيَّد حمولة الطائرة المسيّرة بالوزن ومقايضات مدة الطيران، لا بالاستهلاك وحده — صمّم الشريحة وفق الغلاف، لا العكس.' },
          { title: 'تحقق من التشغيل بلا GPS إذا كانت المهمة قد تفقد GPS أو وصلة القيادة', whyItMatters: 'يجب اختبار الملاحة البصرية-القصورية (VIO) تحديدًا، لا افتراض عملها، قبل الاعتماد عليها خارج مدى الرؤية المباشرة أو في بيئات كهرومغناطيسية متنازع عليها.' },
          { title: 'جرّب على موقع واحد أو هيكل واحد قبل التوسع', whyItMatters: 'تحقق من معدل الإيجابيات الكاذبة، وزمن استجابة الاستعلامات، وسلوك البطارية/الحرارة في عملية نشر واحدة قبل الالتزام بميزانية لنشر على مستوى الأسطول بأكمله.' },
        ],
      },
      'drones-onboard': {
        id: 'drones-onboard',
        title: 'لماذا تعالج الطائرات المسيّرة الفيديو على متنها بدلًا من بثه؟',
        content: [
          '**تنقل الطائرات المسيّرة الحوسبة إلى الهيكل لثلاثة أسباب: هامش الوصلة، وزمن الاستجابة، والملاحة بلا GPS — وليس لأن الحوسبة على المتن أرخص.** تتدهور وصلة راديو الطائرة المسيّرة مع المدى والتضاريس والتشويش بطريقة لا يعرفها كابل إيثرنت لكاميرا ثابتة أبدًا؛ ومهمة تعتمد على اتصال سحابي مستمر لتفسير الفيديو تفشل بالضبط حين تكون الطائرة في أبعد نقطة عن مشغّلها وأكثر ما تحتاج إليه هو الاستقلالية.',
          '**يُعد VOXL 2 من ModalAI، المبني حول Qualcomm QRB5165، المنصة المرجعية لتصميم الحوسبة على متن الهيكل.** إنه متوافق مع PX4، ويدعم الملاحة البصرية-القصورية (VIO) بلا GPS للتنقل عندما يكون تحديد الموقع بالأقمار الصناعية غير متاح أو مشوَّشًا، ويجمع الطيار الآلي والحوسبة ومستشعرات الملاحة في وحدة من فئة الطيار الآلي تزن نحو 16 غرامًا — صغيرة بما يكفي لتنافس الحمولة والبطارية على ميزانية الوزن نفسها، لا مصدر طاقة منفصل.',
          '**الوزن والطاقة قيدان صارمان على الهيكل بطريقة لا ينطبقان بها على كاميرا مثبَّتة على جدار.** كل غرام من الحوسبة على المتن هو غرام غير متاح لسعة البطارية أو حمولة المستشعرات أو مدة الطيران — لا يمكن لمنصة طائرة مسيّرة أن تضيف ببساطة وحدة رف كما يمكن لموقع كاميرات محلي أن يضيف جهازًا طرفيًا.',
        ],
        items: [
          'هامش الوصلة: يتدهور الاتصال الراديوي مع المدى والتضاريس والطيف المتنازع عليه بطريقة لا تعرفها بنية الكاميرات السلكية',
          'زمن الاستجابة: قرار فوري (تجنب عقبة، تتبع هدف) لا يمكنه انتظار رحلة ذهاب وإياب إلى خادم سحابي',
          'الملاحة بلا GPS: تتيح الملاحة البصرية-القصورية للطائرة الحفاظ على موقعها واتجاهها عندما يكون تحديد الموقع بالأقمار الصناعية غير متاح',
          'ميزانية الوزن: وحدة حوسبة من فئة الطيار الآلي تزن نحو 16 غرامًا تنافس مباشرة البطارية والحمولة، بخلاف غلاف كاميرا ثابتة',
        ],
      },
      'commercial-applications': {
        id: 'commercial-applications',
        title: 'أين تُستخدم نماذج VLM للكاميرات والطائرات المسيّرة تجاريًا فعليًا؟',
        content: [
          '**أربع فئات تجارية تمثل معظم عمليات النشر الإنتاجية اليوم: تفتيش البنية التحتية والمرافق، والزراعة الدقيقة، والمسح ورسم الخرائط، والأمن العام.**',
        ],
        items: [
          'تفتيش البنية التحتية والمرافق: طائرات مسيّرة مزوَّدة بحوسبة على المتن تفتش خطوط النقل والأنابيب وأبراج الاتصالات، وترصد العيوب المرئية دون بث اللقطات الخام للمراجعة',
          'الزراعة الدقيقة: تميّز الرؤية على المتن إجهاد المحاصيل وضغط الأعشاب الضارة ومشكلات الري لكل حقل، وتغذّي القرارات في أنظمة إدارة المزارع دون الاعتماد على اتصال سحابي مستمر في مناطق ريفية ذات اتصال ضعيف',
          'المسح ورسم الخرائط: تعالج طائرات القياس التصويري والتفتيش الصور على المتن أو على جهاز طرفي لتقليل حجم البيانات الخام التي يجب نقلها وتخزينها لكل رحلة',
          'الأمن العام: تجمع شبكات الكاميرات الثابتة بين الكشف المستمر بفئات ثابتة وبحث VLM المُفعَّل — مثل استرجاع حادث موصوف من أرشيف بدلًا من مراجعة ساعات من اللقطات يدويًا',
        ],
        callouts: [
          { type: 'note', text: 'تُشكّل البرامج العسكرية أيضًا سوق الشرائح هذا. اختير برنامج Hivemind للاستقلالية من Shield AI لبرنامج الطائرة المقاتلة التعاونية (CCA) YFQ-44A التابع لسلاح الجو الأمريكي، واختُبر برنامج Lattice من Anduril على الهيكل نفسه. هذا الطلب على مستوى البرامج على منظومات الاستقلالية أحد محركات الاستثمار في شرائح الاستدلال على الحافة، رغم أن مسار الاعتماد والجهة المشترية ومتطلبات برامج الدفاع تختلف كليًا عن عمليات النشر التجارية الموصوفة أعلاه، وتقع خارج نطاق هذا الدليل.' },
        ],
      },
      'platform-comparison': {
        id: 'platform-comparison',
        title: 'مقارنة: منصات الحوسبة للكاميرات والطائرات المسيّرة',
        content: [
          'راجع [دليل شرائح الحافة](/ar/local-llms/edge-ai-hardware-for-local-llms) للمواصفات الكاملة لـ Jetson Orin وJetson Thor — يبقى هذا الجدول مركّزًا على المنصات المخصصة للكاميرات والطائرات المسيّرة الأكثر صلة بتحليل الفيديو.',
        ],
        columns: ['المنصة', 'ميزانية الطاقة', 'الأنسب لـ', 'الحالة'],
        rows: [
          { المنصة: 'Hailo-10H / Hailo-15', 'ميزانية الطاقة': 'أقل من 5 واط', 'الأنسب لـ': 'GenAI مدمج بالكاميرا، فرز VLM', الحالة: 'عُرض في ISC West 2026' },
          { المنصة: 'Ambarella N-series', 'ميزانية الطاقة': 'شريحة رؤية IA على الحافة', 'الأنسب لـ': 'إدراك متعدد المستشعرات 8K', الحالة: 'أُطلق في CES 2026' },
          { المنصة: 'NVIDIA Jetson Orin / Thor', 'ميزانية الطاقة': 'فئة 15–130 واط', 'الأنسب لـ': 'جهاز طرفي متعدد الكاميرات', الحالة: 'Thor: حتى 32 كاميرا MIPI' },
          { المنصة: 'Qualcomm QRB5165 (VOXL 2)', 'ميزانية الطاقة': 'وحدة فئة طائرة مسيّرة', 'الأنسب لـ': 'طيار آلي + VIO + استدلال', الحالة: 'متوافق PX4، نحو 16 غ' },
        ],
      },
      'buying-categories': {
        id: 'buying-categories',
        title: 'ما العتاد الذي تحتاجه للبدء؟',
        content: [
          '**أربع فئات من العتاد تغطي معظم مشاريع VLM للكاميرات والطائرات المسيّرة؛ تحقق من عروض الموزعين وتجار التجزئة الحالية لأن الأسعار تتغير باستمرار.**',
        ],
        items: [
          'وحدات الكاميرا وأطقم التطوير: لوحات كاميرا مرجعية مقترنة بمسرّع طرفي، تُستخدم لتجربة نموذج أولي لخط معالجة داخل الكاميرا قبل الالتزام بتصميم كاميرا مخصص',
          'وحدات مسرّع Hailo M.2: تضيف استدلال ذكاء اصطناعي بأقل من 5 واط إلى كاميرا أو لوحة حوسبة مدمجة موجودة عبر منفذ M.2، دون إعادة تصميم اللوحة الرئيسية للكاميرا',
          'أجهزة فيديو طرفية: أطقم تطوير NVIDIA Jetson Orin وJetson Thor، تُستخدم لتجربة معمارية تجميع متعدد الكاميرات الموصوفة أعلاه قبل نشر أسطول من الأجهزة الطرفية المحلية',
          'منصات تطوير الطائرات المسيّرة: أطقم تطوير ModalAI VOXL 2، تُستخدم لتجربة خطوط معالجة طيار آلي مبنية على PX4 واستدلال على المتن قبل الدمج في هيكل إنتاجي',
        ],
      },
      'locallens-limits': {
        id: 'locallens-limits',
        title: 'ما الذي لا يعمل بعد على الجهاز؟',
        content: [
          '**ثلاث قدرات لا تزال، حتى عام 2026، على مستوى السحابة أو في مرحلة البحث، ولا يغيّر أي مسرّع من فئة الكاميرات أو الطائرات المسيّرة ذلك هذا العام.**',
        ],
        items: [
          'فهم الفيديو طويل المدى: الاستدلال عبر تسجيل يمتد ساعات عدة في تمريرة واحدة، بدلًا من تحليل مقاطع مُفعَّل، لا يزال يتجاوز ميزانية الذاكرة والحوسبة لمسرّعات الحافة',
          'إعادة التعرف عبر الكاميرات على نطاق واسع: تتبّع شخص موصوف بشكل موثوق عبر تدفقات كاميرات ومواقع كثيرة لا يزال عملًا يناسب أكثر نظامًا مركزيًا يملك وصولًا إلى الأرشيف الكامل متعدد الكاميرات',
          'سياق كبير عبر ساعات من اللقطات: استعلام بمفردات مفتوحة يحتاج إلى الاستدلال عبر تسجيل يوم كامل، بدلًا من مقطع محدد مرصود، لا يزال يحتاج إلى سياق وحوسبة أكبر مما تدعمه ميزانية طاقة مسرّع الحافة',
        ],
      },
      jurisdiction: {
        id: 'jurisdiction',
        title: 'ما الاختصاص القانوني وقواعد الشراء المطبَّقة؟',
        content: [
          '**تختلف قواعد تشغيل الطائرات المسيّرة التجارية بشكل كبير بين دول الخليج، إذ تطلب سلطات الطيران المدني المحلية — مثل هيئة الطيران المدني في الإمارات (GCAA) — التسجيل والتصاريح للعمليات التجارية، مع اختلاف تفاصيل القواعد بشكل ملحوظ من دولة إلى أخرى.** يجب على مهندس تكامل الأنظمة الذي يبيع في هذه الأسواق التحقق من متطلبات التسجيل والتصريح المحددة لدى الجهة التنظيمية المختصة في كل دولة قبل تحديد مواصفات العتاد ووظائف الاستقلالية، لا بعدها، نظرًا لعدم وجود إطار تنظيمي موحّد واحد يغطي المنطقة بأكملها.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'لماذا تشغّل أنظمة ذكاء الكاميرات والطائرات المسيّرة الاستدلال على الجهاز بدلًا من السحابة؟',
            a: 'قيود عرض النطاق الترددي والوصلة، لا الخصوصية، هي السبب الرئيسي. بث كاميرا 4K مستمر تكلفته في النقل والتخزين، على مدى فترة الاحتفاظ، أعلى من المسرّع الذي يعالجه محليًا، وطائرة مسيّرة على مدى تشغيلي تملك وصلة راديوية متقطعة وأحيانًا معرّضة للتشويش لا يمكن أن تتحمل الاعتماد على السحابة.',
          },
          {
            q: 'ما الفرق بين الكشف بفئات ثابتة وبحث VLM بمفردات مفتوحة؟',
            a: 'يجيب الكاشف بفئات ثابتة عن سؤال ما إذا كان الإطار يحتوي واحدة من مجموعة فئات مدرَّبة مسبقًا (نحو 80 فئة في نموذج نموذجي مدرَّب على COCO). أما VLM بمفردات مفتوحة فيجيب عن استعلام موصوف — مثل "ابحث عن المقطع الذي ترك فيه شخص حقيبة قرب رصيف التحميل" — على محتوى لم يُدرَّب الكاشف بفئات ثابتة قط على التعرف عليه كفئة.',
          },
          {
            q: 'هل يمكن لنموذج رؤية-لغة أن يعمل في الزمن الحقيقي على مسرّع كاميرا بأقل من 5 واط؟',
            a: 'ليس بمعدل إطارات كامل. لن يعمل VLM بمعدل 30 إطارًا في الثانية لكل تدفق ضمن ميزانية طاقة أقل من 5 واط. عمليًا، يعمل كاشف خفيف بفئات ثابتة باستمرار وباستهلاك منخفض، ولا يُمرَّر إلى VLM سوى المقاطع التي يرصدها للوصف بمفردات مفتوحة — يعمل VLM على مقاطع مُفعَّلة، لا في كل إطار.',
          },
          {
            q: 'ما منصة الحوسبة التي تستخدمها الطائرات المسيّرة التجارية لذكاء اصطناعي على المتن؟',
            a: 'يُعد VOXL 2 من ModalAI، المبني حول Qualcomm QRB5165، منصة مرجعية واسعة الاستخدام. إنه متوافق مع PX4، ويدعم الملاحة البصرية-القصورية بلا GPS للتنقل، ويجمع الطيار الآلي والحوسبة ومستشعرات الملاحة في وحدة تزن نحو 16 غرامًا.',
          },
          {
            q: 'كم من عرض النطاق الترددي تحتاجه فعليًا كاميرا أمنية واحدة بدقة 4K؟',
            a: 'يعتمد ذلك على معدل الإطارات وتعقيد المشهد والترميز — استخدم [آلة حساب عرض النطاق](#bandwidth-calculator) في هذه الصفحة لتقدير عرض النطاق المستمر وتكلفة التخزين لعدد الكاميرات والدقة ومعدل الإطارات ونافذة الاحتفاظ الخاصة بك، بدلًا من الاعتماد على رقم تقريبي واحد.',
          },
          {
            q: 'هل يجب اختيار Hailo-10H أم سلسلة Ambarella N لتصميم كاميرا جديد؟',
            a: 'تستهدف الشريحتان موقعين متداخلين لكنهما متمايزان: تركّز Hailo-10H وHailo-15 على استدلال GenAI مدمج بالكاميرا بأقل من 5 واط، بينما تُموضَع سلسلة Ambarella N (أُطلقت في CES 2026) كشريحة رؤية ذكاء اصطناعي على الحافة بدقة 8K مع إدراك متعدد المستشعرات. يعتمد الاختيار الصحيح على الدقة المستهدفة وميزانية الطاقة وما إذا كنت تحتاج إلى دمج متعدد المستشعرات في الشريحة نفسها.',
          },
          {
            q: 'لماذا تحتاج الطائرات المسيّرة إلى ملاحة بلا GPS، وكيف يتعامل VOXL 2 معها؟',
            a: 'يمكن تشويش إشارات GPS أو انتحالها أو ببساطة عدم توفرها داخل المباني أو في بيئات متنازع عليها. يدعم VOXL 2 الملاحة البصرية-القصورية (VIO)، التي تدمج بيانات الكاميرا والمستشعرات القصورية لتقدير الموقع والاتجاه دون الاعتماد على تحديد الموقع بالأقمار الصناعية.',
          },
          {
            q: 'هل تُقيَّد الطائرات المسيّرة الصينية المنشأ في بعض الأسواق التجارية والحكومية؟',
            a: 'تفرض بعض الأسواق، وأبرزها المشتريات الفيدرالية الأمريكية والجهات المرتبطة بها، قيودًا على عتاد الطائرات المسيّرة الصينية المنشأ عبر أطر تنظيمية محلية خاصة بها. أما في دول الخليج، فتختلف القواعد حسب الجهة التنظيمية في كل دولة، ويجب على مهندس تكامل الأنظمة التحقق من متطلبات الاعتماد والتسجيل المحلية قبل تحديد منصة بعينها لمشروع معين.',
          },
          {
            q: 'هل أحتاج إلى جهاز طرفي، أم يمكن لكل كاميرا تشغيل الاستدلال بمفردها؟',
            a: 'يعتمد ذلك على عدد الكاميرات لكل موقع. يمكن لعدد قليل من الكاميرات أن تشغّل كل منها الاستدلال داخل الكاميرا باستقلالية (شرائح من فئة Hailo-10H/15). أما الموقع ذو الكاميرات الكثيرة فعادةً ما يستفيد من جهاز طرفي محلي (NVIDIA Jetson Orin أو Thor) يجمّع التدفقات مركزيًا — دعم Jetson Thor لحتى 32 مدخل كاميرا MIPI CSI-2 في جهاز واحد إشارة قوية على دوره المقصود متعدد الكاميرات.',
          },
          {
            q: 'ما الذي لا تستطيع نماذج VLM على الجهاز فعله بعد في تحليل الفيديو؟',
            a: 'ثلاث قدرات لا تزال، حتى عام 2026، على مستوى السحابة أو في مرحلة البحث: الاستدلال طويل المدى عبر تسجيل يمتد ساعات عدة في تمريرة واحدة، وإعادة التعرف عبر الكاميرات على نطاق واسع لشخص واحد، والاستعلامات بمفردات مفتوحة التي تحتاج إلى سياق يغطي تسجيل يوم كامل بدلًا من مقطع محدد مرصود.',
          },
        ],
      },
      'related-reading': {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        content: [
          'للاطلاع على أساسيات VLM لسطح المكتب، راجع [Best Local Vision Models 2026: LLaVA, Qwen3-VL & Ollama](/ar/power-local-llm/local-vision-models-llava-ollama-2026)، ثم عُد إلى هنا للاطلاع على النشر المدمج وفي الكاميرا — يغطي ذلك الدليل إعداد نماذج رؤية-لغة لسطح المكتب والخوادم؛ ويغطي هذا المقال القيود الخاصة بالكاميرات والطائرات المسيّرة من حيث الطاقة وعرض النطاق ووزن الهيكل.',
        ],
        items: [
          '[عتاد الذكاء الاصطناعي الطرفي لنماذج LLM المحلية](/ar/local-llms/edge-ai-hardware-for-local-llms) — المواصفات الكاملة لمنصتَي Jetson Orin وJetson Thor المشار إليهما في جدول المقارنة أعلاه',
          '[نماذج VLA للروبوتات: الاستدلال المحلي](/ar/local-llms/vla-models-robots-local-inference) — المقال الشقيق حول قيد الشرائح نفسه مطبَّقًا على نماذج أفعال الروبوتات بدلًا من فهم الفيديو',
          '[قائمة تحقق أمن وخصوصية نماذج LLM المحلية](/ar/local-llms/local-llm-security-privacy-checklist) — اعتبارات معالجة البيانات التي تبقى سارية بمجرد انتقال تحليل الفيديو إلى الجهاز',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'نماذج VLM في الكاميرات والطائرات المسيّرة 2026: فهم الفيديو على الجهاز',
      description:
        'تنقل الكاميرات والطائرات المسيّرة استدلال VLM إلى الجهاز بسبب عرض النطاق الترددي، لا الخصوصية. مقارنة Hailo وAmbarella وJetson وVOXL 2 لعام 2026.',
      datePublished: '2026-09-02',
      dateModified: '2026-09-02',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
        sameAs: 'https://www.linkedin.com/in/hanskuepper/',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      inLanguage: 'ar',
      url: 'https://www.promptquorum.com/ar/local-llms/vlm-video-analytics-drones-edge',
      image: 'https://www.promptquorum.com/images/vlm-video-analytics-drones-edge-hero-ar.webp',
      educationalLevel: 'Advanced',
      proficiencyLevel: 'Advanced',
      audience: {
        '@type': 'Audience',
        audienceType: 'مهندسو تكامل الأنظمة، ومعماريو أمن الفيديو، ومسؤولو تشغيل الطائرات المسيّرة التجارية',
      },
      about: [
        { '@type': 'Thing', name: 'نماذج رؤية-لغة' },
        { '@type': 'Thing', name: 'الذكاء الاصطناعي الطرفي' },
        { '@type': 'Thing', name: 'تحليل الفيديو' },
        { '@type': 'Thing', name: 'استقلالية الطائرات المسيّرة' },
      ],
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways'],
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/ar/local-llms/vlm-video-analytics-drones-edge',
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-02',
    current_hardware_mentioned: ['Hailo-10H', 'Hailo-15', 'Ambarella N-series', 'NVIDIA Jetson Orin', 'NVIDIA Jetson Thor', 'Qualcomm QRB5165', 'ModalAI VOXL 2'],
    theme: 'Cameras & Drones',
    heroImage: '/images/vlm-video-analytics-drones-edge-hero-ko.webp',
    title: '카메라와 드론의 VLM 2026: 온디바이스 영상 이해',
    seoTitle: '카메라·드론 VLM 2026: 온디바이스 영상 AI',
    intro:
      '카메라와 드론은 영상 AI가 어디서 실행되는지를 결정하는 하나의 제약을 공유합니다. 바로 연산 능력이 아니라 대역폭이 추론을 기기 자체로 옮기는 이유라는 점입니다. 이 가이드는 영상 분석을 위한 카메라 내장형, 엣지 어플라이언스형, 클라우드형 아키텍처를 비교하고, 고정 클래스 탐지에서 개방 어휘 VLM 검색으로의 전환을 설명하며, 오늘날 카메라와 드론 기체에 실제로 탑재되는 연산 플랫폼을 다룹니다.',
    metaDescription:
      '카메라와 드론이 VLM 추론을 온디바이스로 옮기는 이유는 프라이버시가 아니라 대역폭입니다. Hailo, Ambarella, Jetson, VOXL 2를 2026년 실제 배치 기준으로 비교합니다.',
    twitterDescription:
      '영상 AI가 온디바이스로 이동하는 이유: 프라이버시보다 대역폭 경제학이 앞섭니다. Hailo-10H, Ambarella N 시리즈, Jetson Thor, VOXL 2를 카메라와 드론 관점에서 비교합니다.',
    publishDate: '2026-09-02',
    dateModified: '2026-09-02',
    readTime: '13분 읽기',
    educationalLevel: 'Advanced',
    audience: '시스템 통합 담당자, 영상 보안 아키텍트, 상업용 드론 운영 책임자',
    primaryTerm: '온디바이스 영상 이해',
    targetKeywords: [
      '온디바이스 영상 분석 2026',
      'VLM 카메라 추론 엣지',
      '드론 탑재 AI 연산',
      '개방 어휘 영상 검색',
      'Hailo-10H 카메라 AI',
      '엣지 영상 대역폭 비용',
      'VOXL 2 드론 자율비행 AI',
    ],
    leadAnswerBlock:
      '**카메라와 드론이 추론을 온디바이스로 옮기는 이유는 프라이버시가 아니라 대역폭과 통신 링크의 한계 때문에 원본 영상을 스트리밍하는 것이 비현실적이기 때문입니다.** 지속적인 4K 보안 영상 스트림은 보존 기간 전체로 보면 카메라에서 직접 처리하는 가속기보다 전송·저장 비용이 더 많이 듭니다. 운용 거리에 있는 드론은 간헐적이고 저대역폭이며 때로는 방해를 받는 무선 링크에 직면하므로, 기체 탑재 연산만이 보고 있는 것에 대응할 수 있는 유일한 방법입니다. 두 경우 모두 같은 전환을 뒷받침합니다. 즉, 고정 클래스 목록과 대조하는 대신 서술된 이벤트를 찾아내는 개방 어휘 VLM 검색으로, 고정 클래스 객체 탐지에서 옮겨가는 것입니다.',
    quickAnswerTop: {
      ko: {
        question: '카메라와 드론은 왜 클라우드가 아니라 온디바이스에서 VLM을 실행하나요?',
        answer:
          '프라이버시가 아니라 대역폭과 통신 링크의 한계가 그 이유입니다. 지속적인 4K 보안 스트림은 카메라 내장 가속기보다 전송·저장 비용이 더 높고, 운용 거리에 있는 드론은 클라우드 의존을 견딜 수 없는 간헐적이고 때로는 방해받는 무선 링크를 가지고 있습니다. Hailo-10H 같은 카메라 측 칩은 5W 미만으로 동작하며, ModalAI VOXL 2(Qualcomm QRB5165 기반) 같은 드론은 자율비행, 항법, 추론을 약 16g 모듈에 통합합니다.',
        bullets: [
          'Hailo-10H / Hailo-15: ISC West 2026에서 공개된 5W 미만의 카메라 내장 GenAI 가속기',
          'Ambarella N 시리즈: CES 2026에서 출시된 8K 엣지 AI 비전 SoC',
          'NVIDIA Jetson Thor: 최대 32개의 MIPI CSI-2 카메라 입력을 지원',
          'ModalAI VOXL 2(Qualcomm QRB5165): 약 16g의 드론 자율비행 + 연산 + GPS 없는 VIO',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: '핵심 내용', anchor: '#key-takeaways' },
      { label: '대역폭이 영상 AI를 엣지로 밀어붙이는 이유', anchor: '#bandwidth-economics' },
      { label: '카메라 내장, 엣지 어플라이언스, 클라우드 중 무엇을 선택할까?', anchor: '#architectures' },
      { label: '탐지에서 서술로의 전환', anchor: '#detection-to-description' },
      { label: '대역폭과 저장 비용 산정하기', anchor: '#bandwidth-calculator' },
      { label: '배치를 평가하는 방법', anchor: '#evaluation-steps' },
      { label: '드론이 영상을 기체 내부에서 처리하는 이유', anchor: '#drones-onboard' },
      { label: '이미 상용화된 응용 분야', anchor: '#commercial-applications' },
      { label: '플랫폼 비교', anchor: '#platform-comparison' },
      { label: '구매해야 할 하드웨어', anchor: '#buying-categories' },
      { label: '온디바이스에서 아직 불가능한 것', anchor: '#locallens-limits' },
      { label: '관할 규정 및 조달 규칙', anchor: '#jurisdiction' },
      { label: '자주 묻는 질문', anchor: '#faq' },
      { label: '관련 자료', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '프라이버시가 아니라 대역폭과 통신 링크의 한계가 카메라·드론 추론을 온디바이스로 옮기는 이유입니다. 지속적인 4K 스트림은 로컬에서 처리하는 칩보다 전송·저장 비용이 더 듭니다.',
          '영상 분석은 고정 클래스 탐지에서 개방 어휘 VLM 검색으로 이동하고 있습니다. 사전 학습된 클래스 목록과 대조하는 대신 자연어로 이벤트를 서술합니다.',
          '카메라용 실리콘: Hailo-10H와 Hailo-15는 5W 미만의 카메라 내장 GenAI를 겨냥하며, Ambarella N 시리즈(CES 2026 출시)는 멀티센서 인식을 갖춘 8K 엣지 AI 비전 SoC를 더합니다.',
          '엣지 어플라이언스(NVIDIA Jetson Orin/Thor)는 현장에서 다수의 카메라 피드를 취합합니다. Jetson Thor는 최대 32개의 MIPI CSI-2 카메라 입력을 지원합니다.',
          '드론은 기체 자체에서 연산을 실행합니다. Qualcomm QRB5165 기반 ModalAI VOXL 2는 자율비행, GPS 없는 시각-관성 오도메트리, 추론을 약 16g 모듈에 결합합니다.',
          '대부분의 실제 배치는 하이브리드입니다. 경량 고정 클래스 탐지기가 지속적으로 실행되고, VLM은 트리거된 클립만 처리하며 모든 프레임을 처리하지 않습니다.',
          'VLM은 고정 클래스 탐지를 대체하지 않습니다. 프레임 단위의 연속적인 선별 작업을 계속 수행하는 탐지기 위에 개방 어휘 검색을 추가하는 것입니다.',
        ],
      },
      'bandwidth-economics': {
        id: 'bandwidth-economics',
        title: '프라이버시가 논의되기도 전에 영상 AI가 엣지로 이동하는 이유는 무엇인가?',
        content: [
          '**대역폭과 물리적 통신 링크의 한계가 카메라·드론 추론이 온디바이스로 이동하는 주된 이유이며, 경제적 논거가 프라이버시 논거보다 먼저 등장합니다.** 15~30fps로 지속 스트리밍하는 4K 카메라는 지속적인 비트레이트를 생성하며, 이는 다수의 카메라가 있는 현장과 30일의 보존 기간에 걸쳐 카메라 내장 또는 엣지 어플라이언스 가속기의 일회성 비용보다 더 빠르게 전송·저장 비용을 누적시킵니다. 이 페이지 하단의 계산기를 사용하면 본인의 카메라 대수와 보존 기간에 대해 이 계산을 직접 해볼 수 있습니다.',
          '드론은 반대 방향에서 동일한 제약에 직면합니다. 저렴하게 옮기기에는 데이터가 너무 많은 것이 아니라, 의존할 수 있는 신뢰할 만한 링크가 너무 적습니다. 운용 거리에 있는 드론은 간헐적이고 저대역폭이며 때로는 방해받는 무선 링크를 가지고 있으며, 드론이 본 것을 해석하기 위해 지속적인 클라우드 연결에 의존하는 임무는 GPS 교란이나 육안 가시 범위 밖처럼 기체가 자율적으로 행동해야 할 바로 그 순간에 작동을 멈춥니다.',
          '이는 이 사이트의 기존 로컬 LLM 콘텐츠가 소비자·데스크톱 AI에 대해 흔히 사용하는 프라이버시 우선 논거와는 다른 관점입니다. 카메라와 드론의 경우 구매자의 첫 번째 질문은 "이만큼의 영상을 옮길 여유가 있는가, 링크가 계속 유지될 것이라고 믿을 수 있는가"입니다. 프라이버시와 데이터 거주지는 실질적인 부차적 이점이지, 이 아키텍처가 존재하는 이유 자체는 아닙니다.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: '영상 AI가 온디바이스로 이동하는 이유는 전송·저장 비용과 신뢰할 수 없는 무선 링크가 프라이버시가 요인이 되기도 전에 클라우드 의존형 추론을 비현실적으로 만들기 때문입니다.' },
          { type: 'plain-terms', text: '각 카메라의 영상을 서버로 옮기려면 비용이 들고 안정적인 링크가 필요합니다. 촬영된 곳에서 처리하면 두 문제를 모두 피할 수 있습니다.' },
        ],
      },
      architectures: {
        id: 'architectures',
        title: '추론은 카메라 내장, 엣지 어플라이언스, 클라우드 중 어디에서 실행해야 하는가?',
        content: [
          '**오늘날 카메라 영상 AI를 처리하는 아키텍처는 세 가지이며, 대부분의 실제 운영 배치는 그중 최소 두 가지를 결합합니다.** 올바른 선택은 현장당 카메라 대수, 보존 요구 사항, 하드웨어 예산이 대당 비용을 얼마나 흡수할 수 있는지에 달려 있습니다.',
          '**카메라 내장 추론**은 가속기를 카메라 자체에 내장합니다. Hailo-10H와 Hailo-15는 5W 미만의 소비 전력이라는 바로 이 설계 지점을 겨냥합니다. 각 카메라가 자체적으로 판단을 내려야 하고(움직임 감지 녹화, 기기 내 변조 탐지) 카메라의 부품 명세서가 대당 칩 한 개를 흡수할 수 있을 때 이 방식을 사용하십시오.',
          '**현장 엣지 어플라이언스**는 NVIDIA Jetson Orin 또는 Jetson Thor를 실행하는 한 대의 장비에 다수의 카메라 피드를 취합합니다. 현장의 카메라 대수가 개별적으로 장비를 갖추기에 무리일 만큼 많을 때 이 방식을 사용하십시오. Jetson Thor가 최대 32개의 MIPI CSI-2 카메라 입력을 지원한다는 점은 이 플랫폼이 단일 스트림 추론이 아니라 바로 이러한 다중 카메라 취합 역할을 위해 설계되었다는 강력한 신호입니다.',
          '**클라우드 처리**는 실시간 요구 사항이 없고 클립 단위 지연 시간보다 수개월에 걸친 전체 아카이브의 소급 검색이 더 중요하며 소수 스트림의 대역폭 비용이 감당할 만한, 카메라 대수가 적은 현장에는 여전히 적합합니다.',
          '실제로는 이 글의 뒷부분에서 설명하는 대부분의 배치가 하이브리드입니다. 고정 클래스 탐지는 카메라 내장 또는 엣지 어플라이언스에서 지속적으로 실행되고, 클라우드 저장소는 소급 검색을 위한 아카이브를 보유하며, VLM 추론은 더 저렴한 탐지기가 이미 표시한 클립에 대해서만 실행됩니다.',
        ],
      },
      'detection-to-description': {
        id: 'detection-to-description',
        title: '영상 분석은 탐지에서 서술로 어떻게 전환되고 있는가?',
        content: [
          '**영상 분석은 고정 클래스 객체 탐지에서 개방 어휘 VLM 검색으로 이동하고 있으며, 이는 이 시장에서 가장 최근에 일어난 전환입니다.** 고정 클래스 탐지기는 "이 프레임에 사람, 차량, 또는 약 80개의 사전 학습된 COCO 카테고리 중 하나가 있는가?"에 답합니다. 개방 어휘 VLM은 "누군가 하역장 근처에 가방을 두고 간 클립을 찾아줘"처럼 서술된 질의에 대해, 고정 클래스 탐지기가 카테고리로 인식하도록 학습된 적이 전혀 없는 영상을 대상으로 답합니다.',
          '**VLM은 고정 클래스 탐지기를 대체하는 것이 아니라 그 위에서 동작합니다.** 비전-언어 모델은 5W 미만의 전력 예산 안에서 스트림당 초당 30프레임으로 동작하지 않습니다. 완전한 VLM 추론의 연산 및 지연 비용은 그 전력 범위 내에서 프레임 단위로 지속 처리하기에는 너무 높습니다. 대신 고정 클래스 탐지기가 움직임, 존재 여부, 기본 분류와 같은 지속적이고 저전력의 선별 작업을 계속 수행하고, 그것이 표시한 클립만 개방 어휘 서술이나 검색을 위해 VLM으로 전달됩니다.',
          '이러한 이중 계층 설계가 바로 Hailo-10H 같은 카메라 내장 실리콘이 전체 프레임 VLM 프로세서가 아니라 "엣지의 GenAI" 가속기로 설명되는 이유입니다. 이 칩은 지속적인 경량 탐지 위에서 트리거되고 간헐적인 VLM 추론을 위해 설계된 것이지, 전체 프레임 속도로 비전-언어 모델을 구동하기 위한 것이 아닙니다.',
        ],
        items: [
          '고정 클래스 탐지: 지속적, 저전력, "이것이 N개의 사전 학습된 카테고리 중 하나인가?"에 답함',
          '개방 어휘 VLM 검색: 트리거 방식, 소비 전력이 더 높음, 특정 클립에 대한 자연어 서술에 답함',
          '둘은 경쟁 관계가 아니라 보완 관계입니다. 탐지기가 VLM에 무엇을 보여줄지 결정하며 그 반대는 아닙니다',
          '데스크톱·서버급 VLM 구성(LLaVA, Qwen3-VL 등 유사 모델)은 이러한 트리거 방식 클립 분석에 사용되는 것과 동일한 모델 계열을 공유합니다. 임베디드 배치를 평가하기 전에 [아래의 데스크톱 VLM 비교](#related-reading)를 참고하십시오',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: '개방 어휘 VLM 검색은 고정 클래스 탐지기가 카테고리로 인식하도록 학습된 적이 없는 영상에서 서술된 이벤트를 찾아내지만, 모든 프레임이 아니라 트리거된 클립에서만 동작합니다.' },
          { type: 'plain-terms', text: '예전 방식: "사람/자동차/개와 일치하는 모든 것을 표시하라." 새로운 방식: "부두 근처에 가방을 두고 간 클립을 찾아줘" — 더 저렴한 탐지기가 이미 클립을 표시한 뒤, 자신의 말로 표현하는 것입니다.' },
        ],
      },
      'bandwidth-calculator': {
        id: 'bandwidth-calculator',
        title: '카메라 현장에 실제로 필요한 대역폭과 저장 공간은 얼마인가?',
        content: [
          '**아래에 카메라 대수, 해상도, 프레임 속도, 보존 기간을 입력하면 지속적인 대역폭과 저장 비용을 산정할 수 있습니다.** 카메라 내장, 엣지 어플라이언스, 클라우드 아키텍처 중 하나를 선택하기 전에 이용하십시오. 산출된 숫자가 대개 그 논쟁을 스스로 해결해 줍니다.',
        ],
        component: 'EdgeVideoBandwidthCalculator',
      },
      'evaluation-steps': {
        id: 'evaluation-steps',
        title: '카메라 또는 드론 VLM 배치는 어떻게 평가하는가?',
        content: [
          '**여섯 가지 점검이 현장에서 작동하는 배치와 실패하는 배치를 가릅니다.** 특정 실리콘 플랫폼에 결정하기 전에 이 순서대로 실행하십시오.',
        ],
        numberedItems: [
          { title: '스트림이 아니라 트리거를 정의하라', whyItMatters: '하드웨어를 선택하기 전에 어떤 이벤트가 VLM 추론을 촉발하는지(움직임, 고정 클래스 탐지기의 경보, 예약된 간격) 결정하십시오. 모든 스트림의 모든 프레임에 대해 VLM을 실행하는 것은 2026년에 존재하는 전력이나 비용 예산이 아닙니다.' },
          { title: '실리콘을 선택하기 전에 링크 예산을 측정하라', whyItMatters: '드론의 경우, 연산 플랫폼을 선택하기 전에 운용 거리에서 이용 가능한 업링크 대역폭과 최악의 경우 지연 시간을 측정하십시오. 연산 칩이 아니라 기체의 무선 링크가 보통 구속 제약입니다.' },
          { title: '탐지와 서술을 별개의 단계로 유지하라', whyItMatters: '경량 고정 클래스 탐지기를 지속적으로 실행하고 표시된 클립만 VLM으로 전달하십시오. 이것이 VLM 추론을 카메라나 드론의 전력 예산에 맞추는 유일한 방법입니다.' },
          { title: '전력 예산을 물리적 인클로저에 맞춰라', whyItMatters: '팬이 없는 카메라 인클로저는 열 설계 예산을 약 5W로 제한합니다. 드론 페이로드는 소비 전력만이 아니라 무게와 비행 시간의 절충으로 제한됩니다. 실리콘을 인클로저에 맞춰 설계하십시오, 그 반대가 아닙니다.' },
          { title: '임무가 GPS나 명령 링크를 잃을 수 있다면 GPS 없는 운용을 검증하라', whyItMatters: '시각-관성 오도메트리(VIO)는 육안 가시 범위 밖이나 교란된 전자기 환경에서 신뢰하기 전에 작동한다고 가정하지 말고 구체적으로 테스트해야 합니다.' },
          { title: '확장하기 전에 한 현장이나 한 기체에서 시범 운영하라', whyItMatters: '전체 함대 규모의 배치에 예산을 투입하기 전에 단일 배치에서 오탐율, 질의 지연 시간, 배터리·열 거동을 검증하십시오.' },
        ],
      },
      'drones-onboard': {
        id: 'drones-onboard',
        title: '드론은 왜 영상을 스트리밍하는 대신 기체 내부에서 처리하는가?',
        content: [
          '**드론이 연산을 기체로 옮기는 데는 세 가지 이유가 있습니다: 링크 여유, 지연 시간, GPS 없는 항법이며, 기체 탑재 연산이 더 저렴해서가 아닙니다.** 드론의 무선 링크는 거리, 지형, 간섭에 따라 고정 카메라의 이더넷 케이블은 결코 겪지 않는 방식으로 저하됩니다. 영상을 해석하기 위해 지속적인 클라우드 연결에 의존하는 임무는 기체가 조종자로부터 가장 멀리 있고 자율성이 가장 필요한 바로 그 순간에 실패합니다.',
          '**Qualcomm QRB5165를 중심으로 구축된 ModalAI의 VOXL 2는 기체 탑재 연산 설계의 기준 플랫폼입니다.** PX4와 호환되며, 위성 측위가 불가능하거나 교란될 때 항법을 위한 GPS 없는 시각-관성 오도메트리(VIO)를 지원하고, 자율비행, 연산, 항법 센서를 약 16g의 자율비행 등급 모듈에 담고 있습니다. 이는 별도의 전원 공급 장치가 아니라 페이로드 및 배터리와 동일한 무게 예산을 두고 경쟁할 만큼 작습니다.',
          '**무게와 전력은 벽에 고정된 카메라에는 해당하지 않는 방식으로 기체에는 엄격한 제약입니다.** 기체 탑재 연산의 그램 하나하나가 배터리 용량, 센서 페이로드, 비행 지속 시간에 사용할 수 없는 그램입니다. 드론 플랫폼은 현장 카메라 사이트가 엣지 어플라이언스를 추가할 수 있는 것처럼 단순히 랙 유닛을 추가할 수 없습니다.',
        ],
        items: [
          '링크 여유: 무선 연결성은 거리, 지형, 간섭받는 스펙트럼에 따라 유선 카메라 인프라가 겪지 않는 방식으로 저하됩니다',
          '지연 시간: 실시간 판단(장애물 회피, 표적 추적)은 클라우드 서버로의 왕복을 기다릴 수 없습니다',
          'GPS 없는 항법: 시각-관성 오도메트리는 위성 측위가 불가능할 때도 기체가 위치와 방향을 유지할 수 있게 합니다',
          '무게 예산: 약 16g급의 자율비행 연산 모듈은 고정된 카메라의 인클로저와 달리 배터리 및 페이로드와 직접 경쟁합니다',
        ],
      },
      'commercial-applications': {
        id: 'commercial-applications',
        title: '카메라와 드론 VLM은 이미 어디에서 상업적으로 사용되고 있는가?',
        content: [
          '**네 가지 상업 분야가 오늘날 실제 배치의 대부분을 차지합니다: 인프라·공공설비 점검, 정밀 농업, 측량 및 지도 제작, 공공 안전입니다.**',
        ],
        items: [
          '인프라·공공설비 점검: 기체 탑재 연산을 갖춘 드론이 송전선, 파이프라인, 통신탑을 점검하며, 검토를 위해 원본 영상을 스트리밍하지 않고도 육안으로 확인 가능한 결함을 표시합니다',
          '정밀 농업: 기체 탑재 비전은 필지별로 작물 스트레스, 잡초 압력, 관개 문제를 구분하며, 연결이 취약한 농촌 지역에서 지속적인 클라우드 연결에 의존하지 않고 농장 관리 시스템에 의사 결정을 반영합니다',
          '측량 및 지도 제작: 사진측량·점검 드론은 기체 탑재 또는 엣지 어플라이언스에서 이미지를 처리하여 비행마다 전송·저장해야 하는 원본 데이터의 양을 줄입니다',
          '공공 안전: 고정 카메라 네트워크는 지속적인 고정 클래스 탐지와 트리거 방식 VLM 검색을 결합합니다. 예를 들어 몇 시간 분량의 영상을 수동으로 검토하는 대신 서술된 사건을 아카이브에서 검색합니다',
        ],
        callouts: [
          { type: 'note', text: '군사 프로그램도 이 실리콘 시장을 형성하고 있습니다. Shield AI의 자율 소프트웨어 Hivemind는 미 공군의 협업 전투 항공기(CCA) YFQ-44A 프로그램에 선정되었으며, Anduril의 Lattice 소프트웨어도 동일한 기체에서 테스트되었습니다. 자율 시스템 스택에 대한 이러한 프로그램 차원의 수요는 엣지 추론 실리콘 투자를 이끄는 요인 중 하나이지만, 국방 프로그램의 인증 경로, 구매 주체, 요구 사항은 위에서 설명한 상업적 배치와는 완전히 다르며 이 가이드의 범위를 벗어납니다.' },
        ],
      },
      'platform-comparison': {
        id: 'platform-comparison',
        title: '비교: 카메라와 드론을 위한 연산 플랫폼',
        content: [
          'Jetson Orin과 Jetson Thor의 전체 사양은 [엣지 실리콘 가이드](/ko/local-llms/edge-ai-hardware-for-local-llms)를 참고하십시오. 이 표는 영상 분석과 가장 관련 있는 카메라·드론 전용 플랫폼에 초점을 맞춥니다.',
        ],
        columns: ['플랫폼', '전력 예산', '최적 용도', '상태'],
        rows: [
          { 플랫폼: 'Hailo-10H / Hailo-15', '전력 예산': '5W 미만', '최적 용도': '카메라 내장 GenAI, VLM 선별', 상태: 'ISC West 2026에서 공개' },
          { 플랫폼: 'Ambarella N 시리즈', '전력 예산': '엣지 AI 비전 SoC', '최적 용도': '8K 멀티센서 인식', 상태: 'CES 2026에서 출시' },
          { 플랫폼: 'NVIDIA Jetson Orin / Thor', '전력 예산': '15~130W급', '최적 용도': '다중 카메라 엣지 어플라이언스', 상태: 'Thor: 최대 32개 MIPI 카메라' },
          { 플랫폼: 'Qualcomm QRB5165(VOXL 2)', '전력 예산': '드론급 모듈', '최적 용도': '자율비행 + VIO + 추론', 상태: 'PX4 호환, 약 16g' },
        ],
      },
      'buying-categories': {
        id: 'buying-categories',
        title: '시작하려면 어떤 하드웨어가 필요한가?',
        content: [
          '**네 가지 하드웨어 범주가 대부분의 카메라·드론 VLM 프로젝트를 다룹니다. 가격이 자주 변동하므로 현재 판매점과 유통업체의 목록을 확인하십시오.**',
        ],
        items: [
          '카메라 모듈과 개발 키트: 엣지 가속기와 결합한 레퍼런스 카메라 보드로, 맞춤형 카메라 설계를 확정하기 전에 카메라 내장 파이프라인을 프로토타이핑하는 데 사용',
          'Hailo M.2 가속기 모듈: M.2 슬롯을 통해 기존 카메라나 임베디드 연산 보드에 5W 미만의 AI 추론을 추가하며, 카메라의 메인보드를 재설계할 필요가 없음',
          '엣지 영상 어플라이언스: NVIDIA Jetson Orin과 Jetson Thor 개발 키트로, 현장 어플라이언스 함대를 배치하기 전에 위에서 설명한 다중 카메라 취합 아키텍처를 프로토타이핑하는 데 사용',
          '드론 개발 플랫폼: ModalAI VOXL 2 개발 키트로, 양산 기체에 통합하기 전에 PX4 기반 자율비행 및 기체 탑재 추론 파이프라인을 프로토타이핑하는 데 사용',
        ],
      },
      'locallens-limits': {
        id: 'locallens-limits',
        title: '온디바이스에서 아직 불가능한 것은 무엇인가?',
        content: [
          '**세 가지 역량은 2026년 기준으로 여전히 클라우드급이거나 연구 단계에 머물러 있으며, 올해 안에 카메라·드론급 가속기가 이를 바꾸지는 않습니다.**',
        ],
        items: [
          '장시간 영상 이해: 트리거 방식 클립 분석이 아니라 몇 시간에 걸친 전체 녹화 분량을 한 번에 추론하는 것은 여전히 엣지 가속기의 메모리와 연산 예산을 초과합니다',
          '대규모 카메라 간 재식별: 서술된 대상을 다수의 카메라 피드와 현장에 걸쳐 신뢰성 있게 추적하는 것은 여전히 전체 다중 카메라 아카이브에 접근할 수 있는 중앙 집중식 시스템에 더 적합한 작업입니다',
          '몇 시간 분량의 영상에 걸친 넓은 컨텍스트: 특정하게 표시된 클립이 아니라 하루 전체 녹화 분량에 걸쳐 추론해야 하는 개방 어휘 질의는 여전히 엣지 가속기의 전력 예산이 지원하는 것보다 더 많은 컨텍스트와 연산을 필요로 합니다',
        ],
      },
      jurisdiction: {
        id: 'jurisdiction',
        title: '어떤 관할 규정과 조달 규칙이 적용되는가?',
        content: [
          '**한국에서는 국토교통부(MOLIT)가 무인비행장치 신고·등록과 위험도에 따른 비행 등급 및 조종자 자격 체계를 관리합니다.** 한국에서 카메라·드론 프로젝트를 진행할 때 MOLIT에 대한 기체 신고와 비행 등급 구분은 단순한 형식 절차가 아닙니다. 이는 추가 승인 없이 운용할 수 있는 자율 기능(예: 자동 탐지·대응 로직)을 결정합니다. 시스템 통합 담당자는 하드웨어와 자율 기능을 사양화하기 전에 예상되는 비행 등급과 필요한 승인·조종자 자격을 MOLIT 기준으로 먼저 확인해야 합니다.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '카메라와 드론 AI 시스템은 왜 클라우드가 아니라 온디바이스에서 추론을 실행하나요?',
            a: '프라이버시가 아니라 대역폭과 통신 링크의 한계가 주된 이유입니다. 지속적인 4K 카메라 스트림은 보존 기간 전체로 보면 로컬에서 처리하는 가속기보다 전송·저장 비용이 더 들고, 운용 거리에 있는 드론은 클라우드 의존을 견딜 수 없는 간헐적이고 때로는 방해받는 무선 링크를 가지고 있습니다.',
          },
          {
            q: '고정 클래스 탐지와 개방 어휘 VLM 검색의 차이는 무엇인가요?',
            a: '고정 클래스 탐지기는 프레임에 사전 학습된 카테고리 집합(일반적인 COCO 학습 모델에서 약 80개) 중 하나가 포함되어 있는지에 답합니다. 개방 어휘 VLM은 "누군가 하역장 근처에 가방을 두고 간 클립을 찾아줘"처럼 서술된 질의에 대해, 고정 클래스 탐지기가 카테고리로 인식하도록 학습된 적이 없는 콘텐츠를 대상으로 답합니다.',
          },
          {
            q: '비전-언어 모델이 5W 미만의 카메라 가속기에서 실시간으로 동작할 수 있나요?',
            a: '전체 프레임 속도로는 불가능합니다. VLM은 5W 미만의 전력 예산 안에서 스트림당 초당 30프레임으로 동작하지 않습니다. 실제로는 경량 고정 클래스 탐지기가 저전력으로 지속 실행되고, 표시된 클립만 개방 어휘 서술을 위해 VLM으로 전달됩니다. VLM은 트리거된 클립에서 동작하며 모든 프레임에서 동작하지 않습니다.',
          },
          {
            q: '상업용 드론은 기체 탑재 AI를 위해 어떤 연산 플랫폼을 사용하나요?',
            a: 'Qualcomm QRB5165를 중심으로 구축된 ModalAI의 VOXL 2는 널리 사용되는 기준 플랫폼입니다. PX4와 호환되며, 항법을 위한 GPS 없는 시각-관성 오도메트리를 지원하고, 자율비행, 연산, 항법 센서를 약 16g 모듈에 담고 있습니다.',
          },
          {
            q: '단일 4K 보안 카메라는 실제로 얼마나 많은 대역폭이 필요한가요?',
            a: '프레임 속도, 장면 복잡도, 코덱에 따라 달라집니다. 하나의 대략적인 수치에 의존하기보다는 이 페이지의 [대역폭 계산기](#bandwidth-calculator)를 사용해 본인의 카메라 대수, 해상도, 프레임 속도, 보존 기간에 대해 지속적인 대역폭과 저장 비용을 산정하십시오.',
          },
          {
            q: '새 카메라 설계에는 Hailo-10H와 Ambarella N 시리즈 중 무엇을 선택해야 하나요?',
            a: '둘은 겹치지만 서로 다른 지점을 겨냥합니다. Hailo-10H와 Hailo-15는 5W 미만의 카메라 내장 GenAI 추론에 초점을 맞추는 반면, Ambarella N 시리즈(CES 2026 출시)는 멀티센서 인식을 갖춘 8K 엣지 AI 비전 SoC로 포지셔닝되어 있습니다. 올바른 선택은 목표 해상도, 전력 예산, 동일 칩 내 멀티센서 융합이 필요한지 여부에 달려 있습니다.',
          },
          {
            q: '드론에 GPS 없는 항법이 필요한 이유는 무엇이며, VOXL 2는 이를 어떻게 처리하나요?',
            a: 'GPS 신호는 교란되거나 스푸핑되거나 실내 또는 분쟁 환경에서 단순히 이용 불가할 수 있습니다. VOXL 2는 시각-관성 오도메트리(VIO)를 지원하여 카메라와 관성 센서 데이터를 융합해 위성 측위에 의존하지 않고 위치와 방향을 추정합니다.',
          },
          {
            q: '한국에서 상업용 드론 점검에는 어떤 MOLIT 비행 등급이 적용되나요?',
            a: '운용 내용에 따라 다릅니다. 국토교통부(MOLIT)는 기체 신고·등록과 위험도 기반 비행 등급 체계를 관리하며, 인프라·산업 시설 점검에는 대개 특정 승인이나 조종자 자격이 요구됩니다. 시스템 통합 담당자는 하드웨어와 자율 기능을 사양화하기 전에 해당하는 등급과 필요한 승인을 MOLIT 기준으로 확인해야 합니다.',
          },
          {
            q: '엣지 어플라이언스가 필요한가요, 아니면 각 카메라가 단독으로 추론을 실행할 수 있나요?',
            a: '현장당 카메라 대수에 따라 다릅니다. 소수의 카메라라면 각각 독립적으로 카메라 내장 추론을 실행할 수 있습니다(Hailo-10H/15급 칩). 카메라가 많은 현장은 대개 피드를 중앙에서 취합하는 현장 엣지 어플라이언스(NVIDIA Jetson Orin 또는 Thor)의 혜택을 봅니다. Jetson Thor가 한 대에서 최대 32개의 MIPI CSI-2 카메라 입력을 지원한다는 점은 의도된 다중 카메라 역할을 보여주는 강력한 신호입니다.',
          },
          {
            q: '온디바이스 VLM은 영상 분석에서 아직 무엇을 할 수 없나요?',
            a: '세 가지 역량이 2026년 기준으로 여전히 클라우드급이거나 연구 단계입니다: 몇 시간에 걸친 전체 녹화 분량을 한 번에 추론하는 장시간 추론, 대규모로 한 대상을 여러 카메라에 걸쳐 재식별하는 것, 그리고 특정하게 표시된 클립이 아니라 하루 전체 녹화 분량에 걸친 컨텍스트가 필요한 개방 어휘 질의입니다.',
          },
        ],
      },
      'related-reading': {
        id: 'related-reading',
        title: '관련 자료',
        content: [
          '데스크톱 VLM의 기초는 [Best Local Vision Models 2026: LLaVA, Qwen3-VL & Ollama](/ko/power-local-llm/local-vision-models-llava-ollama-2026)를 참고하시고, 임베디드·카메라 배치를 위해서는 이 문서로 돌아오십시오. 그 가이드는 데스크톱·서버급 비전-언어 모델 설정을 다루며, 이 문서는 전력, 대역폭, 기체 무게라는 카메라·드론 고유의 제약을 다룹니다.',
        ],
        items: [
          '[로컬 LLM을 위한 엣지 AI 하드웨어](/ko/local-llms/edge-ai-hardware-for-local-llms) — 위 비교표에서 참조한 Jetson Orin 및 Jetson Thor 플랫폼의 전체 사양',
          '[로봇을 위한 VLA 모델: 로컬 추론](/ko/local-llms/vla-models-robots-local-inference) — 영상 이해가 아니라 로봇 행동 모델에 적용된 동일한 실리콘 제약을 다루는 자매 글',
          '[로컬 LLM 보안 및 프라이버시 체크리스트](/ko/local-llms/local-llm-security-privacy-checklist) — 영상 분석이 온디바이스로 이동한 뒤에도 여전히 적용되는 데이터 처리 고려 사항',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '카메라와 드론의 VLM 2026: 온디바이스 영상 이해',
      description:
        '카메라와 드론이 VLM 추론을 온디바이스로 옮기는 이유는 프라이버시가 아니라 대역폭입니다. Hailo, Ambarella, Jetson, VOXL 2를 2026년 실제 배치 기준으로 비교합니다.',
      datePublished: '2026-09-02',
      dateModified: '2026-09-02',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
        sameAs: 'https://www.linkedin.com/in/hanskuepper/',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      inLanguage: 'ko',
      url: 'https://www.promptquorum.com/ko/local-llms/vlm-video-analytics-drones-edge',
      image: 'https://www.promptquorum.com/images/vlm-video-analytics-drones-edge-hero-ko.webp',
      educationalLevel: 'Advanced',
      proficiencyLevel: 'Advanced',
      audience: {
        '@type': 'Audience',
        audienceType: '시스템 통합 담당자, 영상 보안 아키텍트, 상업용 드론 운영 책임자',
      },
      about: [
        { '@type': 'Thing', name: '비전-언어 모델' },
        { '@type': 'Thing', name: '엣지 AI' },
        { '@type': 'Thing', name: '영상 분석' },
        { '@type': 'Thing', name: '드론 자율성' },
      ],
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways'],
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/ko/local-llms/vlm-video-analytics-drones-edge',
      },
    },
  },
}
