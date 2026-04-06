# SPECS Framework — Ready-to-Paste Content

This document contains the exact code ready to paste into `src/lib/prompt-engineering/content.ts`.

## Step 1: Add Imports at Top of content.ts

Add these lines near the top of the file with other imports:

```typescript
import { specsDE } from './specs-de';
import { specsFR } from './specs-fr';
import { specsJA } from './specs-ja';
import { specsZH } from './specs-zh';
```

## Step 2: Replace SPECS Framework Language Objects

Find this section in content.ts (currently around lines 23200-23204):

```typescript
'specs-framework': {
  en: {
    // ... existing English content ...
  },
  de: { theme: 'Frameworks', title: '', intro: '', publishDate: '2026-03-24', readTime: '', sections: {} },
  fr: { theme: 'Frameworks', title: '', intro: '', publishDate: '2026-03-24', readTime: '', sections: {} },
  ja: { theme: 'Frameworks', title: '', intro: '', publishDate: '2026-03-24', readTime: '', sections: {} },
  zh: { theme: 'Frameworks', title: '', intro: '', publishDate: '2026-03-24', readTime: '', sections: {} },
},
```

And replace it entirely with:

```typescript
'specs-framework': {
  en: {
    // ... keep existing English content unchanged ...
    theme: 'Frameworks',
    title: 'The SPECS Framework',
    intro: 'The SPECS Framework is a specification-first prompt pattern that treats every prompt like a mini requirements document instead of a casual chat message. It is designed for tasks where accuracy, structure, and repeatability matter more than open-ended creativity. PromptQuorum includes the SPECS Framework as a built-in option that any user can select and use directly in the app.',
    publishDate: '2026-03-24',
    readTime: '8 min read',
    // ... keep schema, sections, etc. from English version ...
  },
  de: {
    theme: 'Frameworks',
    title: 'Das SPECS-Framework',
    intro: 'Das SPECS-Framework ist ein spezifikationsorientiertes Prompt-Muster, das jede Eingabeaufforderung wie ein Mini-Anforderungsdokument behandelt. Es ist für Aufgaben konzipiert, bei denen Genauigkeit, Struktur und Wiederholbarkeit wichtiger sind als offene Kreativität. PromptQuorum bietet das SPECS-Framework als integrierte Option an, die jeder Benutzer direkt in der App auswählen und verwenden kann.',
    publishDate: '2026-03-24',
    readTime: 'Min. Lesezeit',
    educationalLevel: 'Intermediate',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Das SPECS-Framework',
      description: 'Wie das SPECS-Framework (Scope, Purpose, Examples, Constraints, Steps) funktioniert, wann man es verwendet, und wie PromptQuorum SPECS als integrierte Option anbietet.',
      datePublished: '2026-03-24',
      dateModified: '2026-03-24',
      keywords: ['SPECS-Framework', 'Scope Purpose Examples Constraints Steps', 'Prompt-Frameworks', 'Prompt-Engineering', 'PromptQuorum'],
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      about: [
        { '@type': 'Thing', name: 'Prompt Engineering' },
        { '@type': 'Thing', name: 'Prompt Frameworks' },
        { '@type': 'Thing', name: 'Large Language Models' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        { '@type': 'SoftwareApplication', name: 'GPT-4o', url: 'https://openai.com' },
        { '@type': 'SoftwareApplication', name: 'Claude 4.6 Sonnet', url: 'https://www.anthropic.com' },
        { '@type': 'SoftwareApplication', name: 'Gemini 2.5 Pro', url: 'https://deepmind.google' },
      ],
    },
    sections: specsDE,
  },
  fr: {
    theme: 'Frameworks',
    title: 'Le Framework SPECS',
    intro: 'Le Framework SPECS est un motif de prompt axé sur les spécifications qui traite chaque prompt comme un mini-document d\'exigences. Il est conçu pour les tâches où la précision, la structure et la répétabilité importent davantage que la créativité ouverte. PromptQuorum propose le Framework SPECS comme option intégrée que tout utilisateur peut sélectionner et utiliser directement dans l\'application.',
    publishDate: '2026-03-24',
    readTime: 'min de lecture',
    educationalLevel: 'Intermediate',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Le Framework SPECS',
      description: 'Comment fonctionne le Framework SPECS (Scope, Purpose, Examples, Constraints, Steps), quand l\'utiliser, et comment PromptQuorum propose SPECS comme option intégrée.',
      datePublished: '2026-03-24',
      dateModified: '2026-03-24',
      keywords: ['Framework SPECS', 'Scope Purpose Examples Constraints Steps', 'Frameworks de prompts', 'Ingénierie des prompts', 'PromptQuorum'],
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      about: [
        { '@type': 'Thing', name: 'Prompt Engineering' },
        { '@type': 'Thing', name: 'Prompt Frameworks' },
        { '@type': 'Thing', name: 'Large Language Models' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        { '@type': 'SoftwareApplication', name: 'GPT-4o', url: 'https://openai.com' },
        { '@type': 'SoftwareApplication', name: 'Claude 4.6 Sonnet', url: 'https://www.anthropic.com' },
        { '@type': 'SoftwareApplication', name: 'Gemini 2.5 Pro', url: 'https://deepmind.google' },
      ],
    },
    sections: specsFR,
  },
  ja: {
    theme: 'Frameworks',
    title: 'SPECSフレームワーク',
    intro: 'SPECSフレームワークは、すべてのプロンプトをカジュアルなチャットメッセージではなく、ミニ要件ドキュメントとして扱う仕様優先型プロンプトパターンです。精度、構造、再現性がオープンエンドの創造性より重要なタスク向けに設計されています。PromptQuorumはSPECSフレームワークをアプリ内で選択して直接使用できるビルイン オプションとして提供しています。',
    publishDate: '2026-03-24',
    readTime: '8分で読める',
    educationalLevel: 'Intermediate',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'SPECSフレームワーク',
      description: 'SPECSフレームワーク（Scope、Purpose、Examples、Constraints、Steps）の動作方法、使用時期、およびPromptQuorumがSPECSをビルイン オプションとして提供する方法。',
      datePublished: '2026-03-24',
      dateModified: '2026-03-24',
      keywords: ['SPECSフレームワーク', 'Scope Purpose Examples Constraints Steps', 'プロンプト フレームワーク', 'プロンプト エンジニアリング', 'PromptQuorum'],
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      about: [
        { '@type': 'Thing', name: 'Prompt Engineering' },
        { '@type': 'Thing', name: 'Prompt Frameworks' },
        { '@type': 'Thing', name: 'Large Language Models' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        { '@type': 'SoftwareApplication', name: 'GPT-4o', url: 'https://openai.com' },
        { '@type': 'SoftwareApplication', name: 'Claude 4.6 Sonnet', url: 'https://www.anthropic.com' },
        { '@type': 'SoftwareApplication', name: 'Gemini 2.5 Pro', url: 'https://deepmind.google' },
      ],
    },
    sections: specsJA,
  },
  zh: {
    theme: 'Frameworks',
    title: 'SPECS框架',
    intro: 'SPECS框架是一种规范优先的提示模式，它将每个提示视为迷你需求文档，而不是随意的聊天信息。它专为需要精确性、结构和可重复性而不是开放式创意的任务而设计。PromptQuorum将SPECS框架作为内置选项提供，任何用户都可以在应用中直接选择和使用。',
    publishDate: '2026-03-24',
    readTime: '阅读约8分钟',
    educationalLevel: 'Intermediate',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'SPECS框架',
      description: 'SPECS框架（Scope、Purpose、Examples、Constraints、Steps）的工作原理、使用时机，以及PromptQuorum如何将SPECS作为内置选项提供。',
      datePublished: '2026-03-24',
      dateModified: '2026-03-24',
      keywords: ['SPECS框架', 'Scope Purpose Examples Constraints Steps', '提示框架', '提示工程', 'PromptQuorum'],
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      about: [
        { '@type': 'Thing', name: 'Prompt Engineering' },
        { '@type': 'Thing', name: 'Large Language Models' },
        { '@type': 'Thing', name: 'Prompt Frameworks' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        { '@type': 'SoftwareApplication', name: 'GPT-4o', url: 'https://openai.com' },
        { '@type': 'SoftwareApplication', name: 'Claude 4.6 Sonnet', url: 'https://www.anthropic.com' },
        { '@type': 'SoftwareApplication', name: 'Gemini 2.5 Pro', url: 'https://deepmind.google' },
      ],
    },
    sections: specsZH,
  },
},
```

## Verification

After pasting, verify:

1. **No TypeScript Errors**
   ```bash
   npm run build
   ```

2. **Test Language Routes**
   - `/?lang=de` → Shows German content
   - `/?lang=fr` → Shows French content
   - `/?lang=ja` → Shows Japanese content
   - `/?lang=zh` → Shows Simplified Chinese content

3. **Check Meta Tags**
   Each language should display correct `<title>` and `<meta name="description">` tags.

## Notes

- All four translation files are independent and ready to use
- No additional processing needed
- All product/framework/acronym names remain unchanged as specified
- Zero English content in translated sections
