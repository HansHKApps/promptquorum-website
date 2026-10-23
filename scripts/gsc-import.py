#!/usr/bin/env python3
"""
Read Google Search Console Performance exports (.xlsx, or the unzipped CSV set) for one page, one
file per locale, and merge them into the CSV that scripts/query-coverage.mjs expects.

Why: GSC exports ONE filter (one page URL = one locale) per download, as an .xlsx workbook whose
sheets are Queries, Pages, Countries, Devices, Search appearance, Chart/Dates and Filters. Pasting
these by hand is slow; this reads them directly and tags every query with its locale.

Usage:
  python3 scripts/gsc-import.py <export> [<export> ...] [--out queries.csv] [--min-impr 1]

  <export> = an .xlsx file, a folder of GSC CSVs (Queries.csv, Pages.csv, Filters.csv, ...),
             or a folder that contains several of those (one per locale). Pass as many as you have.

Locale is read from the Filters sheet ("Page" value): /de/... -> de, no prefix -> en. If a file has
no page filter, pass --locale xx to force it (applies to every export given in that run).

Output:
  * a summary per locale (clicks, impressions, CTR, position; top countries and devices)
  * --out <file>: CSV with columns  query,clicks,impressions,ctr,position,locale
    -> node scripts/query-coverage.mjs <url> --queries-file <file> --top=20
  * flags: "opportunity" = impressions >= 10 and position 4-15 and CTR < 3% (title/meta candidates);
           "noise" = 1-3 word fragments with no topic term (conversational follow-ups such as
           'yes', 'more apps'), which are useful as FAQ ideas but not as keyword targets.
Needs openpyxl only for .xlsx (pip install openpyxl). CSV folders need nothing.
"""
import argparse, csv, glob, os, re, sys

LOCALES = {'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko'}


def num(v):
    if v is None or v == '':
        return 0.0
    if isinstance(v, (int, float)):
        return float(v)
    return float(str(v).replace('%', '').replace(',', '').strip() or 0)


def pct(v):
    """CTR as a percentage. xlsx stores a fraction (0.0602); CSV text carries the sign ('6.02%')."""
    if isinstance(v, (int, float)):
        return float(v) * 100 if float(v) <= 1 else float(v)
    return num(v)


def read_xlsx(path):
    try:
        import openpyxl
    except ImportError:
        sys.exit('openpyxl missing: pip install openpyxl  (or export/unzip to CSV and pass the folder)')
    wb = openpyxl.load_workbook(path, read_only=True, data_only=True)
    return {ws.title.strip().lower(): [list(r) for r in ws.iter_rows(values_only=True)] for ws in wb.worksheets}


def read_csv_dir(path):
    sheets = {}
    for f in glob.glob(os.path.join(path, '*.csv')):
        name = os.path.splitext(os.path.basename(f))[0].strip().lower()
        with open(f, newline='', encoding='utf-8-sig') as fh:
            sheets[name] = [r for r in csv.reader(fh)]
    return sheets


def find_exports(arg):
    """Yield (label, sheets) for every export reachable from arg."""
    if os.path.isfile(arg) and arg.lower().endswith('.xlsx'):
        yield arg, read_xlsx(arg)
    elif os.path.isdir(arg):
        if glob.glob(os.path.join(arg, 'Queries.csv')) or glob.glob(os.path.join(arg, 'queries.csv')):
            yield arg, read_csv_dir(arg)
        else:
            for x in sorted(glob.glob(os.path.join(arg, '*.xlsx'))):
                yield x, read_xlsx(x)
            for d in sorted(p for p in glob.glob(os.path.join(arg, '*')) if os.path.isdir(p)):
                yield from find_exports(d)
    else:
        sys.exit('not an .xlsx file or folder: ' + arg)


def locale_of(sheets, forced):
    if forced:
        return forced, ''
    page = ''
    for row in sheets.get('filters', []):
        if row and str(row[0]).strip().lower() == 'page' and len(row) > 1:
            page = str(row[1] or '')
    m = re.search(r'promptquorum\.com/([a-z]{2})/', page)
    loc = m.group(1) if m and m.group(1) in LOCALES else 'en'
    return loc, page


