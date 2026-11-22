#!/usr/bin/env node
// Generates public/presentations/local-llm-workstation-build-static.html from the article's own locale text,
// so the deck can never contradict the article (the previous hand-written deck did).
// Usage: node scripts/gen-workstation-build-deck.mjs
import fs from 'node:fs'
import path from 'node:path'

const SLUG = 'local-llm-workstation-build'
const ARTICLE = path.join(process.cwd(), `src/lib/local-llms/articles/${SLUG}.ts`)
const OUT = path.join(process.cwd(), `public/presentations/${SLUG}-static.html`)
const LANGS = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko']

const UI = {
  en: { prev: '← Prev', next: 'Next →', back: '← Back to Article', short: '← Article', cta: 'Read the full guide', ctaBody: 'Sources, prices with dates and every caveat are in the article.' },
  de: { prev: '← Zurück', next: 'Weiter →', back: '← Zurück zum Artikel', short: '← Artikel', cta: 'Vollständigen Leitfaden lesen', ctaBody: 'Quellen, Preise mit Datum und alle Einschränkungen stehen im Artikel.' },
  fr: { prev: '← Précédent', next: 'Suivant →', back: "← Retour à l'article", short: '← Article', cta: 'Lire le guide complet', ctaBody: "Les sources, les prix datés et toutes les réserves figurent dans l'article." },
  ja: { prev: '← 前へ', next: '次へ →', back: '← 記事に戻る', short: '← 記事', cta: 'ガイド全文を読む', ctaBody: '出典、日付付きの価格、すべての注意点は記事に記載しています。' },
  zh: { prev: '← 上一页', next: '下一页 →', back: '← 返回文章', short: '← 文章', cta: '阅读完整指南', ctaBody: '来源、带日期的价格和所有注意事项都在文章中。' },
  es: { prev: '← Anterior', next: 'Siguiente →', back: '← Volver al artículo', short: '← Artículo', cta: 'Leer la guía completa', ctaBody: 'Las fuentes, los precios con fecha y todas las salvedades están en el artículo.' },
  pt: { prev: '← Anterior', next: 'Próximo →', back: '← Voltar ao artigo', short: '← Artigo', cta: 'Ler o guia completo', ctaBody: 'As fontes, os preços com data e todas as ressalvas estão no artigo.' },
  ar: { prev: '→ السابق', next: 'التالي ←', back: '→ العودة إلى المقال', short: '→ المقال', cta: 'اقرأ الدليل الكامل', ctaBody: 'المصادر والأسعار المؤرخة وكل التحفظات موجودة في المقال.' },
  ko: { prev: '← 이전', next: '다음 →', back: '← 기사로 돌아가기', short: '← 기사', cta: '전체 가이드 읽기', ctaBody: '출처, 날짜가 표시된 가격, 모든 유의 사항은 기사에 있습니다.' },
}

// ---- load the locale blocks from the article source ------------------------------------------
const src = fs.readFileSync(ARTICLE, 'utf8')
const startRe = /^ {2,4}(en|de|fr|ja|zh|es|ar|pt|ko): \{$/gm
const marks = [...src.matchAll(startRe)].map((m) => ({ lg: m[1], pos: m.index }))
const endPos = src.lastIndexOf('\n  };')
const blocks = {}
marks.forEach((m, i) => {
  const text = src.slice(m.pos, i + 1 < marks.length ? marks[i + 1].pos : endPos)
  blocks[m.lg] = Object.values(new Function('return ({' + text + '})')())[0]
})

// ---- markdown-ish inline conversion (article strings are already vetted; we only change markup) ----
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const md = (s) =>
  esc(s)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\[([^\]]+)\]\((?:[^)]+)\)/g, '$1')
