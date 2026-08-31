"""For each locale block in a PE article, report the first content section
(skipping tldr/schema-ish keys) and its title — the anchor for Rule 12 snippets."""
import re
import sys

LOCALES = ['en', 'de', 'es', 'fr', 'ja', 'zh', 'pt', 'ar', 'ko']
SKIP = {'schema', 'howToSchema', 'faqSchema', 'supplementalSchema', 'itemListSchema',
        'author', 'publisher', 'speakable', 'tldr', 'mainEntity'}

for path in sys.argv[1:]:
    lines = open(path).read().split('\n')
    starts = []
    for i, l in enumerate(lines):
        m = re.match(r'^(\s{2,6})(' + '|'.join(LOCALES) + r'): \{\s*$', l)
        if m:
            starts.append((i, m.group(2)))
    print(f"\n=== {path.split('/')[-1]}  ({len(starts)} locale blocks) ===")
    for idx, (i, loc) in enumerate(starts):
        end = starts[idx + 1][0] if idx + 1 < len(starts) else len(lines)
        insec = False
        found = False
        for j in range(i, end):
            if re.match(r'^\s*sections: \{', lines[j]):
                insec = True
                continue
            if not insec:
                continue
            m = re.match(r'^(\s*)(\w+): \{\s*$', lines[j])
            if m and m.group(2) not in SKIP:
                for k in range(j, min(j + 6, end)):
                    t = re.match(r"^\s*title: (.+),\s*$", lines[k])
                    if t:
                        print(f"  {loc:3} {m.group(2):26} {t.group(1)[:72]}")
                        found = True
                        break
                break
        if not found:
            print(f"  {loc:3} (no anchor found)")
