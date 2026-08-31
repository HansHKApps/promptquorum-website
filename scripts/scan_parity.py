"""Scan every PE article for locale blocks that are missing sections vs EN."""
import glob
import re

L = ['en', 'de', 'es', 'fr', 'ja', 'zh', 'pt', 'ar', 'ko']
SKIP = {'schema', 'howToSchema', 'faqSchema', 'supplementalSchema',
        'itemListSchema', 'author', 'publisher', 'speakable', 'mainEntity'}

rows = []
for path in sorted(glob.glob('src/lib/prompt-engineering/articles/*.ts')):
    lines = open(path).read().split('\n')
    if 'Translations' in '\n'.join(lines[:12]):
        continue  # sections come from a shared file; different shape
    starts = []
    for i, l in enumerate(lines):
        m = re.match(r'^\s{2,6}(' + '|'.join(L) + r'): \{\s*$', l)
        if m:
            starts.append((i, m.group(1)))
    per = {}
    for idx, (i, loc) in enumerate(starts):
        end = starts[idx + 1][0] if idx + 1 < len(starts) else len(lines)
        keys, insec = [], False
        for j in range(i, end):
            if re.match(r'^\s*sections: \{', lines[j]):
                insec = True
                continue
            if insec:
                m = re.match(r'^(\s*)(\w+): \{\s*$', lines[j])
                if m and len(m.group(1)) <= 10 and m.group(2) not in SKIP:
                    keys.append(m.group(2))
        per[loc] = keys
    en = per.get('en', [])
    if not en:
        continue
    bad = {loc: len(en) - len(ks) for loc, ks in per.items()
           if loc != 'en' and len(ks) < len(en) * 0.5}
    if bad:
        rows.append((path.split('/')[-1], len(en), bad))

print(f"{len(rows)} PE article(s) with locale blocks under half the EN section count\n")
for name, n, bad in rows:
    print(f"  {name:46} en={n:2}  starved: {bad}")