const plain = (s) => s.replace(/\*\*/g, '').replace(/`/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
const lead = (s) => {
  const m = /^\*\*(.+?)\*\*/.exec(s || '')
  return m ? md(m[1]) : undefined
}
const rowsFor = (sec) => sec.rows.map((r) => Object.fromEntries(sec.columns.map((c) => [c, esc(String(r[c]))])))

function slidesFor(lg) {
  const a = blocks[lg]
  const S = a.sections
  const ui = UI[lg]
  const prefix = lg === 'en' ? '' : `/${lg}`
  const articleUrl = `https://www.promptquorum.com${prefix}/local-llms/${SLUG}`
  const tl = S.tldr.items
  const slides = []
  slides.push({ type: 'title', h1: esc(a.title), subtitle: lead(a.leadAnswerBlock), link: articleUrl })
  const chunks = [tl.slice(0, 3), tl.slice(3, 6), tl.slice(6)]
  chunks.forEach((c) => slides.push({ type: 'list', h2: esc(a.toc[0].label), items: c.map(md) }))
  slides.push({ type: 'table', h2: esc(S['who-needs'].title), intro: lead(S['who-needs'].content), columns: S['who-needs'].columns.map(esc), rows: rowsFor(S['who-needs']) })
  slides.push({ type: 'table', h2: esc(S['parts-list'].title), intro: lead(S['parts-list'].content), columns: S['parts-list'].columns.map(esc), rows: rowsFor(S['parts-list']) })
  slides.push({ type: 'numbered', h2: esc(S['dual-gpu'].title), items: S['dual-gpu'].numberedItems.map(md) })
  slides.push({ type: 'table', h2: esc(S['gpu-pairs'].title), intro: lead(S['gpu-pairs'].content), columns: S['gpu-pairs'].columns.map(esc), rows: rowsFor(S['gpu-pairs']) })
  slides.push({ type: 'list', h2: esc(S.cooling.title), intro: lead(S.cooling.content), items: S.cooling.items.slice(0, 3).map(md) })
  const note = (S.power.callouts || []).find((c) => c.type === 'note')
  slides.push({ type: 'list', h2: esc(S.power.title), intro: lead(S.power.content), items: [...S.power.items.map(md), ...(note ? [md(note.text)] : [])] })
  slides.push({ type: 'table', h2: esc(S.perf.title), intro: lead(S.perf.content), columns: S.perf.columns.map(esc), rows: rowsFor(S.perf) })
  slides.push({ type: 'numbered', h2: esc(S.mistakes.title), items: S.mistakes.items.slice(0, 5).map(md) })
  const faqs = S.faqSection.faqs
  const pick = [3, 4, 0].map((i) => faqs[i])
  slides.push({ type: 'faq', h2: esc(S.faqSection.title), faqs: pick.map((f) => ({ q: esc(plain(f.q)), a: md(f.a) })) })
  slides.push({ type: 'cta', h2: esc(ui.cta), body: esc(ui.ctaBody), cta: esc(a.seoTitle), href: articleUrl })
  return slides
}

const CONTENT = {}
for (const lg of LANGS) CONTENT[lg] = { title: esc(plain(blocks[lg].seoTitle)), ui: UI[lg], slides: slidesFor(lg) }

