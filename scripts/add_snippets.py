"""
Insert Rule 12 `snippets` into PE articles, many at once.

Usage: python3 add_snippets.py <batch.json>

batch.json: { "<article path>": [ {"title": "...", "one": "...", "plain": "..."}, ... ], ... }
Each title must occur exactly once in its file. Refuses if snippets already near.
Also drops a redundant "In one sentence:" prose item when `drop` is given.
"""
import json, re, sys

batch = json.load(open(sys.argv[1]))
total = 0
for path, specs in batch.items():
    src = open(path).read()
    lines = src.split('\n')
    for spec in specs:
        t = spec['title']
        # source may escape apostrophes (\'); compare with backslashes removed
        hits = [i for i, l in enumerate(lines)
                if re.match(r"^\s*title: [\"']", l) and t in l.replace('\\', '')]
        if len(hits) != 1:
            sys.exit(f"ERROR {path}: title {t!r} matched {len(hits)} lines")
        i = hits[0]
        ind = re.match(r'^(\s*)', lines[i]).group(1)
        if 'snippets:' in '\n'.join(lines[max(0, i-3):i+4]):
            sys.exit(f"ERROR {path}: {t!r} already has snippets")
        e = lambda x: x.replace('\\', '\\\\').replace("'", "\\'")
        lines[i+1:i+1] = [
            f"{ind}snippets: [",
            f"{ind}  {{ type: 'in-one-sentence', text: '{e(spec['one'])}' }},",
            f"{ind}  {{ type: 'in-plain-terms', text: '{e(spec['plain'])}' }},",
            f"{ind}],",
        ]
        total += 1
    out = '\n'.join(lines)
    # optional: remove a now-duplicated prose line
    for spec in specs:
        drops = spec.get('drop') or []
        if isinstance(drops, str):
            drops = [drops]
        for d in drops:
            hits = [l for l in out.split('\n') if d in l]
            if len(hits) != 1:
                sys.exit(f"ERROR {path}: drop {d[:40]!r} matched {len(hits)}")
            out = out.replace(hits[0] + '\n', '')
    open(path, 'w').write(out)
    print(f"  {total:3d} total | {path.split('/')[-1]}")
print(f"inserted {total} snippet blocks across {len(batch)} file(s)")
