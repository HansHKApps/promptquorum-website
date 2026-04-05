#!/usr/bin/env python3
"""
Phase 6: Add internal linking by creating relatedLinks sections
Similar to FAQ approach: adds a new section with related article links
"""

import json
import re

# Load linking strategy
with open('phase6_linking_strategy.json', 'r') as f:
    strategy = json.load(f)['linking_strategy']

link_patterns = strategy['link_patterns']

# Load content
with open('src/lib/prompt-engineering/content.ts', 'r') as f:
    content = f.read()

def extract_article_title(slug, content):
    """Get article title by slug"""
    pattern = f"'{slug}':\\s*{{\\s*en:\\s*{{[^}}]*?title:\\s*'([^']+)'"
    match = re.search(pattern, content, re.DOTALL)
    return match.group(1) if match else None

def count_existing_links(text):
    """Count [text](/path) markdown links"""
    return len(re.findall(r'\[([^\]]+)\]\(/([^\)]+)\)', text))

def extract_linked_slugs(text):
    """Get set of already-linked slugs"""
    links = re.findall(r'\[([^\]]+)\]\(/([^\)]+)\)', text)
    return {path.lstrip('/').split('?')[0] for _, path in links}

def escape_quotes(s):
    """Escape single quotes for TypeScript"""
    return s.replace("'", "\\'")

added_count = 0
skipped_count = 0

for slug, link_targets in link_patterns.items():
    # Find article
    pattern = f"'{slug}':\\s*{{\\s*en:\\s*{{"
    match = re.search(pattern, content, re.DOTALL)
    if not match:
        print(f"❌ {slug} not found")
        continue

    start_pos = match.start()

    # Find article end
    rest = content[start_pos:]
    next_article_match = re.search(r'},\n\n  \'[^\']+\':\s*{', rest)
    if next_article_match:
        end_pos = start_pos + next_article_match.start() + 2
    else:
        # Last article - find end of export
        final_match = re.search(r'} };', rest)
        if final_match:
            end_pos = start_pos + final_match.start() + 1
        else:
            print(f"⚠️  {slug} - could not find article end")
            continue

    article_text = content[start_pos:end_pos]

    # Skip if already has 5+ links
    existing_count = count_existing_links(article_text)
    if existing_count >= 5:
        print(f"⏭️  {slug} - already has {existing_count} links")
        skipped_count += 1
        continue

    # Skip if already has relatedLinks
    if 'relatedLinks:' in article_text:
        print(f"⏭️  {slug} - already has relatedLinks")
        skipped_count += 1
        continue

    # Get existing linked slugs
    existing_slugs = extract_linked_slugs(article_text)

    # Select new targets (up to 8 - existing)
    targets_to_add = []
    for target_slug in link_targets:
        if target_slug not in existing_slugs and len(targets_to_add) < (8 - existing_count):
            target_title = extract_article_title(target_slug, content)
            if target_title:
                targets_to_add.append((target_slug, target_title))

    if not targets_to_add:
        print(f"⏭️  {slug} - no new targets")
        continue

    # Find insertion point: before de: block
    # Handle both multi-line (}, de: {) and single-line (, de: {) patterns
    insert_match = re.search(r'(},\s*de:|,\s*de:)', article_text)
    if not insert_match:
        print(f"⚠️  {slug} - could not find de block")
        continue

    insert_offset = insert_match.start()

    # Build relatedLinks section
    related_section = ",\n        relatedLinks: {\n"
    related_section += "          title: 'Related Articles',\n"
    related_section += "          content: '"

    link_items = [f"[{escape_quotes(title)}](/{target_slug})" for target_slug, title in targets_to_add]
    related_section += " · ".join(link_items)

    related_section += "',\n"
    related_section += "        }"

    # Insert into article
    new_article = article_text[:insert_offset] + related_section + article_text[insert_offset:]

    # Update main content
    content = content[:start_pos] + new_article + content[end_pos:]
    added_count += 1
    print(f"✅ {slug} - added {len(targets_to_add)} related links")

# Write result
with open('src/lib/prompt-engineering/content.ts', 'w') as f:
    f.write(content)

print(f"\n✅ Phase 6: {added_count} articles updated with relatedLinks sections")
print(f"⏭️  {skipped_count} articles skipped")