const en = blocks.en
const desc = plain(en.metaDescription)
const css = `
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html, body { width: 100%; height: 100%; font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f6f4f4; color: #1c1b1f; overflow: hidden; }
        .presentation-container { width: 100%; height: 100%; display: flex; flex-direction: column; background: white; }
        .header { padding: 12px 20px; border-bottom: 1px solid #e0e0e0; display: flex; justify-content: space-between; align-items: center; background: white; flex-shrink: 0; }
        .header-left { display: flex; align-items: center; gap: 12px; font-size: 14px; font-weight: 600; color: #1c1b1f; }
        .header-left img { width: 28px; height: 28px; }
        .header-links { display: flex; gap: 16px; }
        .header-links a { font-size: 12px; color: #6750a4; text-decoration: none; }
        .content-area { flex: 1; overflow: hidden; }
        .slide { position: relative; width: 100%; height: 100%; display: none; flex-direction: column; justify-content: center; align-items: center; padding: 40px 48px 44px; text-align: center; overflow: auto; animation: fadeIn 0.5s ease-in; }
        .slide.active { display: flex; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .slide h1 { font-size: clamp(28px, 3.6vw, 44px); font-weight: 700; margin-bottom: 12px; color: #1c1b1f; line-height: 1.2; }
        .slide h2 { font-size: clamp(24px, 2.8vw, 36px); font-weight: 700; margin-bottom: 14px; color: #1c1b1f; }
        .slide p { font-size: clamp(15px, 1.6vw, 19px); margin-bottom: 10px; color: #49454f; line-height: 1.5; max-width: 1000px; }
        .slide ul, .slide ol { text-align: start; display: inline-block; margin: 12px 0; max-width: 92%; }
        .slide ol { padding-inline-start: 1.4em; }
        .slide li { font-size: clamp(15px, 1.6vw, 19px); margin: 8px 0; color: #49454f; line-height: 1.45; }
        .slide code { background: #f3edf7; padding: 1px 5px; border-radius: 4px; font-size: 0.9em; }
        .slide.title { background: linear-gradient(135deg, #f7f2fa 0%, #fffbfe 100%); }
        .slide.title p { color: #6750a4; font-weight: 500; margin-top: 12px; }
        .slide table { margin: 14px auto; border-collapse: collapse; max-width: 96%; }
        .slide th, .slide td { padding: 8px 12px; text-align: start; border-bottom: 1px solid #e8def8; font-size: clamp(13px, 1.4vw, 17px); }
        .slide th { background: #6750a4; color: white; font-weight: 600; }
        .slide table.dense th, .slide table.dense td { padding: 4px 10px; font-size: clamp(12px, 1.2vw, 15px); }
        .slide table.dense { margin: 8px auto; }
        .slide .faq-item { margin-bottom: 14px; text-align: start; max-width: 1000px; }
        .slide .cta-btn { display: inline-block; margin-top: 20px; padding: 12px 24px; background: #6750a4; color: white; border-radius: 6px; text-decoration: none; font-weight: 600; }
        .slide .slide-footer { position: absolute; bottom: 12px; inset-inline-end: 16px; font-size: 11px; color: #999; margin: 0; }
        .slide-footer a { color: #999; text-decoration: none; border-bottom: 1px solid #ddd; }
        .controls { display: flex; justify-content: space-between; align-items: center; padding: 12px 20px; background: #fafaf8; border-top: 1px solid #e8def8; flex-shrink: 0; }
        button { background: #6750a4; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: 600; }
        button:hover { background: #7d5260; }
        button:disabled { opacity: 0.45; cursor: default; }
        .slide-counter { font-size: 14px; color: #49454f; font-weight: 600; }
        @page { size: A4 landscape; margin: 0; }
        @media (max-width: 640px) {
          .slide { padding: 20px 16px 36px; }
          .slide h1 { font-size: clamp(20px, 5.5vw, 28px); }
          .slide h2 { font-size: clamp(16px, 4.5vw, 22px); }
          .slide p { font-size: 14px; }
          .slide li { font-size: 14px; }
          .slide table { display: block; overflow-x: auto; -webkit-overflow-scrolling: touch; font-size: 0.85em; }
          .slide table th, .slide table td { padding: 6px 8px; }
          .header { padding: 10px 12px; }
          .header-left span { font-size: 12px; max-width: 110px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
          .header-links { gap: 8px; font-size: 11px; }
          .controls { padding: 10px 12px; }
          .controls button { padding: 6px 12px; font-size: 12px; }
        }
        @media print {
          .slide, .slide * { animation: none !important; opacity: 1 !important; }
          html, body { overflow: visible !important; height: auto !important; background: white !important; }
          .header, .controls { display: none !important; }
          .presentation-container { display: block !important; height: auto !important; }
          .content-area { display: block !important; overflow: visible !important; }
          .slide { display: flex !important; page-break-after: always; width: 100%; min-height: 210mm; padding: 14mm 18mm; margin: 0; background: white; overflow: visible !important; }
        }`

const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${esc(plain(en.seoTitle))} | PromptQuorum</title>
    <meta name="description" content="${esc(desc)}">
    <meta property="og:title" content="${esc(plain(en.seoTitle))} — PromptQuorum">
    <meta property="og:description" content="${esc(desc)}">
    <link rel="canonical" href="https://www.promptquorum.com/local-llms/${SLUG}">
    <style>${css}
    </style>
