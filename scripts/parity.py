"""Report section keys per locale block, to spot structural parity gaps."""
import re
import sys

L = ['en', 'de', 'es', 'fr', 'ja', 'zh', 'pt', 'ar', 'ko']
SKIP = {'schema', 'howToSchema', 'faqSchema', 'supplementalSchema',
        'itemListSchema', 'author', 'publisher', 'speakable', 'mainEntity'}

for path in sys.argv[1:]:
    lines = open(path).read().split('\n')
    starts = []
    for i, l in enumerate(lines):
        m = re.match(r'^\s{2,6}(' + '|'.join(L) + r'): \{\s*$', l)
        if m:
            starts.append((i, m.group(1)))
    print(f"\n=== {path.split('/')[-1]} ===")
    en_keys = None
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
        if loc == 'en':
            en_keys = keys
        missing = [k for k in (en_keys or []) if k not in keys] if loc != 'en' else []
        note = f" MISSING vs en: {missing}" if missing else ""
        print(f"  {loc:3} {len(keys):2} sections{note}")
