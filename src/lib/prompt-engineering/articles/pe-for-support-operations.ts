import type { Language } from "@/lib/blog/blogContent";
import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Record<Language, PEArticle> = {
  en: {
    freshness_tier: 'evergreen',
    theme: 'Workflows & Automation',
    title: 'Prompt Engineering for Support Operations: Consistent, Accurate Response Templates',
    seoTitle: 'Prompt Engineering for Support Teams: Response Templates',
    metaDescription: 'Prompt engineering for support teams: triage templates, escalation logic, tone controls, policy compliance guardrails, edge case testing, and human handoff patterns.',
    ogDescription: 'How support teams use prompt engineering — triage and escalation templates, tone and empathy controls, policy compliance guardrails, edge case testing, and when to hand off to humans.',
    twitterDescription: 'PE for support ops: triage templates, escalation logic, tone controls, policy guardrails. Consistent responses without losing the human touch.',
    intro: 'Support teams face a prompting challenge that most other use cases do not: the cost of a bad output is not aesthetic — it is a customer relationship, a policy violation, or a legal exposure. Prompt engineering for support operations means designing for accuracy, consistency, and correct escalation as the primary goals.',
    leadAnswerBlock: '**Support prompts need tighter constraints than most prompt types because errors are customer-facing, policy-sensitive, and often legally significant.** The design priority is not creativity — it is accuracy, consistency, and correct escalation when the AI should not handle a request.',
    publishDate: '2026-05-02',
    readTime: '9 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Prompt Engineering for Support Operations',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
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
    },
  },

  de: {
    freshness_tier: 'evergreen',
    theme: 'Workflows & Automatisierung',
    title: 'Prompt Engineering für Support-Operationen: Konsistente, genaue Antwort-Templates',
    seoTitle: 'Prompt Engineering für Support-Teams: Antwort-Templates',
    metaDescription: 'Prompt Engineering für Support-Teams: Triage-Templates, Eskalationslogik, Tonsteuerung, Richtlinien-Compliance-Guardrails, Edge-Case-Testing und Human-Handoff-Muster.',
    ogDescription: 'Wie Support-Teams Prompt Engineering einsetzen — Triage- und Eskalations-Templates, Ton- und Empathie-Steuerung, Richtlinien-Compliance-Guardrails und wann man an Menschen übergeben sollte.',
    twitterDescription: 'PE für Support-Ops: Triage-Templates, Eskalationslogik, Tonsteuerung, Richtlinien-Guardrails. Konsistente Antworten ohne den menschlichen Touch zu verlieren.',
    intro: 'Support-Teams stehen vor einer Prompting-Herausforderung, die die meisten anderen Anwendungsfälle nicht haben: Die Kosten einer schlechten Ausgabe sind nicht ästhetischer Natur — es geht um eine Kundenbeziehung, eine Richtlinienverletzung oder rechtliche Risiken.',
    leadAnswerBlock: '**Support-Prompts benötigen engere Einschränkungen als die meisten anderen Prompt-Typen, weil Fehler kundenseitig, richtliniensensitiv und oft rechtlich bedeutsam sind.** Die Designpriorität ist nicht Kreativität — es sind Genauigkeit, Konsistenz und korrekte Eskalation, wenn die KI eine Anfrage nicht bearbeiten sollte.',
    publishDate: '2026-05-02',
    readTime: '9 Min. Lesezeit',
    educationalLevel: 'Fortgeschritten',
    primaryTerm: 'Prompt Engineering für Support-Operationen',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/prompt-engineering/pe-for-support-operations?lang=de',
      headline: 'Prompt Engineering für Support-Operationen: Konsistente, genaue Antwort-Templates',
      description: 'Wie Support-Teams Prompts für Triage, Eskalation, Lösung und Follow-up gestalten — einschließlich Tonsteuerung, Richtlinien-Compliance-Guardrails und Human-Handoff-Muster.',
      datePublished: '2026-05-02',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/pe-for-support-operations?lang=de', width: 1200, height: 630 },
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
      tone_controls: {
        id: 'tone-controls',
        title: 'Ton- und Empathie-Steuerung in Support-Prompts',
        content: [
          '**Ton in Support-Prompts erfordert 3 explizite Steuerungen: einen Empathiemarker, eine Formalitätsniveauspezifikation und eine Einschränkung für schuldzuweisende Sprache.** Ohne explizite Steuerungen variieren Modell-Tonstandards — und Standards, die für Content-Generierung funktionieren, sind oft falsch für den Kundensupport.',
        ],
        items: [
          '**Empathiemarker:** Weisen Sie das Modell an, die Frustration oder Situation des Kunden zu bestätigen, bevor es das Problem anspricht. Das Muster: Empathieerklärung → Problemrestatement → Lösungsweg.',
          '**Formalitätsniveau:** Geben Sie das Formalitätsregister anhand Ihres Marken-Leitfadens an. Verlassen Sie sich nicht auf vage Anweisungen wie "sei freundlich".',
          '**Schuldzuweisung-Spracheinschränkung:** Weisen Sie das Modell ausdrücklich an, Sprache zu vermeiden, die dem Kunden die Schuld zuweist. Testen Sie dies an 10 schwierigen Ticket-Beispielen.',
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
          '**Eskalationsauslöser:** Eine Liste spezifischer Schlüsselwörter — "Rechtsanwalt", "Klage", "Konto kündigen", "Datenpanne", "DSGVO-Verstoß" — die bei Erkennung die KI sofort stoppen lassen und eine Eskalation auslösen.',
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
    },
  },

  fr: {
    freshness_tier: 'evergreen',
    theme: 'Workflows & Automatisation',
    title: 'Prompt Engineering pour les opérations support : templates de réponses cohérents et précis',
    seoTitle: 'Prompt Engineering pour équipes support : templates de réponses',
    metaDescription: "Prompt engineering pour équipes support : templates de triage, logique d'escalade, contrôles de ton, guardrails de conformité politique, tests de cas limites et transfert aux agents humains.",
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
    },
  },

  ja: {
    freshness_tier: 'evergreen',
    theme: 'ワークフローと自動化',
    title: 'サポートオペレーションのプロンプトエンジニアリング：一貫性のある正確な回答テンプレート',
    seoTitle: 'サポートチームのプロンプトエンジニアリング：回答テンプレート',
    metaDescription: 'サポートチームのプロンプトエンジニアリング：トリアージテンプレート、エスカレーションロジック、トーン制御、ポリシーコンプライアンスガードレール、エッジケーステスト、人間へのハンドオフパターン。',
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
      tone_controls: {
        id: 'tone-controls',
        title: 'サポートプロンプトのトーンと共感の制御',
        content: [
          '**サポートプロンプトのトーンには3つの明示的な制御が必要です：共感マーカー、フォーマリティレベル仕様、責任転嫁言語の制約。** 明示的な制御なしでは、モデルのトーンデフォルトが異なります。',
        ],
        items: [
          '**共感マーカー：** モデルが問題を対処する前に顧客のフラストレーションや状況を認識するよう指示します。パターン：共感ステートメント→問題の再述→解決パス。',
          '**フォーマリティレベル：** ブランドガイドに基づいてフォーマリティレジスターを指定します。「フレンドリーになって」などの曖昧な指示には依存しないでください。',
          '**責任転嫁言語制約：** 顧客に責任を帰属させる言語を避けるよう明示的に指示します。10の難しいチケット例でこれをテストします。',
        ],
      },
      guardrails: {
        id: 'guardrails',
        title: 'ポリシーコンプライアンスガードレール',
        content: [
          '**サポートプロンプトのポリシーコンプライアンスには3種類のガードレールが必要です：トピック制約、出力制約、キーワード検出に結びついたエスカレーショントリガー。**',
        ],
        items: [
          '**トピック制約：** AIが回答で対処してはならないトピックの明示的なリスト：法的解釈、医療アドバイス、標準ポリシーにない価格例外、内部プロセスの詳細。',
          '**出力制約：** AIが絶対に生成してはならない特定の出力：価格の約束なし、法的解釈なし、医療アドバイスなし、標準外例外の確認なし。',
          '**エスカレーショントリガー：** 検出されたときにAIを即座に停止させエスカレーション出力を生成させる特定のキーワードリスト：「弁護士」「訴訟」「アカウントをキャンセル」「データ侵害」「GDPR違反」。',
        ],
      },
      handoff: {
        id: 'handoff',
        title: '人間のエージェントへのハンドオフのタイミングと方法',
        content: [
          '**5つのトリガー条件が常に人間のエージェントへのハンドオフをもたらすべきです：法的な言葉、アカウントキャンセル、データ漏洩、同じ問題への繰り返しP1、人間への明示的な顧客要求。**',
        ],
        items: [
          '**法的な言葉：** 「弁護士」「訴訟」「法的措置」などの言葉を含むメッセージは即座のエスカレーションをトリガーしなければなりません。',
          '**アカウントキャンセル：** アカウントキャンセル要求は人間による対応が必要なほどリスクが高い。AIは要求を確認しますが、人間の承認なしに解約処理やリテンション提案を試みません。',
          '**データ漏洩：** データ侵害、不正アクセス、またはGDPR/CCPA懸念の言及はエスカレーションをトリガーしなければなりません。',
          '**同じ問題への繰り返しP1：** 顧客が同じP1問題を2回以上報告し、未解決のままであれば、人間のエージェントがチケット履歴を確認する必要があります。',
          '**人間への明示的な要求：** 顧客が人と話したいと言えば、AIはまず問題を解決しようとせずに即座にその要求を満たさなければなりません。',
        ],
      },
    },
  },

  zh: {
    freshness_tier: 'evergreen',
    theme: '工作流与自动化',
    title: '支持运营的提示词工程：一致、准确的响应模板',
    seoTitle: '支持团队提示词工程：响应模板',
    metaDescription: '支持团队的提示词工程：分诊模板、升级逻辑、语气控制、策略合规护栏、边缘案例测试和人工交接模式。',
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
    },
  },
};