</head>
<body>
    <div class="presentation-container">
        <div class="header">
            <div class="header-left">
                <img src="/logo.svg" alt="PromptQuorum">
                <span id="header-title"></span>
            </div>
            <div class="header-links">
                <a id="back-link" href="https://www.promptquorum.com/local-llms/${SLUG}" target="_blank" rel="noopener">← Back to Article</a>
                <a href="https://www.promptquorum.com" target="_blank" rel="noopener">PromptQuorum.com</a>
            </div>
        </div>
        <div class="content-area" id="slides-container"></div>
        <div class="controls">
            <button id="prevBtn" onclick="changeSlide(-1)">← Prev</button>
            <span class="slide-counter"><span id="currentSlide">1</span> / <span id="totalSlides">14</span></span>
            <button id="nextBtn" onclick="changeSlide(1)">Next →</button>
        </div>
    </div>

    <script>
        const CONTENT = ${JSON.stringify(CONTENT, null, 2).replace(/^(\s*)"([A-Za-z_]\w*)":/gm, '$1$2:')};

        const params = new URLSearchParams(window.location.search);
        let lang = params.get('lang') || 'en';
        if (!CONTENT[lang]) lang = 'en';
        const isPrint = params.get('print') === '1';
        const content = CONTENT[lang];
        const prefix = lang === 'en' ? '' : '/' + lang;
        const articleUrl = 'https://www.promptquorum.com' + prefix + '/local-llms/${SLUG}';
        document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang === 'zh' ? 'zh-Hans' : lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

        function renderSlide(slide) {
            let html = '';
            const footer = '<p class="slide-footer"><a href="' + articleUrl + '" target="_blank" rel="noopener">' + content.ui.short + '</a></p>';
            switch (slide.type) {
                case 'title':
                    html = '<img src="/logo.svg" alt="PromptQuorum" class="logo" style="height:36px;margin-bottom:16px"><h1>' + slide.h1 + '</h1><p>' + slide.subtitle + '</p>' + footer;
                    break;
                case 'list':
                    html = '<h2>' + slide.h2 + '</h2>';
                    if (slide.intro) html += '<p>' + slide.intro + '</p>';
                    html += '<ul>' + slide.items.map(function (i) { return '<li>' + i + '</li>'; }).join('') + '</ul>' + footer;
                    break;
                case 'numbered':
                    html = '<h2>' + slide.h2 + '</h2><ol>' + slide.items.map(function (i) { return '<li>' + i + '</li>'; }).join('') + '</ol>' + footer;
                    break;
                case 'table':
                    html = '<h2>' + slide.h2 + '</h2>';
                    if (slide.intro) html += '<p>' + slide.intro + '</p>';
                    html += '<table' + (slide.rows.length > 8 ? ' class="dense"' : '') + '><tr>' + slide.columns.map(function (c) { return '<th>' + c + '</th>'; }).join('') + '</tr>';
                    slide.rows.forEach(function (row) {
                        html += '<tr>' + slide.columns.map(function (c) { return '<td>' + row[c] + '</td>'; }).join('') + '</tr>';
                    });
                    html += '</table>' + footer;
                    break;
                case 'faq':
                    html = '<h2>' + slide.h2 + '</h2>' + slide.faqs.map(function (f) { return '<div class="faq-item"><strong>' + f.q + '</strong><p>' + f.a + '</p></div>'; }).join('') + footer;
                    break;
                case 'cta':
                    html = '<h2>' + slide.h2 + '</h2><p>' + slide.body + '</p><a class="cta-btn" href="' + slide.href + '" target="_blank" rel="noopener">' + slide.cta + '</a>' + footer;
                    break;
            }
            return '<div class="slide ' + slide.type + '">' + html + '</div>';
        }

        document.getElementById('header-title').textContent = content.title.replace(/&amp;/g, '&');
        const backLink = document.getElementById('back-link');
        backLink.href = articleUrl;
        backLink.textContent = content.ui.back;
        document.getElementById('prevBtn').textContent = content.ui.prev;
        document.getElementById('nextBtn').textContent = content.ui.next;

        const container = document.getElementById('slides-container');
        container.innerHTML = content.slides.map(renderSlide).join('');

        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;
        document.getElementById('totalSlides').textContent = totalSlides;

        function showSlide(n) {
            currentSlide = Math.max(0, Math.min(totalSlides - 1, n));
            slides.forEach(function (s) { s.classList.remove('active'); });
            slides[currentSlide].classList.add('active');
            document.getElementById('currentSlide').textContent = currentSlide + 1;
            document.getElementById('prevBtn').disabled = currentSlide === 0;
            document.getElementById('nextBtn').disabled = currentSlide === totalSlides - 1;
        }
        function changeSlide(d) { showSlide(currentSlide + d); }

        document.addEventListener('keydown', function (e) {
            const rtl = document.documentElement.dir === 'rtl';
            if (e.key === 'ArrowLeft') changeSlide(rtl ? 1 : -1);
            if (e.key === 'ArrowRight') changeSlide(rtl ? -1 : 1);
        });

        window.addEventListener('beforeprint', function () { slides.forEach(function (s) { s.style.display = 'flex'; }); });
        window.addEventListener('afterprint', function () { slides.forEach(function (s) { s.style.removeProperty('display'); }); showSlide(currentSlide); });
        if (isPrint) window.addEventListener('load', function () { window.print(); });

        showSlide(0);
    </script>
</body>
</html>
`
fs.mkdirSync(path.dirname(OUT), { recursive: true })
fs.writeFileSync(OUT, html)
console.log('wrote', path.relative(process.cwd(), OUT), `${html.length} bytes, ${LANGS.length} languages, ${CONTENT.en.slides.length} slides`)
