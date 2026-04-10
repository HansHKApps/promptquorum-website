# Hardware Guide Images - Translation Instructions

This document provides step-by-step instructions for translating the 5 SVG images on the **Local LLM Hardware Guide 2026** page to German (de), French (fr), Japanese (ja), and Simplified Chinese (zh).

## Images to Translate

| # | Image | English File | Section |
|---|-------|--------------|---------|
| 1 | VRAM Formula Calculator | `vram-formula-calculator-en.svg` | VRAM Math |
| 2 | GPU Tier Comparison | `gpu-tier-comparison-en.svg` | GPU Recommendations |
| 3 | Budget Builds | `budget-builds-en.svg` | Budget Builds |
| 4 | Mac Hardware Comparison | `mac-hardware-comparison-en.svg` | Mac Hardware |
| 5 | Server vs Consumer | `server-vs-consumer-en.svg` | Server vs Consumer |

## Translation Process

### Step 1: Duplicate the English SVG

For each image and each language, duplicate the `-en.svg` file:

```bash
# Example: VRAM calculator for German
cp public/images/vram-formula-calculator-en.svg public/images/vram-formula-calculator-de.svg
cp public/images/vram-formula-calculator-en.svg public/images/vram-formula-calculator-fr.svg
cp public/images/vram-formula-calculator-en.svg public/images/vram-formula-calculator-ja.svg
cp public/images/vram-formula-calculator-en.svg public/images/vram-formula-calculator-zh.svg
```

This creates files:
- `vram-formula-calculator-de.svg` (German)
- `vram-formula-calculator-fr.svg` (French)
- `vram-formula-calculator-ja.svg` (Japanese)
- `vram-formula-calculator-zh.svg` (Chinese)

### Step 2: Translate Text Content

Edit each language-specific SVG file and replace all English text with translated text. Use the translations provided below.

**Important:** Only change the `<text>` node content. **Do not modify** SVG coordinates, styling, colors, or structure.

Example:
```xml
<!-- BEFORE (English) -->
<text x="200" y="105" ...>VRAM (GB) = (Model Size × Quantization Bits) ÷ 8</text>

<!-- AFTER (German) -->
<text x="200" y="105" ...>VRAM (GB) = (Modellgröße × Quantisierungsbits) ÷ 8</text>
```

### Step 3: Adjust Text Width for German

**German words are 20–30% longer than English.** If German text overflows the box:

1. **Reduce font size slightly** (e.g., 14px → 13px)
2. **Increase font-weight slightly** to maintain readability at smaller size
3. **Reposition text** to fit within boundaries

Example adjustment:
```xml
<!-- If text overflows -->
<text x="60" y="250" font-size="13" fill="#6750A4" font-weight="700">
  GPU: RTX 4070 Ti
</text>
```

### Step 4: Update content.ts with Multilingual Paths

After translating all 5 images to all 4 languages, update `src/lib/local-llms/content.ts` to use language-specific image paths.

**Current approach (single image for all languages):**
```typescript
image: '/images/vram-formula-calculator-en.svg',
imageCaption: 'VRAM calculator showing...' // English only
```

**New approach (language-specific images + captions):**
```typescript
// You'll need to implement dynamic image path selection
// This is a template example:

// In the English section:
image: '/images/vram-formula-calculator-en.svg',
imageCaption: 'VRAM calculator showing the formula...',

// In the German section (de):
image: '/images/vram-formula-calculator-de.svg',
imageCaption: 'VRAM-Rechner mit der Formel...',

// In the French section (fr):
image: '/images/vram-formula-calculator-fr.svg',
imageCaption: 'Calculateur VRAM montrant la formule...',

// And so on for ja and zh
```

## Translations by Image

### Image 1: VRAM Formula Calculator

**English (Base):**
- "VRAM Requirements Calculator"
- "VRAM (GB) = (Model Size × Quantization Bits) ÷ 8"
- "Model Size: Parameters in billions (7B, 13B, 70B)"
- "Quantization Bits: FP16 (16 bits), Q8 (8 bits), Q5 (5 bits), Q4 (4 bits)"
- "Examples:"
- "7B Model Q4" / "(7 × 4) ÷ 8 = 3.5 GB" / "Best for: Laptops"
- "13B Model Q5" / "(13 × 5) ÷ 8 = 8.1 GB" / "Best for: Desktop"
- "70B Model Q4" / "(70 × 4) ÷ 8 = 35 GB" / "Best for: Server/RTX 4090"
- "Quantization Quality vs VRAM Trade-off:"
- "FP16" / "Best Quality"
- "Q8" / "99% Quality"
- "Q5" / "95% Quality"
- "Q4" / "90–95% Quality"
- "← Recommended"
- "Add 25% overhead for system memory, context, and safety margin"

**German (de):**
- "VRAM-Anforderungen-Rechner"
- "VRAM (GB) = (Modellgröße × Quantisierungsbits) ÷ 8"
- "Modellgröße: Parameter in Milliarden (7B, 13B, 70B)"
- "Quantisierungsbits: FP16 (16 bits), Q8 (8 bits), Q5 (5 bits), Q4 (4 bits)"
- "Beispiele:"
- "7B Modell Q4" / "(7 × 4) ÷ 8 = 3,5 GB" / "Best für: Laptops"
- "13B Modell Q5" / "(13 × 5) ÷ 8 = 8,1 GB" / "Best für: Desktop"
- "70B Modell Q4" / "(70 × 4) ÷ 8 = 35 GB" / "Best für: Server/RTX 4090"
- "Quantisierungsqualität vs. VRAM-Kompromiss:"
- "FP16" / "Beste Qualität"
- "Q8" / "99% Qualität"
- "Q5" / "95% Qualität"
- "Q4" / "90–95% Qualität"
- "← Empfohlen"
- "Add 25% Overhead für Systemspeicher, Kontext und Sicherheitsspanne"

