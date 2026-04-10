# Geopolitics & AI Article — Image Translation Guide

This document provides step-by-step instructions for translating the 4 remaining SVG images on the **Geopolitics of AI Regulation** article to German (de), French (fr), Japanese (ja), and Simplified Chinese (zh).

## Images to Translate

| # | Image | English File | Section |
|---|-------|--------------|---------|
| 1 | Three-Region Framework | `ai-three-region-framework-en.svg` | DONE ✅ (all 5 languages) |
| 2 | AI Risk Tiers Comparison | `ai-risk-tiers-comparison-en.svg` | Risk Tier Comparison |
| 3 | AI Regulation Timeline | `ai-regulation-timeline-en.svg` | Regulatory Timeline |
| 4 | Regional AI Players | `regional-ai-players-en.svg` | Regional AI Leadership |
| 5 | Compliance Burden Comparison | `compliance-burden-comparison-en.svg` | Compliance Costs |

**Status:** Image 1 fully translated. Images 2–5 require translation for de/fr/ja/zh.

## Translation Process

### Step 1: Duplicate the English SVG

For each of the 4 remaining images and each language, duplicate the `-en.svg` file:

```bash
# Example: Risk Tiers for German
cp public/images/ai-risk-tiers-comparison-en.svg public/images/ai-risk-tiers-comparison-de.svg
cp public/images/ai-risk-tiers-comparison-en.svg public/images/ai-risk-tiers-comparison-fr.svg
cp public/images/ai-risk-tiers-comparison-en.svg public/images/ai-risk-tiers-comparison-ja.svg
cp public/images/ai-risk-tiers-comparison-en.svg public/images/ai-risk-tiers-comparison-zh.svg

# Repeat for the other 3 images:
# - ai-regulation-timeline-en.svg
# - regional-ai-players-en.svg
# - compliance-burden-comparison-en.svg
```

This creates files:
- `ai-risk-tiers-comparison-de.svg` (German)
- `ai-risk-tiers-comparison-fr.svg` (French)
- `ai-risk-tiers-comparison-ja.svg` (Japanese)
- `ai-risk-tiers-comparison-zh.svg` (Chinese)

Repeat for timeline, players, and burden comparison images.

### Step 2: Translate Text Content

Edit each language-specific SVG file and replace all English text with translated text using the translations provided in this guide.

**Important:** Only change the `<text>` node content. **Do not modify** SVG coordinates, styling, colors, or structure.

Example:
```xml
<!-- BEFORE (English) -->
<text x="130" y="105" ...>EU AI Act</text>

<!-- AFTER (German) -->
<text x="130" y="105" ...>EU-Gesetz über KI</text>
```

### Step 3: Adjust Text Width for German

**German words are 20–30% longer than English.** If German text overflows the box:

1. **Reduce font size slightly** (e.g., 14px → 13px)
2. **Increase font-weight slightly** to maintain readability at smaller size
3. **Reposition text** if needed to fit within boundaries
4. **Line breaks** may be needed for long German labels

Example adjustment:
```xml
<!-- If German text overflows -->
<text x="60" y="172" font-size="13" fill="#6750A4" font-weight="700">
  Geschätzte Kosten:
</text>
```

### Step 4: Update content.ts with Language-Specific Image Paths

After translating images 2–5 to all 4 languages, update `src/lib/blog/blogContent.ts` to use language-specific image paths for the geopolitics article.

**Current approach (English only):**
```typescript
image: '/images/ai-risk-tiers-comparison-en.svg',
imageCaption: 'EU: 4-tier risk classification...' // English only
```

**New approach (language-specific images + captions):**
```typescript
// Implement dynamic image path selection based on language
// This example shows the structure for German translations:

// In the English (en) section:
image: '/images/ai-risk-tiers-comparison-en.svg',

// In the German (de) section:
image: '/images/ai-risk-tiers-comparison-de.svg',

// In the French (fr) section:
image: '/images/ai-risk-tiers-comparison-fr.svg',

// And so on for ja and zh
```

## Translations by Image

### Image 2: AI Risk Tiers Comparison

**English (Base):**

Title:
- "AI Risk Classification: Three Regulatory Models"
- "For a company deploying generative AI globally"

EU Column:
- "🇪🇺 EU Compliance"
- "Estimated Cost:"
- "$500K – $2M+"
- "Legal, tech compliance, audit, governance team"
- "Complexity:"
- "Very High 🔴"
- "Prescriptive rules, technical standards"
- "Timeline:"
- "6–12 months"
- "Phase-in already underway (Jan 2025 enforcement)"
- "Risk: Non-compliance: €35M fines"

