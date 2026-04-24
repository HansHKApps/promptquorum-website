# Image Integration Guide: Local vs Cloud Agents Article

## 5 SVGs Created (EN + DE)

All images follow IMAGE_STYLE_GUIDE.md standards: Material Design 3 colors, 800×350/420px canvas, system-ui typography, WCAG AA contrast.

### Image Files

| Concept | English | German |
|---------|---------|--------|
| Speed Comparison | `local-vs-cloud-agents-speed-comparison-en.svg` | `local-vs-cloud-agents-speed-comparison-de.svg` |
| Cost Break-Even | `local-vs-cloud-agents-cost-breakeven-en.svg` | `local-vs-cloud-agents-cost-breakeven-de.svg` |
| Capabilities Table | `local-vs-cloud-agents-capabilities-en.svg` | `local-vs-cloud-agents-capabilities-de.svg` |
| Decision Tree | `local-vs-cloud-agents-decision-tree-en.svg` | `local-vs-cloud-agents-decision-tree-de.svg` |
| Hybrid Flow | `local-vs-cloud-agents-hybrid-flow-en.svg` | `local-vs-cloud-agents-hybrid-flow-de.svg` |

**Location:** `public/images/`

**File Status:** ✅ All 10 images ready to use

---

## How to Add Images to Article

In `src/lib/local-llms/content.ts`, locate the `'local-vs-cloud-agents'` article at line 52469.

For each language block (en, de), add `image` and `imageCaption` fields to the relevant section object:

### Pattern

```typescript
sections: {
  sectionKey: {
    id: 'section-id',
    title: 'Section Title',
    content: [...],
    items: [...],
    // ADD THESE:
    image: '/images/local-vs-cloud-agents-[concept]-{lang}.svg',
    imageCaption: 'GEO-optimized caption with specific metrics and keywords.',
  },
}
```

---

## Recommended Placements

### 1. Performance Section (id: 'performance')
**Image:** `local-vs-cloud-agents-speed-comparison-en/de.svg`

**Caption (EN):**
> Cloud agents respond in 100–300ms per step; local agents take 2–5 seconds. Cloud handles interactive UX; local is practical for automation and batch processing.

**Caption (DE):**
> Cloud-Agenten antworten in 100–300 ms pro Schritt; lokale Agenten brauchen 2–5 Sekunden. Cloud für interaktive UX; lokal praktisch für Automatisierung und Batch-Verarbeitung.

---

### 2. Cost Section (id: 'cost')
**Image:** `local-vs-cloud-agents-cost-breakeven-en/de.svg`

**Caption (EN):**
> Cost break-even at 50M tokens/month: cloud is cheaper below, local is 10–60× cheaper above. RTX 4090 hardware cost amortized over 3 years plus electricity.

**Caption (DE):**
> Kostenausgleich bei 50M Token/Monat: Cloud günstiger darunter, lokal 10–60× günstiger darüber. RTX 4090 Hardware-Kosten amortisiert über 3 Jahre plus Strom.

---

### 3. Capabilities Section (id: 'capabilities')
**Image:** `local-vs-cloud-agents-capabilities-en/de.svg`

**Caption (EN):**
> Cloud agents excel at multi-step reasoning and native integrations (GPT-4, Claude 4.6). Local agents offer full control over memory and customization (Llama 13B+, Qwen 32B).

**Caption (DE):**
> Cloud-Agenten glänzen bei mehrstufigem Denken und nativen Integrationen (GPT-4, Claude 4.6). Lokale Agenten bieten volle Kontrolle über Speicher und Anpassung (Llama 13B+, Qwen 32B).

---

### 4. When to Choose Cloud Section (id: 'when-to-choose')
**Image:** `local-vs-cloud-agents-decision-tree-en/de.svg`

**Caption (EN):**
> Decision framework: choose cloud for complex reasoning, interactive UX, low volume (<50M/month), and non-sensitive data. Choose local for privacy-critical data, high volume (>50M/month), GDPR/HIPAA compliance, and full customization.

**Caption (DE):**
> Entscheidungsrahmen: Wählen Sie Cloud für komplexe Denkaufgaben, interaktive UX, niedriges Volumen (<50M/Monat) und unkritische Daten. Lokale für datenschutzkritische Daten, hohes Volumen (>50M/Monat), DSGVO/HIPAA-Einhaltung und vollständige Kontrolle.

---

### 5. Hybrid Section (id: 'hybrid')
**Image:** `local-vs-cloud-agents-hybrid-flow-en/de.svg`

**Caption (EN):**
> Hybrid approach: route simple queries to local agents (Llama 13B, 2 sec, free) and escalate complex issues to cloud (GPT-4, 200ms, $0.02). Result: 80% cost reduction with zero quality loss on hard problems.

**Caption (DE):**
> Hybrid-Ansatz: Einfache Anfragen an lokale Agenten (Llama 13B, 2 Sek, kostenlos) und komplexe Probleme zu Cloud eskalieren (GPT-4, 200 ms, €0,02). Resultat: 80% Kostenersparnis ohne Qualitätsverlust bei schwierigen Aufgaben.

---

## Next Steps

1. **Open** `src/lib/local-llms/content.ts` and locate each section
2. **Add** `image` and `imageCaption` fields to the 5 sections listed above
3. **Language suffix:** Always use `-en` for English, `-de` for German
4. **Test:** Run `npm run dev` and verify images render at `?lang=en` and `?lang=de`
5. **Translate:** Create FR, JA, ZH versions of all 5 images by translating text labels
6. **Commit:** `git add public/images/ src/lib/local-llms/content.ts && git commit -m "feat: Add images to local-vs-cloud-agents article (all 5 sections, EN+DE)"`

---

## Verification Checklist

- [ ] All 10 images (EN + DE) present in `public/images/`
- [ ] Each section has `image` and `imageCaption` fields
- [ ] Captions include specific metrics (ms, tokens, %, $, €)
- [ ] Images render in browser at all language URLs
- [ ] No TypeScript errors on build
- [ ] Images properly attributed (no watermark needed for internal use)
- [ ] FR, JA, ZH translations planned

---

## GEO/SEO Benefits

✅ **Keyword coverage:** Images include "Cloud agents", "Local agents", "Cost", "Speed", "Compliance", "Llama", "GPT-4", "Claude"

✅ **Metrics visibility:** Specific numbers (100–300ms, 2–5 sec, 50M tokens, €18, $0) in captions help Google understand content depth

✅ **Multi-language:** EN + DE ready; FR/JA/ZH translations will reach 5-language search intent

✅ **Schema-ready:** Images enhance existing itemListSchema, faqSchema, and TechArticle markup
