# Prompt Chaining French Translation — Paste-Ready Integration

This is the exact code to paste into `src/lib/prompt-engineering/content.ts`.

## Step 1: Add Import at Top

Add this line near the top of the file with other imports:

```typescript
import { promptChainingFR } from './prompt-chaining-fr'
```

## Step 2: Replace FR Object

Find the `'prompt-chaining'` entry (around line 28249) and replace the empty `fr` object with this:

```typescript
fr: {
  theme: 'Techniques',
  title: 'Chaîne de Prompts : Décomposer les Tâches Complexes en Étapes Gagnantes',
  intro: 'La chaîne de prompts est une technique où vous décomposez une tâche complexe en plusieurs petits prompts et alimentez le résultat d\'une étape dans la suivante. Cela vous permet de créer des workflows robustes et multi-étapes au lieu de dépendre d\'un seul prompt compliqué.',
  publishDate: '2026-03-26',
  seoTitle: 'Guide de Chaîne de Prompts 2026 : Créer des Workflows IA Complexes',
  metaDescription: 'Apprenez les techniques de chaîne de prompts pour créer des workflows IA puissants et multi-étapes. Exemples réels et meilleures pratiques.',
  readTime: '6 min de lecture',
  educationalLevel: 'Intermediate',
  primaryTerm: 'Chaîne de Prompts',
  schema: {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Chaîne de Prompts : Décomposer les Tâches Complexes en Étapes Gagnantes',
    description: 'Ce qu\'est la chaîne de prompts, pourquoi c\'est important et comment concevoir des workflows IA multi-étapes faciles à contrôler et réutiliser.',
    datePublished: '2026-03-26',
    dateModified: '2026-03-26',
    keywords: ['chaîne de prompts', 'ingénierie des prompts', 'workflows IA', 'PromptQuorum'],
    author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
    publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    about: [
      { '@type': 'Thing', name: 'Prompt Engineering' },
      { '@type': 'Thing', name: 'Large Language Models' },
      { '@type': 'Thing', name: 'AI Workflows' },
    ],
  },
  sections: promptChainingFR.sections,
},
```

## Verification

```bash
npm run build
```

Test route: `/techniques/prompt-chaining?lang=fr`

Should display French content throughout with no English fallback.