def table(sheets, *names):
    for n in names:
        rows = sheets.get(n)
        if rows and len(rows) > 1:
            return rows[0], rows[1:]
    return None, []


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('exports', nargs='+')
    ap.add_argument('--out')
    ap.add_argument('--locale')
    ap.add_argument('--min-impr', type=int, default=1)
    a = ap.parse_args()

    all_q = []
    for arg in a.exports:
        for label, sheets in find_exports(arg):
            loc, page = locale_of(sheets, a.locale)
            _, qrows = table(sheets, 'queries', 'top queries')
            _, prow = table(sheets, 'pages', 'top pages')
            _, crow = table(sheets, 'countries')
            _, drow = table(sheets, 'devices')
            if not qrows:
                print(f'!! {label}: no Queries sheet, skipped')
                continue
            tot_c = sum(num(r[1]) for r in qrows)
            tot_i = sum(num(r[2]) for r in qrows)
            pg = prow[0] if prow else None
            print(f'\n== [{loc}] {os.path.basename(label)}   page filter: {page or "(none)"}')
            if pg:
                print(f'   page: {num(pg[1]):.0f} clicks, {num(pg[2]):.0f} impressions, CTR {pct(pg[3]):.2f}%, avg pos {num(pg[4]):.1f}')
            print(f'   queries: {len(qrows)} rows (sum of rows: {tot_c:.0f} clicks, {tot_i:.0f} impr; GSC hides rare queries, so this is lower than the page total)')
            if crow:
                print('   countries: ' + ', '.join(f'{r[0]} {num(r[2]):.0f}' for r in crow[:5]))
            if drow:
                print('   devices:   ' + ', '.join(f'{r[0]} {num(r[2]):.0f}' for r in drow))
            for r in qrows:
                if num(r[2]) >= a.min_impr:
                    all_q.append((str(r[0]), num(r[1]), num(r[2]), pct(r[3]), num(r[4]), loc))

    if not all_q:
        sys.exit('no queries read')
    all_q.sort(key=lambda t: (t[5], -t[2]))
    topic = re.compile(r'(llm|ai|ki|ia|ローカル|本地|로컬|محلي|iphone|ios|ipad|pocketpal|private|locally|farm|mlc|gemma|qwen|ollama)', re.I)
    print('\n== opportunities (impr >= 10, pos 4-15, CTR < 3%): title/meta/H2 candidates')
    for q, c, i, ctr, pos, loc in sorted((t for t in all_q if t[2] >= 10 and 4 <= t[4] <= 15 and t[3] < 3), key=lambda t: -t[2])[:15]:
        print(f'   [{loc}] {i:>5.0f} impr  pos {pos:>5.1f}  CTR {ctr:>4.1f}%  {q}')
    noise = [t for t in all_q if len(t[0].split()) <= 3 and not topic.search(t[0])]
    print(f'\n== noise: {len(noise)} of {len(all_q)} queries are short fragments with no topic term (follow-up chatter; mine them for FAQ ideas, do not target them)')
    for q, c, i, ctr, pos, loc in sorted(noise, key=lambda t: -t[2])[:10]:
        print(f'   [{loc}] {i:>4.0f} impr  {q}')

    if a.out:
        with open(a.out, 'w', newline='', encoding='utf-8') as fh:
            w = csv.writer(fh)
            w.writerow(['query', 'clicks', 'impressions', 'ctr', 'position', 'locale'])
            for q, c, i, ctr, pos, loc in all_q:
                w.writerow([q, int(c), int(i), round(ctr, 2), round(pos, 2), loc])
        print(f'\nwrote {len(all_q)} queries -> {a.out}')
        print('next: node scripts/query-coverage.mjs <page-url> --queries-file ' + a.out + ' --top=20 --locales=' + ','.join(sorted({t[5] for t in all_q})))


if __name__ == '__main__':
    main()