US Column:
- "🇺🇸 US Compliance"
- "Estimated Cost:"
- "$50K – $300K"
- "NIST RMF adoption, sector-specific legal review"
- "Complexity:"
- "Medium 🟡"
- "Voluntary frameworks, no single standard"
- "Timeline:"
- "2–4 months"
- "No hard deadline, ongoing monitoring"
- "Upside: Light touch, innovation-friendly"

China Column:
- "🇨🇳 China Compliance"
- "Estimated Cost:"
- "$200K – $1M+"
- "Approval process, gov't relations, compliance staff"
- "Complexity:"
- "Very High 🔴"
- "CAC approval required, opaque standards"
- "Timeline:"
- "3–12+ months"
- "Approval uncertain, no guarantee"
- "Risk: Denial possible, ongoing rules"

**German (de):**

Title:
- "Compliance Burden: Kosten, Komplexität und Zeitrahmen"
- "Für ein Unternehmen, das generative KI weltweit einsetzt"

EU Column:
- "🇪🇺 EU-Compliance"
- "Geschätzte Kosten:"
- "€500K – €2M+"
- "Rechtliche, technische Compliance, Audits, Governance"
- "Komplexität:"
- "Sehr hoch 🔴"
- "Vorschreibende Regeln, technische Standards"
- "Zeitrahmen:"
- "6–12 Monate"
- "Umsetzung bereits im Gange (Januar 2025 Durchsetzung)"
- "Risiko: Nichtkonformität: €35M Bußgeld"

US Column:
- "🇺🇸 US-Compliance"
- "Geschätzte Kosten:"
- "€50K – €300K"
- "NIST RMF-Einführung, branchenspezifische Rechtsprüfung"
- "Komplexität:"
- "Mittelmäßig 🟡"
- "Freiwillige Frameworks, kein einheitlicher Standard"
- "Zeitrahmen:"
- "2–4 Monate"
- "Keine harte Frist, fortlaufende Überwachung"
- "Vorteil: Leichte Hand, innovationsfreundlich"

China Column:
- "🇨🇳 China-Compliance"
- "Geschätzte Kosten:"
- "€200K – €1M+"
- "Genehmigungsverfahren, Beziehungen zur Regierung, Compliance-Personal"
- "Komplexität:"
- "Sehr hoch 🔴"
- "CAC-Genehmigung erforderlich, undurchsichtige Standards"
- "Zeitrahmen:"
- "3–12+ Monate"
- "Genehmigung unsicher, keine Garantie"
- "Risiko: Verweigerung möglich, laufende Regeln"

**French (fr):**

Title:
- "Classification des risques d'IA: Trois modèles de régulation"
- "Pour une entreprise déployant l'IA générative mondialement"

EU Column:
- "🇪🇺 Conformité UE"
- "Coût estimé:"
- "€500K – €2M+"
- "Conformité juridique/technique, audits, gouvernance"
- "Complexité:"
- "Très élevée 🔴"
- "Règles prescriptives, normes techniques"
- "Délai:"
- "6–12 mois"
- "Mise en œuvre déjà en cours (application janvier 2025)"
- "Risque: Non-conformité: €35M d'amendes"

US Column:
- "🇺🇸 Conformité US"
- "Coût estimé:"
- "€50K – €300K"
- "Adoption NIST RMF, révision juridique sectorielle"
- "Complexité:"
- "Moyenne 🟡"
- "Cadres volontaires, pas de norme unique"
- "Délai:"
- "2–4 mois"
- "Pas de date limite, suivi continu"
- "Avantage: Approche légère, favorable à l'innovation"

China Column:
- "🇨🇳 Conformité Chine"
- "Coût estimé:"
- "€200K – €1M+"
- "Processus d'approbation, relations gov't, personnel conformité"
- "Complexité:"
- "Très élevée 🔴"
- "Approbation CAC requise, normes opaques"
- "Délai:"
- "3–12+ mois"
- "Approbation incertaine, pas de garantie"
- "Risque: Refus possible, règles évolutives"

**Japanese (ja):**

Title:
- "コンプライアンス負担: コスト、複雑さ、スケジュール"
- "生成AI をグローバルに展開する企業向け"

EU Column:
- "🇪🇺 EU コンプライアンス"
- "推定コスト:"
- "$500K – $2M+"
- "法的/技術的コンプライアンス、監査、ガバナンス"
- "複雑さ:"
- "非常に高い 🔴"
- "規定的なルール、技術基準"
- "スケジュール:"
- "6–12 ヶ月"
- "既に実装中（2025年1月施行）"
- "リスク: 非コンプライアンス: €35M罰金"

