// Slug: balcony-solar-mounting-guide
// BSOL-10 — Tier 2 how-to, evergreen.
import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'evergreen',
    theme: 'Balcony Solar Foundations',
    title: 'Balcony Solar Mounting Guide: Railing, Wall, Ground & Flat Roof',
    seoTitle: 'Balcony Solar Mounting Guide: Every Surface Type',
    intro: 'Not every balcony solar setup actually mounts on a railing — walls, ground stands, and flat roofs all work too, and each has different wind-load, angle, and safety considerations. Picking the right mounting method for your specific surface matters more than most buyers expect.',
    metaDescription: 'How to mount balcony solar on a railing, wall, ground stand, or flat roof — tilt angle guidance and wind safety considerations for each surface type.',
    publishDate: '2026-07-02',
    dateModified: '2026-07-02',
    readTime: '9 min read',
    educationalLevel: 'Intermediate',
    audience: 'Balcony solar buyers choosing a mounting method for their specific surface',
    primaryTerm: 'balcony solar mounting',
    targetKeywords: ['balcony solar mounting', 'railing mount solar panel', 'balcony solar wall mount', 'balcony solar tilt angle', 'balcony solar ground mount'],
    leadAnswerBlock: '**Balcony solar panels mount on railings, walls, ground stands, or flat roofs — the right choice depends on your available surface, not just the panel itself, and each method has a different wind-load and tilt-angle profile you need to account for.** Railing mounts are the most common and typically the fastest to install; ground and flat-roof mounts offer the most tilt-angle flexibility but need more careful wind-load planning.',
    quickAnswerTop: {
      en: {
        question: 'What are my mounting options for balcony solar?',
        answer: 'Four main options exist: railing mount (fastest, most common for apartment balconies), wall mount (for surfaces without a usable railing), ground or garden mount (most tilt-angle flexibility), and flat-roof/ballast mount (for terraces or flat roof access, no drilling required). Each has different wind-load and angle considerations — choose based on your available surface, not preference alone.',
        bullets: [
          'Railing mount: fastest, most common, works on most standard apartment balcony railings',
          'Wall mount: needed when there\'s no usable railing or when angling toward better sun exposure matters more than convenience',
          'Ground/garden mount: most tilt-angle flexibility, good for houses with garden or patio space',
          'Flat-roof/ballast mount: uses weighted stands rather than drilling, common for terraces',
          'Wind load rating matters more than mounting method choice — check it regardless of which surface you use',
        ],
        updatedDate: '2026-07-02',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Railing Mount', anchor: '#railing-mount' },
      { label: 'Wall Mount', anchor: '#wall-mount' },
      { label: 'Flat-Roof / Ballast Mount', anchor: '#flat-roof-mount' },
      { label: 'Ground / Garden Mount', anchor: '#ground-mount' },
      { label: 'Tilt Angle by Latitude', anchor: '#tilt-angle' },
      { label: 'Wind & Safety', anchor: '#wind-safety' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Four main mounting methods exist: railing, wall, ground/garden, and flat-roof/ballast — chosen based on available surface, not preference alone.',
          'Railing mount is the fastest and most common for standard apartment balconies.',
          'Ground and flat-roof mounts offer the most tilt-angle flexibility but need more careful wind-load planning.',
          'Flat-roof/ballast mounts use weighted stands rather than drilling, useful when you can\'t or don\'t want to penetrate the roof surface.',
          'Tilt angle affects yield, but for most balcony installations, available mounting surface constrains your options more than optimal-angle theory does.',
          'Wind-load rating matters regardless of which mounting method you choose — verify your bracket is rated for conditions at your specific location.',
        ],
      },
      railingMount: {
        id: 'railing-mount',
        title: 'Railing Mount',
        content: [
          '**Railing mounting is the fastest and most common method for standard apartment balconies — brackets clamp onto the railing without drilling, and most kits include railing-compatible hardware by default.** Check your railing\'s material and thickness against your bracket\'s compatible range before buying, since not all brackets fit every railing type.',
        ],
      },
      wallMount: {
        id: 'wall-mount',
        title: 'Wall Mount',
        content: [
          '**Wall mounting suits balconies without a usable railing, or situations where angling the panel toward better sun exposure matters more than mounting convenience.** This method typically requires drilling into the wall surface, so confirm you have permission to do so — particularly in rented properties or buildings with HOA rules.',
        ],
      },
      flatRoofMount: {
        id: 'flat-roof-mount',
        title: 'Flat-Roof / Ballast Mount',
        content: [
          '**Flat-roof or ballast mounting uses weighted stands rather than drilling, making it a good option for terraces or flat roof access where you can\'t or don\'t want to penetrate the surface.** Ballast weight needs to be sized to local wind conditions — this is a case where more weight than seems necessary is often the safer default.',
        ],
      },
      groundMount: {
        id: 'ground-mount',
        title: 'Ground / Garden Mount',
        content: [
          '**Ground or garden mounting offers the most tilt-angle flexibility of any method, since you\'re not constrained by an existing structure\'s angle — useful for houses with garden or patio space.** This method still needs a secure, stable base; a freestanding ground mount in an exposed, windy location needs more robust anchoring than the same stand in a sheltered spot.',
        ],
      },
      tiltAngle: {
        id: 'tilt-angle',
        title: 'Tilt Angle by Latitude',
        content: [
          '**A steeper tilt angle generally suits higher-latitude locations, and a shallower angle suits locations closer to the equator — but for most balcony installations, the mounting surface\'s constraints matter more than chasing a theoretically optimal angle.** A railing-mounted panel usually can\'t be angled far from vertical regardless of latitude; ground and flat-roof mounts give you the most room to actually optimize toward the ideal angle for your location.',
        ],
      },
      windSafety: {
        id: 'wind-safety',
        title: 'Wind & Safety',
        content: [
          '**Wind load, not weight alone, is the primary structural consideration for any balcony solar mount — a securely bolted but under-rated bracket can still fail in strong gusts.** Check your bracket\'s rated wind load against realistic conditions at your specific location, particularly for exposed upper-floor balconies or open ground mounts, and err toward a more robust rating than the minimum you think you need.',
        ],
        callouts: [
          { type: 'warning', text: 'An improperly secured panel in high wind is a real safety hazard to people and property below, not just a risk to the equipment itself. Treat wind-load rating as a hard requirement, not a nice-to-have.' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Which mounting method is fastest to install?', a: 'Railing mounting is typically the fastest, since most kits include railing-compatible hardware by default and it requires no drilling.' },
          { q: 'Do I need to drill for balcony solar mounting?', a: 'It depends on the method — railing and flat-roof/ballast mounts typically don\'t require drilling, while wall mounting usually does.' },
          { q: 'What mounting method gives the best tilt angle?', a: 'Ground or garden mounting offers the most flexibility to optimize tilt angle for your latitude, since it isn\'t constrained by an existing structure\'s angle.' },
          { q: 'Can I mount balcony solar without a balcony?', a: 'Yes — wall, ground, and flat-roof mounting methods all work without a true balcony railing present.' },
          { q: 'How do I know if my mounting bracket is rated for enough wind load?', a: 'Check the manufacturer\'s stated wind load rating against realistic conditions at your specific location — exposed upper-floor balconies and open ground mounts generally need a more robust rating than sheltered locations.' },
          { q: 'Is ballast mounting as secure as drilled mounting?', a: 'It can be, provided the ballast weight is sized correctly for local wind conditions — underweighting a ballast mount is the primary failure risk with this method.' },
          { q: 'Do I need landlord or HOA permission for wall mounting?', a: 'Often yes, particularly since wall mounting typically involves drilling — confirm permission before proceeding, especially in rented properties.' },
          { q: 'Does mounting method affect how much power my panel produces?', a: 'Indirectly, through the tilt angle and orientation each method allows — a method that lets you achieve a better angle and orientation for your latitude will generally support better yield than one that constrains you to a suboptimal angle.' },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Balcony Solar Mounting Guide: Railing, Wall, Ground & Flat Roof',
      description: 'How to mount balcony solar on a railing, wall, ground stand, or flat roof — tilt angle guidance and wind safety considerations for each surface type.',
      datePublished: '2026-07-02',
      dateModified: '2026-07-02',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      url: 'https://www.promptquorum.com/balcony-solar/balcony-solar-mounting-guide',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro'] },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Balcony solar buyers choosing a mounting method for their specific surface' },
      about: ['Balcony solar mounting', 'Railing mount', 'Wind load', 'Tilt angle'],
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to Choose a Balcony Solar Mounting Method',
      step: [
        { '@type': 'HowToStep', name: 'Identify your available mounting surface', text: 'Railing, wall, ground, or flat roof — this determines which methods are viable.' },
        { '@type': 'HowToStep', name: 'Check wind load rating for your bracket', text: 'Match the bracket\'s rated wind load to realistic conditions at your specific location.' },
        { '@type': 'HowToStep', name: 'Confirm permission if drilling is required', text: 'Wall mounting typically requires drilling — confirm landlord or HOA permission first.' },
        { '@type': 'HowToStep', name: 'Optimize tilt angle within your method\'s constraints', text: 'Ground and flat-roof mounts allow the most tilt-angle flexibility for your latitude.' },
      ],
    },
  },
};
