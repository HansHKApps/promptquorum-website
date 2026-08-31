"""Insert Rule 12 snippets into single-line locale blocks.

Targets `<key>: { title: '<t>',` and inserts a snippets array straight after
the title, inside the same object. Works regardless of line structure.
"""
import json, re, sys

batch = json.load(open(sys.argv[1]))
total = 0
for path, specs in batch.items():
    src = open(path).read()
    for spec in specs:
        key, t = spec['key'], spec['title']
        # match `key: { title: '<t>',` allowing escaped quotes in the title
        pat = re.compile(r"(" + re.escape(key) + r": \{ title: '" + re.escape(t) + r"',)")
        hits = pat.findall(src)
        if len(hits) != 1:
            sys.exit(f"ERROR {path}: {key}/{t[:30]!r} matched {len(hits)}")
        e = lambda x: x.replace('\\', '\\\\').replace("'", "\\'")
        ins = (f" snippets: [{{ type: 'in-one-sentence', text: '{e(spec['one'])}' }}, "
               f"{{ type: 'in-plain-terms', text: '{e(spec['plain'])}' }} ],")
        src = pat.sub(lambda m: m.group(1) + ins, src, count=1)
        total += 1
    open(path, 'w').write(src)
    print(f"  {total:3d} | {path.split('/')[-1]}")
print(f"inserted {total} snippet blocks")
