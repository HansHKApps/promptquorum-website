// Slug: what-is-balcony-solar
// BSOL-01 — Tier 1 hub/explainer, evergreen. Cluster anchor other articles link to.
import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'evergreen',
    theme: 'Balcony Solar Foundations',
    title: 'What Is Balcony Solar? Plug-In Solar Panels Explained',
    seoTitle: 'Balcony Solar Explained: How Plug-In Solar Panels Work',
    intro: 'Balcony solar — also called plug-in solar or "Balkonkraftwerk" in its origin market of Germany — lets renters and apartment owners generate their own electricity without a rooftop installation. A small panel-and-inverter kit plugs directly into a standard wall outlet and feeds power into your home\'s existing wiring.',
    metaDescription: 'Balcony solar plugs a small panel and micro-inverter into a wall outlet to offset home electricity use — no roof, no electrician, no long-term contract required.',
    publishDate: '2026-07-02',
    dateModified: '2026-07-02',
    readTime: '8 min read',
    educationalLevel: 'Beginner',
    audience: 'Renters and apartment owners exploring solar options without a rooftop installation',
    primaryTerm: 'balcony solar',
    targetKeywords: ['what is balcony solar', 'plug in solar panels', 'balkonkraftwerk explained', 'balcony solar system', 'plug in solar kit'],
    leadAnswerBlock: '**Balcony solar is a small, self-installed solar system — typically one or two panels plus a micro-inverter — that plugs into a standard wall outlet and offsets a portion of your home\'s electricity use.** Unlike rooftop solar, it requires no roof space, no electrician, and no permanent structural change, which is why it originated as an apartment-friendly alternative in Germany before spreading to other markets.',
    quickAnswerTop: {
      en: {
        question: 'What is balcony solar?',
        answer: 'Balcony solar is a plug-in solar power system — one or two panels connected to a micro-inverter that plugs into a standard household outlet. It feeds electricity directly into your home\'s wiring, reducing the amount you draw from the grid, without any rooftop installation or electrician visit.',
        bullets: [
          'Mounts on a railing, wall, or ground stand — no roof required',
          'Plugs into a standard outlet via the micro-inverter, not a dedicated circuit',
          'Reduces grid electricity draw rather than replacing your whole supply',
          'Owned outright and portable — take it with you when you move',
          'Originated in Germany ("Balkonkraftwerk") and has since spread to other markets',
        ],
        updatedDate: '2026-07-02',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'What Is a Balcony Solar System?', anchor: '#what-is-it' },
      { label: 'How Does Balcony Solar Work?', anchor: '#how-it-works' },
      { label: 'How Does Balcony Solar Differ From Rooftop Solar?', anchor: '#vs-rooftop' },
      { label: 'Who Should Consider Balcony Solar?', anchor: '#who-its-for' },
      { label: 'Is Balcony Solar Legal Where You Live?', anchor: '#legality' },
      { label: 'What Does Balcony Solar Cost — and Save?', anchor: '#costs' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Balcony solar is a plug-in panel-and-inverter kit that offsets household electricity use — no roof, no electrician, no permanent installation.',
          'It differs from rooftop solar in scale, ownership model, and installation complexity: rooftop systems are larger, professionally installed, and often financed; balcony systems are small, self-installed, and owned outright from day one.',
          'Legality and power limits vary significantly by country and, in the US, by state — always confirm local rules before buying.',
          'Balcony solar will not power a whole home; it offsets a portion of baseline consumption (devices that run continuously, like a fridge or router).',
          'The system is portable — because it is plugged in rather than hardwired, you can take it with you when you move.',
          'Renters are the primary audience, but owners in condos, HOAs, or without roof access also use balcony solar.',
        ],
      },
      whatIsIt: {
        id: 'what-is-it',
        title: 'What Is a Balcony Solar System (Balkonkraftwerk)?',
        content: [
          '**A balcony solar system is a compact, plug-in solar power kit — usually one or two panels feeding a micro-inverter that connects to a standard wall outlet.** The micro-inverter converts the panel\'s direct current (DC) output into the alternating current (AC) your home\'s appliances use, and synchronizes it with your grid connection.',
          'The term "Balkonkraftwerk" (literally "balcony power plant") comes from Germany, where the format was pioneered and remains most established. Outside Germany the same product category is usually called "plug-in solar," "patio solar," or simply a "solar balcony kit."',
          'A typical kit includes the panel(s), a mounting bracket for a railing, wall, or ground stand, cabling, and the micro-inverter itself. Some kits add a small battery to store surplus daytime power for evening use.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Balcony solar is a plug-in panel-and-micro-inverter kit that generates household electricity without a rooftop installation.' },
          { type: 'plain-terms', text: 'Think of it like a phone charger for your house: plug the panel setup into an outlet, and it quietly feeds power into your home instead of drawing all of it from the grid.' },
        ],
      },
      howItWorks: {
        id: 'how-it-works',
        title: 'How Does Balcony Solar Work?',
        content: [
          '**Power flows in three steps: panel captures sunlight, micro-inverter converts it to usable AC power, and that power feeds into your home\'s wiring through the outlet it\'s plugged into.** There is no battery requirement — the system simply supplies power to whatever is drawing electricity in your home at that moment.',
          'Because the system doesn\'t know which appliance is using the power, it effectively lowers the *net* amount your electricity meter counts against you. If the panel produces more than your home is using at that instant, the surplus goes unused (or to a battery, if the kit includes one) rather than being sold back to the grid — most balcony systems are configured for "zero export," which also simplifies the legal and registration picture in most markets.',
        ],
        numberedItems: [
          'Sunlight hits the panel(s), generating DC electricity',
          'The micro-inverter converts DC to grid-synchronized AC',
          'The AC output feeds through the wall outlet into your home\'s circuit',
          'Whatever appliances are actively running draw from that local supply first, reducing grid draw',
        ],
        callouts: [
          { type: 'tip', text: 'Most micro-inverters ship with a companion app that reports your production data to the manufacturer\'s cloud by default. That\'s not a technical requirement of how balcony solar works — some hardware exposes a local API instead, letting you monitor everything through Home Assistant with nothing leaving your home network. See [no-cloud balcony solar](/balcony-solar/home-assistant-balcony-solar-no-cloud) if keeping your production data local matters to you.' },
        ],
      },
      vsRooftop: {
        id: 'vs-rooftop',
        title: 'How Does Balcony Solar Differ From Rooftop Solar?',
        content: [
          '**Balcony solar is smaller, self-installed, and owned outright; rooftop solar is larger, professionally installed, and often financed over many years.** The two serve different needs rather than competing head-to-head — see the [full balcony vs. rooftop breakdown](/balcony-solar/balcony-vs-rooftop-solar) for a complete decision framework.',
        ],
        rows: [
          { factor: 'Installation', balcony: 'Self-install, no electrician required in most markets', rooftop: 'Licensed installer, permits, structural assessment' },
          { factor: 'Scale', balcony: 'One to a few hundred watts', rooftop: 'Several kilowatts, sized to whole-home use' },
          { factor: 'Ownership', balcony: 'Own outright, take it when you move', rooftop: 'Often financed or leased, tied to the property' },
          { factor: 'Grid interaction', balcony: 'Typically zero-export, offsets local use only', rooftop: 'Commonly exports surplus for credit or payment' },
          { factor: 'Who it suits', balcony: 'Renters, condo owners, no-roof-access households', rooftop: 'Homeowners with roof access and long tenure plans' },
        ],
        columns: ['factor', 'balcony', 'rooftop'],
        tableFormat: true,
      },
      whoItsFor: {
        id: 'who-its-for',
        title: 'Who Should Consider Balcony Solar?',
        content: [
          '**Balcony solar suits anyone who wants to reduce electricity costs without rooftop access, a long-term contract, or professional installation.** That covers a wider group than "renters" alone.',
        ],
        items: [
          'Renters who cannot modify a roof or sign a long-term solar contract on a property they don\'t own',
          'Condo and apartment owners in buildings where rooftop or HOA-level solar isn\'t an option',
          'Homeowners who want to test solar at low cost and low commitment before considering rooftop',
          'Anyone drawn to the local-control angle — see [running balcony solar without the cloud](/balcony-solar/home-assistant-balcony-solar-no-cloud)',
        ],
        callouts: [
          { type: 'warning', text: 'Balcony solar will not power a whole home or run high-draw appliances like an AC unit or oven on its own — it offsets baseline consumption, not total demand.' },
        ],
      },
      legality: {
        id: 'legality',
        title: 'Is Balcony Solar Legal Where You Live?',
        content: [
          '**Legality, power limits, and registration requirements vary substantially by country — and within the US, by state.** Some markets have a dedicated simplified regime for small plug-in systems; others fold balcony solar into the same rules as full rooftop installations, with no lighter-touch path.',
          'Because these rules change as legislatures and regulators act, always check verified status for your specific location before buying rather than relying on a general assumption either way.',
        ],
        links: [
          { url: '/balcony-solar/is-balcony-solar-legal-country-guide', title: 'Is Balcony Solar Legal? Country-by-Country Guide', description: 'Full legal status tracker across every major market' },
        ],
      },
      costs: {
        id: 'costs',
        title: 'What Does Balcony Solar Cost — and Save?',
        content: [
          '**Balcony solar costs far less upfront than rooftop solar — typically a small fraction of a full rooftop system\'s price — because it requires no professional installation and covers a much smaller generating capacity.** Savings depend heavily on local electricity prices, how much sun your balcony or wall gets, and how well your usage pattern lines up with daylight hours (a system does the most good when something is drawing power while the sun is out).',
          'For kit pricing and a savings/payback estimate for your country, see the dedicated pages below rather than relying on a single global number — hardware costs and electricity prices both vary enough by market that a one-size figure would be misleading.',
        ],
        links: [
          { url: '/balcony-solar/best-balcony-solar-kits-2026', title: 'Best Balcony Solar Kits', description: 'Current buyer\'s guide with pricing by category' },
          { url: '/balcony-solar/balcony-solar-payback-worth-it-2026', title: 'Is Balcony Solar Worth It? Payback Explained', description: 'Country-by-country payback estimates' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Do I need an electrician to install balcony solar?', a: 'In most markets that permit balcony solar, no — the system is designed to plug into a standard outlet without professional installation. Some markets require a licensed electrician above certain power thresholds, so check local requirements first.' },
          { q: 'Can balcony solar power my whole apartment?', a: 'No. Balcony solar offsets a portion of your baseline electricity use — devices that draw power continuously, like a refrigerator or router — rather than replacing your full electricity supply.' },
          { q: 'Do I need permission from my landlord or HOA?', a: 'Often yes, particularly for anything visibly mounted on a railing or exterior wall. Rules vary by building, HOA, and jurisdiction — some regions have passed "right to solar" style protections for renters, but this is not universal.' },
          { q: 'What happens to excess power my panel generates?', a: 'Most balcony systems are configured for zero export, meaning any surplus beyond what your home is actively using goes unused rather than being sold back to the grid. Some kits include a small battery to store surplus for later use instead.' },
          { q: 'Is balcony solar the same as a portable solar generator?', a: 'No. A portable solar generator charges an internal battery you carry and plug devices into directly. Balcony solar feeds power into your home\'s existing wiring through a wall outlet and does not require carrying a battery pack around.' },
          { q: 'How long does a balcony solar system last?', a: 'Panels are typically rated for 20-25 years of production, similar to rooftop panels, though real-world lifespan depends on build quality and weather exposure. Micro-inverters generally carry shorter warranty periods than panels.' },
          { q: 'Can I take my balcony solar system with me when I move?', a: 'Yes — this is one of balcony solar\'s core advantages over rooftop solar. Because it\'s plugged in rather than hardwired or structurally mounted, the entire kit can be unmounted and reinstalled at a new home.' },
          { q: 'Does balcony solar work if I don\'t have a balcony?', a: 'Yes. Despite the name, balcony solar kits also mount on exterior walls, railings, ground stands, or flat roofs — a true balcony is common but not required.' },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'What Is Balcony Solar? Plug-In Solar Panels Explained',
      description: 'Balcony solar plugs a small panel and micro-inverter into a wall outlet to offset home electricity use — no roof, no electrician, no long-term contract required.',
      datePublished: '2026-07-02',
      dateModified: '2026-07-02',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
        sameAs: 'https://www.linkedin.com/in/hanskuepper/',
      },
      url: 'https://www.promptquorum.com/balcony-solar/what-is-balcony-solar',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro'] },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: { '@type': 'Audience', audienceType: 'Renters and apartment owners exploring solar options without a rooftop installation' },
      about: ['Balcony solar', 'Plug-in solar', 'Balkonkraftwerk', 'Micro-inverter', 'Residential solar'],
    },
  },
};
