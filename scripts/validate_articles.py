#!/usr/bin/env python3
"""
Phase 7: Automated Article Validation Script
Validates 14 prompt engineering articles against GEO guidelines

Usage:
    python3 validate_articles.py
    python3 validate_articles.py --article=what-is-prompt-engineering
    python3 validate_articles.py --format=json

Output:
    - Console report with color coding
    - JSON export for dashboards
    - Per-article validation checklist
"""

import re
import json
import sys
from pathlib import Path
from typing import Dict, List, Tuple

class ArticleValidator:
    """Validates prompt engineering articles against GEO guidelines"""

    CONTENT_FILE = 'src/lib/prompt-engineering/content.ts'

    # Article slugs to validate
    ARTICLES = [
        'what-is-prompt-engineering',
        'prompt-engineering-history',
        'prompt-building-blocks',
        'ai-hallucinations-how-to-stop',
        'prompt-for-speed',
        'temperature-and-top-p',
        'context-windows-explained',
        'prompt-with-images',
        'tokens-costs-limits',
        'system-prompt-vs-user-prompt',
        'gpt-claude-gemini-which-model',
    ]

    # Validation rules
    RULES = {
        'title_length': (50, 65, 'Title length (SERP optimization)'),
        'title_twitter': (0, 60, 'Title Twitter compatibility'),
        'meta_description': (150, 160, 'Meta description length'),
        'read_time': (8, 15, 'Read time (minutes)'),
        'internal_links': (5, 10, 'Internal markdown links'),
        'tldr_items': (5, 8, 'TLDR/Key Takeaways items'),
        'faq_pairs': (5, 8, 'FAQ question-answer pairs'),
        'related_reading': (3, 5, 'Related Reading links'),
        'sources': (3, 10, 'Source citations'),
    }

    def __init__(self):
        self.results = {}
        self.load_content()

    def load_content(self):
        """Load content.ts file"""
        try:
            with open(self.CONTENT_FILE, 'r', encoding='utf-8') as f:
                self.content = f.read()
        except FileNotFoundError:
            print(f"Error: {self.CONTENT_FILE} not found")
            sys.exit(1)

    def extract_article_block(self, slug: str) -> str:
        """Extract a single article's 'en' block"""
        pattern = f"'{slug}':\\s*{{\\s*en:\\s*{{([^}}]*?)}},\\s*de:"
        match = re.search(pattern, self.content, re.DOTALL)
        if match:
            return match.group(1)
        return ""

    def count_metadata_field(self, block: str, field: str) -> int:
        """Count characters in a metadata field"""
        pattern = f"{field}:\\s*['\"]([^'\"]*)['\"]"
        match = re.search(pattern, block)
        if match:
            return len(match.group(1))
        return 0

    def count_read_time_minutes(self, block: str) -> int:
        """Extract read time in minutes"""
        match = re.search(r"readTime:\\s*['\"]([0-9]+)\\s*min", block)
        if match:
            return int(match.group(1))
        return 0

    def count_markdown_links(self, block: str) -> int:
        """Count internal markdown links [text](/path)"""
        return len(re.findall(r'\[([^\]]+)\]\(\/[^)]+\)', block))

    def count_tldr_items(self, block: str) -> int:
        """Count TLDR items"""
        match = re.search(r"'tldr':\\s*{[^}]*?'items':\\s*\[([^\]]*)\]", block, re.DOTALL)
        if match:
            items = match.group(1)
            return len(re.findall(r"'[^']*'", items))
        return 0

    def count_faq_pairs(self, block: str) -> int:
        """Count FAQ q/a pairs"""
        return len(re.findall(r"{\s*q:\\s*['\"]", block))

    def count_related_reading_links(self, block: str) -> int:
        """Count Related Reading links"""
        match = re.search(r"'relatedReading':\\s*{[^}]*?'items':\\s*\[([^\]]*)\]", block, re.DOTALL)
        if match:
            items = match.group(1)
            return len(re.findall(r'\[([^\]]+)\]', items))
        return 0

    def count_sources(self, block: str) -> int:
        """Count source citations"""
        match = re.search(r"'sources':\\s*{[^}]*?'items':\\s*\[([^\]]*)\]", block, re.DOTALL)
        if match:
            items = match.group(1)
            return len(re.findall(r'(?:https?://|"[^"]+"|\'[^\']+\')', items))
        return 0

    def validate_article(self, slug: str) -> Dict:
        """Validate single article"""
        block = self.extract_article_block(slug)
        if not block:
            return {'error': f'Article {slug} not found'}

        title = self.count_metadata_field(block, 'title')
        title_twitter = title  # Same as title
        meta_desc = self.count_metadata_field(block, 'metaDescription')
        read_time = self.count_read_time_minutes(block)
        links = self.count_markdown_links(block)
        tldr = self.count_tldr_items(block)
        faq = self.count_faq_pairs(block)
        related = self.count_related_reading_links(block)
        sources = self.count_sources(block)

        result = {
            'slug': slug,
            'title_length': (title, self.RULES['title_length']),
            'title_twitter': (title_twitter, self.RULES['title_twitter']),
            'meta_description': (meta_desc, self.RULES['meta_description']),
            'read_time': (read_time, self.RULES['read_time']),
            'internal_links': (links, self.RULES['internal_links']),
            'tldr_items': (tldr, self.RULES['tldr_items']),
            'faq_pairs': (faq, self.RULES['faq_pairs']),
            'related_reading': (related, self.RULES['related_reading']),
            'sources': (sources, self.RULES['sources']),
        }

        return result

    def check_compliance(self, metric: str, actual: int, rule: Tuple) -> bool:
        """Check if metric complies with rule"""
        min_val, max_val, _ = rule
        return min_val <= actual <= max_val

    def validate_all(self) -> Dict:
        """Validate all articles"""
        results = {}
        for slug in self.ARTICLES:
            results[slug] = self.validate_article(slug)
        return results

    def generate_report(self, format: str = 'text') -> str:
        """Generate validation report"""
        results = self.validate_all()

        if format == 'json':
            return json.dumps(results, indent=2)

        # Text format
        report = []
        report.append("=" * 100)
        report.append("PHASE 7: AUTOMATED ARTICLE VALIDATION")
        report.append("=" * 100)
        report.append("")

        total_articles = len(self.ARTICLES)
        compliant_count = 0

        for slug, data in results.items():
            if 'error' in data:
                report.append(f"❌ {slug}: {data['error']}")
                continue

            all_compliant = all(
                self.check_compliance(k, v[0], v[1])
                for k, v in data.items() if k != 'slug'
            )

            if all_compliant:
                compliant_count += 1
                status = "✅"
            else:
                status = "⚠️"

            report.append(f"{status} {slug}")

            for metric, (actual, rule) in data.items():
                if metric == 'slug':
                    continue
                min_val, max_val, label = rule
                is_compliant = self.check_compliance(metric, actual, rule)
                check = "✅" if is_compliant else "⚠️"
                report.append(f"    {check} {label:<40} {actual:>3} (target: {min_val}-{max_val})")
            report.append("")

        report.append("=" * 100)
        report.append(f"SUMMARY: {compliant_count}/{total_articles} articles fully compliant")
        report.append("=" * 100)

        return "\n".join(report)

def main():
    validator = ArticleValidator()

    # Parse arguments
    format_type = 'text'
    specific_article = None

    for arg in sys.argv[1:]:
        if arg.startswith('--format='):
            format_type = arg.split('=')[1]
        elif arg.startswith('--article='):
            specific_article = arg.split('=')[1]

    # Generate and print report
    if specific_article:
        result = validator.validate_article(specific_article)
        if format_type == 'json':
            print(json.dumps(result, indent=2))
        else:
            print(f"Validation for: {specific_article}")
            for metric, data in result.items():
                if metric == 'slug':
                    continue
                actual, rule = data
                min_val, max_val, label = rule
                is_compliant = validator.check_compliance(metric, actual, rule)
                check = "✅" if is_compliant else "⚠️"
                print(f"{check} {label:<40} {actual:>3} (target: {min_val}-{max_val})")
    else:
        print(validator.generate_report(format_type))

if __name__ == '__main__':
    main()
