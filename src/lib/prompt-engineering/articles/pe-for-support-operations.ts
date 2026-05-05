import type { Language } from "@/lib/blog/blogContent";
import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Record<Language, PEArticle> = {
  en: {
    freshness_tier: 'evergreen',
    theme: 'Workflows & Automation',
    title: 'Prompt Engineering for Support Operations: Consistent, Accurate Response Templates',
    seoTitle: 'Prompt Engineering for Support Teams: Template Guide',
    metaDescription: 'Design support prompts for triage, escalation, and tone control. Guardrails prevent policy errors. Handoff patterns clarify escalation triggers.',
    ogDescription: 'How support teams use prompt engineering — triage and escalation templates, tone and empathy controls, policy compliance guardrails, edge case testing, and when to hand off to humans.',
    twitterDescription: 'PE for support ops: triage templates, escalation logic, tone controls, policy guardrails. Consistent responses without losing the human touch.',
    intro: 'Support teams face a prompting challenge that most other use cases do not: the cost of a bad output is not aesthetic — it is a customer relationship, a policy violation, or a legal exposure. Prompt engineering for support operations means designing for accuracy, consistency, and correct escalation as the primary goals.',
    leadAnswerBlock: '**Support prompts need tighter constraints than most prompt types because errors are customer-facing, policy-sensitive, and often legally significant.** The design priority is not creativity — it is accuracy, consistency, and correct escalation when the AI should not handle a request.',
    quickFacts: [
      'Support prompt errors are customer-facing and legally significant — accuracy, consistency, and correct escalation are the design priorities, not creativity',
      'Triage prompts route issues to the correct team: level 1 (immediate resolution), level 2 (investigation required), level 3 (human escalation) — define decision rules precisely',
      'Support tone must be empathetic and on-brand without being insincere — encode 3–5 tone samples and test across models for consistency',
      'Policy compliance guardrails prevent hallucinated policies, incorrect refund amounts, or unauthorized commitments — provide reference docs and decision trees in the prompt',
      'Support edge cases (billing disputes, product defects, complaints) diverge between models — test all candidate models on 15+ edge cases before deployment',
      'Human handoff patterns clarify when the AI should decline and route to a person — define 3–5 escalation triggers and train the support team to recognize them',
    ],
    toc: [
      { label: 'Why Support Prompting Is Different from General Prompt Engineering', anchor: 'support_prompting_difference' },
      { label: 'Triage Prompt Template: Routing Issues to the Right Team', anchor: 'triage_template' },
      { label: 'Support Tone and Empathy Controls', anchor: 'tone_controls' },
      { label: 'Policy Compliance Guardrails', anchor: 'policy_guardrails' },
      { label: 'Escalation and Human Handoff Patterns', anchor: 'escalation_patterns' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Related Reading', anchor: 'related_reading' },
      { label: 'Sources', anchor: 'sources' },
    ],
    publishDate: '2026-05-02',
    readTime: '9 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Prompt Engineering for Support Operations',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/prompt-engineering/pe-for-support-operations?lang=en',
      headline: 'Prompt Engineering for Support Operations: Consistent, Accurate Response Templates',
      description: 'How support teams design prompts for triage, escalation, resolution, and follow-up — including tone controls, policy compliance guardrails, and human handoff patterns.',
      datePublished: '2026-05-02',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/pe-for-support-operations', width: 1200, height: 630 },
      inLanguage: 'en',
      keywords: ['prompt engineering', 'support operations', 'customer support', 'triage templates', 'escalation logic', 'policy compliance'],
      proficiencyLevel: 'Intermediate',
      about: [
        { '@type': 'Thing', name: 'Support Operations' },
        { '@type': 'Thing', name: 'Customer Service AI' },
        { '@type': 'Thing', name: 'Escalation Management' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why do support prompts need extra constraints compared to other prompt types?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Support prompts are customer-facing, policy-sensitive, and often legally significant. A wrong answer in support is not an aesthetic problem — it can be a policy violation, a liability, or the loss of a customer relationship. This means that accuracy, consistency, and correct escalation must be designed into the prompt structure, not left to model defaults.',
          },
        },
        {
          '@type': 'Question',
          name: 'What escalation triggers should always be in a support prompt?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Every support prompt should include at least 5 escalation triggers: legal language (threats, litigation references), account cancellation requests, data exposure mentions, repeated P1 tickets for the same issue, and explicit customer requests for a human agent. When any of these conditions are detected, the AI should acknowledge, summarize context, flag the ticket, and route — not attempt to resolve the issue itself.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do you test a support prompt for policy compliance?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Test a support prompt by running it against 10 difficult ticket examples that include edge cases: a customer using legal language, a request for pricing that your policy prohibits, a medical question, and a repeated P1 issue. Score each output on whether it triggers the correct escalation or topic constraint. Any output that responds to a restricted topic or fails to escalate a trigger condition is a policy failure.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should the AI apologize when handing off to a human agent?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. A handoff apology implies the AI failed the customer, which frames the handoff negatively. The correct handoff pattern is: acknowledge the issue, summarize context for the human agent, flag the ticket with the reason for escalation, and route to the correct team. The message to the customer should be neutral and professional — not apologetic.',
          },
        },
        {
          '@type': 'Question',
          name: 'When should a support AI hand off to a human agent?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Five conditions require immediate human escalation: (1) Legal language (attorney, lawsuit, etc.); (2) Account cancellation requests; (3) Data exposure or security concerns; (4) Repeated P1 issues on the same ticket; (5) Explicit customer request for a human. Define these triggers explicitly in the prompt and train support teams to recognize the AI\'s handoff signals.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I test a support prompt before rolling it out to the team?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Run the prompt on at least 15 real support tickets covering normal cases, edge cases, and escalation triggers. Score each response on accuracy (factual correctness), compliance (policy adherence), tone (empathy and brand fit), and escalation (correct routing). Deploy only if the average score is 1.5+ on a 0–2 scale. Test the same prompt across 2–3 models to verify consistency.',
          },
        },
      ],
    },
    sections: {
      key_takeaways: {
        title: 'Key Takeaways',
        isTldr: true,
        items: [
          'Support prompts require tighter constraints than other prompt types because errors are customer-facing, policy-sensitive, and legally significant.',
          'Every support prompt must include an escalation condition. If the AI does not know when to stop, it will respond to requests it should not handle.',
          'Four support template types cover the majority of support workflows: triage, escalation, resolution, and follow-up.',
          'Tone controls require 3 components: empathy marker (acknowledge first), formality level, and a constraint that prohibits blaming language toward the customer.',
          'The AI handoff pattern is: acknowledge, summarize, flag, route. No apology for the handoff — frame it as a routing decision, not a failure.',
        ],
      },
      support_constraints: {
        id: 'support-constraints',
        title: 'Why Support Prompts Need Extra Constraints',
        content: [
          '**Support prompts require more constraints than most prompt types because the cost of failure is not limited to a suboptimal output — it extends to policy violations, legal liability, and customer relationship damage.** Three reasons support prompts demand a different design approach:',
        ],
        items: [
          '**Policy exposure:** A support agent — human or AI — speaking on behalf of a company is creating a record. An incorrect answer about pricing, a refund commitment that exceeds policy limits, or a medical interpretation creates liability. The AI must know exactly what it can and cannot say, with explicit topic constraints in every prompt.',
          '**Tone sensitivity:** Customer support interactions often start at a point of frustration. The wrong tone — defensive, formal when informality is expected, or dismissive — can escalate a P2 ticket into a P1 and turn a solvable problem into a lost account. Tone controls must be explicit in the prompt, not left to model defaults.',
          '**Escalation criticality:** Unlike a content generation task where a suboptimal output can be revised, a support prompt that fails to escalate when it should can result in a resolved-too-early ticket on a legal complaint, or a customer receiving a policy-violating commitment. Every support prompt must contain an explicit escalation condition.',
        ],
        callouts: [
          {
            type: 'key-point',
            label: 'Mandatory Element',
            text: 'Always include an escalation condition in every support prompt. The condition should be specific: list the exact trigger keywords or scenarios that require the AI to stop responding and route to a human agent. A prompt without an escalation condition assumes the AI can handle all inputs — which is always incorrect in a support context.',
          },
        ],
      },
      template_types: {
        id: 'template-types',
        title: 'Support Response Template Types',
        content: [
          '**Four template types cover the majority of support operations workflows: triage, escalation, resolution, and follow-up.** Each template type has a distinct goal, output structure, and set of required constraints.',
        ],
        numberedItems: [
          'Triage template: Classify the issue type (billing / technical / general / account), assign severity (P1 = business-blocking, P2 = functional impact, P3 = cosmetic or informational), and route to the correct team. Output format: classification label + routing decision + draft acknowledgment message to the customer. Constraint: the triage output must not contain any resolution attempt — triage only classifies and routes.',
          'Escalation template: Define the conditions that trigger this template — legal threat, account cancellation request, data breach or exposure mention, repeated P1 on the same issue, or an explicit customer request for a human. Output format: escalation message to the customer (neutral, professional) + ticket flag with reason + routing instruction to the correct team. Constraint: never attempt to resolve an escalation trigger. Acknowledge and route only.',
          'Resolution template: Structured path — restate the issue in the customer\'s terms, apply the relevant policy clause, propose a specific resolution, request confirmation from the customer. Output format: resolution draft + the policy reference used (clause or document name). Constraint: resolution cannot exceed policy scope. No pricing promises, no exception commitments beyond what the policy explicitly permits.',
          'Follow-up template: Trigger: 48 hours after a ticket is marked resolved. Output: a brief follow-up message checking whether the resolution held and requesting a satisfaction signal. The message must not re-open the issue or invite complaint — it should confirm resolution and request confirmation.',
        ],
      },
      tone_controls: {
        id: 'tone-controls',
        title: 'Tone and Empathy Controls in Support Prompts',
        content: [
          '**Tone in support prompts requires 3 explicit controls: an empathy marker, a formality level specification, and a constraint on blaming language.** Without explicit controls, model tone defaults vary — and defaults that work for content generation are often wrong for customer support.',
          '3 tone components to include in every support prompt:',
        ],
        items: [
          '**Empathy marker:** Instruct the model to acknowledge the customer\'s frustration or situation before addressing the issue. The pattern is: empathy statement → issue restatement → resolution path. This prevents the AI from jumping directly to a solution before the customer feels heard. Example instruction: "Begin every response by acknowledging the customer\'s experience in one sentence before addressing the issue."',
          '**Formality level:** Specify the formality register in terms of your brand guide (e.g., "use a professional but approachable tone, matching the formality of a senior customer service representative"). Do not rely on vague instructions like "be friendly" — define formality against a specific reference point.',
          '**Blaming language constraint:** Explicitly instruct the model to avoid language that attributes fault to the customer, the customer\'s usage, or external factors in a way that feels dismissive. Example: "Never use phrases that suggest the customer caused the issue, even if the customer\'s action was the proximate cause." Test this on 10 difficult ticket examples where the customer is at fault to verify the constraint holds.',
        ],
        callouts: [
          {
            type: 'pro-tip',
            label: 'Test With Difficult Cases',
            text: 'Run tone prompts against 10 difficult ticket examples — angry customers, customers using profanity, customers who are factually wrong about their issue. If the model fails the blaming language constraint or drops the empathy marker on any of these, revise the constraint before deployment.',
          },
        ],
      },
      guardrails: {
        id: 'guardrails',
        title: 'Policy Compliance Guardrails',
        content: [
          '**Policy compliance in support prompts requires 3 types of guardrails: topic constraints, output constraints, and escalation triggers tied to keyword detection.** These guardrails define the boundaries of what the AI is permitted to address and how it must respond when those boundaries are reached.',
          '3 guardrail types:',
        ],
        items: [
          '**Topic constraints:** An explicit list of topics the AI must not address in its response. Common examples: legal interpretations, medical advice, pricing exceptions not in the standard policy, competitive comparisons, and internal process details. The constraint format: "Do not address [topic list]. If the customer\'s message touches any of these topics, respond with [neutral acknowledgment] and route to [team]."',
          '**Output constraints:** A set of specific outputs the AI must never produce, regardless of how the customer frames the request: no pricing promises (e.g., "I can offer you a discount"), no legal interpretations (e.g., "This qualifies as a breach of contract"), no medical advice (e.g., "You should consult a doctor"), and no confirmation of non-standard exceptions. These are categorical prohibitions, not topic avoidances.',
          '**Escalation triggers:** A list of specific keywords or phrases that, if detected in the customer message, should cause the AI to immediately stop the normal resolution path and produce an escalation output instead. Examples: "attorney", "lawsuit", "cancel my account", "data breach", "GDPR violation". Format: "If the customer\'s message contains any of the following words or phrases: [keyword list], do not attempt to resolve the issue. Produce an escalation acknowledgment and flag the ticket for [team]."',
        ],
      },
      handoff: {
        id: 'handoff',
        title: 'When and How to Hand Off to Human Agents',
        content: [
          '**Five trigger conditions should always result in a handoff to a human agent: legal language, account cancellation, data exposure, repeated P1 on the same issue, and an explicit customer request for a human.** These are non-negotiable escalation points — the AI should not attempt resolution on any of them.',
          '5 handoff triggers and the handoff pattern:',
        ],
        items: [
          '**Legal language:** Any message containing words like "attorney", "lawyer", "lawsuit", "litigation", "sue", or "legal action" must trigger immediate escalation. The AI should not engage with the legal framing — even to deny or deflect. Acknowledge and route.',
          '**Account cancellation:** A request to cancel an account is high-stakes enough to require human handling. The AI may acknowledge the request and confirm the handoff, but must not attempt retention offers or cancellation processing without human authorization.',
          '**Data exposure:** Any mention of a data breach, unauthorized access, account compromise, or GDPR/CCPA concern must trigger escalation. These have regulatory timelines and legal implications that require human decision-making.',
          '**Repeated P1 on the same issue:** If a customer has reported the same P1 issue more than once and it remains unresolved, a human agent must review the ticket history. The AI should flag the repetition in the ticket and route — not attempt another resolution cycle.',
          '**Explicit customer request for a human:** If the customer says they want to speak to a person, a manager, or a human agent, the AI must honor that request immediately without attempting to resolve the issue first.',
        ],
        callouts: [
          {
            type: 'key-point',
            label: 'Handoff Pattern',
            text: 'The correct handoff output pattern is: (1) Acknowledge the customer\'s issue in one sentence. (2) Summarize the context for the human agent in the ticket notes. (3) Flag the ticket with the escalation reason. (4) Route to the correct team. The customer message should be neutral and professional — "I\'m routing this to our [team] team who can best help you" — with no apology for the handoff. An apology implies the AI failed, which is the wrong frame.',
          },
        ],
      },
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        content: 'Support prompts prioritize accuracy, consistency, and correct escalation over creativity — errors are customer-facing and legally significant. Design a triage template that routes issues to the correct team (L1/L2/L3) using explicit decision rules. Encode support tone with 3–5 on-brand samples and test consistency across models. Add policy compliance guardrails: an explicit list of topics the AI must not address, specific outputs the AI must never produce (pricing promises, legal interpretations, medical advice), and escalation triggers (keywords like "attorney", "lawsuit", "cancel account", "data breach"). Five handoff conditions require immediate human escalation: legal language, account cancellation, data exposure, repeated P1 on same issue, explicit customer request for a human. Test all triage, tone, and escalation templates on 15+ edge cases across 2–3 models before deployment.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Why is support prompt engineering different from general prompt engineering?', a: 'Support prompt errors are customer-facing, legally significant, and often policy-sensitive. The design priority is accuracy and correct escalation, not creativity. Errors can result in customer relationship damage, policy violations, or legal exposure. This requires tighter constraints on topic scope, output format, and escalation rules than most other prompt types.' },
          { q: 'How do I design a triage prompt that routes issues correctly?', a: 'Define triage with explicit decision rules mapped to severity levels: L1 (immediate resolution, no human needed), L2 (investigation required but AI-assisted), L3 (human escalation required). Use a decision tree format with if-then-else logic. Test the triage prompt on 15+ real support tickets to verify correct routing before deployment.' },
          { q: 'How do I encode support tone without sounding insincere?', a: 'Provide 3–5 reference examples of on-brand, empathetic support responses. Include tone descriptors (3 adjectives, e.g., "professional, warm, direct"). Test the template across 2–3 models to ensure tone consistency. Avoid generic empathy phrases like "I understand your frustration" — use specific acknowledgments of the issue instead.' },
          { q: 'What policy information should I include in a support prompt?', a: 'Include reference documents for common policies (refund policy, data privacy, account security, billing). For each policy, define the specific outputs the AI must never produce: no pricing promises beyond published rates, no legal interpretations, no medical advice, no unauthorized exceptions. Make these prohibitions explicit and test the prompt on edge cases where customers ask for exceptions.' },
          { q: 'When should a support AI hand off to a human agent?', a: 'Five conditions require immediate human escalation: (1) Legal language (attorney, lawsuit, etc.); (2) Account cancellation requests; (3) Data exposure or security concerns; (4) Repeated P1 issues on the same ticket; (5) Explicit customer request for a human. Define these triggers explicitly in the prompt and train support teams to recognize the AI\'s handoff signals.' },
          { q: 'How do I test a support prompt before rolling it out to the team?', a: 'Run the prompt on at least 15 real support tickets covering normal cases, edge cases, and escalation triggers. Score each response on accuracy (factual correctness), compliance (policy adherence), tone (empathy and brand fit), and escalation (correct routing). Deploy only if the average score is 1.5+ on a 0–2 scale. Test the same prompt across 2–3 models to verify consistency.' },
        ],
      },
      related_reading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          { title: 'Customer Support Automation: Best Practices and Pitfalls', url: '/prompt-engineering/customer-support-automation' },
          { title: 'Designing Escalation Logic for AI-Assisted Support', url: '/prompt-engineering/escalation-logic-ai-support' },
          { title: 'Testing Support Prompts for Accuracy and Compliance', url: '/prompt-engineering/support-prompt-testing' },
          { title: 'Building Guardrails: Policy Compliance in Customer-Facing Prompts', url: '/prompt-engineering/guardrails-policy-compliance' },
          { title: 'Multi-Model Testing for Support Operations', url: '/prompt-engineering/multi-model-support-testing' },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          { title: 'OpenAI Guide to Responsible AI in Customer Support', url: 'https://platform.openai.com/docs/guides/prompt-engineering' },
          { title: 'Anthropic Safety Guidelines for Customer-Facing Prompts', url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview' },
          { title: 'PromptQuorum Multi-Model Support Testing Platform', url: 'https://www.promptquorum.com/features' },
        ],
      },
    },
  },

  de: {
    freshness_tier: 'evergreen',
    theme: 'Workflows & Automatisierung',
    title: 'Prompt Engineering für Support-Operationen: Konsistente, genaue Antwort-Templates',
    seoTitle: 'Prompt Engineering für Support-Teams: Vorlagen-Leitfaden',
    metaDescription: 'Support-Prompts für Triage, Eskalation und Tonsteuerung. Guardrails verhindern Richtlinienfehler. Handoff-Muster klären Eskalations-Trigger.',
    ogDescription: 'Wie Support-Teams Prompt Engineering einsetzen — Triage- und Eskalations-Templates, Ton- und Empathie-Steuerung, Richtlinien-Compliance-Guardrails und wann man an Menschen übergeben sollte.',
    twitterDescription: 'PE für Support-Ops: Triage-Templates, Eskalationslogik, Tonsteuerung, Richtlinien-Guardrails. Konsistente Antworten ohne den menschlichen Touch zu verlieren.',
    intro: 'Support-Teams stehen vor einer Prompting-Herausforderung, die die meisten anderen Anwendungsfälle nicht haben: Die Kosten einer schlechten Ausgabe sind nicht ästhetischer Natur — es geht um eine Kundenbeziehung, eine Richtlinienverletzung oder rechtliche Risiken. Prompt Engineering für Support-Operationen bedeutet, Genauigkeit, Konsistenz und korrekte Eskalation als primäre Ziele zu gestalten.',
    leadAnswerBlock: '**Support-Prompts benötigen engere Einschränkungen als die meisten anderen Prompt-Typen, weil Fehler kundenseitig, richtliniensensitiv und oft rechtlich bedeutsam sind.** Die Designpriorität ist nicht Kreativität — es sind Genauigkeit, Konsistenz und korrekte Eskalation, wenn die KI eine Anfrage nicht bearbeiten sollte.\n\n📍 **AUF EINEN SATZ**\nSupport-Prompt-Engineering priorisiert Genauigkeit, Richtlinienkonformität und korrekte Eskalation vor Kreativität — weil eine falsche Support-Antwort nicht nur unhilfreich ist, sondern auch eine Haftung darstellt.\n\n💬 **IN EINFACHEN WORTEN**\nWenn die KI einen Blog-Artikel schlecht schreibt, schreiben Sie ihn um. Wenn die KI einem Kunden falsche Preise gibt, sich zu etwas verpflichtet, das nicht erlaubt ist, oder eine rechtliche Drohung nicht eskaliert, verlieren Sie den Kunden — oder schlimmer. Support-Prompts benötigen Schutzmaßnahmen, die andere Prompts nicht brauchen.',
    quickFacts: [
      'Support-Prompt-Fehler sind kundenseitig und rechtlich bedeutsam — Genauigkeit, Konsistenz und korrekte Eskalation sind die Design-Prioritäten, nicht Kreativität',
      'Triage-Prompts leiten Probleme an das richtige Team weiter: Level 1 (sofortige Lösung), Level 2 (Untersuchung erforderlich), Level 3 (menschliche Eskalation) — Entscheidungsregeln präzise definieren',
      'Support-Ton muss empathisch und markenkonform sein, ohne unaufrichtig zu wirken — 3–5 Ton-Beispiele codieren und über Modelle hinweg auf Konsistenz testen',
      'Policy-Compliance-Guardrails verhindern halluzinierte Richtlinien, falsche Erstattungsbeträge oder nicht autorisierte Verpflichtungen — Referenzdokumente und Entscheidungsbäume direkt im Prompt bereitstellen',
      'Support-Edge-Cases (Abrechnungsstreitigkeiten, Produktmängel, Beschwerden) unterscheiden sich zwischen Modellen — alle Kandidatenmodelle an 15+ Edge Cases vor der Bereitstellung testen',
      'Human-Handoff-Muster klären, wann die KI ablehnen und an eine Person weiterleiten sollte — 3–5 Eskalationsauslöser definieren und das Support-Team schulen, diese zu erkennen',
    ],
    toc: [
      { label: 'Warum Support-Prompting anders ist als allgemeines Prompt Engineering', anchor: 'support_prompting_difference' },
      { label: 'Triage-Prompt-Template: Probleme an das richtige Team weiterleiten', anchor: 'triage_template' },
      { label: 'Support-Ton und Empathie-Steuerung', anchor: 'tone_controls' },
      { label: 'Policy-Compliance-Guardrails', anchor: 'policy_guardrails' },
      { label: 'Eskalation und Human-Handoff-Muster', anchor: 'escalation_patterns' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Weiterführende Lektüre', anchor: 'related_reading' },
      { label: 'Quellen', anchor: 'sources' },
    ],
    publishDate: '2026-05-02',
    readTime: '9 Min. Lesezeit',
    educationalLevel: 'Fortgeschritten',
    primaryTerm: 'Prompt Engineering für Support-Operationen',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/prompt-engineering/prompt-engineering-for-support-operations?lang=de',
      headline: 'Prompt Engineering für Support-Operationen (2026)',
      description: 'Wie Support-Teams Prompts für Triage, Eskalation, Lösung und Follow-up gestalten — einschließlich Tonsteuerung, Richtlinien-Compliance-Guardrails und Human-Handoff-Muster.',
      datePublished: '2026-05-02',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/prompt-engineering-for-support-operations?lang=de', width: 1200, height: 630 },
      keywords: ['Prompt Engineering', 'Support-Operationen', 'Kundensupport', 'Triage-Templates', 'Eskalationslogik', 'Richtlinien-Compliance'],
      proficiencyLevel: 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Warum brauchen Support-Prompts mehr Einschränkungen als andere Prompt-Typen?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Support-Prompts sind kundenseitig, richtliniensensitiv und oft rechtlich bedeutsam. Eine falsche Antwort im Support ist kein ästhetisches Problem — sie kann eine Richtlinienverletzung, eine Haftung oder den Verlust einer Kundenbeziehung bedeuten.',
          },
        },
        {
          '@type': 'Question',
          name: 'Welche Eskalationsauslöser sollten immer in einem Support-Prompt enthalten sein?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Jeder Support-Prompt sollte mindestens 5 Eskalationsauslöser enthalten: juristische Sprache, Kontokündigungsanfragen, Datenleckerwähnungen, wiederholte P1-Tickets zum selben Problem und ausdrückliche Kundenanfragen nach einem menschlichen Agenten.',
          },
        },
        {
          '@type': 'Question',
          name: 'Wie testet man einen Support-Prompt auf Richtlinien-Compliance?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Testen Sie einen Support-Prompt, indem Sie ihn gegen 10 schwierige Ticket-Beispiele laufen lassen, die Edge Cases enthalten: ein Kunde mit juristischer Sprache, eine Preisanfrage, die Ihre Richtlinie verbietet, und eine wiederholte P1-Meldung.',
          },
        },
        {
          '@type': 'Question',
          name: 'Sollte die KI sich entschuldigen, wenn sie an einen menschlichen Agenten übergibt?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nein. Eine Entschuldigungs-Übergabe impliziert, dass die KI den Kunden enttäuscht hat. Das korrekte Übergabemuster ist: Problem bestätigen, Kontext zusammenfassen, Ticket markieren und weiterleiten — ohne Entschuldigung.',
          },
        },
      ],
    },
    sections: {
      key_takeaways: {
        title: 'Zusammenfassung',
        isTldr: true,
        items: [
          'Support-Prompts erfordern engere Einschränkungen als andere Prompt-Typen, weil Fehler kundenseitig, richtliniensensitiv und rechtlich bedeutsam sind.',
          'Jeder Support-Prompt muss eine Eskalationsbedingung enthalten. Wenn die KI nicht weiß, wann sie aufhören soll, antwortet sie auf Anfragen, die sie nicht bearbeiten sollte.',
          'Vier Support-Template-Typen decken die meisten Support-Workflows ab: Triage, Eskalation, Lösung und Follow-up.',
          'Tonsteuerung erfordert 3 Komponenten: Empathiemarker, Formalitätsniveau und Verbot von schuldzuweisender Sprache gegenüber dem Kunden.',
          'Das KI-Übergabemuster lautet: bestätigen, zusammenfassen, markieren, weiterleiten. Keine Entschuldigung für die Übergabe.',
        ],
      },
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        content: 'Support-Prompts priorisieren Genauigkeit, Konsistenz und korrekte Eskalation vor Kreativität — Fehler sind kundenseitig und rechtlich bedeutsam. Entwerfen Sie ein Triage-Template, das Probleme mit expliziten Entscheidungsregeln (L1/L2/L3) an das richtige Team weiterleitet. Codieren Sie Support-Ton mit 3–5 markenkonformen Beispielen und testen Sie Konsistenz über Modelle hinweg. Fügen Sie Policy-Compliance-Guardrails hinzu: eine explizite Liste von Themen, die die KI nicht ansprechen darf, spezifische Ausgaben, die die KI nie produzieren darf (Preisversprechen, rechtliche Interpretationen, medizinische Ratschläge), und Eskalationsauslöser (Schlüsselwörter wie „Rechtsanwalt", „Klage", „Konto kündigen", „Datenpanne"). Fünf Übergabebedingungen erfordern sofortige menschliche Eskalation: rechtliche Sprache, Kontokündigung, Datenexposition, wiederholte P1 zum selben Thema, ausdrückliche Kundenanfrage für einen Menschen. Testen Sie alle Triage-, Ton- und Eskalations-Templates an 15+ Grenzfällen über 2–3 Modelle hinweg vor der Bereitstellung.',
      },
      support_constraints: {
        id: 'support-constraints',
        title: 'Warum Support-Prompts extra Einschränkungen brauchen',
        content: [
          '**Support-Prompts erfordern mehr Einschränkungen als die meisten anderen Prompt-Typen, weil die Fehlerkosten nicht auf eine suboptimale Ausgabe beschränkt sind — sie erstrecken sich auf Richtlinienverletzungen, rechtliche Haftung und Schäden an Kundenbeziehungen.** Drei Gründe für einen anderen Design-Ansatz:',
        ],
        items: [
          '**Richtlinienexposition:** Ein Support-Agent — menschlich oder KI — der im Namen eines Unternehmens spricht, erstellt einen Datensatz. Eine falsche Preisantwort oder ein Erstattungsversprechen, das die Richtliniengrenzen überschreitet, schafft Haftbarkeit.',
          '**Tonsensitivität:** Kundeninteraktionen beginnen oft mit Frustration. Der falsche Ton — defensiv, zu formal oder abweisend — kann ein P2-Ticket in ein P1-Ticket verwandeln. Tonsteuerungen müssen explizit im Prompt sein.',
          '**Eskalationskritikalität:** Im Gegensatz zu Content-Generierungsaufgaben kann ein Support-Prompt, der nicht eskaliert wenn er sollte, dazu führen, dass ein Ticket zu früh geschlossen wird, obwohl eine Rechtsbeschwerde vorliegt.',
        ],
      },
      template_types: {
        id: 'template-types',
        title: 'Support-Antwort-Template-Typen',
        content: [
          '**Vier Template-Typen decken den Großteil der Support-Operations-Workflows ab: Triage, Eskalation, Lösung und Follow-up.** Jeder Template-Typ hat ein eigenes Ziel, eine Ausgabestruktur und erforderliche Einschränkungen.',
        ],
        numberedItems: [
          'Triage-Template: Klassifizieren Sie den Problemtyp (Abrechnung/Technisch/Allgemein/Konto), weisen Sie Schweregrade zu (P1=geschäftsblockierend, P2=funktionale Auswirkung, P3=kosmetisch) und leiten Sie zum richtigen Team weiter. Ausgabe: Klassifizierungslabel + Weiterleitungsentscheidung + Bestätigungsentwurf.',
          'Eskalations-Template: Eskalationsauslöser — rechtliche Drohung, Kontokündigungsanfrage, Datenleck-Erwähnung, wiederholte P1 zum selben Problem, ausdrückliche Anfrage nach einem Menschen. Ausgabe: neutrale Kundennachricht + Ticket-Markierung mit Grund + Weiterleitungsanweisung.',
          'Lösungs-Template: Strukturierter Pfad — Problem in Kundenbegriffen neu formulieren, zutreffende Richtlinienklausel anwenden, spezifische Lösung vorschlagen, Bestätigung des Kunden anfordern. Ausgabe: Lösungsentwurf + verwendete Richtlinienreferenz.',
          'Follow-up-Template: Auslöser: 48 Stunden nach Schließen eines Tickets. Ausgabe: kurze Nachricht, die überprüft, ob die Lösung gehalten hat, und ein Zufriedenheitssignal anfordert.',
        ],
      },
      bad_good_example: {
        id: 'bad-good-example',
        title: 'Beispiel: Schlechter vs. Guter Triage-Prompt',
        content: [
          '**Schlechter Prompt:**\n\n"Helfen Sie dem Kunden mit seinem Problem."\n\n**Guter Prompt:**\n\n"Sie sind ein Tier-1-Support-Triage-Agent für eine B2B-SaaS-Plattform. Klassifizieren Sie diese Kundennachricht in: Abrechnung (an Finanzen weiterleiten), Technisch (an Technik weiterleiten), Konto (an Kontoverwaltung weiterleiten) oder Allgemein (direkt bearbeiten). Schweregrad zuweisen: P1 (Geschäft blockierend, Antwort innerhalb von 1 Stunde), P2 (funktionale Auswirkung, Antwort innerhalb von 4 Stunden), P3 (informativ, Antwort innerhalb von 24 Stunden). Ausgabe: Klassifizierungslabel, Schweregrad, Weiterleitungsentscheidung und eine 2-Satz-Bestätigungsnachricht für den Kunden. Einschränkungen: Lösen Sie das Problem nicht — nur Triage. Wenn die Nachricht \'Rechtsanwalt\', \'Klage\', \'Konto kündigen\', \'Datenpanne\' oder \'DSGVO\' enthält, klassifizieren Sie als P1 und leiten Sie sofort an Legal-Eskalation weiter. Engagieren Sie sich nicht in der rechtlichen Rahmensetzung."\n\n**Warum der Unterschied zählt:**\nDer schlechte Prompt lässt die KI raten, was \"Hilfe\" bedeutet. Der gute Prompt definiert Klassifizierungsregeln, Schweregrad-Levels, Weiterleitungslogik, Ausgabeformat und Eskalationsauslöser — macht jede Triage-Entscheidung vorhersehbar und konsistent über 1000+ Support-Tickets hinweg.',
        ],
      },
      common_mistakes: {
        id: 'common-mistakes',
        title: 'Häufige Support-Prompt-Fehler',
        content: [],
        items: [
          '**Keine Eskalationsbedingung:** Ein Support-Prompt ohne Eskalationsauslöser geht davon aus, dass die KI alle Eingaben verarbeiten kann. Das kann sie nicht. Rechtliche Drohungen, Kündigungsanfragen und Datenexposure erfordern menschliche Beurteilung. **Lösung:** Fügen Sie 3–5 explizite Eskalationsauslöser in jeden Support-Prompt ein. Führen Sie die genauen Schlüsselwörter auf (\"Rechtsanwalt\", \"Mein Konto kündigen\", \"Datenpanne\") und die Aktion (\"Lösung beenden, bestätigen, an [Team] leiten\").',
          '**Generische Empathie (\"Ich verstehe Ihre Frustration\"):** KI-Modelle verwenden standardmäßig vorformulierte Empathie-Phrasen, die Kunden als automatisiert und unaufrichtig erkennen. Dies schädigt das Vertrauen, statt es aufzubauen. **Lösung:** Weisen Sie das Modell an, das spezifische Problem anzuerkennen, nicht die Emotion. \"Ich sehe, dass der CSV-Export für Ihr Konto leere Dateien zurückgibt\" ist empathischer als \"Ich verstehe Ihre Frustration.\"',
          '**Policy-Halluzination — Erfindung von Richtlinien, die es nicht gibt:** Ohne Referenzdokumente generiert das Modell plausibel klingende Richtlinien, die nicht mit Ihren tatsächlichen Bedingungen übereinstimmen. Eine halluzinierte Rückgaberichtlinie ist eine rechtliche Haftung. **Lösung:** Fügen Sie den relevanten Richtlinientext oder Entscheidungsbaum direkt in den Prompt ein. Fügen Sie eine Einschränkung hinzu: \"Verweisen Sie nicht auf Richtlinien, die nicht in diesem Prompt enthalten sind. Wenn die Anfrage des Kunden nicht abgedeckt ist, eskalieren Sie.\"',
          '**Ton-Tests nur auf einfachen Tickets:** Das Modell verarbeitet höfliche, klare Anfragen gut. Es versagt bei wütenden Kunden, Obszönitäten, Kunden, die unrecht haben, und Grenzfällen. Tests nur auf einfachen Tickets geben falsches Selbstvertrauen. **Lösung:** Testen Sie auf 15+ echte Tickets: 5 normal, 5 wütend/schwierig, 5 Grenzfälle (Abrechnungsstreitigkeiten, Produktmängel, rechtliche Erwähnungen). Bewerten Sie jeden auf Genauigkeit, Compliance, Ton und Eskalation.',
          '**Verwendung desselben Prompts auf allen Support-Kanälen:** E-Mail, Chat und Telefonanruf-Zusammenfassungen erfordern unterschiedliche Ausgabeformate, Tonregister und Längenbeschränkungen. Ein für E-Mail entworfener Prompt erzeugt unbeholfene Chat-Antworten. **Lösung:** Erstellen Sie Kanal-spezifische Varianten für jede Vorlage. Chat = kürzer, informeller. E-Mail = länger, strukturierter. Telefonzusammenfassung = Bullet-Point-Format für Agent-Notizen.',
        ],
      },
      tone_controls: {
        id: 'tone-controls',
        title: 'Ton- und Empathie-Steuerung in Support-Prompts',
        content: [
          '**Ton in Support-Prompts erfordert 3 explizite Steuerungen: einen Empathiemarker, eine Formalitätsniveauspezifikation und eine Einschränkung für schuldzuweisende Sprache.** Ohne explizite Steuerungen variieren Modell-Tonstandards — und Standards, die für Content-Generierung funktionieren, sind oft falsch für den Kundensupport.',
        ],
        items: [
          '**Empathiemarker:** Weisen Sie das Modell an, die Frustration oder Situation des Kunden zu bestätigen, bevor es das Problem anspricht. Das Muster: Empathieerklärung → Problemrestatement → Lösungsweg.',
          '**Formalitätsniveau:** Geben Sie das Formalitätsregister anhand Ihres Marken-Leitfadens an. Verlassen Sie sich nicht auf vage Anweisungen wie "sei freundlich".',
          '**Schuldzuweisung-Spracheinschränkung:** Weisen Sie das Modell ausdrücklich an, Sprache zu vermeiden, die dem Kunden die Schuld zuweist. Dies ist eine Form von [negativem Prompting](https://www.promptquorum.com/prompt-engineering/negative-prompting?lang=de) — dem Modell sagen, was zu vermeiden ist, neben dem, was zu tun ist. Testen Sie dies an 10 schwierigen Ticket-Beispielen.',
        ],
      },
      guardrails: {
        id: 'guardrails',
        title: 'Richtlinien-Compliance-Guardrails',
        content: [
          '**Richtlinien-Compliance in Support-Prompts erfordert 3 Arten von Guardrails: Themeneinschränkungen, Ausgabeeinschränkungen und Eskalationsauslöser, die an Schlüsselworterkennnung geknüpft sind.**',
        ],
        items: [
          '**Themeneinschränkungen:** Eine explizite Liste von Themen, die die KI nicht ansprechen darf. Typische Beispiele: rechtliche Interpretationen, medizinische Ratschläge, Preisausnahmen außerhalb der Standardrichtlinie und interne Prozessdetails.',
          '**Ausgabeeinschränkungen:** Spezifische Ausgaben, die die KI nie produzieren darf: keine Preisversprechen, keine rechtlichen Interpretationen, keine medizinischen Ratschläge und keine Bestätigung von nicht standardmäßigen Ausnahmen.',
          '**Eskalationsauslöser:** Eine Liste spezifischer Schlüsselwörter — "Rechtsanwalt", "Klage", "Konto kündigen", "Datenpanne", "DSGVO-Verstoß" — die bei Erkennung die KI sofort stoppen lassen und eine Eskalation auslösen. Bezüglich sicherheitsspezifischer Injektionsrisiken in Kunden-facing Prompts siehe [Prompt Injection und Sicherheit](https://www.promptquorum.com/prompt-engineering/prompt-injection-and-security?lang=de).',
        ],
        callouts: [
          {
            type: 'key-point',
            label: '🔍 Policy-Halluzinations-Risiko',
            text: 'Ohne den tatsächlichen Richtlinientext im Prompt wird das Modell plausibel klingende Richtlinien erfinden. Ein halluziniertes "30-Tage-Rückgabefenster", wenn Ihre tatsächliche Richtlinie 14 Tage ist, schafft eine bindende Verpflichtung. Fügen Sie den Richtlinientext oder Entscheidungsbaum immer direkt in den Prompt ein.',
          },
        ],
      },
      handoff: {
        id: 'handoff',
        title: 'Wann und wie man an menschliche Agenten übergibt',
        content: [
          '**Fünf Auslösebedingungen sollten immer zu einer Übergabe an einen menschlichen Agenten führen: juristische Sprache, Kontokündigung, Datenexponierung, wiederholte P1 zum selben Problem und ausdrückliche Kundenanfrage nach einem Menschen.**',
        ],
        items: [
          '**Juristische Sprache:** Jede Nachricht mit Wörtern wie "Rechtsanwalt", "Klage", "Rechtsstreit" oder "rechtliche Schritte" muss sofortige Eskalation auslösen.',
          '**Kontokündigung:** Eine Anfrage zur Kontokündigung ist risikoreich genug für menschliche Bearbeitung. Die KI bestätigt die Anfrage, versucht aber weder Rückgewinnungsangebote noch Kündigungsbearbeitung ohne menschliche Genehmigung.',
          '**Datenexponierung:** Jede Erwähnung eines Datenlecks, unbefugten Zugriffs oder DSGVO-/CCPA-Bedenken muss Eskalation auslösen.',
          '**Wiederholte P1 zum selben Problem:** Wenn ein Kunde dasselbe P1-Problem mehr als einmal gemeldet hat, muss ein menschlicher Agent die Ticket-Historie prüfen.',
          '**Ausdrückliche Anfrage nach einem Menschen:** Wenn der Kunde sagt, er möchte mit einer Person sprechen, muss die KI diese Anfrage sofort erfüllen, ohne zuerst das Problem zu lösen.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Warum unterscheidet sich Support-Prompt-Engineering von allgemeinem Prompt-Engineering?', a: 'Support-Prompt-Fehler sind kundenorientiert, rechtlich bedeutsam und oft richtlinienempfindlich. Die Design-Priorität ist Genauigkeit und korrekte Eskalation, nicht Kreativität. Fehler können zu Kundenschädigungen, Richtlinienverletzungen oder rechtlicher Exposition führen. Dies erfordert strengere Einschränkungen bei Themenumfang, Ausgabeformat und Eskalationsregeln als die meisten anderen Prompt-Typen.' },
          { q: 'Wie entwerfe ich einen Triage-Prompt, der Probleme korrekt weiterleitet?', a: 'Definieren Sie Triage mit expliziten Entscheidungsregeln, die Schweregrade zuordnen: L1 (sofortige Lösung, kein Mensch nötig), L2 (Untersuchung erforderlich, aber KI-unterstützt), L3 (menschliche Eskalation erforderlich). Verwenden Sie ein Entscheidungsbaum-Format mit If-Then-Else-Logik. Testen Sie den Triage-Prompt an 15+ echten Support-Tickets, um korrekte Weiterleitung vor der Bereitstellung zu überprüfen.' },
          { q: 'Wie codiere ich Support-Ton, ohne unaufrichtig zu klingen?', a: 'Geben Sie 3–5 Referenzbeispiele markengerechter, empathischer Support-Antworten an. Fügen Sie Ton-Deskriptoren hinzu (drei Adjektive, z. B. „professionell, warm, direkt"). Testen Sie das Template über 2–3 Modelle, um Ton-Konsistenz zu gewährleisten. Vermeiden Sie generische Empathie-Phrasen wie „Ich verstehe Ihre Frustration" — verwenden Sie stattdessen spezifische Anerkennungen des Problems.' },
          { q: 'Welche Richtlinieninformationen sollte ich in einen Support-Prompt aufnehmen?', a: 'Fügen Sie Referenzdokumente für häufige Richtlinien ein (Rückgaberichtlinie, Datenschutz, Kontosicherheit, Abrechnung). Definieren Sie für jede Richtlinie die spezifischen Ausgaben, die die KI nie produzieren darf: keine Preisversprechen über veröffentlichte Sätze hinaus, keine rechtlichen Interpretationen, keine medizinischen Ratschläge, keine nicht autorisierten Ausnahmen. Machen Sie diese Verbote explizit und testen Sie den Prompt an Grenzfällen, in denen Kunden Ausnahmen anfordern.' },
          { q: 'Wann sollte eine Support-KI an einen menschlichen Agenten übergeben?', a: 'Fünf Bedingungen erfordern sofortige menschliche Eskalation: (1) Rechtliche Sprache (Rechtsanwalt, Klage, etc.); (2) Kontokündigungsanfragen; (3) Datenexposition oder Sicherheitsbedenken; (4) Wiederholte P1-Probleme zum selben Ticket; (5) Ausdrückliche Kundenanfrage für einen Menschen. Definieren Sie diese Auslöser explizit im Prompt und schulen Sie Support-Teams, die Übergabesignale der KI zu erkennen.' },
          { q: 'Wie teste ich einen Support-Prompt, bevor ich ihn für das Team bereitstelle?', a: 'Führen Sie den Prompt an mindestens 15 echten Support-Tickets aus, die normale Fälle, Grenzfälle und Eskalationsauslöser abdecken. Bewerten Sie jede Antwort auf Genauigkeit (Faktenkorrektheit), Compliance (Richtlinieneinhaltung), Ton (Empathie und Markenfit) und Eskalation (korrekte Weiterleitung). Stellen Sie nur bereit, wenn die durchschnittliche Punktzahl mindestens 1,5 auf einer 0–2-Skala beträgt. Testen Sie denselben Prompt über 2–3 Modelle, um Konsistenz zu überprüfen.' },
          { q: 'Muss ich bei der Verwendung von KI-gesteuerten Support-Prompts die DSGVO beachten?', a: 'Ja, wenn Sie die KI zur Verarbeitung von Kundenanfragen einsetzen, besonders für Support in der EU oder mit EU-Bürgern. Die DSGVO hat drei Auswirkungen: (1) Artikel 28 – Verarbeitungsverträge: Wenn Sie ein KI-Modell (z. B. OpenAI API, Claude, Ollama) nutzen, muss ein Datenverarbeitungsvertrag (DPA/DV) existieren. (2) Datenspeicherung: Support-Tickets enthalten oft personenbezogene Daten. Beachten Sie Aufbewahrungsfristen und Löschpflichten. (3) Transparenz: Kunden sollten wissen, dass die KI ihre Anfrage bearbeitet. Für hochriskante Verarbeitungen (Finanzentscheidungen, medizinische Ratschläge) kann eine Datenschutzfolgenabschätzung (DSFA) erforderlich sein. PromptQuorum-Infrastruktur mit lokaler Inferenz erfüllt Anforderungen nach Datenresidenz und kann BSI-Grundschutz-Kataloge-Anforderungen erfüllen.' },
          { q: 'Ist Prompt Engineering für den deutschen Mittelstand geeignet?', a: 'Ja, besonders für kleine und mittlere Unternehmen (KMU/Mittelstand) in Deutschland. Support-Automatisierung mit Prompts hilft, IT-Ressourcen zu sparen und Kundenreaktionszeiten zu verkürzen. Wichtigste Überlegungen: (1) IT-Sicherheit: Der Mittelstand muss BSI-Grundschutz-Kataloge oder ähnliche Rahmen erfüllen. Cloud-basierte APIs erfordern möglicherweise Zusatzmaßnahmen. Lokale LLM-Inferenz (z. B. Ollama auf unternehmenseigenen Servern) ist eine Sicherheitsalternative. (2) Kosten: Große Modelle kosten schnell zu viel für kleine Teams. Kleinere, lokal gehostete Modelle sind kostengünstiger. (3) Datenschutz: Der Mittelstand verarbeitet Kundendaten. DSGVO-konforme Lösungen sind Pflicht. PromptQuorum-Infrastruktur mit lokaler Verarbeitung passt zu Mittelstand-Anforderungen.' },
        ],
      },
      related_reading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          { title: 'Kundensupport-Automatisierung: Best Practices und Fallstricke', url: '/prompt-engineering/customer-support-automation?lang=de' },
          { title: 'Eskalationslogik für KI-gestützte Support entwerfen', url: '/prompt-engineering/escalation-logic-ai-support?lang=de' },
          { title: 'Support-Prompts auf Genauigkeit und Compliance testen', url: '/prompt-engineering/support-prompt-testing?lang=de' },
          { title: 'Guardrails erstellen: Policy-Compliance in kundenseitigen Prompts', url: '/prompt-engineering/guardrails-policy-compliance?lang=de' },
          { title: 'Multi-Modell-Tests für Support-Operationen', url: '/prompt-engineering/multi-model-support-testing?lang=de' },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          { title: 'OpenAI Guide to Responsible AI in Customer Support', url: 'https://platform.openai.com/docs/guides/prompt-engineering' },
          { title: 'Anthropic Safety Guidelines for Customer-Facing Prompts', url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview' },
          { title: 'PromptQuorum Multi-Model Support Testing Platform', url: 'https://www.promptquorum.com/features' },
        ],
      },
    },
  },

  fr: {
    freshness_tier: 'evergreen',
    theme: 'Workflows & Automatisation',
    title: 'Prompt Engineering pour les opérations support : templates de réponses cohérents et précis',
    seoTitle: 'Prompts Support : Guide des Templates et Escalade',
    metaDescription: "Prompts support pour triage, escalade et ton. Guardrails de conformité préviennent les erreurs de politique. Patterns de transfert et escalade.",
    ogDescription: "Comment les équipes support utilisent le prompt engineering — templates de triage et d'escalade, contrôles de ton et d'empathie, guardrails de conformité politique et transfert aux humains.",
    twitterDescription: "PE pour support ops : templates de triage, logique d'escalade, contrôles de ton, guardrails de politique. Réponses cohérentes sans perdre la touche humaine.",
    intro: "Les équipes support font face à un défi de prompting que la plupart des autres cas d'usage n'ont pas : le coût d'une mauvaise sortie n'est pas esthétique — c'est une relation client, une violation de politique ou une exposition légale.",
    leadAnswerBlock: "**Les prompts support nécessitent des contraintes plus strictes que la plupart des types de prompts parce que les erreurs sont visibles par les clients, sensibles sur le plan des politiques, et souvent juridiquement significatives.** La priorité de conception n'est pas la créativité — c'est la précision, la cohérence et la bonne escalade quand l'IA ne devrait pas traiter une demande.",
    publishDate: '2026-05-02',
    readTime: '9 min de lecture',
    educationalLevel: 'Intermédiaire',
    primaryTerm: 'Prompt Engineering pour opérations support',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/prompt-engineering/pe-for-support-operations?lang=fr',
      headline: 'Prompt Engineering pour les opérations support : templates de réponses cohérents et précis',
      description: "Comment les équipes support conçoivent des prompts pour le triage, l'escalade, la résolution et le suivi — y compris les contrôles de ton, les guardrails de conformité politique et les transferts humains.",
      datePublished: '2026-05-02',
      inLanguage: 'fr',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/pe-for-support-operations?lang=fr', width: 1200, height: 630 },
      keywords: ['prompt engineering', 'opérations support', 'service client', 'templates de triage', "logique d'escalade", 'conformité politique'],
      proficiencyLevel: 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        {
          '@type': 'Question',
          name: "Pourquoi les prompts support nécessitent-ils des contraintes supplémentaires ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Les prompts support sont visibles par les clients, sensibles sur le plan des politiques et souvent juridiquement significatifs. Une mauvaise réponse dans le support n'est pas un problème esthétique — cela peut être une violation de politique, une responsabilité ou la perte d'une relation client.",
          },
        },
        {
          '@type': 'Question',
          name: "Quels déclencheurs d'escalade doivent toujours figurer dans un prompt support ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Chaque prompt support doit inclure au moins 5 déclencheurs d'escalade : langage juridique, demandes d'annulation de compte, mentions d'exposition de données, tickets P1 répétés pour le même problème, et demandes explicites de clients pour un agent humain.",
          },
        },
        {
          '@type': 'Question',
          name: "Comment tester un prompt support pour la conformité politique ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Testez un prompt support en l'exécutant contre 10 exemples de tickets difficiles incluant des cas limites : un client utilisant un langage juridique, une demande de prix que votre politique interdit, et un problème P1 répété.",
          },
        },
        {
          '@type': 'Question',
          name: "L'IA doit-elle s'excuser lors d'un transfert à un agent humain ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Non. Une excuse lors du transfert implique que l'IA a failli au client, ce qui cadre le transfert négativement. Le bon pattern est : reconnaître le problème, résumer le contexte, marquer le ticket avec la raison de l'escalade et router vers l'équipe correcte.",
          },
        },
      ],
    },
    sections: {
      key_takeaways: {
        title: 'Points clés',
        isTldr: true,
        items: [
          "Les prompts support nécessitent des contraintes plus strictes que les autres types de prompts car les erreurs sont visibles par les clients, sensibles aux politiques et juridiquement significatives.",
          "Chaque prompt support doit inclure une condition d'escalade. Si l'IA ne sait pas quand s'arrêter, elle répondra à des demandes qu'elle ne devrait pas traiter.",
          "Quatre types de templates couvrent la majorité des workflows support : triage, escalade, résolution et suivi.",
          "Les contrôles de ton nécessitent 3 composants : marqueur d'empathie, niveau de formalité et contrainte sur le langage de blâme envers le client.",
          "Le pattern de transfert IA est : reconnaître, résumer, marquer, router. Pas d'excuse pour le transfert — présentez-le comme une décision de routage.",
        ],
      },
      support_constraints: {
        id: 'support-constraints',
        title: "Pourquoi les prompts support nécessitent des contraintes supplémentaires",
        content: [
          "**Les prompts support nécessitent plus de contraintes que la plupart des types de prompts car le coût de l'échec ne se limite pas à une sortie sous-optimale — il s'étend aux violations de politique, à la responsabilité légale et aux dommages aux relations clients.** Trois raisons pour lesquelles les prompts support exigent une approche de conception différente :",
        ],
        items: [
          "**Exposition politique :** Un agent support — humain ou IA — parlant au nom d'une entreprise crée un enregistrement. Une mauvaise réponse sur les prix ou un engagement de remboursement dépassant les limites de la politique crée une responsabilité.",
          "**Sensibilité du ton :** Les interactions support commencent souvent par de la frustration. Le mauvais ton peut faire escalader un ticket P2 en P1. Les contrôles de ton doivent être explicites dans le prompt.",
          "**Criticité de l'escalade :** Un prompt support qui ne remonte pas quand il le devrait peut entraîner la fermeture prématurée d'un ticket contenant une plainte légale.",
        ],
      },
      template_types: {
        id: 'template-types',
        title: "Types de templates de réponses support",
        content: [
          "**Quatre types de templates couvrent la majorité des workflows support : triage, escalade, résolution et suivi.** Chaque type a un objectif distinct, une structure de sortie et des contraintes requises.",
        ],
        numberedItems: [
          "Template de triage : Classer le type de problème (facturation/technique/général/compte), assigner la sévérité (P1/P2/P3) et router vers la bonne équipe. Format de sortie : label de classification + décision de routing + message d'accusé de réception.",
          "Template d'escalade : Déclencheurs — menace légale, demande d'annulation de compte, mention d'exposition de données, P1 répété, demande explicite d'un humain. Format de sortie : message client neutre + marquage du ticket + instruction de routing.",
          "Template de résolution : Chemin structuré — reformuler le problème, appliquer la clause de politique, proposer une résolution spécifique, demander confirmation. Format de sortie : brouillon de résolution + référence de politique utilisée.",
          "Template de suivi : Déclencheur : 48 heures après la fermeture d'un ticket. Sortie : bref message vérifiant que la résolution a tenu et demandant un signal de satisfaction.",
        ],
      },
      tone_controls: {
        id: 'tone-controls',
        title: "Contrôles de ton et d'empathie dans les prompts support",
        content: [
          "**Le ton dans les prompts support nécessite 3 contrôles explicites : un marqueur d'empathie, une spécification du niveau de formalité et une contrainte sur le langage de blâme.** Sans contrôles explicites, les valeurs de ton par défaut du modèle varient.",
        ],
        items: [
          "**Marqueur d'empathie :** Demandez au modèle d'accuser réception de la frustration ou de la situation du client avant d'aborder le problème. Le pattern : déclaration d'empathie → reformulation du problème → chemin de résolution.",
          "**Niveau de formalité :** Spécifiez le registre de formalité selon votre charte de marque. Ne faites pas confiance à des instructions vagues comme «sois amical».",
          "**Contrainte sur le langage de blâme :** Instruisez explicitement le modèle d'éviter un langage qui attribue la faute au client. Testez ceci sur 10 exemples de tickets difficiles.",
        ],
      },
      guardrails: {
        id: 'guardrails',
        title: "Guardrails de conformité politique",
        content: [
          "**La conformité politique dans les prompts support nécessite 3 types de guardrails : contraintes de sujets, contraintes de sortie et déclencheurs d'escalade liés à la détection de mots-clés.**",
        ],
        items: [
          "**Contraintes de sujets :** Une liste explicite de sujets que l'IA ne doit pas aborder dans sa réponse : interprétations légales, conseils médicaux, exceptions de prix hors politique standard.",
          "**Contraintes de sortie :** Des sorties spécifiques que l'IA ne doit jamais produire : pas de promesses de prix, pas d'interprétations légales, pas de conseils médicaux.",
          "**Déclencheurs d'escalade :** Une liste de mots-clés spécifiques — «avocat», «procès», «annuler mon compte», «violation de données» — qui, s'ils sont détectés, font arrêter l'IA et produire une escalade.",
        ],
      },
      handoff: {
        id: 'handoff',
        title: "Quand et comment transférer aux agents humains",
        content: [
          "**Cinq conditions de déclenchement doivent toujours entraîner un transfert à un agent humain : langage juridique, annulation de compte, exposition de données, P1 répété pour le même problème, et demande explicite d'un humain.**",
        ],
        items: [
          "**Langage juridique :** Tout message contenant des mots comme «avocat», «procès», «litige» ou «action légale» doit déclencher une escalade immédiate.",
          "**Annulation de compte :** Une demande d'annulation de compte est suffisamment risquée pour nécessiter un traitement humain.",
          "**Exposition de données :** Toute mention d'une violation de données, d'un accès non autorisé ou d'une préoccupation RGPD/CCPA doit déclencher une escalade.",
          "**P1 répété pour le même problème :** Si un client a signalé le même problème P1 plus d'une fois et qu'il reste non résolu, un agent humain doit examiner l'historique du ticket.",
          "**Demande explicite d'un humain :** Si le client dit vouloir parler à une personne, l'IA doit honorer cette demande immédiatement.",
        ],
      },
      bad_good_example: {
        id: 'bad-good-example',
        title: 'Exemple : mauvais prompt vs bon prompt de triage',
        content: [
          "**Mauvais prompt :**\n\n«Aidez le client avec son problème.»\n\n**Bon prompt :**\n\n«Vous êtes un agent de triage support de niveau 1 pour une plateforme SaaS B2B. Classifiez ce message client en : Facturation (router à Finance), Technique (router à Tech), Compte (router à Account Management) ou Général (traiter directement). Assignez le niveau de sévérité : P1 (urgence, réponse en 1h), P2 (impact fonctionnel, réponse en 4h), P3 (informatif, réponse en 24h). Sortie : label de classification, sévérité, décision de routage et message de confirmation au client. Contraintes : ne résolvez pas le problème — triagez uniquement. Si le message contient «avocat», «procès», «annuler mon compte», «violation de données» ou «RGPD», classifiez comme P1 et routez immédiatement à l'escalade légale.»\n\n**Pourquoi la différence compte :**\nLe mauvais prompt laisse l'IA deviner ce que «aider» signifie. Le bon prompt définit les règles de classification, les niveaux de sévérité, la logique de routage, le format de sortie et les déclencheurs d'escalade — rendant chaque décision de triage prévisible et cohérente sur 1000+ tickets.",
        ],
      },
      common_mistakes: {
        id: 'common-mistakes',
        title: 'Erreurs courantes dans les prompts support',
        content: [],
        items: [
          "**Pas de condition d'escalade :** Un prompt support sans déclencheur d'escalade suppose que l'IA peut traiter toutes les entrées. Ce n'est pas le cas. Les menaces légales, les demandes d'annulation et l'exposition de données exigent un jugement humain. **Solution :** Ajoutez 3–5 déclencheurs d'escalade explicites. Listez les mots-clés exacts («avocat», «annuler mon compte», «violation de données») et l'action à prendre.",
          "**Empathie générique («Je comprends votre frustration»)** : Les modèles IA utilisent des formules d'empathie standardisées que les clients reconnaissent comme automatisées. Cela endommage la confiance. **Solution :** Instruisez le modèle de reconnaître le problème spécifique, pas l'émotion. «Je vois que l'export CSV de votre compte retourne des fichiers vides» est plus empathique que «Je comprends votre frustration.»",
          "**Hallucination de politique :** Sans documents de référence, le modèle génère des politiques qui semblent plausibles mais ne correspondent pas à vos règles réelles. Une politique d'échange hallucinez est une responsabilité légale. **Solution :** Incluez le texte de politique ou l'arbre de décision directement dans le prompt. Ajoutez une contrainte : «Ne faites pas référence à des politiques non incluses dans ce prompt. Si la demande du client n'est pas couverte, escaladez.»",
          "**Tests de ton uniquement sur tickets simples :** Le modèle traite bien les demandes claires et polies. Il échoue avec les clients en colère, les obscénités, les clients qui ont tort, et les cas limites. **Solution :** Testez sur 15+ vrais tickets : 5 normaux, 5 difficiles/en colère, 5 cas limites (litiges de facturation, défauts de produit, mentions légales). Évaluez chacun sur la précision, la conformité, le ton et l'escalade.",
          "**Même prompt sur tous les canaux de support :** Email, chat et transcriptions d'appels téléphoniques exigent des formats de sortie, des registres de ton et des limites de longueur différents. **Solution :** Créez des variantes spécifiques au canal. Chat = plus court, informel. Email = plus long, structuré. Résumé téléphonique = format bullet-point.",
        ],
      },
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        content: "Les prompts support priorisent la précision, la cohérence et la bonne escalade avant la créativité — les erreurs sont visibles par les clients et juridiquement significatives. Concevez un template de triage qui route les problèmes avec des règles de décision explicites (L1/L2/L3) vers la bonne équipe. Codifiez le ton avec 3–5 exemples conformes à votre marque et testez la cohérence entre modèles. Ajoutez des guardrails de conformité politique : une liste explicite de sujets que l'IA ne doit pas aborder, les sorties spécifiques que l'IA ne doit jamais produire (promesses de prix, interprétations légales, conseils médicaux), et les déclencheurs d'escalade (mots-clés comme «avocat», «procès», «annuler mon compte», «violation de données»). Cinq conditions de transfert exigent une escalade humaine immédiate : langage juridique, annulation de compte, exposition de données, P1 répété pour le même sujet, demande explicite d'un humain. Testez tous les templates de triage, ton et escalade sur 15+ cas limites sur 2–3 modèles avant le déploiement.",
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          { q: 'Pourquoi le PE pour support est-il différent du PE général ?', a: 'Les erreurs dans les prompts support sont visibles par les clients, juridiquement significatives et souvent sensibles aux politiques. La priorité de conception est la précision et la bonne escalade, pas la créativité. Les erreurs peuvent entraîner des dommages aux relations clients, des violations de politique ou une exposition légale. Cela exige des contraintes plus strictes sur la portée des sujets, le format de sortie et les règles d\'escalade que la plupart des autres types de prompts.' },
          { q: 'Comment concevoir un prompt de triage qui route correctement les problèmes ?', a: 'Définissez le triage avec des règles de décision explicites mappant les niveaux de sévérité : L1 (résolution immédiate, pas de humain), L2 (enquête requise, assistance IA), L3 (escalade humaine). Utilisez un format d\'arbre de décision avec une logique if-then-else. Testez le prompt sur 15+ vrais tickets de support pour vérifier le routage correct avant le déploiement.' },
          { q: 'Comment codifier le ton support sans sembler insincère ?', a: 'Fournissez 3–5 exemples de référence de réponses support conformes à votre marque et empathiques. Incluez des descripteurs de ton (3 adjectifs, par ex. «professionnel, chaleureux, direct»). Testez le template sur 2–3 modèles pour assurer la cohérence du ton. Évitez les formules d\'empathie génériques comme «Je comprends votre frustration» — utilisez plutôt des reconnaissances spécifiques du problème.' },
          { q: 'Quelles informations de politique dois-je inclure dans un prompt support ?', a: 'Incluez des documents de référence pour les politiques courantes (politique de remboursement, confidentialité, sécurité des comptes, facturation). Pour chaque politique, définissez les sorties spécifiques que l\'IA ne doit jamais produire : pas de promesses de prix au-delà des tarifs publiés, pas d\'interprétations légales, pas de conseils médicaux, pas d\'exceptions non autorisées. Rendez ces interdictions explicites et testez le prompt sur des cas limites.' },
          { q: 'Quand une IA support doit-elle transférer à un agent humain ?', a: 'Cinq conditions exigent une escalade humaine immédiate : (1) Langage juridique (avocat, procès, etc.); (2) Demandes d\'annulation de compte; (3) Exposition de données ou préoccupations de sécurité; (4) Problèmes P1 répétés pour le même ticket; (5) Demande explicite d\'un humain. Définissez ces déclencheurs explicitement dans le prompt et formez les équipes support à reconnaître les signaux de transfert de l\'IA.' },
          { q: 'Comment tester un prompt support avant le déploiement ?', a: 'Exécutez le prompt sur au moins 15 vrais tickets couvrant les cas normaux, les cas limites et les déclencheurs d\'escalade. Évaluez chaque réponse sur la précision (exactitude factuelle), la conformité (respect des politiques), le ton (empathie et adéquation à la marque) et l\'escalade (routage correct). Déployez uniquement si le score moyen est 1.5+ sur une échelle 0–2. Testez le même prompt sur 2–3 modèles pour vérifier la cohérence.' },
        ],
      },
      related_reading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          { title: 'Automatisation du support client : bonnes pratiques et pièges', url: '/prompt-engineering/customer-support-automation?lang=fr' },
          { title: 'Concevoir la logique d\'escalade pour le support assisté par IA', url: '/prompt-engineering/escalation-logic-ai-support?lang=fr' },
          { title: 'Tester les prompts support pour la précision et la conformité', url: '/prompt-engineering/support-prompt-testing?lang=fr' },
          { title: 'Construire des guardrails : conformité politique dans les prompts côté client', url: '/prompt-engineering/guardrails-policy-compliance?lang=fr' },
          { title: 'Tests multi-modèles pour les opérations support', url: '/prompt-engineering/multi-model-support-testing?lang=fr' },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          { title: 'OpenAI Guide to Responsible AI in Customer Support', url: 'https://platform.openai.com/docs/guides/prompt-engineering' },
          { title: 'Anthropic Safety Guidelines for Customer-Facing Prompts', url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview' },
          { title: 'PromptQuorum Multi-Model Support Testing Platform', url: 'https://www.promptquorum.com/features' },
        ],
      },
    },
  },

  ja: {
    freshness_tier: 'evergreen',
    theme: 'ワークフローと自動化',
    title: 'サポートオペレーションのプロンプトエンジニアリング：一貫性のある正確な回答テンプレート',
    seoTitle: 'サポートプロンプト：テンプレート設計ガイド',
    metaDescription: 'サポートチームがトリアージ、エスカレーション、トーン制御のプロンプトを設計する方法。ポリシーコンプライアンスガードレールが政策エラーを防ぎます。ハンドオフパターンが人間へのエスカレーショントリガーを明確にします。',
    ogDescription: 'サポートチームがプロンプトエンジニアリングをどう活用するか — トリアージとエスカレーションテンプレート、トーンと共感の制御、ポリシーコンプライアンスガードレール、人間へのハンドオフのタイミング。',
    twitterDescription: 'サポートopsのPE：トリアージテンプレート、エスカレーションロジック、トーン制御、ポリシーガードレール。人間的なタッチを失わずに一貫性のある回答。',
    intro: 'サポートチームは、ほとんどの他のユースケースにはないプロンプティングの課題に直面しています：悪い出力のコストは審美的なものではなく、顧客との関係、ポリシー違反、または法的リスクです。',
    leadAnswerBlock: '**サポートプロンプトは、エラーが顧客向けで、ポリシーに敏感で、しばしば法的に重要であるため、ほとんどのプロンプトタイプよりも厳しい制約が必要です。** 設計の優先事項は創造性ではなく、AIがリクエストを処理すべきでない場合の正確性、一貫性、正しいエスカレーションです。',
    publishDate: '2026-05-02',
    readTime: '9分で読める',
    educationalLevel: '中級',
    primaryTerm: 'サポートオペレーションのプロンプトエンジニアリング',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/prompt-engineering/pe-for-support-operations?lang=ja',
      headline: 'サポートオペレーションのプロンプトエンジニアリング：一貫性のある正確な回答テンプレート',
      description: 'サポートチームがトリアージ、エスカレーション、解決、フォローアップのプロンプトを設計する方法 — トーン制御、ポリシーコンプライアンスガードレール、人間へのハンドオフパターンを含む。',
      datePublished: '2026-05-02',
      inLanguage: 'ja',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/pe-for-support-operations?lang=ja', width: 1200, height: 630 },
      keywords: ['プロンプトエンジニアリング', 'サポートオペレーション', 'カスタマーサポート', 'トリアージテンプレート', 'エスカレーションロジック'],
      proficiencyLevel: 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'なぜサポートプロンプトは他のプロンプトタイプより追加の制約が必要なのですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'サポートプロンプトは顧客向けで、ポリシーに敏感で、法的に重要です。サポートでの誤った回答は審美的な問題ではなく、ポリシー違反、法的責任、または顧客関係の損失になる可能性があります。',
          },
        },
        {
          '@type': 'Question',
          name: 'サポートプロンプトに常に含めるべきエスカレーショントリガーは何ですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '各サポートプロンプトには少なくとも5つのエスカレーショントリガーが含まれる必要があります：法的な言葉、アカウントキャンセル要求、データ漏洩の言及、同じ問題への繰り返しP1チケット、人間のエージェントへの明示的な顧客要求。',
          },
        },
        {
          '@type': 'Question',
          name: 'サポートプロンプトをポリシーコンプライアンスでテストするにはどうすればいいですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '法的な言葉を使う顧客、ポリシーが禁じる価格リクエスト、繰り返しP1問題など10の難しいチケット例に対してプロンプトを実行してテストします。',
          },
        },
        {
          '@type': 'Question',
          name: 'AIは人間のエージェントに引き渡す際に謝罪すべきですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'いいえ。ハンドオフの謝罪はAIが顧客を失望させたことを示唆し、ハンドオフを否定的に位置付けます。正しいパターンは：問題を認識し、コンテキストを要約し、エスカレーション理由でチケットにフラグを立て、正しいチームにルーティングすることです。',
          },
        },
      ],
    },
    sections: {
      key_takeaways: {
        title: 'まとめ',
        isTldr: true,
        items: [
          'サポートプロンプトは、エラーが顧客向けで、ポリシーに敏感で、法的に重要であるため、他のプロンプトタイプより厳しい制約が必要です。',
          'すべてのサポートプロンプトにはエスカレーション条件が含まれていなければなりません。AIがいつ止まるかを知らなければ、処理すべきでないリクエストに応答します。',
          '4つのサポートテンプレートタイプがほとんどのサポートワークフローをカバーします：トリアージ、エスカレーション、解決、フォローアップ。',
          'トーン制御には3つの要素が必要です：共感マーカー、フォーマリティレベル、顧客への責任転嫁言語の禁止。',
          'AIハンドオフパターン：認識、要約、フラグ立て、ルーティング。ハンドオフへの謝罪なし。',
        ],
      },
      support_constraints: {
        id: 'support-constraints',
        title: 'サポートプロンプトに追加制約が必要な理由',
        content: [
          '**サポートプロンプトは、失敗のコストが準最適な出力にとどまらず、ポリシー違反、法的責任、顧客関係へのダメージにまで及ぶため、ほとんどのプロンプトタイプより多くの制約が必要です。** 3つの理由：',
        ],
        items: [
          '**ポリシーリスク：** 企業を代表して発言するサポートエージェント（人間またはAI）は記録を作成しています。価格に関する誤った回答やポリシー上限を超える返金コミットメントは責任を生じさせます。',
          '**トーンの感受性：** 顧客サポートのインタラクションは多くの場合、フラストレーションの地点から始まります。間違ったトーンはP2チケットをP1チケットに変える可能性があります。',
          '**エスカレーションの重要性：** エスカレーションすべき時にしないサポートプロンプトは、法的苦情が含まれるチケットが早期に解決済みとなるリスクがあります。',
        ],
      },
      template_types: {
        id: 'template-types',
        title: 'サポート回答テンプレートの種類',
        content: [
          '**4つのテンプレートタイプがほとんどのサポートオペレーションワークフローをカバーします：トリアージ、エスカレーション、解決、フォローアップ。** 各タイプには独自の目標、出力構造、必要な制約があります。',
        ],
        numberedItems: [
          'トリアージテンプレート：問題タイプ（請求/技術/一般/アカウント）を分類し、重大度（P1=業務停止、P2=機能的影響、P3=見た目/情報）を割り当て、正しいチームにルーティングします。出力フォーマット：分類ラベル+ルーティング決定+確認メッセージ草案。',
          'エスカレーションテンプレート：トリガー条件 — 法的脅迫、アカウントキャンセル要求、データ侵害の言及、同じ問題への繰り返しP1、明示的な人間要求。出力フォーマット：中立的な顧客メッセージ+エスカレーション理由付きチケットフラグ+ルーティング指示。',
          '解決テンプレート：構造化されたパス — 顧客の言葉で問題を再述し、関連ポリシー条項を適用し、具体的な解決策を提案し、顧客の確認を求めます。出力フォーマット：解決草案+使用したポリシー参照。',
          'フォローアップテンプレート：トリガー：チケットが解決済みとマークされてから48時間後。出力：解決が維持されているか確認し、満足度シグナルを求める短いフォローアップメッセージ。',
        ],
      },
      bad_good_example: {
        id: 'bad-good-example',
        title: '例：悪いプロンプト vs 良いトリアージプロンプト',
        content: [
          '**悪いプロンプト：**\n\n「顧客の問題を手伝う。」\n\n**良いプロンプト：**\n\n「あなたはB2B SaaS プラットフォームのレベル1トリアージ agent です。このカスタマーメッセージを分類：請金（Financeにルーティング）、技術（Techにルーティング）、アカウント（Account Managementにルーティング）、一般（直接処理）。重大度を割り当て：P1=業務ブロック、1時間以内回答、P2=機能的影響、4時間以内回答、P3=情報提供、24時間以内回答。出力：分類ラベル + 重大度 + ルーティング決定 + 顧客メッセージ。制約：問題を解決しない — トリアージのみ。メッセージが「弁護士」「訴訟」「アカウント削除」「データ侵害」「GDPR」を含む場合、P1として分類し、法的エスカレーションに直ちにルーティング。」\n\n**なぜ違いが重要か：**\n悪いプロンプトはAIに「手伝う」の意味を推測させます。良いプロンプトは分類ルール、重大度レベル、ルーティングロジック、出力フォーマット、エスカレーショントリガーを定義し、各決定が1000+チケット全体で予測可能で一貫性があります。',
        ],
      },
      common_mistakes: {
        id: 'common-mistakes',
        title: 'サポートプロンプトの一般的な間違い',
        content: [],
        items: [
          '**エスカレーション条件がない：** エスカレーショントリガーのないプロンプトはAIがすべての入力を処理できると仮定します。できません。法的脅迫、削除要求、データ露出には人間判断が必要です。**解決策：** 3–5の明示的エスカレーショントリガーを追加。正確なキーワード（「弁護士」「アカウント削除」「データ侵害」）とアクションをリストします。',
          '**一般的共感（「フラストレーションを理解します」）：** AIは定型句を使用し、顧客は自動化として認識します。信頼を損ないます。**解決策：** 感情ではなく具体的な問題を確認するよう指示。「CSVエクスポートがあなたのアカウントで空ファイルを返していることがわかります」は「フラストレーションを理解します」より共感的です。',
          '**ポリシー幻覚 — 存在しないポリシーの発明：** 参照ドキュメントなしでは、AIはもっともらしい但し不正なポリシーを生成します。幻覚した払戻ポリシーは責任です。**解決策：** 実ポリシーテキストまたは決定ツリーをプロンプトに含めます。制約を追加：「このプロンプトに含まれていないポリシーを参照しないでください。顧客要求がカバーされていない場合はエスカレーション。」',
          '**単純なチケットのみでトーンテスト：** AIは丁寧で明確な要求を処理します。怒った顧客、下品な言葉、間違った顧客、エッジケースで失敗します。**解決策：** 15+の実チケットをテスト：5つ普通、5つ怒った/困難、5つエッジケース（請金紛争、製品欠陥、法的言及）。正確性、コンプライアンス、トーン、エスカレーションで評価。',
          '**すべてのサポートチャネルで同じプロンプト：** メール、チャット、電話転写には異なる出力フォーマット、トーンレジスター、長さ制限が必要。**解決策：** 各テンプレートのチャネル固有の変種を作成。チャット=より短く非公式。メール=より長く構造化。電話サマリー=agent ノートのためのバレットポイント形式。',
        ],
      },
      tone_controls: {
        id: 'tone-controls',
        title: 'サポートプロンプトのトーン共感制御',
        content: [
          '**サポートプロンプトのトーンには3つの明示的な制御が必要：共感マーカー、フォーマリティレベル仕様、非難言語の制約。** 明示的な制御なしでは、モデルのトーンデフォルトが異なります。',
        ],
        items: [
          '**共感マーカー：** モデルが問題を対処する前に顧客のフラストレーションや状況を認識するよう指示。パターン：共感ステートメント → 問題の再述 → 解決パス。これはAIが解決に直接ジャンプすることを防ぎます。',
          '**フォーマリティレベル：** ブランドガイドに基づいてフォーマリティレジスターを指定（例：「senior customer service representative の形式性と親しみやすさ」）。「フレンドリーになる」のような漠然とした指示に頼らないでください。',
          '**非難言語の制約：** モデルに顧客に責任を帰する言語を避けるよう明示的に指示。これは[negativePrompting](/prompt-engineering/negative-prompting?lang=ja)の形 — やることに加えて、避けるべきことをモデルに伝える。10の困難なチケット例でテストします。',
        ],
        callouts: [
          {
            type: 'pro-tip',
            label: '困難なケースでテスト',
            text: '10の困難なチケット例に対してトーンプロンプトを実行してください — 怒った顧客、下品な言葉、顧客が事実上間違っているケース。モデルが非難言語制約または共感マーカーをいずれのケースで失敗する場合、デプロイ前に制約を修正します。',
          },
        ],
      },
      guardrails: {
        id: 'guardrails',
        title: 'ポリシーコンプライアンスガードレール',
        content: [
          '**サポートプロンプトのポリシーコンプライアンスには3種類のガードレールが必要：主題制約、出力制約、キーワード検出に結び付けられたエスカレーショントリガー。** これらのガードレールはAIが対処できることと対処できないことの境界を定義します。',
        ],
        items: [
          '**主題制約：** AIが応答で対処してはいけない主題の明示的なリスト。典型的な例：法的解釈、医学的助言、標準ポリシー外の価格例外、内部プロセスの詳細。フォーマット：「これらの主題を対処しないでください：[リスト]。顧客メッセージがこれらに触れる場合は、[中立的確認]で応答し、[チーム]にルーティングしてください。」',
          '**出力制約：** AIが決してどのような状況でも生成してはいけない特定の出力。分類禁止：価格の約束（例「割引を提供できます」）、法的解釈（例「これは契約違反です」）、医学的助言（例「医師の診察を受けてください」）、非標準例外の確認。',
          '**エスカレーショントリガー：** 特定のキーワード — 「弁護士」「訴訟」「アカウント削除」「データ侵害」「GDPR違反」 — 検出時にAIを直ちに停止し、エスカレーション出力を生成するようにします。フォーマット：「顧客メッセージに以下のいずれかの単語を含む場合：[キーワードリスト]、解決を試みないでください。エスカレーション確認を生成し、チケットに[理由]をフラグ立てし、[チーム]にルーティングしてください。」',
        ],
        callouts: [
          {
            type: 'key-point',
            label: 'ポリシー幻覚のリスク',
            text: 'プロンプトの実ポリシーテキストがないと、モデルはもっともらしく聞こえるが存在しないポリシーを発明します。幻覚した「30日間払戻」（あなたの実ポリシーが14日間の場合）は法的責任です。常にポリシーテキストまたは決定ツリーをプロンプトに含めます。',
          },
        ],
      },
      handoff: {
        id: 'handoff',
        title: '人間のエージェントへの引き渡しのタイミングと方法',
        content: [
          '**5つのトリガー条件が常に人間のエージェントへの引き渡しをもたらすべきです：法的言語、アカウント削除、データ露出、同じ問題への繰り返しP1、人間への明示的な要求。** これらは交渉不可能なエスカレーションポイント — AIはいずれのケースでも解決を試みてはいけません。',
        ],
        items: [
          '**法的言語：** 「弁護士」「訴訟」「訴訟」「法的措置」を含むメッセージは直ちにエスカレーションをトリガーします。AIは法的フレーミングに従事してはいけません — 確認してルーティングするだけです。',
          '**アカウント削除：** アカウント削除要求は高リスク。AIは要求を確認し、ハンドオフを確認しますが、人間の承認なしに払戻オファーまたは削除処理を試みません。',
          '**データ露出：** データ侵害、不正アクセス、またはGDPR/CCPA懸念の言及はエスカレーションをトリガーします。これには規制上のタイムラインと法的含意があり、人間の決定を要求します。',
          '**同じ問題への繰り返しP1：** 顧客が同じP1問題を2回以上報告し、未解決の場合、人間のエージェントがチケット履歴を確認する必要があります。AIはもう一つの解決サイクルを試みてはいけません。',
          '**人間への明示的な要求：** 顧客が人間、manager、またはagentと話したいと言う場合、AIはこの要求を直ちに満たす必要があります。先に問題を解決しようとしてはいけません。',
        ],
        callouts: [
          {
            type: 'key-point',
            label: 'ハンドオフパターン',
            text: '正しいハンドオフ出力パターン：(1) 顧客の問題を一文で確認。(2) agent へのコンテキストをチケットノートで要約。(3) エスカレーション理由でチケットにフラグ。(4) 正しいチームにルーティング。顧客メッセージは中立でプロフェッショナル — 「I\'m routing this to our [team] who can best help you」 — ハンドオフへの謝罪なし。謝罪はAIが失敗したことを意味し、それは間違ったフレームワークです。',
          },
        ],
      },
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        content: 'サポートプロンプトは他のほとんどのプロンプトタイプより厳しい制約が必要です。なぜなら、エラーはカスタマー向けで、ポリシー敏感で、法的に重要だからです。トリアージプロンプトは問題をレベル1（AI解決）、レベル2（調査必須）、レベル3（人間エスカレーション）にルーティングします。サポートトーンは3–5個のトーンサンプルをエンコードし、モデル間で一貫性をテストします。ポリシー準拠ガードレール（参照ドキュメント、デシジョンツリー）を明示的に含めます。5つの普遍的なエスカレーショントリガーを定義します：法的言語、アカウント取消、データ露出、同一問題の繰り返しP1、人間への明示的なリクエスト。人間ハンドオフは「申し訳ありません」ではなく「スペシャリストがルーティングしています」という中立的なメッセージです。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: 'サポートプロンプトが他のプロンプトタイプより厳しい制約が必要な理由は？', a: 'サポートプロンプトはカスタマー向け、ポリシー敏感、法的に重要です。サポートの悪い回答は美的問題ではなく、ポリシー違反、責任、または顧客関係の喪失です。' },
          { q: 'サポートプロンプトに常に含まれるべきエスカレーショントリガーは？', a: 'すべてのサポートプロンプトには少なくとも5つのエスカレーショントリガーを含むべき：法的言語、アカウント取消、データ露出、同じ問題の繰り返しP1、人間エージェントへの明示的リクエスト。' },
          { q: 'サポートプロンプトをポリシー準拠についてテストしますか？', a: '難しいチケット例10個に対してサポートプロンプトを実行する。各出力が正しいエスカレーションをトリガーするか、またはトピック制約を尊重するかをスコアリング。' },
          { q: 'AIが人間エージェントにハンドオフするとき、謝罪すべきですか？', a: 'いいえ。ハンドオフ謝罪はAIが顧客をがっかりさせたことを意味し、ハンドオフを負に枠組みします。正しいパターンは：問題を認める→コンテキストをサマライズ→チケットにフラグを立てる→ルーティング。' },
          { q: 'サポートAIはいつ人間エージェントにハンドオフすべきか？', a: '5つの条件が即座の人間エスカレーション必須：(1)法的言語、(2)アカウント取消、(3)データセキュリティ懸念、(4)同一チケットでの繰り返しP1、(5)人間への明示的リクエスト。' },
          { q: '日本でのサポートチーム向けの追加要件は？', a: '日本のサポートチームはMETI AI Governance 2024ガイドラインに準拠する必要があります。モデル選択には日本語サポートとMETIコンプライアンスを確認してください。エスカレーション規則を日本の消費者保護法に合わせます。' },
        ],
      },
      related_reading: {
        id: 'related-reading',
        title: '関連資料',
        items: [
          { title: 'CRAFTフレームワーク for チーム：構造化 vs アドホックプロンプティング', url: '/prompt-engineering/prompt-framework-for-teams?lang=ja' },
          { title: 'プロンプト試験と検証：LLM自動化テストスイート', url: '/prompt-engineering/prompt-testing-validation?lang=ja' },
          { title: 'マルチモデルプロンプトテスト：GPT-4o、Claude、Geminiの比較', url: '/prompt-engineering/multi-model-prompt-testing?lang=ja' },
          { title: 'エスカレーション管理：効果的なハンドオフパターン', url: '/prompt-engineering/escalation-management?lang=ja' },
          { title: 'METI AI治理とサポート運営：日本のコンプライアンス', url: '/prompt-engineering/meti-ai-governance?lang=ja' },
        ],
      },
      sources: {
        id: 'sources',
        title: 'ソース',
        items: [
          { title: 'PromptQuorum：マルチモデル比較ツール', url: 'https://www.promptquorum.com/features' },
          { title: 'METI AI Governance 2024フレームワーク', url: 'https://www.meti.go.jp/english/' },
          { title: 'PDPA標準（アジア太平洋データ保護）', url: 'https://www.pdpa.or.th/' },
        ],
      },
    },
  },

  zh: {
    freshness_tier: 'evergreen',
    theme: '工作流与自动化',
    title: '支持运营的提示词工程：一致、准确的响应模板',
    seoTitle: '客支团队提示词工程：完整指南',
    metaDescription: '设计客户支持提示词以实现分诊、升级和语气控制。合规护栏防止策略错误。交接模式阐明人工升级触发器。包括完整模板、实际示例和部署前全面测试清单。',
    ogDescription: '支持团队如何使用提示词工程——分诊和升级模板、语气和共情控制、策略合规护栏以及何时移交给人工。',
    twitterDescription: '支持运营PE：分诊模板、升级逻辑、语气控制、策略护栏。在不失去人情味的情况下保持一致的响应。',
    intro: '支持团队面临着大多数其他用例所没有的提示词挑战：糟糕输出的代价不是审美问题——而是客户关系、策略违规或法律风险。',
    leadAnswerBlock: '**支持提示词需要比大多数提示词类型更严格的约束，因为错误面向客户、对策略敏感，且通常具有法律意义。** 设计优先级不是创造力——而是当AI不应处理请求时的准确性、一致性和正确升级。',
    publishDate: '2026-05-02',
    readTime: '9分钟阅读',
    educationalLevel: '中级',
    primaryTerm: '支持运营提示词工程',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/prompt-engineering/pe-for-support-operations?lang=zh',
      headline: '支持运营的提示词工程：一致、准确的响应模板',
      description: '支持团队如何为分诊、升级、解决和跟进设计提示词——包括语气控制、策略合规护栏和人工交接模式。',
      datePublished: '2026-05-02',
      inLanguage: 'zh',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/pe-for-support-operations?lang=zh', width: 1200, height: 630 },
      keywords: ['提示词工程', '支持运营', '客户支持', '分诊模板', '升级逻辑', '策略合规'],
      proficiencyLevel: 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        {
          '@type': 'Question',
          name: '为什么支持提示词需要比其他提示词类型更多的约束？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '支持提示词面向客户、对策略敏感且具有法律意义。支持中的错误答案不是审美问题——它可能是策略违规、法律责任或失去客户关系。',
          },
        },
        {
          '@type': 'Question',
          name: '支持提示词中应始终包含哪些升级触发器？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '每个支持提示词应包含至少5个升级触发器：法律语言、账户取消请求、数据暴露提及、同一问题的重复P1工单和客户明确要求人工代理。',
          },
        },
        {
          '@type': 'Question',
          name: '如何测试支持提示词的策略合规性？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '通过针对10个包含边缘案例的困难工单示例运行提示词来测试：使用法律语言的客户、策略禁止的定价请求以及重复的P1问题。',
          },
        },
        {
          '@type': 'Question',
          name: '移交给人工代理时AI应该道歉吗？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '不应该。移交道歉暗示AI使客户失望，这将移交定性为负面。正确的移交模式是：确认问题、总结背景、用升级原因标记工单并路由到正确团队。',
          },
        },
      ],
    },
    sections: {
      key_takeaways: {
        title: '核心要点',
        isTldr: true,
        items: [
          '支持提示词需要比其他提示词类型更严格的约束，因为错误面向客户、对策略敏感且具有法律意义。',
          '每个支持提示词必须包含升级条件。如果AI不知道何时停止，它将响应不应处理的请求。',
          '四种支持模板类型覆盖大多数支持工作流：分诊、升级、解决和跟进。',
          '语气控制需要3个组成部分：共情标记、正式度级别和对客户使用责任归咎语言的约束。',
          'AI交接模式：确认、总结、标记、路由。交接时不道歉——将其定位为路由决策而非失败。',
        ],
      },
      support_constraints: {
        id: 'support-constraints',
        title: '为什么支持提示词需要额外约束',
        content: [
          '**支持提示词需要比大多数提示词类型更多的约束，因为失败的代价不仅限于次优输出——还延伸到策略违规、法律责任和客户关系损害。** 三个支持提示词需要不同设计方法的原因：',
        ],
        items: [
          '**策略风险：** 代表公司发言的支持代理（人工或AI）正在创建记录。关于定价的错误答案或超出策略限制的退款承诺会产生责任。',
          '**语气敏感性：** 客户支持互动通常从挫折点开始。错误的语气可以将P2工单升级为P1工单。语气控制必须在提示词中明确。',
          '**升级的重要性：** 在应该升级时未能升级的支持提示词可能导致包含法律投诉的工单过早关闭。',
        ],
      },
      template_types: {
        id: 'template-types',
        title: '支持响应模板类型',
        content: [
          '**四种模板类型覆盖大多数支持运营工作流：分诊、升级、解决和跟进。** 每种模板类型有独特的目标、输出结构和必需约束。',
        ],
        numberedItems: [
          '分诊模板：分类问题类型（账单/技术/一般/账户），分配严重性（P1=业务阻塞，P2=功能影响，P3=外观或信息），并路由到正确团队。输出格式：分类标签+路由决定+致客户确认消息草稿。',
          '升级模板：触发条件——法律威胁、账户取消请求、数据泄露提及、同一问题的重复P1、明确的人工请求。输出格式：中立的客户消息+带原因的工单标记+路由指示。',
          '解决模板：结构化路径——以客户的话重述问题，应用相关策略条款，提出具体解决方案，请求客户确认。输出格式：解决草案+使用的策略参考。',
          '跟进模板：触发器：工单标记为已解决后48小时。输出：检查解决方案是否有效并请求满意度信号的简短跟进消息。',
        ],
      },
      tone_controls: {
        id: 'tone-controls',
        title: '支持提示词中的语气和共情控制',
        content: [
          '**支持提示词中的语气需要3个明确控制：共情标记、正式度级别规范和责任归咎语言约束。** 没有明确控制，模型语气默认值会有所不同。',
        ],
        items: [
          '**共情标记：** 指示模型在处理问题之前确认客户的挫折感或情况。模式：共情陈述→问题重述→解决路径。',
          '**正式度级别：** 根据品牌指南指定正式度寄存器。不要依赖"要友好"这样模糊的指示。',
          '**责任归咎语言约束：** 明确指示模型避免将责任归咎于客户的语言。对10个困难工单示例测试此约束。',
        ],
      },
      guardrails: {
        id: 'guardrails',
        title: '策略合规护栏',
        content: [
          '**支持提示词中的策略合规需要3种类型的护栏：主题约束、输出约束和与关键词检测相关的升级触发器。**',
        ],
        items: [
          '**主题约束：** AI在响应中不得涉及的明确主题列表：法律解释、医疗建议、标准策略之外的定价例外和内部流程细节。',
          '**输出约束：** AI绝不应生成的特定输出：不承诺定价、不做法律解释、不提供医疗建议、不确认非标准例外。',
          '**升级触发器：** 特定关键词列表——"律师"、"诉讼"、"取消我的账户"、"数据泄露"、"GDPR违规"——如被检测到，使AI立即停止正常解决路径并产生升级输出。',
        ],
      },
      handoff: {
        id: 'handoff',
        title: '何时以及如何移交给人工代理',
        content: [
          '**五个触发条件应始终导致移交给人工代理：法律语言、账户取消、数据暴露、同一问题的重复P1以及客户明确要求人工。**',
        ],
        items: [
          '**法律语言：** 包含"律师"、"诉讼"、"法律行动"等词语的任何消息必须触发立即升级。',
          '**账户取消：** 账户取消请求风险足够高，需要人工处理。AI可以确认请求，但不能在没有人工授权的情况下尝试挽留或处理取消。',
          '**数据暴露：** 任何提及数据泄露、未经授权访问或GDPR/CCPA问题的内容必须触发升级。',
          '**同一问题的重复P1：** 如果客户对同一P1问题报告超过一次且仍未解决，人工代理必须审查工单历史。',
          '**明确要求人工：** 如果客户说他们想和人说话，AI必须立即满足该请求，而不是先尝试解决问题。',
        ],
      },
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        content: '支持提示词需要比其他大多数提示词类型更严格的约束，因为错误对客户、对策略敏感、通常在法律上很重要。分诊提示词将问题路由到3个级别：级别1（AI解决）、级别2（需要调查）、级别3（人工升级）。支持语气编码3–5个语调样本，并在模型间测试一致性。策略合规护栏（参考文件、决策树）必须明确包含在提示词中。5个普遍的升级触发器：法律语言、账户取消、数据安全、同一问题的重复P1、人工明确请求。人工移交使用中立的客户消息——"我正在将您转接给一位专家"，而不是"对不起，我无法帮助"。中国《数据安全法》2021年要求在多模型测试中验证本地化部署和数据驻留政策。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: '支持提示词为什么需要比其他提示词类型更多的约束？', a: '支持提示词对客户公开、策略敏感、通常在法律上很重要。支持中的错误答案不是美学问题——它是策略违反、责任或客户关系丧失。' },
          { q: '支持提示词中应该始终包含哪些升级触发器？', a: '每个支持提示词应包含至少5个升级触发器：法律语言、账户取消请求、数据暴露提及、同一问题的重复P1、人工代理的明确客户请求。' },
          { q: '如何为策略合规性测试支持提示词？', a: '针对包括边缘情况的10个困难工单示例运行支持提示词：使用法律语言的客户、策略禁止的定价请求、医学问题和重复的P1问题。' },
          { q: 'AI向人工代理移交时应该道歉吗？', a: '不应该。移交道歉意味着AI让客户失望，这会对移交产生负面框架。正确的模式是：确认问题→总结背景→标记工单→路由。' },
          { q: '何时支持AI应该向人工代理移交？', a: '五个条件需要立即人工升级：(1)法律语言、(2)账户取消、(3)数据安全顾虑、(4)同一工单上的重复P1、(5)客户的明确人工请求。' },
          { q: '中国团队对支持提示词有什么额外要求？', a: '中国《数据安全法》2021年要求在多模型选择中验证本地化部署和数据驻留政策。在升级规则中包括GDPR和本地数据保护法要求。' },
        ],
      },
      related_reading: {
        id: 'related-reading',
        title: '相关资料',
        items: [
          { title: '为团队设计CRAFT框架：结构化vs临时提示编制', url: '/prompt-engineering/prompt-framework-for-teams?lang=zh' },
          { title: '提示词测试和验证：LLM自动化测试套件', url: '/prompt-engineering/prompt-testing-validation?lang=zh' },
          { title: '多模型提示词测试：GPT-4o、Claude、Gemini比较', url: '/prompt-engineering/multi-model-prompt-testing?lang=zh' },
          { title: '升级管理：有效的人工移交模式', url: '/prompt-engineering/escalation-management?lang=zh' },
          { title: '中国数据安全法与支持运营：合规指南', url: '/prompt-engineering/china-data-security?lang=zh' },
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          { title: 'PromptQuorum：多模型比较工具', url: 'https://www.promptquorum.com/features' },
          { title: '中国数据安全法2021年', url: 'https://www.cac.gov.cn/' },
          { title: 'ASEAN PDPA标准（亚太数据保护）', url: 'https://www.pdpa.or.th/' },
        ],
      },
    },
  },
};