**French (fr):**
- "Calculateur des Exigences VRAM"
- "VRAM (GB) = (Taille du Modèle × Bits de Quantification) ÷ 8"
- "Taille du Modèle: Paramètres en milliards (7B, 13B, 70B)"
- "Bits de Quantification: FP16 (16 bits), Q8 (8 bits), Q5 (5 bits), Q4 (4 bits)"
- "Exemples:"
- "Modèle 7B Q4" / "(7 × 4) ÷ 8 = 3,5 GB" / "Meilleur pour: Ordinateurs portables"
- "Modèle 13B Q5" / "(13 × 5) ÷ 8 = 8,1 GB" / "Meilleur pour: Bureau"
- "Modèle 70B Q4" / "(70 × 4) ÷ 8 = 35 GB" / "Meilleur pour: Serveur/RTX 4090"
- "Qualité de Quantification vs. Compromis VRAM:"
- "FP16" / "Meilleure Qualité"
- "Q8" / "99% Qualité"
- "Q5" / "95% Qualité"
- "Q4" / "90–95% Qualité"
- "← Recommandé"
- "Ajouter 25% de surcharge pour la mémoire système, le contexte et la marge de sécurité"

**Japanese (ja):**
- "VRAM要件計算機"
- "VRAM (GB) = (モデルサイズ × 量子化ビット) ÷ 8"
- "モデルサイズ: 十億単位のパラメータ (7B, 13B, 70B)"
- "量子化ビット: FP16 (16ビット), Q8 (8ビット), Q5 (5ビット), Q4 (4ビット)"
- "例:"
- "7B モデル Q4" / "(7 × 4) ÷ 8 = 3.5 GB" / "最適: ノートパソコン"
- "13B モデル Q5" / "(13 × 5) ÷ 8 = 8.1 GB" / "最適: デスクトップ"
- "70B モデル Q4" / "(70 × 4) ÷ 8 = 35 GB" / "最適: サーバー/RTX 4090"
- "量子化品質 vs VRAM トレードオフ:"
- "FP16" / "最高品質"
- "Q8" / "99% 品質"
- "Q5" / "95% 品質"
- "Q4" / "90–95% 品質"
- "← 推奨"
- "システムメモリ、コンテキスト、安全マージンに25%のオーバーヘッドを追加"

**Chinese (zh):**
- "VRAM 需求计算器"
- "VRAM (GB) = (模型大小 × 量化位数) ÷ 8"
- "模型大小: 十亿参数 (7B, 13B, 70B)"
- "量化位数: FP16 (16位), Q8 (8位), Q5 (5位), Q4 (4位)"
- "示例:"
- "7B 模型 Q4" / "(7 × 4) ÷ 8 = 3.5 GB" / "最佳用途: 笔记本电脑"
- "13B 模型 Q5" / "(13 × 5) ÷ 8 = 8.1 GB" / "最佳用途: 台式机"
- "70B 模型 Q4" / "(70 × 4) ÷ 8 = 35 GB" / "最佳用途: 服务器/RTX 4090"
- "量化质量 vs VRAM 权衡:"
- "FP16" / "最佳质量"
- "Q8" / "99% 质量"
- "Q5" / "95% 质量"
- "Q4" / "90–95% 质量"
- "← 推荐"
- "为系统内存、上下文和安全余量添加 25% 开销"

---

### Images 2–5: Similar Pattern

For the remaining 4 images (GPU Tier, Budget Builds, Mac Hardware, Server vs Consumer), follow the same process:

1. Identify all English text nodes
2. Translate using professional translation or bilingual team
3. Adjust for language width (German +20–30%, Japanese/Chinese may need smaller fonts)
4. Test in browser to ensure layout fits

## Testing

After translating all 5 images to all languages:

1. **Verify file naming** — All 25 files exist (5 images × 5 languages):
   ```bash
   ls -la public/images/*-{en,de,fr,ja,zh}.svg | grep -E 'vram|gpu|budget|mac|server'
   ```

2. **Update content.ts** — Each language version should reference correct SVG path

3. **Test in browser**:
   - English: `http://localhost:3000/local-llms/local-llm-hardware-guide-2026`
   - German: `http://localhost:3000/local-llms/local-llm-hardware-guide-2026?lang=de`
   - French: `http://localhost:3000/local-llms/local-llm-hardware-guide-2026?lang=fr`
   - Japanese: `http://localhost:3000/local-llms/local-llm-hardware-guide-2026?lang=ja`
   - Chinese: `http://localhost:3000/local-llms/local-llm-hardware-guide-2026?lang=zh`

4. **Verify captions** — Translated image captions should match in content.ts

## Notes

- **Always preserve colors** — The brand palette (violet, rose, lavender) must stay consistent across all languages
- **Do not modify SVG structure** — Only edit `<text>` node content and positioning if needed
- **Consistency** — Use the same terminology across all 5 images within a language
- **Professional translation** — For ja/zh/de, use native speakers or professional translation services (not Google Translate)

## Checklist

- [ ] All 5 images duplicated for all 4 languages (20 new files)
- [ ] All English text replaced with translated text
- [ ] German text tested for width overflow, adjusted if needed
- [ ] Japanese/Chinese font sizes tested for readability
- [ ] All files committed: `git add public/images/*-{de,fr,ja,zh}.svg`
- [ ] content.ts updated with language-specific image paths
- [ ] All language versions tested in browser
- [ ] Captions translated and added to content.ts
- [ ] Image captions match article content and include key metrics

## Questions?

Refer to the main **IMAGE_STYLE_GUIDE.md** for color palette, typography rules, and multilingual guidelines.
