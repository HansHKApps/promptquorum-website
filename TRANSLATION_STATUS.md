# Translation Status: how-much-vram-local-llm

## Completed ✅
- **Article:** how-much-vram-local-llm (lines 16350-16599 in src/lib/local-llms/content.ts)
- **English (EN):** Complete
- **German (DE):** Translation fully prepared, ready for insertion
- **French (FR):** Translation fully prepared, ready for insertion
- **Japanese (JA):** Translation fully prepared, ready for insertion
- **Chinese (ZH):** Translation fully prepared, ready for insertion

## Next Steps

Insert the following language blocks AFTER line 16598 (after the EN block closes with `},`):

### 1. German (DE) - 12 FAQs (10 EN + 2 DACH)
- Metadata: title, intro, readTime='7 min Lesezeit'
- 11 TOC entries translated
- All 11 sections: tldr (Zusammenfassung), formula, byModelSize (table), quantization, batchSize, overhead, mistakes, regionalContext (DSGVO/BSI focus), faqSection, relatedReading (Weiterführende Literatur), sources (Quellen)
- 4 schemas: TechArticle, HowTo, ItemList, FAQPage

### 2. French (FR) - 10 FAQs
- Metadata: title, intro, readTime='7 min de lecture'
- 11 TOC entries translated
- All 11 sections with regionalContext (RGPD/CNIL emphasis)
- 4 schemas with French translations
- Internal links: ?lang=fr

### 3. Japanese (JA) - 10 FAQs
- Metadata: title, intro, readTime='7分で読める'
- 11 TOC entries translated
- All 11 sections with regionalContext (METI governance emphasis)
- 4 schemas with Japanese translations
- Internal links: ?lang=ja

### 4. Chinese (ZH) - 10 FAQs
- Metadata: title, intro, readTime='阅读约7分钟'
- 11 TOC entries translated  
- All 11 sections with regionalContext (CAC/数据安全法 emphasis)
- 4 schemas with Chinese translations
- Internal links: ?lang=zh

## Critical Rules
- **theme:** Keep as 'GPU Buying Guides' (untranslated in all languages)
- **Table columns (by-model-size):**
  - DE: ['Modellgröße', 'FP32', 'Q8', 'Q5', 'Q4', 'Empfohlene GPU']
  - FR: ['Taille du modèle', 'FP32', 'Q8', 'Q5', 'Q4', 'GPU recommandé']
  - JA: ['モデルサイズ', 'FP32', 'Q8', 'Q5', 'Q4', '推奨 GPU']
  - ZH: ['模型大小', 'FP32', 'Q8', 'Q5', 'Q4', '推荐 GPU']
- **Row keys:** MUST exactly match translated column headers
- **Dates:** Keep as '2026-04-05' and '2026-04-07' (untranslated)
- **Internal links:** Append ?lang=XX to all /local-llms/... paths
- **Technical terms:** Keep unchanged (VRAM, Q4, Q8, FP32, GPU names, model names)

## Build Verification
```bash
npm run build  # Should return 0 TypeScript errors
```

## Translation Quality Notes
- All content follows GEO_WRITING_GUIDELINES.md
- Regional context sections expanded per TRANSLATION_SPEC.md
- FAQ counts: DE=12, FR/JA/ZH=10
- All schemas properly translated with headline/description/step names
- Formality levels: DE (Sie-form), FR (vous-form), JA (です/ます), ZH (formal 书面语)
