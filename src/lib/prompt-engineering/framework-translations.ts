/**
 * Framework Translation Module
 * Imports translated content for RISEN, TRACE, and RTF frameworks
 * 
 * This module provides a clean, modular approach to managing multilingual
 * framework article content without directly modifying the large content.ts file.
 */

// Import framework translations from separate, maintainable files
import { risenFrameworkTranslations } from '../blog/framework-risen-translations';
import { traceFrameworkTranslations } from '../blog/framework-trace-translations';
import { rtfFrameworkTranslations } from '../blog/framework-rtf-translations';

// Export as a unified registry for easy access
export const frameworkTranslations = {
  'risen-framework': risenFrameworkTranslations,
  'trace-framework': traceFrameworkTranslations,
  'rtf-framework': rtfFrameworkTranslations,
};

// Type definitions for framework translations
export type FrameworkTranslation = {
  theme: string;
  title: string;
  intro: string;
  publishDate: string;
  readTime: string;
  educationalLevel: string;
  primaryTerm?: string;
  sections: {
    [key: string]: {
      title: string;
      content: string | string[];
      items?: string[];
      numberedItems?: string[];
    };
  };
};

export type FrameworkLanguageBlock = Record<string, any>;

// Helper function to get translations for a specific framework and language
export function getFrameworkTranslation(
  framework: 'risen' | 'trace' | 'rtf',
  language: 'de' | 'fr' | 'ja' | 'zh'
): FrameworkTranslation | undefined {
  const frameworkKey = `${framework}-framework` as const;
  const translations = frameworkTranslations[frameworkKey as keyof typeof frameworkTranslations];
  return translations?.[language];
}

// Helper function to get all languages for a framework
export function getAllFrameworkTranslations(
  framework: 'risen' | 'trace' | 'rtf'
): FrameworkLanguageBlock | undefined {
  const frameworkKey = `${framework}-framework` as const;
  return frameworkTranslations[frameworkKey as keyof typeof frameworkTranslations];
}