US Column:
- "🇺🇸 US コンプライアンス"
- "推定コスト:"
- "$50K – $300K"
- "NIST RMF採用、部門別法的レビュー"
- "複雑さ:"
- "中程度 🟡"
- "自主的枠組み、単一基準なし"
- "スケジュール:"
- "2–4 ヶ月"
- "期限なし、継続的監視"
- "メリット: 軽いタッチ、イノベーション重視"

China Column:
- "🇨🇳 中国 コンプライアンス"
- "推定コスト:"
- "$200K – $1M+"
- "承認プロセス、政府関係、コンプライアンス要員"
- "複雑さ:"
- "非常に高い 🔴"
- "CAC承認が必要、基準は不透明"
- "スケジュール:"
- "3–12+ ヶ月"
- "承認は不確実、保証なし"
- "リスク: 却下の可能性、規則の変更"

**Chinese (zh):**

Title:
- "合规负担: 成本、复杂性和时间表"
- "针对全球部署生成式AI的企业"

EU Column:
- "🇪🇺 欧盟合规"
- "估计成本:"
- "€500K – €2M+"
- "法律/技术合规、审计、治理"
- "复杂度:"
- "非常高 🔴"
- "规定性规则、技术标准"
- "时间表:"
- "6–12 个月"
- "已在实施中（2025年1月开始强制执行）"
- "风险: 不合规: €35M罚款"

US Column:
- "🇺🇸 美国合规"
- "估计成本:"
- "$50K – $300K"
- "NIST RMF 采用、部门级法律审查"
- "复杂度:"
- "中等 🟡"
- "自愿框架、无统一标准"
- "时间表:"
- "2–4 个月"
- "无硬性期限、持续监督"
- "优势: 轻手段、创新友好"

China Column:
- "🇨🇳 中国合规"
- "估计成本:"
- "€200K – €1M+"
- "批准流程、政府关系、合规人员"
- "复杂度:"
- "非常高 🔴"
- "需要 CAC 批准、标准不透明"
- "时间表:"
- "3–12+ 个月"
- "批准不确定、无保障"
- "风险: 可能被否决、规则持续变化"

---

### Images 3–5: Similar Pattern

For the remaining 3 images (Timeline, Players, Burden), follow the same process:

1. Identify all English text nodes in the SVG
2. Translate using the translations provided below (or professional translation services for ja/zh/de)
3. Adjust for language width (German +20–30% wider)
4. Test in browser to ensure layout fits
5. Update content.ts with language-specific paths

**Note:** Due to space constraints, detailed translations for Images 3–5 are abbreviated. Use professional translation services (native speakers, technical dictionaries) for production quality, especially for ja/zh.

## Testing

After translating all 4 images to all languages:

1. **Verify file naming** — All 16 files exist (4 images × 4 languages):
   ```bash
   ls -la public/images/ai-{risk,timeline,players,burden}*-{de,fr,ja,zh}.svg
   ```

2. **Update content.ts** — Each language version should reference correct SVG path for geopolitics article

3. **Test in browser**:
   - English: `http://localhost:3000/blog/geopolitics-and-ai`
   - German: `http://localhost:3000/blog/geopolitics-and-ai?lang=de`
   - French: `http://localhost:3000/blog/geopolitics-and-ai?lang=fr`
   - Japanese: `http://localhost:3000/blog/geopolitics-and-ai?lang=ja`
   - Chinese: `http://localhost:3000/blog/geopolitics-and-ai?lang=zh`

4. **Verify images and captions** — Translated image captions should match in content.ts

## Notes

- **Always preserve colors** — Violet (#6750A4), rose (#7D5260), lavender (#E8DEF8) palette must stay consistent
- **Do not modify SVG structure** — Only edit `<text>` node content
- **Consistency** — Use the same terminology across all 5 images within a language (e.g., always "compliance" not "conformity" in English section)
- **Professional translation** — For ja/zh/de, use native speakers or professional translation services (not machine translation alone)
- **Text overflow** — Watch for German text (30% longer) and CJK characters (compact but may need reflow)

## Checklist

- [ ] All 4 images duplicated for all 4 languages (16 new files)
- [ ] All English text replaced with translated text
- [ ] German text tested for width overflow, adjusted if needed
- [ ] Japanese/Chinese font sizes tested for readability
- [ ] All files committed: `git add public/images/ai-{risk,timeline,players,burden}*-{de,fr,ja,zh}.svg`
- [ ] content.ts updated with language-specific image paths for geopolitics article
- [ ] All language versions tested in browser
- [ ] Image captions translated and match article content
- [ ] Captions include key metrics (costs, percentages, timelines)

## Questions?

Refer to the **IMAGE_STYLE_GUIDE.md** for color palette, typography rules, and multilingual best practices. For geopolitics content accuracy, cross-reference with the main article text in content.ts.
