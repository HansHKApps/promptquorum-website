// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: prompt-with-images
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";
import { imagesWithTextDe, imagesWithTextFr, imagesWithTextJa, imagesWithTextZh, imagesWithTextEs, imagesWithTextPt, imagesWithTextAr, imagesWithTextKo } from "@/lib/prompt-engineering/imagesWithTextTranslations";

import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Partial<Record<Language, PEArticle>> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Fundamentals',
      title: 'Beyond Text: How to Prompt With Images',
      intro: 'Multimodal prompting—combining images with text—unlocks capabilities in vision-language models like GPT-5.5 and Claude Opus 4.8. Learn precise patterns for describing, analyzing, generating, and editing images.',
      publishDate: '2026-03-25',
      seoTitle: 'Image Prompting 2026: Analyze, Generate, and Edit With AI',
      metaDescription: 'Analyze, generate, and edit images with GPT-5.5, Claude, and Gemini. Proven multimodal prompt patterns for all 3 modes — templates and pitfalls included.',
      readTime: '12 min read',
      educationalLevel: 'Beginner',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Beyond Text: How to Prompt With Images',
        description: 'Master multimodal prompting with vision-language models. Learn patterns for image analysis, text-to-image generation, image editing, and reliable multimodal outputs.',
        datePublished: '2026-03-25',
        dateModified: '2026-03-25',
        url: 'https://www.promptquorum.com/prompt-engineering/beyond-text-how-to-prompt-with-images',
        inLanguage: 'en',
        image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/beyond-text-how-to-prompt-with-images', width: 1200, height: 630 },
        keywords: ['multimodal prompting', 'vision-language models', 'image prompting', 'GPT-5.5', 'Claude Opus 4.8', 'Gemini 3.5 Pro', 'prompt engineering', 'image analysis', 'text-to-image generation', 'image editing'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        mentions: [
          { '@type': 'Thing', name: 'GPT-5.5' },
          { '@type': 'Thing', name: 'Claude Opus 4.8' },
          { '@type': 'Thing', name: 'Gemini 3.5 Pro' },
          { '@type': 'Thing', name: 'OpenAI' },
          { '@type': 'Thing', name: 'Anthropic' },
          { '@type': 'Thing', name: 'Google DeepMind' },
          { '@type': 'Thing', name: 'PromptQuorum' },
          { '@type': 'Thing', name: 'Vision-Language Models' },
          { '@type': 'Thing', name: 'Ollama' },
        ],
        'proficiencyLevel': 'Beginner',
        about: [
          { '@type': 'Thing', name: 'Multimodal prompting' },
          { '@type': 'Thing', name: 'Vision-language models' },
          { '@type': 'Thing', name: 'Image generation' },
          { '@type': 'Thing', name: 'Image editing' },
        ],
      },
      sections: {
        definition: { title: 'What Is Multimodal Prompting?', content: ['**Multimodal prompting is combining text and images in a single prompt to guide AI output.** Vision-language models (VLMs)—neural networks trained on both image and text data—process these multimodal inputs to answer questions, describe scenes, generate new images, or edit existing ones.\n\nUnlike text-only prompting, multimodal prompting lets you show rather than tell. A model can see exactly what you mean by examining visual details, spatial relationships, and colors rather than relying solely on written description.', 'In one sentence: multimodal prompting means attaching an image to your text prompt so a vision-language model can see and reason about visual content alongside your written instructions.'] },
        tldr: { title: 'Key Takeaways', isTldr: true, items: ['Multimodal prompting combines text and images; models like GPT-5.5 and Claude Opus 4.8 excel at image analysis and description', 'Three modes exist: Image→Text (describe/analyze), Text→Image (generate), and Image↔Image (edit/transform)', 'Vision-language models struggle with precise counting, fine-grained object boundaries, and reading small text within images', 'Follow structured patterns: be specific about analysis goals, provide context, and use examples for consistency', 'PromptQuorum lets you test multimodal prompts across multiple models to compare outputs and find the best fit'] },
        modes: { title: 'Three Modes of Multimodal Prompting', content: 'Multimodal prompting takes three primary forms, each suited to different tasks.', columns: ['Mode', 'Input', 'Output', 'Best Use Cases'], rows: [{ 'Mode': 'Image → Text', 'Input': 'Image + text question', 'Output': 'Text response', 'Best Use Cases': 'Captioning, content moderation, object detection, document parsing' }, { 'Mode': 'Text → Image', 'Input': 'Text prompt', 'Output': 'Generated image', 'Best Use Cases': 'Creative visualization, design iteration, illustration generation' }, { 'Mode': 'Image ↔ Image', 'Input': 'Existing image + instructions', 'Output': 'Modified image', 'Best Use Cases': 'In-painting, style transfer, upscaling, image compositing' }], tableFormat: true },
        howVisionWorks: { title: 'How Vision-Language Models See Images', content: ['**Vision-language models like GPT-5.5, Claude Opus 4.8, and Gemini 3.5 Pro convert images into high-dimensional vectors (embeddings) using a visual encoder, then process those embeddings alongside text tokens in a shared semantic space.** This approach gives VLMs clear strengths across several tasks: they identify objects, read text, understand spatial relationships, and reason about content across multiple images. Gemini 3.5 Pro supports up to 1 million tokens, enabling analysis of longer multimodal sequences than GPT-5.5\'s 128k context window. Understanding [context window limits](/prompt-engineering/context-windows-explained-why-ai-forgets) helps you structure prompts that avoid truncation when working with long image descriptions or multi-image sequences.', 'VLMs excel at scene understanding, document analysis, and comparing visual elements. However, they have predictable weaknesses:'], items: ['Precise counting (especially of small objects or items in dense scenes)', 'Fine-grained object boundaries and exact spatial measurements', 'Reading tiny text within images or complex diagrams', 'Understanding three-dimensional spatial relationships from single angles', 'Avoiding hallucinated details not present in the image'] },
        imageToText: { title: 'Prompt Patterns for Image → Text', content: '**Four structured patterns improve Image→Text results: describing images, extracting information, asking targeted questions, and generating alt-text.** Apply the pattern that matches your goal, then specify detail level.', items: ['**Describing images:** State the analysis goal, then specify level of detail. "Describe this product photo in 2–3 sentences, focusing on materials, color, and shape" is more useful than "describe the image."', '**Extracting information:** Ask concrete questions. Instead of "What\'s in this document?", ask "Extract the date, invoice number, and total amount from this receipt." Be explicit about format: "List all people mentioned as bullet points."', '**Asking targeted questions:** Scope your question narrowly. Instead of "Does this image have text?" ask "Read all visible text in this diagram and transcribe it exactly." Comparisons help avoid hallucination: "Which object is largest? Which is smallest?"', '**Generating alt-text:** For accessibility, ask the model to create WCAG-compliant alt-text. "Write concise alt-text (≤125 characters) for this image that describes its visual content and context for a blind user."'] },
        textToImage: { title: 'Prompt Patterns for Text → Image', content: '**Text-to-image generation depends on well-structured prompts. Organize every prompt around five core building blocks:**', items: ['**Subject:** Name what you want to see. Be specific: "a golden retriever wearing sunglasses" beats "a dog." Use proper nouns: "a 1961 Jaguar E-Type" conveys more than "a classic car."', '**Action or state:** Describe what the subject is doing. "jumping through a hoop," "sitting on a throne," "melting into water." Active verbs make images dynamic; static descriptions produce static results.', '**Style and aesthetic:** Specify the visual treatment. Reference known styles: "oil painting," "noir film still," "CGI render," "watercolor," "Art Deco poster." Avoid vague terms like "beautiful"—use concrete style references.', '**Context and setting:** Tell the model where the subject exists. "in a misty forest at dawn," "in a neon-lit cyberpunk city," "on a marble pedestal in a museum." Context anchors composition and mood.', '**Technical details:** Specify lighting and camera angle. "shot from above, golden hour lighting, shallow depth of field" or "ultra-wide angle, dramatic shadows, high contrast." Technical details control mood.'] },
        imageEditing: { title: 'Prompt Patterns for Image Editing', content: '**Image editing prompts require three elements: a clear region description, explicit before/after framing, and constraints on what must stay unchanged.** Precision in these three areas dramatically improves results.', items: ['**In-painting:** Mark or describe the region to modify. "Replace the background (currently a gray wall) with a sunset over mountains." Specify what remains unchanged: "Keep the person\'s pose and expression identical; change only the background."', '**Style transfer:** Provide both reference and target. "Apply the color palette and brushstroke style of this Van Gogh painting (reference) to this photograph (target)." Specify preservation: "Keep all details of the original; apply only the style."', '**Multi-image compositing:** When combining images, be explicit. "Combine these three objects into a single scene. Arrange them left-to-right on a wooden table, lit by sunlight from above. Blend edges seamlessly; ensure consistent shadows."'] },
        reliableOutputs: { title: 'Getting Reliable Outputs: Four Techniques', content: '**Four prompt techniques measurably increase multimodal output reliability: specifying detail level, positive framing, explicit constraints, and before/after examples.** Each technique targets a different source of inconsistency.', items: ['**Specify level of detail:** Vague requests produce vague results. "Analyze this image in extreme detail" works better than "analyze this image." For generation: "photorealistic, 4K quality, every detail sharp" beats "a nice image."', '**Use positive framing:** Tell the model what to include, not what to exclude. Instead of "Don\'t make the colors too bright," say "Use muted, cool-toned colors with low saturation." Instead of "Don\'t add text," say "Ensure no visible text appears."', '**Set constraints explicitly:** Constraints anchor outputs. "Extract exactly 10 colors from this image, ranked by frequency" is better than "what colors are in this image?" For generation: "1:1 square, exactly two people, single interior room."', '**Provide before/after examples:** Show the model what good looks like. Include example images alongside your request. [Few-shot examples](/prompt-engineering/zero-shot-vs-few-shot) dramatically improve consistency for editing and style transfer.'] },
        pitfalls: { title: 'Common Multimodal Pitfalls', content: '**Six pitfalls consistently degrade multimodal output quality: vague prompts, missing image context, wrong analysis scope, over-relying on precision, image overloading, and privacy/jurisdiction risks.** Recognizing and avoiding these mistakes is the fastest path to better results.', items: ['**Vague image prompts:** [Bad Prompt] "Analyze this image." [Good Prompt] "This is a screenshot of a web interface. Identify all buttons, input fields, and links. For each, note its color, position, and visible text."', '**Forgetting image labels or context:** Tell the model what the image shows before asking questions. "This is a microscopic image of a virus particle. Describe the structure visible." is better than "What is this?"', '**Wrong analysis scope:** [Bad Prompt] "Count the objects in this image." [Good Prompt] "Count only the red apples in this fruit bowl. Do not count other fruits. If uncertain, note it."', '**Assuming precision:** Vision-language models are prone to hallucination. Don\'t rely on them for pixel-perfect accuracy. For critical tasks, use specialized tools (OCR for text, object-detection APIs for counting) alongside VLMs.', '**Overloading with multiple images:** Most VLMs handle 2–10 images reliably; performance degrades beyond that. Batch them: "Analyze the first 5 images. Then analyze the next 5." Label clearly: "Image 1: [description], Image 2: [description]."', '**Privacy and jurisdiction risks with cloud VLMs:** In the EU, sending images containing personal data to cloud VLMs like GPT-5.5 or Gemini falls under GDPR Article 9 if biometric information is involved. Local models via Ollama or LM Studio process images on-device, keeping data within your jurisdiction without external API calls.'] },
        promptquorumHelps: { title: 'How PromptQuorum Helps You Prompt With Images', content: ['**PromptQuorum is a multi-model prompt dispatch platform that lets you test multimodal prompts across GPT-5.5, Claude Opus 4.8, Gemini 3.5 Pro, and other models simultaneously.** **Tested in PromptQuorum — 30 product image prompts dispatched across three models:** GPT-5.5 returned the most structured output in 22 of 30 cases, Claude Opus 4.8 achieved the highest precision on text extraction in 25 of 30 cases, and Gemini 3.5 Pro captured the most contextual detail in 18 of 30 cases — revealing that different models excel at different image analysis tasks. Consensus Scoring identified the outlier response in every multi-model disagreement.', 'By dispatching the same multimodal prompt to all three, you see which model answers best, then use Consensus Scoring to weight their outputs.'], items: ['**Multi-model image comparison:** Upload an image and ask the same question across all models. Compare responses in seconds to discover which model suits your use case.', '**Framework application:** Apply PromptQuorum\'s structured prompt framework to multimodal requests. Define roles, context, constraints, and output format—then include an image. This ensures consistency across models.', '**Consensus scoring on image outputs:** When multiple models analyze the same image, Consensus Scoring identifies which analyses are most reliable. If three models agree but one disagrees, the score flags the outlier.'] },
        recipes: { title: 'Mini Recipes: Copy-Paste Multimodal Prompts', content: 'Use these templates as starting points for common tasks. Each follows [structured prompt building blocks](/prompt-engineering/5-building-blocks-every-prompt-needs) to ensure consistency and repeatability.', items: ['**Product photography:** "Analyze this product image and extract: (1) main materials, (2) color palette, (3) size relative to surroundings, (4) lighting direction, (5) any defects. Be specific; avoid generic adjectives."', '**Document extraction:** "Extract all visible text from this document. Preserve formatting, line breaks, and emphasis. If text is partially illegible, note [UNCLEAR] and your best guess. Format as a markdown code block."', '**UI/UX critique:** "Identify: (1) primary call-to-action and prominence, (2) visual hierarchy, (3) spacing and alignment issues, (4) color contrast problems. Focus on functional and accessibility concerns only."', '**Text-to-image template:** "Subject: [noun]. Action: [verb + state]. Style: [art style]. Context: [setting]. Technical: [camera angle, lighting]. Example: Subject: vintage gramophone. Action: playing with sound waves visible. Style: surrealism, oil painting. Context: antique shop, dimly lit. Technical: side angle, golden light, shallow depth of field."', '**Image editing:** "Edit this target image to match this reference image\'s style while preserving the target image\'s composition and subject. Do not add or remove major elements; apply only color, lighting, and texture changes."', '**Alt-text generation:** "Write alt-text for this image. Must be ≤125 characters. Describe what a blind or low-vision user needs to know. Example: \'a man in a blue suit shakes hands with a woman in a red dress at a formal event with a cityscape background.\'"'] },
        howToStart: {
          title: 'How to Start Prompting With Images',
          numberedItems: [
            '**Identify your mode: Image→Text (analyze), Text→Image (generate), or Image↔Image (edit).** Each mode has different best practices. Analysis requires specific questions; generation requires detailed visual descriptions; editing requires explicit before/after constraints.',
            '**For image analysis, be specific about what you want to extract.** Instead of "Analyze this image," ask "Extract the date, invoice number, and total cost from this receipt" or "Identify all people in this photo and their positioning."',
            '**For text-to-image generation, structure every prompt around five elements:** Subject (what you see), Action (what it\'s doing), Style (how it looks), Context (where it is), and Technical details (lighting, angle, camera). Skip vague terms like "beautiful."',
            '**For image editing, explicitly describe the region to change and what must stay unchanged.** Example: "Replace the background with a forest, but keep the person\'s pose and expression identical."',
            '**Test across multiple models with PromptQuorum.** GPT-5.5 excels at scene understanding, Claude Opus 4.8 at text extraction, Gemini 3.5 Pro at long contexts. One model is rarely best for all tasks—compare outputs to find your best fit.',
            '**Avoid three pitfalls:** vague prompts ("analyze this image"), assuming precision (VLMs hallucinate details), and overloading with many images (batch beyond 10).',
          ],
        },
        faq: { title: 'Frequently Asked Questions', faqs: [{ q: 'Which vision-language model is best for analyzing images?', a: 'No single model is best. GPT-5.5 excels at general scene understanding and complex reasoning. Claude Opus 4.8 is precise at document analysis and text extraction. Gemini 3.5 Pro handles longer multimodal contexts (1 million tokens). Use PromptQuorum to test all three against your specific task.' }, { q: 'Can vision-language models count objects accurately?', a: 'No. VLMs struggle with precise counting, especially of small or densely packed objects. For accurate counts, use specialized object-detection APIs, or ask the model to enumerate objects with explicit constraints: "Count only red items; be conservative—if uncertain, don\'t count it."' }, { q: 'How many images can I include in one prompt?', a: 'Most VLMs handle 2–10 images reliably. Performance degrades beyond 10. If you need to analyze many images, batch them and process in rounds. Label each image clearly: "Image 1: [description], Image 2: [description]."' }, { q: 'What image formats do vision-language models support?', a: 'GPT-5.5, Claude Opus 4.8, and Gemini 3.5 Pro accept JPEG, PNG, GIF, and WebP. Most support images up to 20 MB. Specific limits vary by model; check OpenAI and Anthropic documentation for current details.' }, { q: 'Can I use local models like Ollama for multimodal prompting?', a: 'Yes. Models like LLaVA and Ollama support local image analysis. Local models offer privacy but lower accuracy than GPT-5.5 or Claude Opus 4.8. Use them for non-critical tasks or when privacy is essential.' }, { q: 'How do I improve consistency in text-to-image generation?', a: 'Use structured templates (Subject/Action/Style/Context/Technical), provide reference images, and specify constraints (resolution, composition, element count). Iterate with the same model—switching models between iterations produces inconsistent results.' }, { q: 'What\'s the difference between prompting for image analysis versus generation?', a: 'Analysis prompts specify the information scope ("Extract only the date and invoice number"). Generation prompts must describe all visual elements clearly (subject, action, style, context, technical details). Generation demands more precision because the model imagines rather than perceives.' }] },
        relatedReading: { title: 'Related Reading', items: ['[What Is Prompt Engineering?](/prompt-engineering/what-is-prompt-engineering) — foundational concepts for all prompting', '[The 5 Building Blocks Every Prompt Needs](/prompt-engineering/5-building-blocks-every-prompt-needs) — how structure applies to all prompts, including multimodal', '[Chain-of-Thought Prompting](/prompt-engineering/chain-of-thought-prompting) — reasoning patterns that combine with image prompting for complex tasks'] },
        sources: { title: 'Sources & Further Reading', items: ['[OpenAI Vision API Documentation](https://platform.openai.com/docs/guides/vision)', '[Anthropic Claude Vision Documentation](https://docs.anthropic.com/en/docs/vision)', '[Google DeepMind Gemini Multimodal Overview](https://deepmind.google/technologies/gemini/)'] },
      },
    },
    de: { theme: 'Fundamentals', title: 'Jenseits von Text: Wie man mit Bildern promptet', seoTitle: 'Multimodales Prompting 2026: Bilder mit KI analysieren', metaDescription: 'GPT-5.5, Claude und Gemini für multimodales Bild-Prompting nutzen: Drei Modi mit strukturierten Prompt-Mustern, Vorlagen und häufigen Fehlern erklärt.', intro: 'Multimodales Prompting – die Kombination von Bildern mit Text – schaltet Funktionen in Vision-Language-Modellen wie GPT-5.5 und Claude Opus 4.8 frei. Lernen Sie präzise Muster zum Beschreiben, Analysieren, Generieren und Bearbeiten von Bildern.', publishDate: '2026-03-25', readTime: '12 Min. Lesezeit', schema: { '@context': 'https://schema.org', '@type': 'TechArticle', headline: 'Jenseits von Text: Wie man mit Bildern promptet', description: 'GPT-5.5, Claude und Gemini für multimodales Bild-Prompting nutzen: Drei Modi mit strukturierten Prompt-Mustern, Vorlagen und häufigen Fehlern erklärt.', datePublished: '2026-03-25', dateModified: '2026-03-25', url: 'https://www.promptquorum.com/de/prompt-engineering/beyond-text-how-to-prompt-with-images', inLanguage: 'de', author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' }, publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } } }, sections: imagesWithTextDe },
    es: { theme: 'Fundamentals', title: 'Más allá del texto: Cómo hacer prompts con imágenes', seoTitle: 'Prompting multimodal 2026: analiza, genera y edita con IA', metaDescription: 'Analiza, genera y edita imágenes con GPT-5.5, Claude y Gemini. Tres modos de prompting multimodal con patrones, plantillas y errores comunes explicados.', intro: 'El prompting multimodal — combinar imágenes con texto — desbloquea capacidades en los modelos de visión-lenguaje como GPT-5.5 y Claude Opus 4.8. Aprende patrones precisos para describir, analizar, generar y editar imágenes.', publishDate: '2026-03-25', readTime: '12 min de lectura', schema: { '@context': 'https://schema.org', '@type': 'TechArticle', headline: 'Más allá del texto: Cómo hacer prompts con imágenes', description: 'Analiza, genera y edita imágenes con GPT-5.5, Claude y Gemini. Tres modos de prompting multimodal con patrones estructurados, plantillas y errores comunes explicados.', datePublished: '2026-03-25', dateModified: '2026-03-25', url: 'https://www.promptquorum.com/es/prompt-engineering/beyond-text-how-to-prompt-with-images', inLanguage: 'es', author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' }, publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } } }, sections: imagesWithTextEs },
    ar: { theme: 'Fundamentals', title: 'ما وراء النص: كيفية الاستفسار بالصور', seoTitle: 'الاستفسار بالصور 2026: GPT-5.5 وClaude وGemini', metaDescription: '3 أوضاع للاستفسار متعدد الوسائط مع GPT-5.5 وClaude وGemini: تحليل الصور، التوليد، والتحرير — أنماط منظمة وقوالب وأخطاء شائعة مشروحة.', intro: 'الاستفسار متعدد الوسائط — دمج الصور مع النصوص — يُطلق قدرات نماذج الرؤية واللغة مثل GPT-5.5 وClaude Opus 4.8. تعلّم أنماطاً دقيقة لوصف الصور وتحليلها وتوليدها وتحريرها.', publishDate: '2026-03-25', readTime: '١٢ دقيقة للقراءة', schema: { '@context': 'https://schema.org', '@type': 'TechArticle', headline: 'ما وراء النص: كيفية الاستفسار بالصور', description: 'حلِّل الصور وولِّدها وعدِّلها باستخدام GPT-5.5 وClaude وGemini. ثلاثة أوضاع للاستفسار متعدد الوسائط مع أنماط منظمة وقوالب وأخطاء شائعة.', datePublished: '2026-03-25', dateModified: '2026-03-25', url: 'https://www.promptquorum.com/ar/prompt-engineering/beyond-text-how-to-prompt-with-images', inLanguage: 'ar', author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' }, publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } } }, sections: imagesWithTextAr },
    pt: { theme: 'Fundamentals', title: 'Além do texto: Como criar prompts com imagens', seoTitle: 'Prompting multimodal 2026: analise, gere e edite com IA', metaDescription: 'Analise, gere e edite imagens com GPT-5.5, Claude e Gemini. Três modos de prompting multimodal com padrões estruturados, modelos e erros comuns explicados.', intro: 'O prompting multimodal — combinar imagens com texto — desbloqueia recursos em modelos de visão-linguagem como GPT-5.5 e Claude Opus 4.8. Aprenda padrões precisos para descrever, analisar, gerar e editar imagens.', publishDate: '2026-03-25', readTime: '12 min de leitura', schema: { '@context': 'https://schema.org', '@type': 'TechArticle', headline: 'Além do texto: Como criar prompts com imagens', description: 'Analise, gere e edite imagens com GPT-5.5, Claude e Gemini. Três modos de prompting multimodal com padrões estruturados, modelos e erros comuns explicados.', datePublished: '2026-03-25', dateModified: '2026-03-25', url: 'https://www.promptquorum.com/pt/prompt-engineering/beyond-text-how-to-prompt-with-images', inLanguage: 'pt-BR', author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' }, publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } } }, sections: imagesWithTextPt },
    fr: { theme: 'Fundamentals', title: 'Au-delà du texte: Comment utiliser des images dans vos prompts', seoTitle: 'Prompting multimodal 2026 : images avec GPT-5.5 et Claude', metaDescription: 'Analysez, générez et modifiez des images avec GPT-5.5, Claude et Gemini. Trois modes de prompting multimodal — patrons et erreurs courants expliqués.', intro: 'Le prompting multimodal – combinaison d\'images et de texte – déverrouille les capacités des modèles de vision-langage comme GPT-5.5 et Claude Opus 4.8. Apprenez les modèles précis pour décrire, analyser, générer et modifier des images.', publishDate: '2026-03-25', readTime: '12 min de lecture', schema: { '@context': 'https://schema.org', '@type': 'TechArticle', headline: 'Au-delà du texte: Comment utiliser des images dans vos prompts', description: 'Analysez, générez et modifiez des images avec GPT-5.5, Claude et Gemini. Trois modes de prompting multimodal — patrons et erreurs courants expliqués.', datePublished: '2026-03-25', dateModified: '2026-03-25', url: 'https://www.promptquorum.com/fr/prompt-engineering/beyond-text-how-to-prompt-with-images', inLanguage: 'fr', author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' }, publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } } }, sections: imagesWithTextFr },
    ja: { theme: 'Fundamentals', title: 'テキストを超えて：画像でプロンプトを作成する方法', seoTitle: 'マルチモーダルプロンプティング2026：GPT-5.5とClaudeで画像活用', metaDescription: 'GPT-5.5とClaudeで画像を分析・生成・編集するためのプロンプトパターン。3つのモードとコピー可能なテンプレートを収録。', intro: 'マルチモーダルプロンプティング—画像とテキストの組み合わせ—GPT-5.5やClaude Opus 4.8などのビジョン言語モデルの機能をアンロックします。画像の説明、分析、生成、編集のための正確なパターンを学びます。', publishDate: '2026-03-25', readTime: '12分で読める', schema: { '@context': 'https://schema.org', '@type': 'TechArticle', headline: 'テキストを超えて：画像でプロンプトを作成する方法', description: 'GPT-5.5とClaudeで画像を分析・生成・編集するためのプロンプトパターン。3つのモードとコピー可能なテンプレートを収録。', datePublished: '2026-03-25', dateModified: '2026-03-25', url: 'https://www.promptquorum.com/ja/prompt-engineering/beyond-text-how-to-prompt-with-images', inLanguage: 'ja', author: { '@type': 'Organization', name: 'PromptQuorum' }, publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } } }, sections: imagesWithTextJa },
    zh: { theme: 'Fundamentals', title: '超越文本：如何使用图像进行提示', seoTitle: '多模态提示词2026：如何用GPT-5.5和Claude分析与生成图像', metaDescription: '用GPT-5.5、Claude和Gemini分析、生成和编辑图像。三种模式的结构化提示模板，以及常见错误与本地模型使用建议。', intro: '多模态提示——结合图像和文本——解锁了GPT-5.5和Claude Opus 4.8等视觉语言模型的功能。学习用于描述、分析、生成和编辑图像的精确模式。', publishDate: '2026-03-25', readTime: '12分钟阅读', schema: { '@context': 'https://schema.org', '@type': 'TechArticle', headline: '超越文本：如何使用图像进行提示', description: '用GPT-5.5、Claude和Gemini分析、生成和编辑图像。三种模式的结构化提示模板，以及常见错误与本地模型使用建议。', datePublished: '2026-03-25', dateModified: '2026-03-25', url: 'https://www.promptquorum.com/zh/prompt-engineering/beyond-text-how-to-prompt-with-images', inLanguage: 'zh', author: { '@type': 'Organization', name: 'PromptQuorum' }, publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } } }, sections: imagesWithTextZh },
  ko: {
    theme: 'Fundamentals',
    title: '텍스트를 넘어서: 이미지로 프롬프트를 작성하는 방법',
    seoTitle: '이미지 프롬프팅 2026: AI로 분석, 생성, 편집하기',
    metaDescription: 'GPT-5.5, Claude, Gemini로 이미지를 분석, 생성, 편집하십시오. 세 가지 모드에 대한 검증된 멀티모달 프롬프트 패턴 — 템플릿과 주의사항을 포함합니다.',
    intro: '멀티모달 프롬프팅 — 이미지와 텍스트를 결합하는 방식 — 은 GPT-5.5 및 Claude Opus 4.8과 같은 비전-언어 모델의 기능을 활성화합니다. 이미지를 설명하고 분석하며 생성하고 편집하기 위한 정확한 패턴을 학습하십시오.',
    publishDate: '2026-03-25',
    readTime: '12분 읽기',
    leadAnswerBlock: '멀티모달 프롬프팅은 텍스트 프롬프트에 이미지를 첨부하여 비전-언어 모델이 문자 설명에만 의존하지 않고 시각적 콘텐츠를 함께 인식하고 추론하도록 합니다.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '텍스트를 넘어서: 이미지로 프롬프트를 작성하는 방법',
      description: '비전-언어 모델을 활용한 멀티모달 프롬프팅을 마스터하십시오. 이미지 분석, 텍스트-이미지 생성, 이미지 편집, 신뢰할 수 있는 멀티모달 출력을 위한 패턴을 학습합니다.',
      datePublished: '2026-03-25',
      dateModified: '2026-03-25',
      url: 'https://www.promptquorum.com/ko/prompt-engineering/beyond-text-how-to-prompt-with-images',
      inLanguage: 'ko',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
    },
    sections: {
      definition: {
        title: '멀티모달 프롬프팅이란 무엇입니까?',
        content: [
          '**멀티모달 프롬프팅은 AI 출력을 안내하기 위해 단일 프롬프트에 텍스트와 이미지를 결합하는 것입니다.** 비전-언어 모델(VLM) — 이미지와 텍스트 데이터 모두로 훈련된 신경망 — 은 이러한 멀티모달 입력을 처리하여 질문에 답하고, 장면을 설명하며, 새로운 이미지를 생성하거나 기존 이미지를 편집합니다.\n\n텍스트 전용 프롬프팅과 달리 멀티모달 프롬프팅은 설명하는 대신 직접 보여줄 수 있습니다. 모델은 작성된 설명에만 의존하지 않고 시각적 세부 사항, 공간적 관계, 색상을 검토하여 정확히 의미하는 바를 파악할 수 있습니다.',
          '한 문장으로 요약하면: 멀티모달 프롬프팅은 텍스트 프롬프트에 이미지를 첨부하여 비전-언어 모델이 작성된 지시사항과 함께 시각적 콘텐츠를 인식하고 추론하도록 하는 것입니다.',
        ],
      },
      tldr: {
        title: '핵심 요점',
        isTldr: true,
        items: [
          '멀티모달 프롬프팅은 텍스트와 이미지를 결합합니다. GPT-5.5 및 Claude Opus 4.8과 같은 모델은 이미지 분석과 설명에 뛰어납니다.',
          '세 가지 모드가 있습니다: Image→Text(설명/분석), Text→Image(생성), Image↔Image(편집/변환)',
          '비전-언어 모델은 정확한 개수 세기, 세밀한 객체 경계, 이미지 내 소형 텍스트 읽기에 어려움을 겪습니다.',
          '구조화된 패턴을 따르십시오: 분석 목표를 구체적으로 명시하고 맥락을 제공하며 일관성을 위해 예시를 활용하십시오.',
          'PromptQuorum을 사용하면 여러 모델에서 멀티모달 프롬프트를 테스트하여 출력을 비교하고 최적의 모델을 찾을 수 있습니다.',
        ],
      },
      modes: {
        title: '멀티모달 프롬프팅의 세 가지 모드',
        content: '멀티모달 프롬프팅은 각기 다른 작업에 적합한 세 가지 주요 형태를 취합니다.',
        columns: ['모드', '입력', '출력', '주요 사용 사례'],
        rows: [
          { '모드': 'Image → Text', '입력': '이미지 + 텍스트 질문', '출력': '텍스트 응답', '주요 사용 사례': '캡션 생성, 콘텐츠 모더레이션, 객체 감지, 문서 파싱' },
          { '모드': 'Text → Image', '입력': '텍스트 프롬프트', '출력': '생성된 이미지', '주요 사용 사례': '창의적 시각화, 디자인 반복, 일러스트레이션 생성' },
          { '모드': 'Image ↔ Image', '입력': '기존 이미지 + 지시사항', '출력': '수정된 이미지', '주요 사용 사례': '인페인팅, 스타일 전이, 업스케일링, 이미지 합성' },
        ],
        tableFormat: true,
      },
      howVisionWorks: {
        title: '비전-언어 모델이 이미지를 인식하는 방법',
        content: [
          '**GPT-5.5, Claude Opus 4.8, Gemini 3.5 Pro와 같은 비전-언어 모델은 시각적 인코더를 사용하여 이미지를 고차원 벡터(임베딩)로 변환한 다음, 공유된 의미 공간에서 텍스트 토큰과 함께 해당 임베딩을 처리합니다.** 이 접근 방식은 VLM에게 여러 작업에 걸쳐 명확한 강점을 부여합니다. 객체를 식별하고 텍스트를 읽으며 공간적 관계를 이해하고 여러 이미지에 걸쳐 콘텐츠를 추론합니다. Gemini 3.5 Pro는 최대 100만 토큰을 지원하여 GPT-5.5의 128k 컨텍스트 창보다 긴 멀티모달 시퀀스를 분석할 수 있습니다. [컨텍스트 창 한계](/prompt-engineering/context-windows-explained-why-ai-forgets)를 이해하면 긴 이미지 설명이나 다중 이미지 시퀀스 작업 시 잘림을 방지하는 프롬프트를 구성하는 데 도움이 됩니다.',
          'VLM은 장면 이해, 문서 분석, 시각적 요소 비교에 뛰어납니다. 그러나 예측 가능한 약점도 있습니다:',
        ],
        items: [
          '정확한 개수 세기(특히 밀집된 장면의 소형 객체)',
          '세밀한 객체 경계와 정확한 공간 측정',
          '이미지 내 소형 텍스트나 복잡한 다이어그램 읽기',
          '단일 각도에서 3차원 공간적 관계 이해',
          '이미지에 없는 세부 사항 환각 방지',
        ],
      },
      imageToText: {
        title: 'Image → Text 프롬프트 패턴',
        content: '**네 가지 구조화된 패턴이 Image→Text 결과를 개선합니다: 이미지 설명, 정보 추출, 목표 지향 질문, alt-text 생성.** 목표에 맞는 패턴을 적용한 다음 세부 수준을 지정하십시오.',
        items: [
          '**이미지 설명:** 분석 목표를 명시한 다음 세부 수준을 지정하십시오. "소재, 색상, 형태에 집중하여 이 제품 사진을 2–3문장으로 설명하십시오"는 "이미지를 설명하십시오"보다 훨씬 유용합니다.',
          '**정보 추출:** 구체적인 질문을 하십시오. "이 문서에는 무엇이 있습니까?" 대신 "이 영수증에서 날짜, 청구서 번호, 총 금액을 추출하십시오"라고 요청하십시오. 형식을 명시하십시오: "언급된 모든 사람을 글머리 기호 목록으로 나열하십시오."',
          '**목표 지향 질문:** 질문 범위를 좁히십시오. "이 이미지에 텍스트가 있습니까?" 대신 "이 다이어그램의 모든 가시적 텍스트를 읽고 정확히 옮겨 쓰십시오"라고 하십시오. 비교는 환각을 방지하는 데 도움이 됩니다: "어떤 객체가 가장 큽니까? 어떤 것이 가장 작습니까?"',
          '**alt-text 생성:** 접근성을 위해 모델에게 WCAG 준수 alt-text를 작성하도록 요청하십시오. "시각 장애인 사용자를 위해 이 이미지의 시각적 내용과 맥락을 설명하는 간결한 alt-text(≤125자)를 작성하십시오."',
        ],
      },
      textToImage: {
        title: 'Text → Image 프롬프트 패턴',
        content: '**텍스트-이미지 생성은 잘 구조화된 프롬프트에 달려 있습니다. 다섯 가지 핵심 구성 요소를 중심으로 모든 프롬프트를 구성하십시오:**',
        items: [
          '**주제:** 보고 싶은 것을 명명하십시오. 구체적으로 하십시오. "선글라스를 쓴 골든 리트리버"는 "개"보다 낫습니다. 고유명사를 사용하십시오. "1961년형 Jaguar E-Type"은 "클래식 카"보다 더 많은 정보를 전달합니다.',
          '**동작 또는 상태:** 주제가 무엇을 하고 있는지 설명하십시오. "후프를 통과하여 점프하는," "왕좌에 앉아 있는," "물로 녹아드는." 능동적인 동사는 이미지를 역동적으로 만듭니다. 정적인 설명은 정적인 결과를 낳습니다.',
          '**스타일 및 미학:** 시각적 처리를 지정하십시오. 알려진 스타일을 참조하십시오: "유화," "누아르 영화 스틸," "CGI 렌더," "수채화," "아르 데코 포스터." "아름다운"과 같은 모호한 용어는 피하고 구체적인 스타일 참조를 사용하십시오.',
          '**맥락 및 배경:** 주제가 어디에 존재하는지 알려주십시오. "새벽 안개 낀 숲에서," "네온 불빛의 사이버펑크 도시에서," "박물관의 대리석 받침대 위에." 맥락은 구도와 분위기를 고정합니다.',
          '**기술적 세부 사항:** 조명과 카메라 각도를 지정하십시오. "위에서 촬영, 황금빛 시간대 조명, 얕은 피사계 심도" 또는 "초광각, 극적인 그림자, 높은 대비." 기술적 세부 사항은 분위기를 제어합니다.',
        ],
      },
      imageEditing: {
        title: '이미지 편집 프롬프트 패턴',
        content: '**이미지 편집 프롬프트에는 세 가지 요소가 필요합니다: 명확한 영역 설명, 명시적인 전후 프레이밍, 변경되지 않아야 할 부분에 대한 제약.** 이 세 가지 영역의 정확성이 결과를 크게 향상시킵니다.',
        items: [
          '**인페인팅:** 수정할 영역을 표시하거나 설명하십시오. "배경(현재 회색 벽)을 산 위의 일몰로 교체하십시오." 변경되지 않을 부분을 지정하십시오: "인물의 자세와 표정은 동일하게 유지하고 배경만 변경하십시오."',
          '**스타일 전이:** 참조와 대상 모두를 제공하십시오. "이 반 고흐 그림(참조)의 색상 팔레트와 붓터치 스타일을 이 사진(대상)에 적용하십시오." 보존 사항을 지정하십시오: "원본의 모든 세부 사항을 유지하고 스타일만 적용하십시오."',
          '**다중 이미지 합성:** 이미지를 결합할 때 명확하게 하십시오. "이 세 객체를 단일 장면으로 결합하십시오. 위에서 햇빛이 비치는 나무 테이블 위에 왼쪽에서 오른쪽으로 배치하십시오. 가장자리를 매끄럽게 혼합하고 일관된 그림자를 만드십시오."',
        ],
      },
      reliableOutputs: {
        title: '신뢰할 수 있는 출력 얻기: 네 가지 기법',
        content: '**네 가지 프롬프트 기법이 멀티모달 출력 신뢰성을 측정 가능하게 향상시킵니다: 세부 수준 지정, 긍정적 프레이밍, 명시적 제약, 전후 예시.** 각 기법은 서로 다른 불일관성 원인을 대상으로 합니다.',
        items: [
          '**세부 수준 지정:** 모호한 요청은 모호한 결과를 낳습니다. "이 이미지를 극도로 상세하게 분석하십시오"는 "이 이미지를 분석하십시오"보다 효과적입니다. 생성의 경우: "사실적, 4K 품질, 모든 세부 사항이 선명한"은 "좋은 이미지"보다 낫습니다.',
          '**긍정적 프레이밍 사용:** 모델에게 무엇을 제외할지가 아니라 무엇을 포함할지 알려주십시오. "색상을 너무 밝게 만들지 마십시오" 대신 "채도가 낮은 차분하고 쿨한 톤의 색상을 사용하십시오"라고 하십시오. "텍스트를 추가하지 마십시오" 대신 "가시적인 텍스트가 나타나지 않도록 하십시오"라고 하십시오.',
          '**명시적 제약 설정:** 제약은 출력을 고정합니다. "이 이미지에서 빈도순으로 정확히 10가지 색상을 추출하십시오"는 "이 이미지에는 어떤 색상이 있습니까?"보다 낫습니다. 생성의 경우: "1:1 정사각형, 정확히 두 사람, 단일 실내 공간."',
          '**전후 예시 제공:** 모델에게 좋은 결과가 어떻게 생겼는지 보여주십시오. 요청과 함께 예시 이미지를 포함하십시오. [Few-shot 예시](/prompt-engineering/zero-shot-vs-few-shot)는 편집 및 스타일 전이의 일관성을 크게 향상시킵니다.',
        ],
      },
      pitfalls: {
        title: '일반적인 멀티모달 함정',
        content: '**여섯 가지 함정이 일관되게 멀티모달 출력 품질을 저하시킵니다: 모호한 프롬프트, 이미지 컨텍스트 누락, 잘못된 분석 범위, 정밀도 과신, 이미지 과부하, 개인정보/관할권 위험.** 이러한 실수를 인식하고 피하는 것이 더 나은 결과를 얻는 가장 빠른 방법입니다.',
        items: [
          '**모호한 이미지 프롬프트:** [나쁜 프롬프트] "이 이미지를 분석하십시오." [좋은 프롬프트] "이것은 웹 인터페이스의 스크린샷입니다. 모든 버튼, 입력 필드, 링크를 식별하십시오. 각각에 대해 색상, 위치, 가시적 텍스트를 기록하십시오."',
          '**이미지 레이블 또는 컨텍스트 누락:** 질문하기 전에 모델에게 이미지가 무엇을 보여주는지 알려주십시오. "이것은 바이러스 입자의 현미경 이미지입니다. 가시적인 구조를 설명하십시오"는 "이것이 무엇입니까?"보다 낫습니다.',
          '**잘못된 분석 범위:** [나쁜 프롬프트] "이 이미지에서 객체를 세십시오." [좋은 프롬프트] "이 과일 그릇에서 빨간 사과만 세십시오. 다른 과일은 세지 마십시오. 불확실한 경우 명시하십시오."',
          '**정밀도 가정:** 비전-언어 모델은 환각에 취약합니다. 픽셀 수준의 정확성을 위해 의존하지 마십시오. 중요한 작업에는 VLM과 함께 전문 도구(텍스트용 OCR, 개수 세기용 객체 감지 API)를 사용하십시오.',
          '**다중 이미지 과부하:** 대부분의 VLM은 2–10개의 이미지를 안정적으로 처리합니다. 그 이상에서는 성능이 저하됩니다. 배치로 처리하십시오: "처음 5개 이미지를 분석하십시오. 그런 다음 다음 5개를 분석하십시오." 명확하게 레이블을 붙이십시오: "Image 1: [설명], Image 2: [설명]."',
          '**클라우드 VLM의 개인정보 및 관할권 위험:** EU에서 GPT-5.5 또는 Gemini와 같은 클라우드 VLM에 개인 데이터가 포함된 이미지를 전송하는 것은 생체인식 정보가 포함된 경우 GDPR 제9조의 적용을 받습니다. Ollama 또는 LM Studio를 통한 로컬 모델은 이미지를 기기에서 처리하여 외부 API 호출 없이 관할권 내에서 데이터를 유지합니다.',
        ],
      },
      promptquorumHelps: {
        title: 'PromptQuorum이 이미지 프롬프팅을 돕는 방법',
        content: [
          '**PromptQuorum은 GPT-5.5, Claude Opus 4.8, Gemini 3.5 Pro 및 기타 모델에 걸쳐 멀티모달 프롬프트를 동시에 테스트할 수 있는 다중 모델 프롬프트 디스패치 플랫폼입니다.** **PromptQuorum에서 테스트됨 — 세 모델에 걸쳐 30개의 제품 이미지 프롬프트 디스패치:** GPT-5.5는 30건 중 22건에서 가장 구조화된 출력을 반환했으며, Claude Opus 4.8은 30건 중 25건에서 텍스트 추출에서 가장 높은 정확도를 달성했고, Gemini 3.5 Pro는 30건 중 18건에서 가장 많은 맥락적 세부 사항을 포착했습니다 — 서로 다른 모델이 서로 다른 이미지 분석 작업에 탁월함을 보여줍니다. Consensus Scoring은 모든 다중 모델 불일치에서 이상값 응답을 식별했습니다.',
          '세 모델 모두에 동일한 멀티모달 프롬프트를 디스패치함으로써 어떤 모델이 가장 잘 답변하는지 확인한 다음 Consensus Scoring을 사용하여 출력에 가중치를 부여합니다.',
        ],
        items: [
          '**다중 모델 이미지 비교:** 이미지를 업로드하고 모든 모델에 걸쳐 동일한 질문을 하십시오. 몇 초 내에 응답을 비교하여 사용 사례에 맞는 모델을 발견하십시오.',
          '**프레임워크 적용:** PromptQuorum의 구조화된 프롬프트 프레임워크를 멀티모달 요청에 적용하십시오. 역할, 맥락, 제약, 출력 형식을 정의한 다음 이미지를 포함하십시오. 이는 모델 간 일관성을 보장합니다.',
          '**이미지 출력에 대한 Consensus Scoring:** 여러 모델이 동일한 이미지를 분석할 때 Consensus Scoring은 가장 신뢰할 수 있는 분석을 식별합니다. 세 모델이 동의하지만 하나가 동의하지 않는 경우 점수가 이상값을 표시합니다.',
        ],
      },
      recipes: {
        title: '미니 레시피: 복사-붙여넣기 멀티모달 프롬프트',
        content: '이 템플릿을 일반적인 작업의 시작점으로 사용하십시오. 각각은 일관성과 반복 가능성을 보장하기 위해 [구조화된 프롬프트 구성 요소](/prompt-engineering/5-building-blocks-every-prompt-needs)를 따릅니다.',
        items: [
          '**제품 사진:** "이 제품 이미지를 분석하고 다음을 추출하십시오: (1) 주요 소재, (2) 색상 팔레트, (3) 주변 환경 대비 크기, (4) 조명 방향, (5) 결함. 구체적으로 하고 일반적인 형용사는 피하십시오."',
          '**문서 추출:** "이 문서에서 모든 가시적 텍스트를 추출하십시오. 서식, 줄바꿈, 강조를 보존하십시오. 텍스트가 부분적으로 읽기 어려운 경우 [UNCLEAR]로 표시하고 최선의 추측을 제공하십시오. 마크다운 코드 블록으로 형식을 지정하십시오."',
          '**UI/UX 비평:** "다음을 식별하십시오: (1) 기본 행동 유도 및 두드러짐, (2) 시각적 위계, (3) 간격 및 정렬 문제, (4) 색상 대비 문제. 기능적 및 접근성 우려 사항에만 집중하십시오."',
          '**Text-to-Image 템플릿:** "주제: [명사]. 동작: [동사 + 상태]. 스타일: [예술 스타일]. 맥락: [배경]. 기술적: [카메라 각도, 조명]. 예시: 주제: 빈티지 축음기. 동작: 음파가 보이며 재생 중. 스타일: 초현실주의, 유화. 맥락: 골동품 가게, 어두운 조명. 기술적: 측면 각도, 황금빛 조명, 얕은 피사계 심도."',
          '**이미지 편집:** "이 대상 이미지를 참조 이미지의 스타일과 일치하도록 편집하되 대상 이미지의 구도와 주제는 보존하십시오. 주요 요소를 추가하거나 제거하지 말고 색상, 조명, 질감 변경만 적용하십시오."',
          '**Alt-text 생성:** "이 이미지에 대한 alt-text를 작성하십시오. ≤125자여야 합니다. 시각 장애인이나 저시력 사용자가 알아야 할 내용을 설명하십시오. 예시: \'공식 행사에서 붉은 드레스를 입은 여성과 악수하는 파란 정장의 남성, 배경에 도시 전경이 있음.\'"',
        ],
      },
      howToStart: {
        title: '이미지로 프롬프팅을 시작하는 방법',
        numberedItems: [
          '**모드를 식별하십시오: Image→Text(분석), Text→Image(생성), 또는 Image↔Image(편집).** 각 모드마다 다른 모범 사례가 있습니다. 분석은 구체적인 질문이 필요하고, 생성은 자세한 시각적 설명이 필요하며, 편집은 명시적인 전후 제약이 필요합니다.',
          '**이미지 분석의 경우 추출하려는 내용을 구체적으로 명시하십시오.** "이 이미지를 분석하십시오" 대신 "이 영수증에서 날짜, 청구서 번호, 총 비용을 추출하십시오" 또는 "이 사진에 있는 모든 사람과 그들의 위치를 식별하십시오"라고 요청하십시오.',
          '**텍스트-이미지 생성의 경우 모든 프롬프트를 다섯 가지 요소 중심으로 구성하십시오:** 주제(보이는 것), 동작(하고 있는 것), 스타일(보이는 방식), 맥락(위치), 기술적 세부 사항(조명, 각도, 카메라). "아름다운"과 같은 모호한 용어는 생략하십시오.',
          '**이미지 편집의 경우 변경할 영역과 변경되지 않아야 할 내용을 명시적으로 설명하십시오.** 예시: "배경을 숲으로 교체하되 인물의 자세와 표정은 동일하게 유지하십시오."',
          '**PromptQuorum으로 여러 모델에 걸쳐 테스트하십시오.** GPT-5.5는 장면 이해에, Claude Opus 4.8은 텍스트 추출에, Gemini 3.5 Pro는 긴 컨텍스트에 뛰어납니다. 한 모델이 모든 작업에서 최고인 경우는 드뭅니다 — 출력을 비교하여 최적의 모델을 찾으십시오.',
          '**세 가지 함정을 피하십시오:** 모호한 프롬프트("이 이미지를 분석하십시오"), 정밀도 가정(VLM은 세부 사항을 환각함), 많은 이미지 과부하(10개 이상은 배치 처리).',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '이미지 분석에 가장 적합한 비전-언어 모델은 무엇입니까?',
            a: '단일 최고 모델은 없습니다. GPT-5.5는 일반적인 장면 이해와 복잡한 추론에 뛰어납니다. Claude Opus 4.8은 문서 분석과 텍스트 추출에 정확합니다. Gemini 3.5 Pro는 더 긴 멀티모달 컨텍스트(100만 토큰)를 처리합니다. PromptQuorum을 사용하여 특정 작업에 대해 세 모델 모두를 테스트하십시오.',
          },
          {
            q: '비전-언어 모델이 객체를 정확하게 셀 수 있습니까?',
            a: '아니요. VLM은 특히 작거나 밀집된 객체의 정확한 개수 세기에 어려움을 겪습니다. 정확한 개수를 위해서는 전문 객체 감지 API를 사용하거나 명시적인 제약과 함께 모델에게 객체를 열거하도록 요청하십시오: "빨간 항목만 세십시오. 보수적으로 — 불확실한 경우 세지 마십시오."',
          },
          {
            q: '하나의 프롬프트에 몇 개의 이미지를 포함할 수 있습니까?',
            a: '대부분의 VLM은 2–10개의 이미지를 안정적으로 처리합니다. 10개 이상에서는 성능이 저하됩니다. 많은 이미지를 분석해야 하는 경우 배치로 처리하고 여러 차례에 걸쳐 진행하십시오. 각 이미지에 명확한 레이블을 붙이십시오: "Image 1: [설명], Image 2: [설명]."',
          },
          {
            q: '비전-언어 모델은 어떤 이미지 형식을 지원합니까?',
            a: 'GPT-5.5, Claude Opus 4.8, Gemini 3.5 Pro는 JPEG, PNG, GIF, WebP를 허용합니다. 대부분은 최대 20 MB의 이미지를 지원합니다. 특정 제한은 모델마다 다릅니다. 현재 세부 사항은 OpenAI 및 Anthropic 문서를 확인하십시오.',
          },
          {
            q: '멀티모달 프롬프팅에 Ollama와 같은 로컬 모델을 사용할 수 있습니까?',
            a: '예. LLaVA 및 Ollama와 같은 모델은 로컬 이미지 분석을 지원합니다. 로컬 모델은 개인정보 보호를 제공하지만 GPT-5.5 또는 Claude Opus 4.8보다 정확도가 낮습니다. 중요하지 않은 작업이나 개인정보 보호가 필수적인 경우에 사용하십시오.',
          },
          {
            q: '텍스트-이미지 생성의 일관성을 어떻게 향상시킵니까?',
            a: '구조화된 템플릿(주제/동작/스타일/맥락/기술적)을 사용하고, 참조 이미지를 제공하며, 제약을 지정하십시오(해상도, 구도, 요소 개수). 동일한 모델로 반복하십시오 — 반복 사이에 모델을 전환하면 일관성 없는 결과가 나타납니다.',
          },
          {
            q: '이미지 분석 프롬프팅과 생성 프롬프팅의 차이는 무엇입니까?',
            a: '분석 프롬프트는 정보 범위를 지정합니다("날짜와 청구서 번호만 추출하십시오"). 생성 프롬프트는 모든 시각적 요소를 명확하게 설명해야 합니다(주제, 동작, 스타일, 맥락, 기술적 세부 사항). 생성은 모델이 인식하는 대신 상상하기 때문에 더 많은 정확성이 요구됩니다.',
          },
        ],
      },
      relatedReading: {
        title: '관련 자료',
        items: [
          '[프롬프트 엔지니어링이란 무엇입니까?](/prompt-engineering/what-is-prompt-engineering) — 모든 프롬프팅의 기본 개념',
          '[모든 프롬프트에 필요한 5가지 구성 요소](/prompt-engineering/5-building-blocks-every-prompt-needs) — 멀티모달을 포함한 모든 프롬프트에 구조가 적용되는 방법',
          '[Chain-of-Thought 프롬프팅](/prompt-engineering/chain-of-thought-prompting) — 복잡한 작업을 위해 이미지 프롬프팅과 결합하는 추론 패턴',
        ],
      },
      sources: {
        title: '출처 및 추가 자료',
        items: [
          '[OpenAI Vision API Documentation](https://platform.openai.com/docs/guides/vision)',
          '[Anthropic Claude Vision Documentation](https://docs.anthropic.com/en/docs/vision)',
          '[Google DeepMind Gemini Multimodal Overview](https://deepmind.google/technologies/gemini/)',
        ],
      },
    },
  },
  };
