// OpenDataLoader PDF Review: Open-Source PDF Parser for RAG
// Slug: opendataloader-pdf-review
// Companions (same sub-segment, ocr-document-parsing): xberg-review. Related pipeline framework: cocoindex-review.
// Facts read 2026-11-15 against opendataloader.org (home), github.com/opendataloader-project/opendataloader-pdf (README, LICENSE, release v2.5.22,
// pushed_at, workflows) and PyPI (opendataloader-pdf 2.5.22). No hands-on testing. EN block only at this stage; the 8 other locales are added later
// from this block (geo-translation: APPLIED to the tile taglines). No regional/compliance section (not a compliance article).
// UNVERIFIED and stated as such: telemetry, Docker image, LlamaIndex/MCP integration, enterprise price, operating-system support matrix,
// which legal entity maintains the project. Benchmarks are the project's own and hybrid-mode only.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'
import { starsFor } from '@/lib/power-local-llm/app-facts'

// Star counts come from the directory tile (GEO_WRITING_GUIDELINES.md Rule 49) -- never type them into a string.
const st = {
  en: starsFor('en'),
  de: starsFor('de'),
  fr: starsFor('fr'),
  ja: starsFor('ja'),
  zh: starsFor('zh'),
  es: starsFor('es'),
  pt: starsFor('pt'),
  ar: starsFor('ar'),
  ko: starsFor('ko'),
}

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-15',
    dateModified: '2026-11-17',
    next_refresh_due: '2027-05-15',
    theme: 'RAG & Document Chat',
    heroImage: '/images/opendataloader-pdf-review-hero-en.webp',
    title: 'OpenDataLoader PDF Review: Open-Source PDF Parser for RAG',
    seoTitle: 'OpenDataLoader PDF Review: Open-Source PDF Parser',
    intro: 'OpenDataLoader PDF is an open-source parser that turns PDF files into structured data for RAG and LLM pipelines, and it can also auto-tag PDFs for accessibility. It is a library and command-line tool, not a desktop app and not a hosted service. This review is based on [opendataloader.org](https://opendataloader.org), the [GitHub repository](https://github.com/opendataloader-project/opendataloader-pdf) and PyPI, checked on 15 November 2026; PromptQuorum has not installed or run it.',
    metaDescription: 'OpenDataLoader PDF review: Apache 2.0 PDF parser for RAG. Needs Java 11+; default mode runs locally per the README. Benchmarks are the vendor\'s.',
    twitterDescription: 'OpenDataLoader PDF review: an open-source PDF parser for RAG. What runs locally, what hybrid mode changes, what needs Java, and what the sources leave open.',
    audience: 'Developers who build RAG or LLM pipelines over PDFs and want to know what OpenDataLoader PDF outputs, what it needs to run, how local it really is and which claims are the vendor\'s own.',
    readTime: '7 min read',
    educationalLevel: 'Advanced',
    affiliateDisclosure: false,
    primaryTerm: 'OpenDataLoader PDF review',
    targetKeywords: [
      'opendataloader pdf review',
      'opendataloader pdf install',
      'opendataloader pdf hybrid mode',
      'pdf parser for rag',
      'pdf to markdown for llm',
      'opendataloader vs docling',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock: '**OpenDataLoader PDF (version 2.5.22) is an Apache 2.0 open-source parser that converts PDFs into JSON with bounding boxes, Markdown and HTML for RAG pipelines.** It needs Java 11 or newer and a terminal, so it is a developer tool, not an app.',
    quickAnswerTop: {
      en: {
        question: 'Does OpenDataLoader PDF send my PDFs to a cloud service?',
        answer: 'Not in its default mode: the README says it processes files "100% locally" with no API calls and no data transmission. These are the maker\'s statements; PromptQuorum has not inspected network traffic or the code, and telemetry is not documented. Hybrid mode, which adds OCR and better table handling, uses a separate backend that you can point at a remote address, and then your pages go wherever you point it.',
        bullets: [
          'Input: PDF files only; Word, Excel and PowerPoint files are not processed.',
          'Output: Markdown, JSON with bounding boxes and heading levels, HTML, or an annotated PDF.',
          'Repository: ' + st.en('opendataloader-pdf') + ' GitHub stars.',
        ],
        updatedDate: '2026-11-15',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is OpenDataLoader PDF?', anchor: 'what-is-opendataloader-pdf' },
      { label: 'Get It', anchor: 'get-it' },
      { label: 'Local and Hybrid Data Flow', anchor: 'privacy' },
      { label: 'Features Confirmed by the Sources', anchor: 'key-features' },
      { label: 'Benchmarks: The Vendor\'s Claims', anchor: 'benchmarks' },
      { label: 'Licence and Pricing', anchor: 'pricing' },
      { label: 'Who Should Use It', anchor: 'who-should-use' },
      { label: 'What We Could Not Verify', anchor: 'who-should-not-use' },
      { label: 'Competitors and Alternatives', anchor: 'vs-alternatives' },
      { label: 'Frequently Asked Questions', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Related Reading', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'OpenDataLoader PDF reads a PDF and returns its text, tables, headings and element positions as structured data that a RAG pipeline or a language model can use.',
          },
          {
            type: 'plain-terms',
            text: 'You run it from Python, Node.js, Java or the command line on a PDF, and it writes a Markdown or JSON file that keeps headings, tables and reading order instead of a flat block of text.',
          },
        ],
        items: [
          'Maintenance: the latest release, 2.5.22, is from 12 November 2026 and the repository was last updated on 14 November 2026, so no stale-project warning applies.',
          'Scope: a parsing library for developers, limited to PDF input, with an optional accessibility auto-tagging feature.',
          'Cost: the core is free; an enterprise tier exists with no published price.',
          'Benchmarks: the "#1" ranking is the project\'s own, and it holds only for hybrid mode.',
          'Unverified: telemetry, Docker packaging and the operating-system list are not stated by the project.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on the project website, the GitHub repository and PyPI, checked on 15 November 2026. PromptQuorum has not tested OpenDataLoader PDF, so speed, accuracy and memory use are not assessed here.',
          },
        ],
      },
      overview: {
        id: 'what-is-opendataloader-pdf',
        title: 'What Is OpenDataLoader PDF?',
        content: [
          '**OpenDataLoader PDF turns PDFs into AI-ready data: Markdown for chunking, JSON with bounding boxes for source citations, HTML, or an annotated PDF.** It reads headings, tables, lists and reading order, and the JSON keeps heading levels, fonts and the position of each element. It ships as a library with Python, Node.js and Java SDKs and a command-line tool.',
          'The maker is the GitHub organisation opendataloader-project, and the site footer reads "© 2026 OpenDataLoader". The homepage says the accessibility work was developed with Hancom and with Dual Lab, which the homepage describes as a veraPDF developer; it does not say that Hancom makes the parser. The sources do not name which legal entity maintains the project. A separate enterprise product, Hancom Data Loader, is listed as "Coming Soon" and is not part of the open-source core.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**OpenDataLoader PDF is installed from a package manager after a Java runtime is in place.** There is no desktop installer and no store listing.',
        ],
        columns: ['Option', 'How to get it'],
        rows: [
          { 'Option': 'Python (pip)', 'How to get it': 'Java 11+, then `pip install -U opendataloader-pdf` ([PyPI](https://pypi.org/project/opendataloader-pdf/)); adds the CLI' },
          { 'Option': 'Node.js', 'How to get it': '`@opendataloader/pdf` on npm, per the [Node.js quick start](https://opendataloader.org/docs/quick-start-nodejs)' },
          { 'Option': 'Java (Maven)', 'How to get it': '`org.opendataloader:opendataloader-pdf-core`, per the [Java quick start](https://opendataloader.org/docs/quick-start-java)' },
          { 'Option': 'Hybrid mode', 'How to get it': '`pip install "opendataloader-pdf[hybrid]"`; the README says the first model download can take minutes' },
          { 'Option': 'CLI archive', 'How to get it': '`opendataloader-pdf-cli-2.5.22.zip` on [GitHub Releases](https://github.com/opendataloader-project/opendataloader-pdf/releases/tag/v2.5.22)' },
          { 'Option': 'Website', 'How to get it': '[opendataloader.org](https://opendataloader.org)' },
          { 'Option': 'Privacy policy', 'How to get it': '[Privacy policy](https://accounts.hancom.com/policy/privacy/current/en), linked from the site footer; the page needs JavaScript to display' },
          { 'Option': 'Source code', 'How to get it': '[github.com/opendataloader-project/opendataloader-pdf](https://github.com/opendataloader-project/opendataloader-pdf), Apache 2.0' },
        ],
        note: 'Version reviewed: 2.5.22, released on 12 November 2026; last upstream update 14 November 2026. A terminal and a developer environment are required: Java 11 or newer must be on the PATH (check with `java -version`) and Python 3.11 or newer is needed for the pip route. The quick-start page says Python 3.10, while the README and PyPI say 3.11, so follow PyPI. The project publishes no operating-system list; PyPI marks the package as OS independent.',
      },
      privacy: {
        id: 'privacy',
        title: 'Local and Hybrid Data Flow',
        content: [
          '**In its default mode the parser runs on your machine: the README says "100% locally", "No API calls, no data transmission", and the homepage says "No API keys, no cloud".** No GPU is required, and no RAM figure is published.',
          'Hybrid mode adds OCR, formula and chart handling and better table accuracy by sending hard pages to an AI backend. By default that backend is a local server on 127.0.0.1, and picture descriptions use a local SmolVLM-256M model, but the `--hybrid-url` option accepts any address. If you point it at a remote server, your pages are sent there and the "no cloud" statement no longer describes your setup.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'These are the maker\'s statements, not audit results. PromptQuorum has not inspected network traffic or the code.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Every item below comes from the website, the README or PyPI; none has been tested here.**',
        ],
        items: [
          '**Layout analysis.** The XY-Cut++ algorithm recovers reading order; tables are extracted including merged cells.',
          '**Citations.** Every element in the JSON carries a bounding box, so an answer can point back to a place on the page.',
          '**OCR.** Available in hybrid mode only; the engine is EasyOCR by default, with RapidOCR, Tesseract, Apple Vision (macOS only), NVIDIA Nemotron (Linux x86_64 with CUDA) and an automatic choice as alternatives. The project claims 80+ languages without a per-engine breakdown.',
          '**AI-safety filtering.** Hidden text, off-page content and prompt-injection patterns can be filtered out before text reaches a model.',
          '**LangChain.** The `langchain-opendataloader-pdf` package provides an `OpenDataLoaderPDFLoader`, and a [RAG integration guide](https://opendataloader.org/docs/rag-integration) is published.',
          '**Accessibility auto-tagging.** Untagged PDFs can be tagged following the Well-Tagged PDF specification, validated with veraPDF; PDF/UA export belongs to the enterprise tier.',
        ],
        note: 'The README names no integration with LlamaIndex or MCP, and this review does not claim one.',
      },
      benchmarks: {
        id: 'benchmarks',
        title: 'Benchmarks: The Vendor\'s Claims',
        content: [
          '**The "#1 in benchmarks" claim on the homepage and in the README comes from the project\'s own opendataloader-bench, and it applies to hybrid mode only.** The method is described on the [benchmark page](https://opendataloader.org/docs/benchmark); PromptQuorum has not reproduced any figure.',
        ],
        items: [
          'Overall score: 0.907 in hybrid mode against 0.831 without it.',
          'Table accuracy (TEDS): 0.928 in hybrid mode against 0.489 without it.',
          'Heading detection: Docling 0.824, hybrid 0.821, non-hybrid 0.739, so the claim does not hold in every category.',
          'Speed per page: Nutrient 0.008 seconds, OpenDataLoader locally 0.015, hybrid 0.463; the README FAQ also says "60+ pages per second".',
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Licence and Pricing',
        content: [
          '**The code is licensed under Apache 2.0, per the repository\'s [LICENSE file](https://github.com/opendataloader-project/opendataloader-pdf/blob/main/LICENSE); releases before 2.0 were under MPL 2.0.** Core, Audit and Auto-tag are free to use.',
          'An enterprise tier adds PDF/UA export and a visual editing studio. No price is published, and requests go through the [contact page](https://opendataloader.org/contact).',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**RAG builders** who need structured Markdown or JSON with positions from PDFs they already hold.',
          '**Teams with a Java runtime** who accept installing a JDK before a Python package.',
          '**Accessibility teams** who want to auto-tag existing PDFs and check them against veraPDF.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Accuracy and speed.** All figures are the project\'s; none were measured by PromptQuorum.',
          '**Telemetry.** No statement was found, so none is assumed either way.',
          '**Docker.** The homepage shows a container route, but the README does not and no image was found.',
          '**Operating systems.** No support list is published, and the CI workflows checked run on Linux.',
          '**Other file types.** Word, Excel, PowerPoint and image input are not processed by the core; Hancom Data Loader is announced, not released.',
          '**Maintainer.** The legal entity behind the project is not named.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          {
            'App': '[Xberg](/power-local-llm/xberg-review)',
            'Platforms': 'Mac, Windows, Linux',
            'Price / license': 'Free / MIT',
            'Key difference': 'Rust engine that also reads Office files, audio and URLs; OpenDataLoader PDF reads PDFs only',
          },
          {
            'App': '[CocoIndex](/power-local-llm/cocoindex-review)',
            'Platforms': 'Mac, Windows, Linux',
            'Price / license': 'Free / Apache 2.0',
            'Key difference': 'Pipeline framework that keeps an index current; it needs a parser such as this one and does not replace it',
          },
          {
            'App': '[Unstructured](/power-local-llm/unstructured-review)',
            'Platforms': 'Mac, Windows, Linux',
            'Price / license': 'Free library / Apache 2.0; paid cloud API optional',
            'Key difference': 'Python ETL library that reads PDF, DOCX, PPTX, HTML, emails and images into JSON elements; OpenDataLoader PDF reads PDFs only',
          },
          {
            'App': '[Nutrient](/power-local-llm/nutrient-review)',
            'Platforms': 'iOS, Android, Mac, Windows, Linux, Web',
            'Price / license': 'Paid / commercial',
            'Key difference': 'Commercial, closed-source PDF SDK for editing, signing, OCR and data extraction; OpenDataLoader PDF is Apache 2.0',
          },
        ],
        note: 'Docling and Nutrient appear in the project\'s own benchmark table, which is the only comparison this review relies on. Confirm each tool\'s current price, license and platforms on its own listing before choosing.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Can I use it without writing Python?',
            a: 'Yes. The pip package installs a command-line tool, and Node.js and Java SDKs exist, but all routes need Java 11 or newer on the machine.',
          },
          {
            q: 'Why is every call slow when I loop over files?',
            a: 'The README says each `convert()` call starts a JVM process, so it recommends passing many files or a folder in one call.',
          },
          {
            q: 'Does it work on scanned PDFs?',
            a: 'Only through hybrid mode, which runs OCR; the default mode does not.',
          },
          {
            q: 'Is Hancom Data Loader the same product?',
            a: 'No. It is a separate enterprise product planned to read DOCX, XLSX, PPTX, HWP and images; the README gave a target of the second or third quarter of 2026, and it was still unreleased when checked.',
          },
          {
            q: 'How do I add it to a LangChain pipeline?',
            a: 'Install `langchain-opendataloader-pdf` and use its `OpenDataLoaderPDFLoader`, as described in the README.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'OpenDataLoader PDF is an actively released, Apache 2.0 way to get structured Markdown and JSON with positions out of PDFs, and its default mode is documented as fully local. Against that, it needs Java before pip, reads only PDFs, ranks first in a benchmark the project wrote itself and only in hybrid mode, leaves telemetry and its maintainer unstated, and has not been tested by PromptQuorum. It suits developers who feed PDFs into RAG and accept a terminal setup; for files beyond PDF, compare [Xberg](/power-local-llm/xberg-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[OpenDataLoader website](https://opendataloader.org) — product overview, benchmarks and enterprise tier, checked 15 November 2026.',
          '[OpenDataLoader PDF on GitHub](https://github.com/opendataloader-project/opendataloader-pdf) — README, license, release 2.5.22 and repository activity, checked 15 November 2026.',
          '[opendataloader-pdf on PyPI](https://pypi.org/project/opendataloader-pdf/) — package version 2.5.22 and Python requirement, checked 15 November 2026.',
          '[Python quick start](https://opendataloader.org/docs/quick-start-python) — install steps and the Python version it states, checked 15 November 2026.',
          '[Benchmark methodology](https://opendataloader.org/docs/benchmark) — how the project\'s own scores are produced, checked 15 November 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Xberg Review](/power-local-llm/xberg-review) — a document-intelligence engine for many file types.',
          '[CocoIndex Review](/power-local-llm/cocoindex-review) — a framework that keeps RAG indexes current.',
          '[Local LLM Software Directory](/directory) — the full catalogue of local AI tools.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'OpenDataLoader PDF Review: Open-Source PDF Parser for RAG',
      description: 'OpenDataLoader PDF review: an Apache 2.0 PDF parser for RAG pipelines with JSON, Markdown and bounding boxes. Install requirements, local and hybrid data flow, vendor benchmarks and what the sources leave unconfirmed.',
      url: 'https://www.promptquorum.com/power-local-llm/opendataloader-pdf-review',
      inLanguage: 'en',
      datePublished: '2026-11-15',
      dateModified: '2026-11-17',
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      educationalLevel: 'Advanced',
      proficiencyLevel: 'Advanced',
      audience: {
        '@type': 'Audience',
        audienceType: 'Developers evaluating an open-source PDF parser for RAG and LLM pipelines',
      },
      about: [
        { '@type': 'Thing', name: 'OpenDataLoader PDF' },
        { '@type': 'Thing', name: 'PDF parsing' },
        { '@type': 'Thing', name: 'Retrieval-augmented generation' },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/power-local-llm/opendataloader-pdf-review',
      },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'OpenDataLoader PDF Review', item: 'https://www.promptquorum.com/power-local-llm/opendataloader-pdf-review' },
      ],
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-15',
    dateModified: '2026-11-17',
    next_refresh_due: '2027-05-15',
    theme: 'RAG & Document Chat',
    heroImage: '/images/opendataloader-pdf-review-hero-de.webp',
    title: 'OpenDataLoader-PDF-Rezension: quelloffener PDF-Parser für RAG',
    seoTitle: 'OpenDataLoader-PDF-Rezension: Quelloffener PDF-Parser',
    intro: 'OpenDataLoader PDF ist ein quelloffener Parser, der PDF-Dateien in strukturierte Daten für RAG- und LLM-Pipelines umwandelt und PDFs außerdem automatisch für die Barrierefreiheit auszeichnen kann. Es ist eine Bibliothek und ein Kommandozeilenwerkzeug, keine Desktop-App und kein gehosteter Dienst. Diese Rezension stützt sich auf [opendataloader.org](https://opendataloader.org), das [GitHub-Repository](https://github.com/opendataloader-project/opendataloader-pdf) und PyPI, geprüft am 15. November 2026; PromptQuorum hat das Tool weder installiert noch ausgeführt.',
    metaDescription: 'OpenDataLoader-PDF-Rezension: PDF-Parser (Apache 2.0) für RAG. Braucht Java 11+; Standardmodus laut README lokal. Benchmarks vom Hersteller.',
    twitterDescription: 'OpenDataLoader-PDF-Rezension: ein quelloffener PDF-Parser für RAG. Was lokal läuft, was der Hybridmodus ändert, was Java braucht und was die Quellen offenlassen.',
    audience: 'Entwickler, die RAG- oder LLM-Pipelines über PDFs bauen und wissen möchten, was OpenDataLoader PDF ausgibt, was es zum Laufen braucht, wie lokal es tatsächlich ist und welche Aussagen vom Hersteller selbst stammen.',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Advanced',
    affiliateDisclosure: false,
    primaryTerm: 'OpenDataLoader PDF Rezension',
    targetKeywords: [
      'opendataloader pdf rezension',
      'opendataloader pdf installieren',
      'opendataloader pdf hybridmodus',
      'pdf parser für rag',
      'pdf in markdown umwandeln für llm',
      'opendataloader vs docling',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock: '**OpenDataLoader PDF (Version 2.5.22) ist ein quelloffener Parser unter Apache 2.0, der PDFs für RAG-Pipelines in JSON mit Bounding-Boxen, Markdown und HTML umwandelt.** Es setzt Java 11 oder neuer und ein Terminal voraus und ist daher ein Entwicklerwerkzeug, keine App.',
    quickAnswerTop: {
      de: {
        question: 'Sendet OpenDataLoader PDF meine PDFs an einen Cloud-Dienst?',
        answer: 'Im Standardmodus nicht: Laut README verarbeitet es Dateien „100 % lokal“, ohne API-Aufrufe und ohne Datenübertragung. Das sind Herstellerangaben; PromptQuorum hat weder Netzwerkverkehr noch Code geprüft, und Telemetrie ist nicht dokumentiert. Der Hybridmodus, der OCR und eine bessere Tabellenverarbeitung ergänzt, nutzt ein separates Backend, das Sie auf eine entfernte Adresse richten können; dann gehen Ihre Seiten dorthin, wohin Sie es richten.',
        bullets: [
          'Eingabe: nur PDF-Dateien; Word-, Excel- und PowerPoint-Dateien werden nicht verarbeitet.',
          'Ausgabe: Markdown, JSON mit Bounding-Boxen und Überschriftenebenen, HTML oder eine annotierte PDF.',
          'Repository: ' + st.de('opendataloader-pdf') + ' GitHub-Sterne.',
        ],
        updatedDate: '2026-11-15',
      },
    },
    toc: [
      {
        label: 'Kurzantwort',
        anchor: 'quick-answer',
      },
      {
        label: 'Was ist OpenDataLoader PDF?',
        anchor: 'what-is-opendataloader-pdf',
      },
      {
        label: 'Bezugsquelle',
        anchor: 'get-it',
      },
      {
        label: 'Lokaler und hybrider Datenfluss',
        anchor: 'privacy',
      },
      {
        label: 'Von den Quellen bestätigte Funktionen',
        anchor: 'key-features',
      },
      {
        label: 'Benchmarks: Angaben des Herstellers',
        anchor: 'benchmarks',
      },
      {
        label: 'Lizenz und Preis',
        anchor: 'pricing',
      },
      {
        label: 'Für wen es sich eignet',
        anchor: 'who-should-use',
      },
      {
        label: 'Was wir nicht überprüfen konnten',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Wettbewerber und Alternativen',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Häufig gestellte Fragen',
        anchor: 'faq',
      },
      {
        label: 'Fazit',
        anchor: 'verdict',
      },
      {
        label: 'Quellen',
        anchor: 'sources',
      },
      {
        label: 'Weiterführende Artikel',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Zusammenfassung',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'OpenDataLoader PDF liest eine PDF und gibt Text, Tabellen, Überschriften und Elementpositionen als strukturierte Daten zurück, die eine RAG-Pipeline oder ein Sprachmodell weiterverarbeiten kann.',
          },
          {
            type: 'plain-terms',
            text: 'Sie starten es aus Python, Node.js, Java oder von der Kommandozeile auf einer PDF und erhalten eine Markdown- oder JSON-Datei, die Überschriften, Tabellen und Lesereihenfolge erhält, statt nur einen flachen Textblock zu liefern.',
          },
        ],
        items: [
          'Pflege: Die neueste Version 2.5.22 stammt vom 12. November 2026, das Repository wurde zuletzt am 14. November 2026 aktualisiert; ein Warnhinweis auf ein veraltetes Projekt entfällt daher.',
          'Umfang: eine Parsing-Bibliothek für Entwickler, beschränkt auf PDF-Eingaben, mit einer optionalen Funktion zur automatischen Auszeichnung für Barrierefreiheit.',
          'Kosten: Der Kern ist kostenlos; es gibt eine Enterprise-Stufe ohne veröffentlichten Preis.',
          'Benchmarks: Das Ranking „#1“ stammt vom Projekt selbst und gilt nur für den Hybridmodus.',
          'Nicht überprüft: Telemetrie, Docker-Paketierung und die Liste der Betriebssysteme nennt das Projekt nicht.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension stützt sich auf die Projektwebsite, das GitHub-Repository und PyPI, geprüft am 15. November 2026. PromptQuorum hat OpenDataLoader PDF nicht getestet; Geschwindigkeit, Genauigkeit und Speicherbedarf werden hier daher nicht bewertet.',
          },
        ],
      },
      overview: {
        id: 'what-is-opendataloader-pdf',
        title: 'Was ist OpenDataLoader PDF?',
        content: [
          '**OpenDataLoader PDF wandelt PDFs in KI-taugliche Daten um: Markdown zum Aufteilen in Chunks, JSON mit Bounding-Boxen für Quellenangaben, HTML oder eine annotierte PDF.** Es liest Überschriften, Tabellen, Listen und Lesereihenfolge, und das JSON enthält Überschriftenebenen, Schriftarten und die Position jedes Elements. Es wird als Bibliothek mit Python-, Node.js- und Java-SDKs sowie als Kommandozeilenwerkzeug ausgeliefert.',
          'Hersteller ist die GitHub-Organisation opendataloader-project, und die Fußzeile der Website lautet „© 2026 OpenDataLoader“. Laut Startseite wurde die Barrierefreiheitsfunktion gemeinsam mit Hancom und mit Dual Lab entwickelt, das die Startseite als Entwickler von veraPDF bezeichnet; dass Hancom den Parser herstellt, steht dort nicht. Die Quellen nennen nicht, welche juristische Person das Projekt betreibt. Ein separates Enterprise-Produkt, Hancom Data Loader, ist als „Coming Soon“ aufgeführt und nicht Teil des quelloffenen Kerns.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**OpenDataLoader PDF wird über einen Paketmanager installiert, sobald eine Java-Laufzeit vorhanden ist.** Es gibt keinen Desktop-Installer und keinen Store-Eintrag.',
        ],
        columns: [
          'Option',
          'Bezug',
        ],
        rows: [
          {
            Option: 'Python (pip)',
            Bezug: 'Java 11+, dann `pip install -U opendataloader-pdf` ([PyPI](https://pypi.org/project/opendataloader-pdf/)); ergänzt die CLI',
          },
          {
            Option: 'Node.js',
            Bezug: '`@opendataloader/pdf` auf npm, laut [Node.js-Schnellstart](https://opendataloader.org/docs/quick-start-nodejs)',
          },
          {
            Option: 'Java (Maven)',
            Bezug: '`org.opendataloader:opendataloader-pdf-core`, laut [Java-Schnellstart](https://opendataloader.org/docs/quick-start-java)',
          },
          {
            Option: 'Hybridmodus',
            Bezug: '`pip install "opendataloader-pdf[hybrid]"`; laut README kann der erste Modell-Download Minuten dauern',
          },
          {
            Option: 'CLI-Archiv',
            Bezug: '`opendataloader-pdf-cli-2.5.22.zip` auf [GitHub Releases](https://github.com/opendataloader-project/opendataloader-pdf/releases/tag/v2.5.22)',
          },
          {
            Option: 'Website',
            Bezug: '[opendataloader.org](https://opendataloader.org)',
          },
          {
            Option: 'Datenschutzerklärung',
            Bezug: '[Datenschutzerklärung](https://accounts.hancom.com/policy/privacy/current/en), in der Fußzeile der Website verlinkt; die Seite braucht JavaScript zur Anzeige',
          },
          {
            Option: 'Quellcode',
            Bezug: '[github.com/opendataloader-project/opendataloader-pdf](https://github.com/opendataloader-project/opendataloader-pdf), Apache 2.0',
          },
        ],
        note: 'Geprüfte Version: 2.5.22, veröffentlicht am 12. November 2026; letzte Aktualisierung im Projekt am 14. November 2026. Erforderlich sind ein Terminal und eine Entwicklungsumgebung: Java 11 oder neuer muss im PATH liegen (Prüfung mit `java -version`), und für den pip-Weg wird Python 3.11 oder neuer benötigt. Die Schnellstartseite nennt Python 3.10, README und PyPI dagegen 3.11; folgen Sie PyPI. Das Projekt veröffentlicht keine Liste der Betriebssysteme; PyPI kennzeichnet das Paket als betriebssystemunabhängig.',
      },
      privacy: {
        id: 'privacy',
        title: 'Lokaler und hybrider Datenfluss',
        content: [
          '**Im Standardmodus läuft der Parser auf Ihrem Rechner: Laut README „100% locally“ und „No API calls, no data transmission“, und die Startseite nennt „No API keys, no cloud“.** Eine GPU ist nicht nötig, und eine RAM-Angabe wird nicht veröffentlicht.',
          'Der Hybridmodus ergänzt OCR, Formel- und Diagrammverarbeitung sowie eine genauere Tabellenerkennung, indem er schwierige Seiten an ein KI-Backend sendet. Standardmäßig ist dieses Backend ein lokaler Server auf 127.0.0.1, und Bildbeschreibungen nutzen ein lokales SmolVLM-256M-Modell, doch die Option `--hybrid-url` akzeptiert jede Adresse. Richten Sie sie auf einen entfernten Server, werden Ihre Seiten dorthin gesendet, und die Aussage „no cloud“ beschreibt Ihre Einrichtung nicht mehr.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Dies sind Aussagen des Herstellers, keine Prüfergebnisse. PromptQuorum hat weder den Netzwerkverkehr noch den Code untersucht.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
          '**Alle folgenden Punkte stammen von der Website, dem README oder PyPI; keiner wurde hier getestet.**',
        ],
        items: [
          '**Layoutanalyse.** Der Algorithmus XY-Cut++ ermittelt die Lesereihenfolge; Tabellen werden einschließlich verbundener Zellen extrahiert.',
          '**Quellenangaben.** Jedes Element im JSON trägt eine Bounding-Box, sodass eine Antwort auf eine Stelle auf der Seite zurückverweisen kann.',
          '**OCR.** Nur im Hybridmodus verfügbar; Standard-Engine ist EasyOCR, Alternativen sind RapidOCR, Tesseract, Apple Vision (nur macOS), NVIDIA Nemotron (Linux x86_64 mit CUDA) und eine automatische Auswahl. Das Projekt nennt über 80 Sprachen, ohne Aufschlüsselung nach Engine.',
          '**Filter für KI-Sicherheit.** Versteckter Text, Inhalte außerhalb der Seite und Prompt-Injection-Muster lassen sich herausfiltern, bevor Text ein Modell erreicht.',
          '**LangChain.** Das Paket `langchain-opendataloader-pdf` stellt einen `OpenDataLoaderPDFLoader` bereit, und es gibt einen veröffentlichten [RAG-Integrationsleitfaden](https://opendataloader.org/docs/rag-integration).',
          '**Automatische Auszeichnung für Barrierefreiheit.** Unmarkierte PDFs lassen sich nach der Well-Tagged-PDF-Spezifikation auszeichnen und mit veraPDF validieren; der PDF/UA-Export gehört zur Enterprise-Stufe.',
        ],
        note: 'Das README nennt keine Integration mit LlamaIndex oder MCP, und diese Rezension behauptet keine.',
      },
      benchmarks: {
        id: 'benchmarks',
        title: 'Benchmarks: Angaben des Herstellers',
        content: [
          '**Die Aussage „#1 in benchmarks“ auf der Startseite und im README stammt aus dem projekteigenen opendataloader-bench und gilt nur für den Hybridmodus.** Das Verfahren ist auf der [Benchmark-Seite](https://opendataloader.org/docs/benchmark) beschrieben; PromptQuorum hat keine der Zahlen nachgemessen.',
        ],
        items: [
          'Gesamtwert: 0,907 im Hybridmodus gegenüber 0,831 ohne ihn.',
          'Tabellengenauigkeit (TEDS): 0,928 im Hybridmodus gegenüber 0,489 ohne ihn.',
          'Überschrifterkennung: Docling 0,824, Hybrid 0,821, ohne Hybrid 0,739; die Aussage gilt also nicht in jeder Kategorie.',
          'Geschwindigkeit pro Seite: Nutrient 0,008 Sekunden, OpenDataLoader lokal 0,015, Hybrid 0,463; die FAQ im README nennt außerdem „60+ pages per second“.',
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Lizenz und Preis',
        content: [
          '**Der Code steht laut [LICENSE-Datei](https://github.com/opendataloader-project/opendataloader-pdf/blob/main/LICENSE) des Repositorys unter Apache 2.0; Versionen vor 2.0 standen unter MPL 2.0.** Core, Audit und Auto-tag sind kostenlos nutzbar.',
          'Eine Enterprise-Stufe ergänzt den PDF/UA-Export und ein visuelles Bearbeitungs-Studio. Ein Preis wird nicht veröffentlicht; Anfragen laufen über die [Kontaktseite](https://opendataloader.org/contact).',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen es sich eignet',
        items: [
          '**RAG-Entwickler**, die aus bereits vorhandenen PDFs strukturiertes Markdown oder JSON mit Positionen benötigen.',
          '**Teams mit Java-Laufzeit**, die es akzeptieren, vor einem Python-Paket ein JDK zu installieren.',
          '**Barrierefreiheitsteams**, die bestehende PDFs automatisch auszeichnen und mit veraPDF prüfen möchten.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Genauigkeit und Geschwindigkeit.** Alle Zahlen stammen vom Projekt; PromptQuorum hat keine davon gemessen.',
          '**Telemetrie.** Es wurde keine Aussage gefunden, daher wird in keine Richtung etwas angenommen.',
          '**Docker.** Die Startseite zeigt einen Container-Weg, das README dagegen nicht, und es wurde kein Image gefunden.',
          '**Betriebssysteme.** Es wird keine Support-Liste veröffentlicht, und die geprüften CI-Workflows laufen unter Linux.',
          '**Andere Dateitypen.** Word-, Excel-, PowerPoint- und Bildeingaben verarbeitet der Kern nicht; Hancom Data Loader ist angekündigt, nicht veröffentlicht.',
          '**Betreiber.** Die juristische Person hinter dem Projekt wird nicht genannt.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Wettbewerber und Alternativen',
        columns: [
          'App',
          'Plattformen',
          'Preis / Lizenz',
          'Hauptunterschied',
        ],
        rows: [
          {
            App: '[Xberg](/de/power-local-llm/xberg-review)',
            Plattformen: 'Mac, Windows, Linux',
            'Preis / Lizenz': 'Kostenlos / MIT',
            Hauptunterschied: 'Rust-Engine, die auch Office-Dateien, Audio und URLs liest; OpenDataLoader PDF liest nur PDFs',
          },
          {
            App: '[CocoIndex](/de/power-local-llm/cocoindex-review)',
            Plattformen: 'Mac, Windows, Linux',
            'Preis / Lizenz': 'Kostenlos / Apache 2.0',
            Hauptunterschied: 'Pipeline-Framework, das einen Index aktuell hält; es braucht einen Parser wie diesen und ersetzt ihn nicht',
          },
          {
            App: '[Unstructured](/de/power-local-llm/unstructured-review)',
            Plattformen: 'Mac, Windows, Linux',
            'Preis / Lizenz': 'Kostenlose Bibliothek / Apache 2.0; optionale kostenpflichtige Cloud-API',
            Hauptunterschied: 'Python-ETL-Bibliothek, die PDF, DOCX, PPTX, HTML, E-Mails und Bilder in JSON-Elemente zerlegt; OpenDataLoader PDF liest nur PDFs',
          },
          {
            App: '[Nutrient](/de/power-local-llm/nutrient-review)',
            Plattformen: 'iOS, Android, Mac, Windows, Linux, Web',
            'Preis / Lizenz': 'Kostenpflichtig / kommerziell',
            Hauptunterschied: 'Kommerzielles, quelltextgeschlossenes PDF-SDK für Bearbeitung, Signierung, OCR und Datenextraktion; OpenDataLoader PDF steht unter Apache 2.0',
          },
        ],
        note: 'Docling und Nutrient erscheinen in der projekteigenen Benchmark-Tabelle, dem einzigen Vergleich, auf den sich diese Rezension stützt. Prüfen Sie vor der Wahl aktuellen Preis, Lizenz und Plattformen jedes Tools in seinem eigenen Eintrag.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Kann ich es nutzen, ohne Python zu schreiben?',
            a: 'Ja. Das pip-Paket installiert ein Kommandozeilenwerkzeug, und es gibt Node.js- und Java-SDKs; alle Wege setzen jedoch Java 11 oder neuer auf dem Rechner voraus.',
          },
          {
            q: 'Warum ist jeder Aufruf langsam, wenn ich Dateien in einer Schleife verarbeite?',
            a: 'Laut README startet jeder `convert()`-Aufruf einen JVM-Prozess; es empfiehlt daher, viele Dateien oder einen Ordner in einem einzigen Aufruf zu übergeben.',
          },
          {
            q: 'Funktioniert es mit gescannten PDFs?',
            a: 'Nur über den Hybridmodus, der OCR ausführt; der Standardmodus tut das nicht.',
          },
          {
            q: 'Ist Hancom Data Loader dasselbe Produkt?',
            a: 'Nein. Es ist ein separates Enterprise-Produkt, das DOCX, XLSX, PPTX, HWP und Bilder lesen soll; das README nannte als Ziel das zweite oder dritte Quartal 2026, und es war zum Zeitpunkt der Prüfung noch nicht veröffentlicht.',
          },
          {
            q: 'Wie binde ich es in eine LangChain-Pipeline ein?',
            a: 'Installieren Sie `langchain-opendataloader-pdf` und verwenden Sie den `OpenDataLoaderPDFLoader`, wie im README beschrieben.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: 'OpenDataLoader PDF ist ein aktiv veröffentlichter Weg unter Apache 2.0, aus PDFs strukturiertes Markdown und JSON mit Positionen zu gewinnen, und sein Standardmodus ist als vollständig lokal dokumentiert. Dagegen verlangt es Java vor pip, liest nur PDFs, liegt in einem vom Projekt selbst geschriebenen Benchmark nur im Hybridmodus auf Platz eins, lässt Telemetrie und Betreiber offen und wurde von PromptQuorum nicht getestet. Es passt zu Entwicklern, die PDFs in RAG einspeisen und ein Terminal-Setup akzeptieren; für Dateien jenseits von PDF lohnt der Vergleich mit [Xberg](/de/power-local-llm/xberg-review).',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[OpenDataLoader-Website](https://opendataloader.org) — Produktüberblick, Benchmarks und Enterprise-Stufe, geprüft am 15. November 2026.',
          '[OpenDataLoader PDF auf GitHub](https://github.com/opendataloader-project/opendataloader-pdf) — README, Lizenz, Version 2.5.22 und Repository-Aktivität, geprüft am 15. November 2026.',
          '[opendataloader-pdf auf PyPI](https://pypi.org/project/opendataloader-pdf/) — Paketversion 2.5.22 und Python-Anforderung, geprüft am 15. November 2026.',
          '[Python-Schnellstart](https://opendataloader.org/docs/quick-start-python) — Installationsschritte und die genannte Python-Version, geprüft am 15. November 2026.',
          '[Benchmark-Methodik](https://opendataloader.org/docs/benchmark) — wie die projekteigenen Werte entstehen, geprüft am 15. November 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Xberg-Rezension](/de/power-local-llm/xberg-review) — eine Dokumentenintelligenz-Engine für viele Dateitypen.',
          '[CocoIndex-Rezension](/de/power-local-llm/cocoindex-review) — ein Framework, das RAG-Indizes aktuell hält.',
          '[Verzeichnis lokaler LLM-Software](/de/directory) — der vollständige Katalog lokaler KI-Werkzeuge.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'OpenDataLoader-PDF-Rezension: quelloffener PDF-Parser für RAG',
      description: 'OpenDataLoader-PDF-Rezension: ein PDF-Parser unter Apache 2.0 für RAG-Pipelines mit JSON, Markdown und Bounding-Boxen. Installationsvoraussetzungen, lokaler und hybrider Datenfluss, Herstellerbenchmarks und was die Quellen offenlassen.',
      url: 'https://www.promptquorum.com/de/power-local-llm/opendataloader-pdf-review',
      inLanguage: 'de',
      datePublished: '2026-11-15',
      dateModified: '2026-11-17',
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      educationalLevel: 'Advanced',
      proficiencyLevel: 'Advanced',
      audience: {
        '@type': 'Audience',
        audienceType: 'Entwickler, die einen quelloffenen PDF-Parser für RAG- und LLM-Pipelines bewerten',
      },
      about: [
        {
          '@type': 'Thing',
          name: 'OpenDataLoader PDF',
        },
        {
          '@type': 'Thing',
          name: 'PDF-Parsing',
        },
        {
          '@type': 'Thing',
          name: 'Retrieval-Augmented Generation',
        },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/de/power-local-llm/opendataloader-pdf-review',
      },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Startseite',
          item: 'https://www.promptquorum.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Power Local LLM',
          item: 'https://www.promptquorum.com/de/power-local-llm',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'OpenDataLoader-PDF-Rezension',
          item: 'https://www.promptquorum.com/de/power-local-llm/opendataloader-pdf-review',
        },
      ],
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-15',
    dateModified: '2026-11-17',
    next_refresh_due: '2027-05-15',
    theme: 'RAG & Document Chat',
    heroImage: '/images/opendataloader-pdf-review-hero-fr.webp',
    title: 'Test d’OpenDataLoader PDF : parseur PDF open source pour RAG',
    seoTitle: 'Test d’OpenDataLoader PDF : parseur PDF open source',
    intro: 'OpenDataLoader PDF est un parseur open source qui transforme des fichiers PDF en données structurées pour les pipelines RAG et LLM, et qui peut aussi baliser automatiquement les PDF pour l’accessibilité. C’est une bibliothèque et un outil en ligne de commande, pas une application de bureau ni un service hébergé. Ce test s’appuie sur [opendataloader.org](https://opendataloader.org), le [dépôt GitHub](https://github.com/opendataloader-project/opendataloader-pdf) et PyPI, consultés le 15 novembre 2026 ; PromptQuorum ne l’a ni installé ni exécuté.',
    metaDescription: 'Test d’OpenDataLoader PDF : parseur Apache 2.0 pour RAG, sortie JSON. Java 11+ requis ; mode par défaut local selon le README. Benchmarks de l’éditeur.',
    twitterDescription: 'Test d’OpenDataLoader PDF : un parseur PDF open source pour RAG. Ce qui tourne en local, ce que change le mode hybride, ce qui exige Java et ce que les sources laissent ouvert.',
    audience: 'Développeurs qui construisent des pipelines RAG ou LLM sur des PDF et veulent savoir ce que produit OpenDataLoader PDF, ce qu’il faut pour l’exécuter, à quel point il est réellement local et quelles affirmations viennent de l’éditeur lui-même.',
    readTime: '7 min de lecture',
    educationalLevel: 'Advanced',
    affiliateDisclosure: false,
    primaryTerm: 'test OpenDataLoader PDF',
    targetKeywords: [
      'test opendataloader pdf',
      'installer opendataloader pdf',
      'opendataloader pdf mode hybride',
      'parseur pdf pour rag',
      'convertir pdf en markdown pour llm',
      'opendataloader vs docling',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock: '**OpenDataLoader PDF (version 2.5.22) est un parseur open source Apache 2.0 qui convertit des PDF en JSON avec zones englobantes, en Markdown et en HTML pour les pipelines RAG.** Il exige Java 11 ou plus récent et un terminal : c’est un outil de développeur, pas une application.',
    quickAnswerTop: {
      fr: {
        question: 'OpenDataLoader PDF envoie-t-il mes PDF vers un service cloud ?',
        answer: 'Pas dans son mode par défaut : le README indique qu’il traite les fichiers « 100 % en local », sans appel d’API ni transmission de données. Ce sont des déclarations de l’éditeur ; PromptQuorum n’a inspecté ni le trafic réseau ni le code, et la télémétrie n’est pas documentée. Le mode hybride, qui ajoute l’OCR et un meilleur traitement des tableaux, utilise un serveur distinct que vous pouvez pointer vers une adresse distante ; vos pages partent alors là où vous le dirigez.',
        bullets: [
          'Entrée : fichiers PDF uniquement ; les fichiers Word, Excel et PowerPoint ne sont pas traités.',
          'Sortie : Markdown, JSON avec zones englobantes et niveaux de titre, HTML ou PDF annoté.',
          'Dépôt : ' + st.fr('opendataloader-pdf') + ' étoiles GitHub.',
        ],
        updatedDate: '2026-11-15',
      },
    },
    toc: [
      {
        label: 'Réponse rapide',
        anchor: 'quick-answer',
      },
      {
        label: 'Qu’est-ce qu’OpenDataLoader PDF ?',
        anchor: 'what-is-opendataloader-pdf',
      },
      {
        label: 'Où l’obtenir',
        anchor: 'get-it',
      },
      {
        label: 'Flux de données local et hybride',
        anchor: 'privacy',
      },
      {
        label: 'Fonctions confirmées par les sources',
        anchor: 'key-features',
      },
      {
        label: 'Benchmarks : les affirmations de l’éditeur',
        anchor: 'benchmarks',
      },
      {
        label: 'Licence et prix',
        anchor: 'pricing',
      },
      {
        label: 'À qui s’adresse l’outil',
        anchor: 'who-should-use',
      },
      {
        label: 'Ce que nous n’avons pas pu vérifier',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Concurrents et alternatives',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Questions fréquentes',
        anchor: 'faq',
      },
      {
        label: 'Verdict',
        anchor: 'verdict',
      },
      {
        label: 'Sources',
        anchor: 'sources',
      },
      {
        label: 'À lire aussi',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Points clés',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'OpenDataLoader PDF lit un PDF et renvoie son texte, ses tableaux, ses titres et la position de ses éléments sous forme de données structurées qu’un pipeline RAG ou un modèle de langage peut exploiter.',
          },
          {
            type: 'plain-terms',
            text: 'Vous l’exécutez depuis Python, Node.js, Java ou la ligne de commande sur un PDF, et il écrit un fichier Markdown ou JSON qui conserve les titres, les tableaux et l’ordre de lecture au lieu d’un bloc de texte à plat.',
          },
        ],
        items: [
          'Maintenance : la dernière version, 2.5.22, date du 12 novembre 2026 et le dépôt a été mis à jour pour la dernière fois le 14 novembre 2026 ; aucun avertissement de projet abandonné ne s’applique.',
          'Périmètre : une bibliothèque d’analyse pour développeurs, limitée aux PDF en entrée, avec une fonction facultative de balisage automatique pour l’accessibilité.',
          'Coût : le noyau est gratuit ; une offre entreprise existe, sans prix publié.',
          'Benchmarks : le classement « n° 1 » est celui du projet lui-même, et il ne vaut que pour le mode hybride.',
          'Non vérifié : la télémétrie, le packaging Docker et la liste des systèmes d’exploitation ne sont pas indiqués par le projet.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce test s’appuie sur le site du projet, le dépôt GitHub et PyPI, consultés le 15 novembre 2026. PromptQuorum n’a pas testé OpenDataLoader PDF : la vitesse, la précision et la consommation de mémoire ne sont donc pas évaluées ici.',
          },
        ],
      },
      overview: {
        id: 'what-is-opendataloader-pdf',
        title: 'Qu’est-ce qu’OpenDataLoader PDF ?',
        content: [
          '**OpenDataLoader PDF transforme des PDF en données prêtes pour l’IA : du Markdown pour le découpage en segments, du JSON avec zones englobantes pour citer les sources, du HTML ou un PDF annoté.** Il lit les titres, les tableaux, les listes et l’ordre de lecture, et le JSON conserve les niveaux de titre, les polices et la position de chaque élément. Il est livré sous forme de bibliothèque avec des SDK Python, Node.js et Java, et d’outil en ligne de commande.',
          'L’éditeur est l’organisation GitHub opendataloader-project, et le pied de page du site indique « © 2026 OpenDataLoader ». La page d’accueil précise que le travail sur l’accessibilité a été mené avec Hancom et avec Dual Lab, que la page décrit comme un développeur de veraPDF ; elle ne dit pas que Hancom édite le parseur. Les sources ne nomment pas l’entité juridique qui maintient le projet. Un produit entreprise distinct, Hancom Data Loader, est annoncé comme « Coming Soon » et ne fait pas partie du noyau open source.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où l’obtenir',
        content: [
          '**OpenDataLoader PDF s’installe depuis un gestionnaire de paquets, une fois un environnement d’exécution Java en place.** Il n’existe ni installateur de bureau ni fiche dans une boutique d’applications.',
        ],
        columns: [
          'Option',
          "Comment l’obtenir",
        ],
        rows: [
          {
            Option: 'Python (pip)',
            "Comment l’obtenir": 'Java 11+, puis `pip install -U opendataloader-pdf` ([PyPI](https://pypi.org/project/opendataloader-pdf/)) ; ajoute la CLI',
          },
          {
            Option: 'Node.js',
            "Comment l’obtenir": '`@opendataloader/pdf` sur npm, d’après le [guide de démarrage Node.js](https://opendataloader.org/docs/quick-start-nodejs)',
          },
          {
            Option: 'Java (Maven)',
            "Comment l’obtenir": '`org.opendataloader:opendataloader-pdf-core`, d’après le [guide de démarrage Java](https://opendataloader.org/docs/quick-start-java)',
          },
          {
            Option: 'Mode hybride',
            "Comment l’obtenir": '`pip install "opendataloader-pdf[hybrid]"` ; 1er modèle : plusieurs minutes (README)',
          },
          {
            Option: 'Archive CLI',
            "Comment l’obtenir": '`opendataloader-pdf-cli-2.5.22.zip` sur [GitHub Releases](https://github.com/opendataloader-project/opendataloader-pdf/releases/tag/v2.5.22)',
          },
          {
            Option: 'Site web',
            "Comment l’obtenir": '[opendataloader.org](https://opendataloader.org)',
          },
          {
            Option: 'Politique de confidentialité',
            "Comment l’obtenir": '[Politique de confidentialité](https://accounts.hancom.com/policy/privacy/current/en), liée depuis le pied de page du site ; la page exige JavaScript pour s’afficher',
          },
          {
            Option: 'Code source',
            "Comment l’obtenir": '[github.com/opendataloader-project/opendataloader-pdf](https://github.com/opendataloader-project/opendataloader-pdf), Apache 2.0',
          },
        ],
        note: 'Version testée : 2.5.22, publiée le 12 novembre 2026 ; dernière mise à jour du projet le 14 novembre 2026. Il faut un terminal et un environnement de développement : Java 11 ou plus récent doit figurer dans le PATH (à vérifier avec `java -version`) et Python 3.11 ou plus récent est requis pour la voie pip. La page de démarrage indique Python 3.10, alors que le README et PyPI indiquent 3.11 ; suivez PyPI. Le projet ne publie pas de liste de systèmes d’exploitation ; PyPI signale le paquet comme indépendant du système.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flux de données local et hybride',
        content: [
          '**Dans son mode par défaut, le parseur s’exécute sur votre machine : le README indique « 100% locally » et « No API calls, no data transmission », et la page d’accueil « No API keys, no cloud ».** Aucun GPU n’est requis, et aucune valeur de RAM n’est publiée.',
          'Le mode hybride ajoute l’OCR, le traitement des formules et des graphiques et une meilleure précision sur les tableaux, en envoyant les pages difficiles à un serveur d’IA. Par défaut, ce serveur est local, sur 127.0.0.1, et les descriptions d’images utilisent un modèle SmolVLM-256M local, mais l’option `--hybrid-url` accepte n’importe quelle adresse. Si vous la dirigez vers un serveur distant, vos pages lui sont envoyées et l’affirmation « no cloud » ne décrit plus votre configuration.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce sont des déclarations de l’éditeur, pas des résultats d’audit. PromptQuorum n’a inspecté ni le trafic réseau ni le code.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Tous les éléments ci-dessous proviennent du site, du README ou de PyPI ; aucun n’a été testé ici.**',
        ],
        items: [
          '**Analyse de mise en page.** L’algorithme XY-Cut++ reconstitue l’ordre de lecture ; les tableaux sont extraits, cellules fusionnées comprises.',
          '**Citations.** Chaque élément du JSON porte une zone englobante, de sorte qu’une réponse peut renvoyer à un emplacement précis de la page.',
          '**OCR.** Disponible uniquement en mode hybride ; le moteur par défaut est EasyOCR, avec RapidOCR, Tesseract, Apple Vision (macOS uniquement), NVIDIA Nemotron (Linux x86_64 avec CUDA) et un choix automatique comme alternatives. Le projet annonce plus de 80 langues, sans détail par moteur.',
          '**Filtrage de sécurité IA.** Le texte caché, le contenu hors page et les motifs d’injection de prompt peuvent être filtrés avant que le texte n’atteigne un modèle.',
          '**LangChain.** Le paquet `langchain-opendataloader-pdf` fournit un `OpenDataLoaderPDFLoader`, et un [guide d’intégration RAG](https://opendataloader.org/docs/rag-integration) est publié.',
          '**Balisage automatique pour l’accessibilité.** Les PDF non balisés peuvent l’être selon la spécification Well-Tagged PDF, validée avec veraPDF ; l’export PDF/UA relève de l’offre entreprise.',
        ],
        note: 'Le README ne mentionne aucune intégration avec LlamaIndex ou MCP, et ce test n’en affirme aucune.',
      },
      benchmarks: {
        id: 'benchmarks',
        title: 'Benchmarks : les affirmations de l’éditeur',
        content: [
          '**L’affirmation « #1 in benchmarks » de la page d’accueil et du README provient de l’opendataloader-bench du projet lui-même, et elle ne vaut que pour le mode hybride.** La méthode est décrite sur la [page des benchmarks](https://opendataloader.org/docs/benchmark) ; PromptQuorum n’a reproduit aucun chiffre.',
        ],
        items: [
          'Score global : 0.907 en mode hybride contre 0.831 sans.',
          'Précision des tableaux (TEDS) : 0.928 en mode hybride contre 0.489 sans.',
          'Détection des titres : Docling 0.824, hybride 0.821, non hybride 0.739 ; l’affirmation ne vaut donc pas dans toutes les catégories.',
          'Vitesse par page : Nutrient 0.008 seconde, OpenDataLoader en local 0.015, hybride 0.463 ; la FAQ du README indique aussi « 60+ pages per second ».',
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Licence et prix',
        content: [
          '**Le code est placé sous licence Apache 2.0, d’après le [fichier LICENSE](https://github.com/opendataloader-project/opendataloader-pdf/blob/main/LICENSE) du dépôt ; les versions antérieures à 2.0 étaient sous MPL 2.0.** Core, Audit et Auto-tag sont gratuits.',
          'Une offre entreprise ajoute l’export PDF/UA et un studio d’édition visuelle. Aucun prix n’est publié ; les demandes passent par la [page de contact](https://opendataloader.org/contact).',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui s’adresse l’outil',
        items: [
          '**Les concepteurs de RAG** qui ont besoin de Markdown ou de JSON structuré avec positions à partir de PDF qu’ils possèdent déjà.',
          '**Les équipes disposant d’un environnement Java**, qui acceptent d’installer un JDK avant un paquet Python.',
          '**Les équipes accessibilité** qui veulent baliser automatiquement des PDF existants et les contrôler avec veraPDF.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n’avons pas pu vérifier',
        items: [
          '**Précision et vitesse.** Tous les chiffres sont ceux du projet ; PromptQuorum n’en a mesuré aucun.',
          '**Télémétrie.** Aucune déclaration n’a été trouvée, donc rien n’est supposé dans un sens ou dans l’autre.',
          '**Docker.** La page d’accueil montre une voie par conteneur, mais pas le README, et aucune image n’a été trouvée.',
          '**Systèmes d’exploitation.** Aucune liste de prise en charge n’est publiée, et les workflows CI examinés s’exécutent sous Linux.',
          '**Autres types de fichiers.** Le noyau ne traite ni Word, ni Excel, ni PowerPoint, ni les images ; Hancom Data Loader est annoncé, pas publié.',
          '**Mainteneur.** L’entité juridique derrière le projet n’est pas nommée.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        columns: [
          'Appli',
          'Plateformes',
          'Prix / licence',
          'Différence clé',
        ],
        rows: [
          {
            Appli: '[Xberg](/fr/power-local-llm/xberg-review)',
            Plateformes: 'Mac, Windows, Linux',
            'Prix / licence': 'Gratuit / MIT',
            'Différence clé': 'Moteur en Rust qui lit aussi les fichiers Office, l’audio et les URL ; OpenDataLoader PDF ne lit que des PDF',
          },
          {
            Appli: '[CocoIndex](/fr/power-local-llm/cocoindex-review)',
            Plateformes: 'Mac, Windows, Linux',
            'Prix / licence': 'Gratuit / Apache 2.0',
            'Différence clé': 'Framework de pipelines qui garde un index à jour ; il a besoin d’un parseur comme celui-ci et ne le remplace pas',
          },
          {
            Appli: '[Unstructured](/fr/power-local-llm/unstructured-review)',
            Plateformes: 'Mac, Windows, Linux',
            'Prix / licence': 'Bibliothèque gratuite / Apache 2.0 ; API cloud payante en option',
            'Différence clé': 'Bibliothèque ETL Python qui lit PDF, DOCX, PPTX, HTML, e-mails et images en éléments JSON ; OpenDataLoader PDF ne lit que des PDF',
          },
          {
            Appli: '[Nutrient](/fr/power-local-llm/nutrient-review)',
            Plateformes: 'iOS, Android, Mac, Windows, Linux, Web',
            'Prix / licence': 'Payant / commercial',
            'Différence clé': 'SDK PDF commercial et propriétaire pour l’édition, la signature, l’OCR et l’extraction de données ; OpenDataLoader PDF est sous Apache 2.0',
          },
        ],
        note: 'Docling et Nutrient figurent dans le tableau de benchmarks du projet lui-même, seule comparaison sur laquelle ce test s’appuie. Vérifiez le prix, la licence et les plateformes actuels de chaque outil sur sa propre fiche avant de choisir.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Puis-je l’utiliser sans écrire de Python ?',
            a: 'Oui. Le paquet pip installe un outil en ligne de commande, et des SDK Node.js et Java existent, mais toutes les voies exigent Java 11 ou plus récent sur la machine.',
          },
          {
            q: 'Pourquoi chaque appel est-il lent quand je traite des fichiers en boucle ?',
            a: 'D’après le README, chaque appel à `convert()` démarre un processus JVM ; il recommande donc de passer plusieurs fichiers ou un dossier en un seul appel.',
          },
          {
            q: 'Fonctionne-t-il sur des PDF numérisés ?',
            a: 'Uniquement via le mode hybride, qui exécute l’OCR ; le mode par défaut ne le fait pas.',
          },
          {
            q: 'Hancom Data Loader est-il le même produit ?',
            a: 'Non. C’est un produit entreprise distinct, prévu pour lire DOCX, XLSX, PPTX, HWP et des images ; le README visait le deuxième ou le troisième trimestre 2026, et il n’était pas encore publié au moment de la vérification.',
          },
          {
            q: 'Comment l’ajouter à un pipeline LangChain ?',
            a: 'Installez `langchain-opendataloader-pdf` et utilisez son `OpenDataLoaderPDFLoader`, comme décrit dans le README.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'OpenDataLoader PDF est un moyen régulièrement mis à jour, sous licence Apache 2.0, d’extraire des PDF du Markdown et du JSON structurés avec positions, et son mode par défaut est documenté comme entièrement local. En contrepartie, il exige Java avant pip, ne lit que des PDF, arrive en tête d’un benchmark écrit par le projet lui-même et seulement en mode hybride, laisse la télémétrie et son mainteneur non précisés, et n’a pas été testé par PromptQuorum. Il convient aux développeurs qui alimentent un RAG avec des PDF et acceptent une installation en terminal ; pour des fichiers autres que des PDF, comparez [Xberg](/fr/power-local-llm/xberg-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site d’OpenDataLoader](https://opendataloader.org) — présentation du produit, benchmarks et offre entreprise, consultés le 15 novembre 2026.',
          '[OpenDataLoader PDF sur GitHub](https://github.com/opendataloader-project/opendataloader-pdf) — README, licence, version 2.5.22 et activité du dépôt, consultés le 15 novembre 2026.',
          '[opendataloader-pdf sur PyPI](https://pypi.org/project/opendataloader-pdf/) — version 2.5.22 du paquet et version de Python requise, consultées le 15 novembre 2026.',
          '[Guide de démarrage Python](https://opendataloader.org/docs/quick-start-python) — étapes d’installation et version de Python qu’il indique, consultés le 15 novembre 2026.',
          '[Méthodologie des benchmarks](https://opendataloader.org/docs/benchmark) — comment sont produits les scores du projet lui-même, consultée le 15 novembre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'À lire aussi',
        items: [
          '[Test de Xberg](/fr/power-local-llm/xberg-review) — un moteur d’intelligence documentaire pour de nombreux types de fichiers.',
          '[Test de CocoIndex](/fr/power-local-llm/cocoindex-review) — un framework qui garde les index RAG à jour.',
          '[Annuaire des logiciels de LLM locaux](/fr/directory) — le catalogue complet des outils d’IA locale.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Test d’OpenDataLoader PDF : parseur PDF open source pour RAG',
      description: 'Test d’OpenDataLoader PDF : un parseur PDF Apache 2.0 pour pipelines RAG, avec JSON, Markdown et zones englobantes. Prérequis d’installation, flux de données local et hybride, benchmarks de l’éditeur et ce que les sources laissent non confirmé.',
      url: 'https://www.promptquorum.com/fr/power-local-llm/opendataloader-pdf-review',
      inLanguage: 'fr',
      datePublished: '2026-11-15',
      dateModified: '2026-11-17',
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      educationalLevel: 'Advanced',
      proficiencyLevel: 'Advanced',
      audience: {
        '@type': 'Audience',
        audienceType: 'Développeurs qui évaluent un parseur PDF open source pour des pipelines RAG et LLM',
      },
      about: [
        {
          '@type': 'Thing',
          name: 'OpenDataLoader PDF',
        },
        {
          '@type': 'Thing',
          name: 'Analyse de PDF',
        },
        {
          '@type': 'Thing',
          name: 'Génération augmentée par récupération',
        },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/fr/power-local-llm/opendataloader-pdf-review',
      },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Accueil',
          item: 'https://www.promptquorum.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Power Local LLM',
          item: 'https://www.promptquorum.com/fr/power-local-llm',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Test d’OpenDataLoader PDF',
          item: 'https://www.promptquorum.com/fr/power-local-llm/opendataloader-pdf-review',
        },
      ],
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-15',
    dateModified: '2026-11-17',
    next_refresh_due: '2027-05-15',
    theme: 'RAG & Document Chat',
    heroImage: '/images/opendataloader-pdf-review-hero-ja.webp',
    title: 'OpenDataLoader PDFレビュー：RAG向けオープンソースPDFパーサー',
    seoTitle: 'OpenDataLoader PDFレビュー：PDFパーサー',
    intro: 'OpenDataLoader PDFは、PDFファイルをRAGやLLMパイプライン向けの構造化データに変換するオープンソースのパーサーで、アクセシビリティ向けのPDF自動タグ付けにも対応しています。ライブラリとコマンドラインツールであり、デスクトップアプリでもホスト型サービスでもありません。本レビューは[opendataloader.org](https://opendataloader.org)、[GitHubリポジトリ](https://github.com/opendataloader-project/opendataloader-pdf)、PyPIを2026年11月15日に確認した内容に基づいています。PromptQuorumはインストールも実行もしていません。',
    metaDescription: 'OpenDataLoader PDFのレビュー。Apache 2.0のPDFパーサー。Java 11以上が必要。READMEではデフォルトモードはローカル動作。ベンチマークは提供元の数値。',
    twitterDescription: 'OpenDataLoader PDFレビュー：RAG向けのオープンソースPDFパーサー。ローカルで動く部分、ハイブリッドモードで変わる点、Javaが必要な理由、情報源が確認していない点。',
    audience: 'PDFを対象にRAGやLLMのパイプラインを構築していて、OpenDataLoader PDFの出力内容、動作に必要なもの、実際どこまでローカルなのか、どの主張が提供元自身のものなのかを知りたい開発者。',
    readTime: '7分で読める',
    educationalLevel: 'Advanced',
    affiliateDisclosure: false,
    primaryTerm: 'OpenDataLoader PDFレビュー',
    targetKeywords: [
      'opendataloader pdf レビュー',
      'opendataloader pdf インストール',
      'opendataloader pdf ハイブリッドモード',
      'rag pdf パーサー',
      'pdf markdown 変換 llm',
      'opendataloader docling 違い',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock: '**OpenDataLoader PDF（バージョン2.5.22）は、PDFをバウンディングボックス付きのJSON、Markdown、HTMLに変換してRAGパイプラインで使えるようにする、Apache 2.0のオープンソースパーサーです。** Java 11以上とターミナルが必要で、アプリではなく開発者向けのツールです。',
    quickAnswerTop: {
      ja: {
        question: 'OpenDataLoader PDFは、PDFをクラウドサービスに送信しますか？',
        answer: 'デフォルトモードでは送信しません。READMEは、APIコールもデータ送信もなく「100% locally」で処理すると述べています。これは提供元の説明です。PromptQuorumはネットワーク通信もコードも検査しておらず、テレメトリについての記載もありません。OCRと表処理を強化するハイブリッドモードは別のバックエンドを使い、そのアドレスはリモートに向けられるため、その場合はページが指定した先に送られます。',
        bullets: [
          '入力：PDFファイルのみ。Word、Excel、PowerPointのファイルは処理されません。',
          '出力：Markdown、バウンディングボックスと見出しレベル付きのJSON、HTML、または注釈付きPDF。',
          'リポジトリ：GitHubスター' + st.ja('opendataloader-pdf') + '。',
        ],
        updatedDate: '2026-11-15',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'OpenDataLoader PDFとは', anchor: 'what-is-opendataloader-pdf' },
      { label: '入手方法', anchor: 'get-it' },
      { label: 'ローカルとハイブリッドのデータの流れ', anchor: 'privacy' },
      { label: '情報源で確認できた機能', anchor: 'key-features' },
      { label: 'ベンチマーク：提供元の主張', anchor: 'benchmarks' },
      { label: 'ライセンスと価格', anchor: 'pricing' },
      { label: 'おすすめできる人', anchor: 'who-should-use' },
      { label: '確認できなかった点', anchor: 'who-should-not-use' },
      { label: '競合・代替アプリ', anchor: 'vs-alternatives' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '総評', anchor: 'verdict' },
      { label: '情報源', anchor: 'sources' },
      { label: '関連記事', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '重要ポイント',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'OpenDataLoader PDFはPDFを読み取り、テキスト、表、見出し、要素の位置を、RAGパイプラインや言語モデルが使える構造化データとして返します。',
          },
          {
            type: 'plain-terms',
            text: 'Python、Node.js、Java、またはコマンドラインからPDFに対して実行すると、単なるテキストの塊ではなく、見出し、表、読み取り順序を保ったMarkdownまたはJSONファイルが出力されます。',
          },
        ],
        items: [
          '保守状況：最新リリース2.5.22は2026年11月12日、リポジトリの最終更新は2026年11月14日で、放置プロジェクトの警告は該当しません。',
          '範囲：開発者向けのパースライブラリで、入力はPDFのみ。任意でアクセシビリティ用の自動タグ付け機能があります。',
          '費用：中核部分は無料で、エンタープライズ版があり、価格は公表されていません。',
          'ベンチマーク：「#1」という順位はプロジェクト自身のもので、ハイブリッドモードでのみ成り立ちます。',
          '未確認：テレメトリ、Dockerでの提供、対応オペレーティングシステムの一覧は、プロジェクトが明記していません。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本レビューは、プロジェクトのウェブサイト、GitHubリポジトリ、PyPIを2026年11月15日に確認した内容に基づいています。PromptQuorumはOpenDataLoader PDFを試していないため、速度、精度、メモリ使用量は評価していません。',
          },
        ],
      },
      overview: {
        id: 'what-is-opendataloader-pdf',
        title: 'OpenDataLoader PDFとは',
        content: [
          '**OpenDataLoader PDFは、PDFをAI向けのデータに変換します。チャンク分割用のMarkdown、出典表示用のバウンディングボックス付きJSON、HTML、または注釈付きPDFです。** 見出し、表、リスト、読み取り順序を認識し、JSONには見出しレベル、フォント、各要素の位置が保持されます。Python、Node.js、JavaのSDKとコマンドラインツールを備えたライブラリとして提供されています。',
          '開発元はGitHub組織のopendataloader-projectで、サイトのフッターには「© 2026 OpenDataLoader」とあります。ホームページによると、アクセシビリティ関連の作業はHancomおよびDual Labとともに進められたもの（ホームページはDual LabをveraPDFの開発者の一つと説明しています）ですが、Hancomがパーサーを作っているとは書かれていません。どの法人がプロジェクトを保守しているかは、情報源に記載がありません。別のエンタープライズ製品Hancom Data Loaderは「Coming Soon」と表示されており、オープンソースの中核には含まれません。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**OpenDataLoader PDFは、Javaランタイムを用意したうえで、パッケージマネージャーからインストールします。** デスクトップ用のインストーラーも、ストアの掲載もありません。',
        ],
        columns: ['項目', '入手方法'],
        rows: [
          { '項目': 'Python（pip）', '入手方法': 'Java 11以上を用意し、`pip install -U opendataloader-pdf`（[PyPI](https://pypi.org/project/opendataloader-pdf/)）。CLIも追加されます' },
          { '項目': 'Node.js', '入手方法': 'npmの`@opendataloader/pdf`（[Node.jsクイックスタート](https://opendataloader.org/docs/quick-start-nodejs)による）' },
          { '項目': 'Java（Maven）', '入手方法': '`org.opendataloader:opendataloader-pdf-core`（[Javaクイックスタート](https://opendataloader.org/docs/quick-start-java)による）' },
          { '項目': 'ハイブリッドモード', '入手方法': '`pip install "opendataloader-pdf[hybrid]"`。READMEによると、最初のモデルのダウンロードに数分かかることがあります' },
          { '項目': 'CLIアーカイブ', '入手方法': '[GitHub Releases](https://github.com/opendataloader-project/opendataloader-pdf/releases/tag/v2.5.22)の`opendataloader-pdf-cli-2.5.22.zip`' },
          { '項目': '公式サイト', '入手方法': '[opendataloader.org](https://opendataloader.org)' },
          { '項目': 'プライバシーポリシー', '入手方法': 'サイトのフッターからリンクされた[プライバシーポリシー](https://accounts.hancom.com/policy/privacy/current/en)。表示にはJavaScriptが必要です' },
          { '項目': 'ソースコード', '入手方法': '[github.com/opendataloader-project/opendataloader-pdf](https://github.com/opendataloader-project/opendataloader-pdf)、Apache 2.0' },
        ],
        note: '確認したバージョン：2.5.22（2026年11月12日公開）、最終の上流更新は2026年11月14日。ターミナルと開発環境が必要です。Java 11以上をPATHに通しておく必要があり（`java -version`で確認）、pipを使う場合はPython 3.11以上が必要です。クイックスタートのページはPython 3.10と記載していますが、READMEとPyPIは3.11としているため、PyPIに従ってください。プロジェクトはオペレーティングシステムの一覧を公表しておらず、PyPIはこのパッケージをOS非依存と分類しています。',
      },
      privacy: {
        id: 'privacy',
        title: 'ローカルとハイブリッドのデータの流れ',
        content: [
          '**デフォルトモードでは、パーサーは自分のマシン上で動作します。READMEは「100% locally」「No API calls, no data transmission」と述べ、ホームページは「No API keys, no cloud」と述べています。** GPUは不要で、RAMの目安は公表されていません。',
          'ハイブリッドモードは、難しいページをAIバックエンドに送ることで、OCR、数式とグラフの処理、表の精度を高めます。バックエンドは初期設定では127.0.0.1のローカルサーバーで、画像の説明にはローカルのSmolVLM-256Mモデルが使われますが、`--hybrid-url`オプションには任意のアドレスを指定できます。リモートのサーバーを指定すると、ページがそこへ送られ、「クラウド不使用」という記述はお使いの構成には当てはまらなくなります。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'これらは提供元の説明であり、監査結果ではありません。PromptQuorumはネットワーク通信もコードも検査していません。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できた機能',
        content: [
          '**以下はすべてウェブサイト、README、PyPIの記載によるもので、ここでは試していません。**',
        ],
        items: [
          '**レイアウト解析。** XY-Cut++アルゴリズムで読み取り順序を復元し、結合セルを含む表を抽出します。',
          '**出典表示。** JSONの各要素にバウンディングボックスが付くため、回答をページ上の位置に結び付けられます。',
          '**OCR。** ハイブリッドモードのみで利用でき、エンジンは初期設定でEasyOCRです。代替としてRapidOCR、Tesseract、Apple Vision（macOSのみ）、NVIDIA Nemotron（CUDA対応のLinux x86_64）、自動選択があります。プロジェクトは80以上の言語に対応すると述べていますが、エンジンごとの内訳はありません。',
          '**AI安全フィルタリング。** 隠しテキスト、ページ外のコンテンツ、プロンプトインジェクションのパターンを、テキストがモデルに渡る前に除外できます。',
          '**LangChain。** `langchain-opendataloader-pdf`パッケージが`OpenDataLoaderPDFLoader`を提供し、[RAG連携ガイド](https://opendataloader.org/docs/rag-integration)も公開されています。',
          '**アクセシビリティの自動タグ付け。** タグのないPDFにWell-Tagged PDF仕様に沿ったタグを付け、veraPDFで検証できます。PDF/UAのエクスポートはエンタープライズ版の機能です。',
        ],
        note: 'READMEにはLlamaIndexやMCPとの連携の記載がなく、本レビューもそれらがあるとは述べていません。',
      },
      benchmarks: {
        id: 'benchmarks',
        title: 'ベンチマーク：提供元の主張',
        content: [
          '**ホームページとREADMEにある「#1 in benchmarks」という主張は、プロジェクト自身のopendataloader-benchによるもので、ハイブリッドモードにのみ当てはまります。** 手法は[ベンチマークのページ](https://opendataloader.org/docs/benchmark)に説明されており、PromptQuorumはどの数値も再現していません。',
        ],
        items: [
          '総合スコア：ハイブリッドモードで0.907、ハイブリッドなしで0.831。',
          '表の精度（TEDS）：ハイブリッドモードで0.928、ハイブリッドなしで0.489。',
          '見出しの検出：Docling 0.824、ハイブリッド0.821、非ハイブリッド0.739で、すべてのカテゴリーで主張が成り立つわけではありません。',
          '1ページあたりの速度：Nutrientが0.008秒、OpenDataLoaderのローカルが0.015秒、ハイブリッドが0.463秒。READMEのFAQには「60+ pages per second」とも記載されています。',
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'ライセンスと価格',
        content: [
          '**コードのライセンスは、リポジトリの[LICENSEファイル](https://github.com/opendataloader-project/opendataloader-pdf/blob/main/LICENSE)によるとApache 2.0で、2.0より前のリリースはMPL 2.0でした。** Core、Audit、Auto-tagは無料で利用できます。',
          'エンタープライズ版ではPDF/UAのエクスポートとビジュアル編集スタジオが追加されます。価格は公表されておらず、問い合わせは[お問い合わせページ](https://opendataloader.org/contact)から行います。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'おすすめできる人',
        items: [
          '**RAGを構築する方** で、手元にあるPDFから、位置情報付きの構造化されたMarkdownやJSONが必要な方。',
          '**Javaランタイムを使えるチーム** で、Pythonパッケージの前にJDKをインストールすることを受け入れられる方。',
          '**アクセシビリティ担当のチーム** で、既存のPDFに自動でタグを付け、veraPDFで確認したい方。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**精度と速度。** 数値はすべてプロジェクト自身のもので、PromptQuorumは測定していません。',
          '**テレメトリ。** 記載が見つからなかったため、どちらとも想定していません。',
          '**Docker。** ホームページにはコンテナでの利用が示されていますが、READMEにはなく、イメージも見つかりませんでした。',
          '**オペレーティングシステム。** 対応一覧は公表されておらず、確認したCIワークフローはLinuxで動作しています。',
          '**ほかのファイル形式。** Word、Excel、PowerPoint、画像の入力は中核部分では処理されません。Hancom Data Loaderは発表されたのみで、リリースされていません。',
          '**保守元。** プロジェクトの背後にある法人は明記されていません。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合・代替アプリ',
        columns: ['アプリ', '対応環境', '価格／ライセンス', '主な違い'],
        rows: [
          {
            'アプリ': '[Xberg](/ja/power-local-llm/xberg-review)',
            '対応環境': 'Mac、Windows、Linux',
            '価格／ライセンス': '無料／MIT',
            '主な違い': 'Officeファイル、音声、URLも読み取れるRustエンジン。OpenDataLoader PDFが読み取るのはPDFのみ',
          },
          {
            'アプリ': '[CocoIndex](/ja/power-local-llm/cocoindex-review)',
            '対応環境': 'Mac、Windows、Linux',
            '価格／ライセンス': '無料／Apache 2.0',
            '主な違い': 'インデックスを最新に保つパイプラインフレームワーク。本ツールのようなパーサーが必要で、代わりにはならない',
          },
          {
            'アプリ': '[Unstructured](/ja/power-local-llm/unstructured-review)',
            '対応環境': 'Mac、Windows、Linux',
            '価格／ライセンス': '無料ライブラリ／Apache 2.0。有料クラウドAPIは任意',
            '主な違い': 'PDF・DOCX・PPTX・HTML・メール・画像をJSON要素に読み込むPython ETLライブラリ。OpenDataLoader PDFが読み取るのはPDFのみ',
          },
          {
            'アプリ': '[Nutrient](/ja/power-local-llm/nutrient-review)',
            '対応環境': 'iOS、Android、Mac、Windows、Linux、Web',
            '価格／ライセンス': '有料／商用',
            '主な違い': '商用のクローズドソースPDF SDK。編集・署名・OCR・データ抽出に対応。OpenDataLoader PDFはApache 2.0',
          },
        ],
        note: 'DoclingとNutrientはプロジェクト自身のベンチマーク表に登場しており、本レビューが頼る比較はそれだけです。選ぶ前に、各ツールの最新の価格、ライセンス、対応環境をそれぞれの掲載ページで確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Pythonを書かずに使えますか？',
            a: 'はい。pipのパッケージにコマンドラインツールが含まれ、Node.jsとJavaのSDKもありますが、どの方法でもマシンにJava 11以上が必要です。',
          },
          {
            q: 'ファイルをループで処理すると、毎回遅いのはなぜですか？',
            a: 'READMEによると、`convert()`を呼ぶたびにJVMプロセスが起動するため、複数のファイルやフォルダーを1回の呼び出しで渡すことを勧めています。',
          },
          {
            q: 'スキャンしたPDFにも使えますか？',
            a: 'OCRを実行するハイブリッドモードでのみ対応します。デフォルトモードでは対応しません。',
          },
          {
            q: 'Hancom Data Loaderは同じ製品ですか？',
            a: 'いいえ。DOCX、XLSX、PPTX、HWP、画像を読み取る予定の別のエンタープライズ製品で、READMEは2026年の第2四半期または第3四半期を目標としていましたが、確認時点では未リリースでした。',
          },
          {
            q: 'LangChainのパイプラインに追加するにはどうすればよいですか？',
            a: 'READMEの説明どおり、`langchain-opendataloader-pdf`をインストールして`OpenDataLoaderPDFLoader`を使います。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: 'OpenDataLoader PDFは、活発にリリースされているApache 2.0の手段で、PDFから位置情報付きの構造化されたMarkdownとJSONを取り出せ、デフォルトモードは完全にローカルと記載されています。一方で、pipの前にJavaが必要で、読み取れるのはPDFのみ、順位はプロジェクト自身が作ったベンチマークでのもので、しかもハイブリッドモードに限られます。テレメトリと保守元は明記されておらず、PromptQuorumは試していません。PDFをRAGに取り込み、ターミナルでのセットアップを受け入れられる開発者に向いています。PDF以外のファイルを扱うなら[Xberg](/ja/power-local-llm/xberg-review)と比較してください。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[OpenDataLoaderウェブサイト](https://opendataloader.org) — 製品概要、ベンチマーク、エンタープライズ版（2026年11月15日確認）。',
          '[GitHubのOpenDataLoader PDF](https://github.com/opendataloader-project/opendataloader-pdf) — README、ライセンス、リリース2.5.22、リポジトリの活動状況（2026年11月15日確認）。',
          '[PyPIのopendataloader-pdf](https://pypi.org/project/opendataloader-pdf/) — パッケージのバージョン2.5.22とPythonの要件（2026年11月15日確認）。',
          '[Pythonクイックスタート](https://opendataloader.org/docs/quick-start-python) — インストール手順と記載されているPythonのバージョン（2026年11月15日確認）。',
          '[ベンチマークの手法](https://opendataloader.org/docs/benchmark) — プロジェクト自身のスコアの算出方法（2026年11月15日確認）。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Xbergレビュー](/ja/power-local-llm/xberg-review) — 多くのファイル形式に対応するドキュメントインテリジェンスエンジン。',
          '[CocoIndexレビュー](/ja/power-local-llm/cocoindex-review) — RAGのインデックスを最新に保つフレームワーク。',
          '[ローカルLLMソフトウェアディレクトリ](/ja/directory) — ローカルAIツールの全カタログ。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'OpenDataLoader PDFレビュー：RAG向けオープンソースPDFパーサー',
      description: 'OpenDataLoader PDFのレビュー。JSON、Markdown、バウンディングボックスを出力するRAGパイプライン向けApache 2.0のPDFパーサー。導入の要件、ローカルとハイブリッドのデータの流れ、提供元のベンチマーク、情報源が確認していない点を解説します。',
      url: 'https://www.promptquorum.com/ja/power-local-llm/opendataloader-pdf-review',
      inLanguage: 'ja',
      datePublished: '2026-11-15',
      dateModified: '2026-11-17',
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      educationalLevel: 'Advanced',
      proficiencyLevel: 'Advanced',
      audience: {
        '@type': 'Audience',
        audienceType: 'RAGやLLMのパイプライン向けにオープンソースのPDFパーサーを検討している開発者',
      },
      about: [
        { '@type': 'Thing', name: 'OpenDataLoader PDF' },
        { '@type': 'Thing', name: 'PDFパース' },
        { '@type': 'Thing', name: '検索拡張生成（RAG）' },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/ja/power-local-llm/opendataloader-pdf-review',
      },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/ja/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'OpenDataLoader PDFレビュー', item: 'https://www.promptquorum.com/ja/power-local-llm/opendataloader-pdf-review' },
      ],
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-15',
    dateModified: '2026-11-17',
    next_refresh_due: '2027-05-15',
    theme: 'RAG & Document Chat',
    heroImage: '/images/opendataloader-pdf-review-hero-zh.webp',
    title: 'OpenDataLoader PDF 评测：面向 RAG 的开源 PDF 解析器',
    seoTitle: 'OpenDataLoader PDF 评测：PDF 解析器',
    intro: 'OpenDataLoader PDF 是一个开源解析器，可把 PDF 文件转换为供 RAG 和 LLM 管道使用的结构化数据，还能为 PDF 自动添加无障碍标签。它是一个库和命令行工具，不是桌面应用，也不是托管服务。本评测依据 [opendataloader.org](https://opendataloader.org)、[GitHub 仓库](https://github.com/opendataloader-project/opendataloader-pdf)和 PyPI，核查日期为 2026 年 11 月 15 日；PromptQuorum 没有安装或运行过它。',
    metaDescription: 'OpenDataLoader PDF 评测：Apache 2.0 开源 PDF 解析器，输出 JSON 和 Markdown。需要 Java 11 及以上；据 README，默认模式本地运行。基准测试数据来自开发方。',
    twitterDescription: 'OpenDataLoader PDF 评测：面向 RAG 的开源 PDF 解析器。哪些部分在本地运行，混合模式带来什么变化，为何需要 Java，资料又留下了哪些未知。',
    audience: '为 PDF 构建 RAG 或 LLM 管道，并想了解 OpenDataLoader PDF 输出什么、运行需要什么、实际有多少环节在本地完成，以及哪些说法出自开发方自己的开发者。',
    readTime: '阅读约7分钟',
    educationalLevel: 'Advanced',
    affiliateDisclosure: false,
    primaryTerm: 'OpenDataLoader PDF 评测',
    targetKeywords: [
      'opendataloader pdf 评测',
      'opendataloader pdf 安装',
      'opendataloader pdf 混合模式',
      'rag pdf 解析器',
      'pdf 转 markdown llm',
      'opendataloader 对比 docling',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock: '**OpenDataLoader PDF（版本 2.5.22）是一个 Apache 2.0 开源解析器，可把 PDF 转换为带边界框的 JSON、Markdown 和 HTML，供 RAG 管道使用。** 它需要 Java 11 或更高版本和终端，是开发者工具，不是应用。',
    quickAnswerTop: {
      zh: {
        question: 'OpenDataLoader PDF 会把我的 PDF 发送到云服务吗？',
        answer: '默认模式下不会：README 称它“100% locally”处理文件，没有 API 调用，也没有数据传输。这些是开发方的说法；PromptQuorum 没有检查过网络流量或代码，遥测情况也没有文档说明。增加 OCR 和更好表格处理的混合模式使用一个单独的后端，该后端可以指向远程地址，此时页面会被发送到你所指定的地方。',
        bullets: [
          '输入：仅限 PDF 文件；不处理 Word、Excel 和 PowerPoint 文件。',
          '输出：Markdown、带边界框和标题层级的 JSON、HTML，或带注释的 PDF。',
          '仓库：GitHub 星标 ' + st.zh('opendataloader-pdf') + '。',
        ],
        updatedDate: '2026-11-15',
      },
    },
    toc: [
      { label: '快速回答', anchor: 'quick-answer' },
      { label: 'OpenDataLoader PDF 是什么？', anchor: 'what-is-opendataloader-pdf' },
      { label: '获取方式', anchor: 'get-it' },
      { label: '本地与混合模式的数据流向', anchor: 'privacy' },
      { label: '资料证实的功能', anchor: 'key-features' },
      { label: '基准测试：开发方的说法', anchor: 'benchmarks' },
      { label: '许可证与价格', anchor: 'pricing' },
      { label: '适合谁使用', anchor: 'who-should-use' },
      { label: '我们无法核实的内容', anchor: 'who-should-not-use' },
      { label: '竞品与替代方案', anchor: 'vs-alternatives' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '资料来源', anchor: 'sources' },
      { label: '相关阅读', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '核心要点',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'OpenDataLoader PDF 读取 PDF，并把其中的文本、表格、标题和元素位置以结构化数据的形式返回，供 RAG 管道或语言模型使用。',
          },
          {
            type: 'plain-terms',
            text: '你可以通过 Python、Node.js、Java 或命令行对 PDF 运行它，它会写出一个 Markdown 或 JSON 文件，保留标题、表格和阅读顺序，而不是一整块纯文本。',
          },
        ],
        items: [
          '维护状态：最新版本 2.5.22 发布于 2026 年 11 月 12 日，仓库最近一次更新在 2026 年 11 月 14 日，因此不触发停更警告。',
          '范围：面向开发者的解析库，输入仅限 PDF，另有可选的无障碍自动标记功能。',
          '费用：核心部分免费；另有企业版，未公布价格。',
          '基准测试：“#1”的排名是项目自己的说法，且仅适用于混合模式。',
          '未核实：遥测、Docker 打包和支持的操作系统列表，项目均未说明。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测依据项目网站、GitHub 仓库和 PyPI，核查日期为 2026 年 11 月 15 日。PromptQuorum 没有测试过 OpenDataLoader PDF，因此这里不评估速度、准确率和内存占用。',
          },
        ],
      },
      overview: {
        id: 'what-is-opendataloader-pdf',
        title: 'OpenDataLoader PDF 是什么？',
        content: [
          '**OpenDataLoader PDF 把 PDF 转换为面向 AI 的数据：用于分块的 Markdown、用于标注来源的带边界框 JSON、HTML，或带注释的 PDF。** 它能识别标题、表格、列表和阅读顺序，JSON 中保留标题层级、字体以及每个元素的位置。它以库的形式提供，带有 Python、Node.js 和 Java SDK 以及一个命令行工具。',
          '开发方是 GitHub 组织 opendataloader-project，网站页脚写着“© 2026 OpenDataLoader”。主页称无障碍方面的工作是与 Hancom 以及 Dual Lab（主页称其为 veraPDF 的开发者之一）一起完成的；它并没有说解析器由 Hancom 制作。资料没有说明由哪个法律实体维护该项目。另一款企业产品 Hancom Data Loader 标注为“Coming Soon”，不属于开源核心。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**OpenDataLoader PDF 需要先装好 Java 运行时，再通过包管理器安装。** 没有桌面安装程序，也没有应用商店页面。',
        ],
        columns: ['选项', '获取方式'],
        rows: [
          { '选项': 'Python（pip）', '获取方式': '先装 Java 11+，再运行 `pip install -U opendataloader-pdf`（[PyPI](https://pypi.org/project/opendataloader-pdf/)）；同时会加入命令行工具' },
          { '选项': 'Node.js', '获取方式': 'npm 上的 `@opendataloader/pdf`，参见 [Node.js 快速入门](https://opendataloader.org/docs/quick-start-nodejs)' },
          { '选项': 'Java（Maven）', '获取方式': '`org.opendataloader:opendataloader-pdf-core`，参见 [Java 快速入门](https://opendataloader.org/docs/quick-start-java)' },
          { '选项': '混合模式', '获取方式': '`pip install "opendataloader-pdf[hybrid]"`；README 称首次下载模型可能需要几分钟' },
          { '选项': '命令行压缩包', '获取方式': '[GitHub Releases](https://github.com/opendataloader-project/opendataloader-pdf/releases/tag/v2.5.22) 上的 `opendataloader-pdf-cli-2.5.22.zip`' },
          { '选项': '官方网站', '获取方式': '[opendataloader.org](https://opendataloader.org)' },
          { '选项': '隐私政策', '获取方式': '网站页脚链接的[隐私政策](https://accounts.hancom.com/policy/privacy/current/en)；该页面需要 JavaScript 才能显示' },
          { '选项': '源代码', '获取方式': '[github.com/opendataloader-project/opendataloader-pdf](https://github.com/opendataloader-project/opendataloader-pdf)，Apache 2.0' },
        ],
        note: '评测版本：2.5.22，2026 年 11 月 12 日发布；上游最近一次更新为 2026 年 11 月 14 日。需要终端和开发环境：Java 11 或更高版本必须在 PATH 中（用 `java -version` 检查），pip 方式需要 Python 3.11 或更高版本。快速入门页面写的是 Python 3.10，而 README 和 PyPI 写的是 3.11，请以 PyPI 为准。项目没有公布操作系统列表；PyPI 将该包标记为与操作系统无关。',
      },
      privacy: {
        id: 'privacy',
        title: '本地与混合模式的数据流向',
        content: [
          '**默认模式下，解析器在你自己的机器上运行：README 写着“100% locally”和“No API calls, no data transmission”，主页写着“No API keys, no cloud”。** 不需要 GPU，也没有公布内存需求。',
          '混合模式把难处理的页面发送给 AI 后端，从而增加 OCR、公式和图表处理，并提高表格准确率。该后端默认是 127.0.0.1 上的本地服务器，图片描述使用本地的 SmolVLM-256M 模型，但 `--hybrid-url` 选项可以接受任意地址。如果你把它指向远程服务器，页面就会发送到那里，“无云”的说法就不再适用于你的配置。',
        ],
        callouts: [
          {
            type: 'note',
            text: '这些是开发方的说法，不是审计结果。PromptQuorum 没有检查过网络流量或代码。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '资料证实的功能',
        content: [
          '**以下各项均来自网站、README 或 PyPI，这里没有一项经过测试。**',
        ],
        items: [
          '**版面分析。** XY-Cut++ 算法用于还原阅读顺序；表格提取包含合并单元格。',
          '**来源标注。** JSON 中的每个元素都带有边界框，因此答案可以指回页面上的某个位置。',
          '**OCR。** 仅在混合模式下可用；默认引擎是 EasyOCR，备选包括 RapidOCR、Tesseract、Apple Vision（仅 macOS）、NVIDIA Nemotron（带 CUDA 的 Linux x86_64）以及自动选择。项目称支持 80 多种语言，但没有按引擎给出细分。',
          '**AI 安全过滤。** 在文本到达模型之前，可以过滤掉隐藏文本、页面之外的内容和提示词注入模式。',
          '**LangChain。** `langchain-opendataloader-pdf` 包提供 `OpenDataLoaderPDFLoader`，并且发布了 [RAG 集成指南](https://opendataloader.org/docs/rag-integration)。',
          '**无障碍自动标记。** 可按 Well-Tagged PDF 规范为未加标签的 PDF 添加标签，并用 veraPDF 验证；PDF/UA 导出属于企业版。',
        ],
        note: 'README 没有提到与 LlamaIndex 或 MCP 的集成，本评测也不声称存在这类集成。',
      },
      benchmarks: {
        id: 'benchmarks',
        title: '基准测试：开发方的说法',
        content: [
          '**主页和 README 中的“#1 in benchmarks”出自项目自己的 opendataloader-bench，且仅适用于混合模式。** 测试方法在[基准测试页面](https://opendataloader.org/docs/benchmark)中说明；PromptQuorum 没有复现其中任何数字。',
        ],
        items: [
          '总分：混合模式 0.907，不使用混合模式 0.831。',
          '表格准确率（TEDS）：混合模式 0.928，不使用混合模式 0.489。',
          '标题检测：Docling 0.824，混合模式 0.821，非混合模式 0.739，因此这一说法并非在每个类别中都成立。',
          '每页速度：Nutrient 0.008 秒，OpenDataLoader 本地模式 0.015 秒，混合模式 0.463 秒；README 的 FAQ 还写着“60+ pages per second”。',
        ],
      },
      pricing: {
        id: 'pricing',
        title: '许可证与价格',
        content: [
          '**根据仓库的 [LICENSE 文件](https://github.com/opendataloader-project/opendataloader-pdf/blob/main/LICENSE)，代码采用 Apache 2.0 许可；2.0 之前的版本采用 MPL 2.0。** Core、Audit 和 Auto-tag 可免费使用。',
          '企业版增加 PDF/UA 导出和可视化编辑工作室。未公布价格，需通过[联系页面](https://opendataloader.org/contact)咨询。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合谁使用',
        items: [
          '**构建 RAG 的人**：需要从手头已有的 PDF 中获得带位置信息的结构化 Markdown 或 JSON。',
          '**有 Java 运行时的团队**：能接受在安装 Python 包之前先装一个 JDK。',
          '**无障碍团队**：想为现有 PDF 自动添加标签，并用 veraPDF 检查。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们无法核实的内容',
        items: [
          '**准确率和速度。** 所有数字都出自项目自己，PromptQuorum 没有测量过。',
          '**遥测。** 没有找到相关说明，因此两种情况都不作假设。',
          '**Docker。** 主页展示了容器方式，但 README 没有，也没有找到镜像。',
          '**操作系统。** 没有公布支持列表，所查看的 CI 工作流都运行在 Linux 上。',
          '**其他文件类型。** 核心不处理 Word、Excel、PowerPoint 和图片输入；Hancom Data Loader 只是已宣布，尚未发布。',
          '**维护方。** 项目背后的法律实体没有说明。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        columns: ['应用', '平台', '价格 / 许可', '主要区别'],
        rows: [
          {
            '应用': '[Xberg](/zh/power-local-llm/xberg-review)',
            '平台': 'Mac、Windows、Linux',
            '价格 / 许可': '免费 / MIT',
            '主要区别': 'Rust 引擎，还能读取 Office 文件、音频和网址；OpenDataLoader PDF 只读取 PDF',
          },
          {
            '应用': '[CocoIndex](/zh/power-local-llm/cocoindex-review)',
            '平台': 'Mac、Windows、Linux',
            '价格 / 许可': '免费 / Apache 2.0',
            '主要区别': '让索引保持最新的管道框架；它需要像本工具这样的解析器，不能取代解析器',
          },
          {
            '应用': '[Unstructured](/zh/power-local-llm/unstructured-review)',
            '平台': 'Mac、Windows、Linux',
            '价格 / 许可': '免费库 / Apache 2.0；云 API 为可选付费',
            '主要区别': 'Python ETL 库，将 PDF、DOCX、PPTX、HTML、电子邮件和图片读取为 JSON 元素；OpenDataLoader PDF 只读取 PDF',
          },
          {
            '应用': '[Nutrient](/zh/power-local-llm/nutrient-review)',
            '平台': 'iOS、Android、Mac、Windows、Linux、Web',
            '价格 / 许可': '付费 / 商业',
            '主要区别': '商业闭源 PDF SDK，用于编辑、签名、OCR 和数据提取；OpenDataLoader PDF 采用 Apache 2.0',
          },
        ],
        note: 'Docling 和 Nutrient 出现在项目自己的基准测试表中，这是本评测依赖的唯一对比。选择前，请在各工具自己的页面上确认其当前价格、许可证和支持平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '不写 Python 也能使用吗？',
            a: '可以。pip 包会安装一个命令行工具，另有 Node.js 和 Java SDK，但所有方式都要求机器上装有 Java 11 或更高版本。',
          },
          {
            q: '循环处理多个文件时，为什么每次调用都很慢？',
            a: 'README 称每次 `convert()` 调用都会启动一个 JVM 进程，因此建议在一次调用中传入多个文件或一个文件夹。',
          },
          {
            q: '能处理扫描版 PDF 吗？',
            a: '只能通过运行 OCR 的混合模式；默认模式不支持。',
          },
          {
            q: 'Hancom Data Loader 是同一款产品吗？',
            a: '不是。它是另一款企业产品，计划读取 DOCX、XLSX、PPTX、HWP 和图片；README 给出的目标是 2026 年第二或第三季度，核查时仍未发布。',
          },
          {
            q: '如何把它加入 LangChain 管道？',
            a: '按 README 的说明，安装 `langchain-opendataloader-pdf` 并使用其中的 `OpenDataLoaderPDFLoader`。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: 'OpenDataLoader PDF 是一个发布活跃、采用 Apache 2.0 的方案，可从 PDF 中提取带位置信息的结构化 Markdown 和 JSON，其默认模式在文档中被描述为完全本地运行。但另一方面，它在 pip 之前需要先装 Java，只读取 PDF，排名第一出自项目自己编写的基准测试且仅限混合模式，遥测和维护方均未说明，PromptQuorum 也没有测试过。它适合把 PDF 送入 RAG 并能接受终端配置的开发者；如果需要处理 PDF 以外的文件，请对比 [Xberg](/zh/power-local-llm/xberg-review)。',
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[OpenDataLoader 网站](https://opendataloader.org) — 产品概览、基准测试和企业版，核查于 2026 年 11 月 15 日。',
          '[GitHub 上的 OpenDataLoader PDF](https://github.com/opendataloader-project/opendataloader-pdf) — README、许可证、2.5.22 版本和仓库活跃度，核查于 2026 年 11 月 15 日。',
          '[PyPI 上的 opendataloader-pdf](https://pypi.org/project/opendataloader-pdf/) — 包版本 2.5.22 和 Python 要求，核查于 2026 年 11 月 15 日。',
          '[Python 快速入门](https://opendataloader.org/docs/quick-start-python) — 安装步骤及其所写的 Python 版本，核查于 2026 年 11 月 15 日。',
          '[基准测试方法](https://opendataloader.org/docs/benchmark) — 项目自己的分数如何得出，核查于 2026 年 11 月 15 日。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Xberg 评测](/zh/power-local-llm/xberg-review) — 支持多种文件类型的文档智能引擎。',
          '[CocoIndex 评测](/zh/power-local-llm/cocoindex-review) — 让 RAG 索引保持最新的框架。',
          '[本地 LLM 软件目录](/zh/directory) — 本地 AI 工具的完整目录。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'OpenDataLoader PDF 评测：面向 RAG 的开源 PDF 解析器',
      description: 'OpenDataLoader PDF 评测：面向 RAG 管道的 Apache 2.0 PDF 解析器，输出 JSON、Markdown 和边界框。涵盖安装要求、本地与混合模式的数据流向、开发方的基准测试，以及资料未能证实的内容。',
      url: 'https://www.promptquorum.com/zh/power-local-llm/opendataloader-pdf-review',
      inLanguage: 'zh',
      datePublished: '2026-11-15',
      dateModified: '2026-11-17',
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      educationalLevel: 'Advanced',
      proficiencyLevel: 'Advanced',
      audience: {
        '@type': 'Audience',
        audienceType: '正在为 RAG 和 LLM 管道评估开源 PDF 解析器的开发者',
      },
      about: [
        { '@type': 'Thing', name: 'OpenDataLoader PDF' },
        { '@type': 'Thing', name: 'PDF 解析' },
        { '@type': 'Thing', name: '检索增强生成' },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/zh/power-local-llm/opendataloader-pdf-review',
      },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '首页', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/zh/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'OpenDataLoader PDF 评测', item: 'https://www.promptquorum.com/zh/power-local-llm/opendataloader-pdf-review' },
      ],
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-15',
    dateModified: '2026-11-17',
    next_refresh_due: '2027-05-15',
    theme: 'RAG & Document Chat',
    heroImage: '/images/opendataloader-pdf-review-hero-es.webp',
    title: 'Reseña de OpenDataLoader PDF: parser de PDF de código abierto para RAG',
    seoTitle: 'Reseña de OpenDataLoader PDF: parser de PDF abierto',
    intro: 'OpenDataLoader PDF es un parser de código abierto que convierte archivos PDF en datos estructurados para pipelines de RAG y de LLM, y que también puede etiquetar PDF de forma automática para la accesibilidad. Es una biblioteca y una herramienta de línea de comandos, no una app de escritorio ni un servicio alojado. Esta reseña se basa en [opendataloader.org](https://opendataloader.org), el [repositorio de GitHub](https://github.com/opendataloader-project/opendataloader-pdf) y PyPI, consultados el 15 de noviembre de 2026; PromptQuorum no lo ha instalado ni ejecutado.',
    metaDescription: 'Reseña de OpenDataLoader PDF: parser Apache 2.0 para RAG. Requiere Java 11+; según el README, el modo predeterminado es local. Benchmarks del fabricante.',
    twitterDescription: 'Reseña de OpenDataLoader PDF: un parser de PDF de código abierto para RAG. Qué se ejecuta en local, qué cambia el modo híbrido, qué requiere Java y qué dejan abierto las fuentes.',
    audience: 'Desarrolladores que crean pipelines de RAG o de LLM sobre PDF y quieren saber qué genera OpenDataLoader PDF, qué necesita para funcionar, cuán local es en realidad y qué afirmaciones son del propio fabricante.',
    readTime: '7 min de lectura',
    educationalLevel: 'Advanced',
    affiliateDisclosure: false,
    primaryTerm: 'reseña de OpenDataLoader PDF',
    targetKeywords: [
      'reseña opendataloader pdf',
      'instalar opendataloader pdf',
      'opendataloader pdf modo híbrido',
      'parser de pdf para rag',
      'pdf a markdown para llm',
      'opendataloader vs docling',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock: '**OpenDataLoader PDF (versión 2.5.22) es un parser de código abierto (Apache 2.0) que convierte PDF en JSON con cuadros delimitadores, Markdown y HTML para pipelines de RAG.** Necesita Java 11 o posterior y un terminal, así que es una herramienta para desarrolladores, no una app.',
    quickAnswerTop: {
      es: {
        question: '¿OpenDataLoader PDF envía mis PDF a un servicio en la nube?',
        answer: 'No en su modo predeterminado: el README dice que procesa los archivos "100% en local", sin llamadas a la API ni transmisión de datos. Son afirmaciones del fabricante; PromptQuorum no ha inspeccionado el tráfico de red ni el código, y la telemetría no está documentada. El modo híbrido, que añade OCR y un mejor manejo de tablas, usa un backend aparte al que puedes apuntar a una dirección remota; en ese caso tus páginas van adonde lo indiques.',
        bullets: [
          'Entrada: solo archivos PDF; los archivos de Word, Excel y PowerPoint no se procesan.',
          'Salida: Markdown, JSON con cuadros delimitadores y niveles de encabezado, HTML o un PDF anotado.',
          'Repositorio: ' + st.es('opendataloader-pdf') + ' estrellas en GitHub.',
        ],
        updatedDate: '2026-11-15',
      },
    },
    toc: [
      {
        label: 'Respuesta rápida',
        anchor: 'quick-answer',
      },
      {
        label: '¿Qué es OpenDataLoader PDF?',
        anchor: 'what-is-opendataloader-pdf',
      },
      {
        label: 'Cómo conseguirlo',
        anchor: 'get-it',
      },
      {
        label: 'Flujo de datos local e híbrido',
        anchor: 'privacy',
      },
      {
        label: 'Funciones confirmadas por las fuentes',
        anchor: 'key-features',
      },
      {
        label: 'Benchmarks: las afirmaciones del fabricante',
        anchor: 'benchmarks',
      },
      {
        label: 'Licencia y precio',
        anchor: 'pricing',
      },
      {
        label: 'Para quién es',
        anchor: 'who-should-use',
      },
      {
        label: 'Lo que no pudimos verificar',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Competidores y alternativas',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Preguntas frecuentes',
        anchor: 'faq',
      },
      {
        label: 'Veredicto',
        anchor: 'verdict',
      },
      {
        label: 'Fuentes',
        anchor: 'sources',
      },
      {
        label: 'Lecturas relacionadas',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Puntos clave',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'OpenDataLoader PDF lee un PDF y devuelve su texto, tablas, encabezados y posiciones de elementos como datos estructurados que un pipeline de RAG o un modelo de lenguaje pueden aprovechar.',
          },
          {
            type: 'plain-terms',
            text: 'Lo ejecutas desde Python, Node.js, Java o la línea de comandos sobre un PDF y genera un archivo Markdown o JSON que conserva encabezados, tablas y orden de lectura en lugar de un bloque de texto plano.',
          },
        ],
        items: [
          'Mantenimiento: la última versión, la 2.5.22, es del 12 de noviembre de 2026 y el repositorio se actualizó por última vez el 14 de noviembre de 2026, así que no se aplica ninguna advertencia de proyecto abandonado.',
          'Alcance: una biblioteca de parsing para desarrolladores, limitada a la entrada en PDF, con una función opcional de etiquetado automático para accesibilidad.',
          'Coste: el núcleo es gratuito; existe un nivel empresarial sin precio publicado.',
          'Benchmarks: el puesto "n.º 1" es del propio proyecto y solo vale para el modo híbrido.',
          'Sin verificar: el proyecto no indica nada sobre telemetría, empaquetado en Docker ni lista de sistemas operativos.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta reseña se basa en el sitio web del proyecto, el repositorio de GitHub y PyPI, consultados el 15 de noviembre de 2026. PromptQuorum no ha probado OpenDataLoader PDF, así que aquí no se evalúan la velocidad, la precisión ni el uso de memoria.',
          },
        ],
      },
      overview: {
        id: 'what-is-opendataloader-pdf',
        title: '¿Qué es OpenDataLoader PDF?',
        content: [
          '**OpenDataLoader PDF convierte PDF en datos listos para la IA: Markdown para dividir en fragmentos, JSON con cuadros delimitadores para citar fuentes, HTML o un PDF anotado.** Lee encabezados, tablas, listas y orden de lectura, y el JSON conserva los niveles de encabezado, las fuentes tipográficas y la posición de cada elemento. Se distribuye como biblioteca con SDK para Python, Node.js y Java y como herramienta de línea de comandos.',
          'El fabricante es la organización de GitHub opendataloader-project, y el pie del sitio dice "© 2026 OpenDataLoader". La página de inicio afirma que el trabajo de accesibilidad se desarrolló con Hancom y con Dual Lab, que la página describe como desarrolladora de veraPDF; no dice que Hancom fabrique el parser. Las fuentes no indican qué entidad jurídica mantiene el proyecto. Un producto empresarial aparte, Hancom Data Loader, figura como "Coming Soon" y no forma parte del núcleo de código abierto.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Cómo conseguirlo',
        content: [
          '**OpenDataLoader PDF se instala desde un gestor de paquetes una vez que hay un entorno de ejecución de Java.** No hay instalador de escritorio ni ficha en una tienda de apps.',
        ],
        columns: [
          'Opción',
          'Cómo conseguirlo',
        ],
        rows: [
          {
            'Opción': 'Python (pip)',
            'Cómo conseguirlo': 'Java 11+ y luego `pip install -U opendataloader-pdf` ([PyPI](https://pypi.org/project/opendataloader-pdf/)); añade la CLI',
          },
          {
            'Opción': 'Node.js',
            'Cómo conseguirlo': '`@opendataloader/pdf` en npm, según el [inicio rápido de Node.js](https://opendataloader.org/docs/quick-start-nodejs)',
          },
          {
            'Opción': 'Java (Maven)',
            'Cómo conseguirlo': '`org.opendataloader:opendataloader-pdf-core`, según el [inicio rápido de Java](https://opendataloader.org/docs/quick-start-java)',
          },
          {
            'Opción': 'Modo híbrido',
            'Cómo conseguirlo': '`pip install "opendataloader-pdf[hybrid]"`; 1.ª descarga: minutos (README)',
          },
          {
            'Opción': 'Archivo de la CLI',
            'Cómo conseguirlo': '`opendataloader-pdf-cli-2.5.22.zip` en [GitHub Releases](https://github.com/opendataloader-project/opendataloader-pdf/releases/tag/v2.5.22)',
          },
          {
            'Opción': 'Sitio web',
            'Cómo conseguirlo': '[opendataloader.org](https://opendataloader.org)',
          },
          {
            'Opción': 'Política de privacidad',
            'Cómo conseguirlo': '[Política de privacidad](https://accounts.hancom.com/policy/privacy/current/en), enlazada desde el pie del sitio; la página necesita JavaScript para mostrarse',
          },
          {
            'Opción': 'Código fuente',
            'Cómo conseguirlo': '[github.com/opendataloader-project/opendataloader-pdf](https://github.com/opendataloader-project/opendataloader-pdf), Apache 2.0',
          },
        ],
        note: 'Versión revisada: 2.5.22, publicada el 12 de noviembre de 2026; última actualización del proyecto el 14 de noviembre de 2026. Hacen falta un terminal y un entorno de desarrollo: Java 11 o posterior debe estar en el PATH (compruébalo con `java -version`) y la vía pip necesita Python 3.11 o posterior. La página de inicio rápido dice Python 3.10, mientras que el README y PyPI dicen 3.11, así que sigue a PyPI. El proyecto no publica una lista de sistemas operativos; PyPI marca el paquete como independiente del sistema operativo.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flujo de datos local e híbrido',
        content: [
          '**En su modo predeterminado el parser se ejecuta en tu equipo: el README dice "100% locally" y "No API calls, no data transmission", y la página de inicio dice "No API keys, no cloud".** No hace falta GPU y no se publica ninguna cifra de RAM.',
          'El modo híbrido añade OCR, tratamiento de fórmulas y gráficos y mayor precisión en las tablas enviando las páginas difíciles a un backend de IA. De forma predeterminada ese backend es un servidor local en 127.0.0.1 y las descripciones de imágenes usan un modelo local SmolVLM-256M, pero la opción `--hybrid-url` acepta cualquier dirección. Si apuntas a un servidor remoto, tus páginas se envían allí y la frase "sin nube" ya no describe tu configuración.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Son afirmaciones del fabricante, no resultados de una auditoría. PromptQuorum no ha inspeccionado el tráfico de red ni el código.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Cada elemento de la lista procede del sitio web, del README o de PyPI; ninguno se ha probado aquí.**',
        ],
        items: [
          '**Análisis de diseño.** El algoritmo XY-Cut++ recupera el orden de lectura; las tablas se extraen, incluidas las celdas combinadas.',
          '**Citas.** Cada elemento del JSON lleva un cuadro delimitador, de modo que una respuesta puede remitir a un lugar de la página.',
          '**OCR.** Disponible solo en modo híbrido; el motor es EasyOCR por defecto, con RapidOCR, Tesseract, Apple Vision (solo macOS), NVIDIA Nemotron (Linux x86_64 con CUDA) y una selección automática como alternativas. El proyecto afirma admitir más de 80 idiomas, sin desglose por motor.',
          '**Filtrado de seguridad para IA.** El texto oculto, el contenido fuera de la página y los patrones de inyección de prompts pueden filtrarse antes de que el texto llegue a un modelo.',
          '**LangChain.** El paquete `langchain-opendataloader-pdf` ofrece un `OpenDataLoaderPDFLoader` y hay publicada una [guía de integración con RAG](https://opendataloader.org/docs/rag-integration).',
          '**Etiquetado automático de accesibilidad.** Los PDF sin etiquetar pueden etiquetarse siguiendo la especificación Well-Tagged PDF, con validación mediante veraPDF; la exportación a PDF/UA pertenece al nivel empresarial.',
        ],
        note: 'El README no menciona ninguna integración con LlamaIndex ni con MCP, y esta reseña tampoco afirma que exista.',
      },
      benchmarks: {
        id: 'benchmarks',
        title: 'Benchmarks: las afirmaciones del fabricante',
        content: [
          '**La afirmación "#1 in benchmarks" de la página de inicio y del README procede de opendataloader-bench, el benchmark del propio proyecto, y vale solo para el modo híbrido.** El método se describe en la [página del benchmark](https://opendataloader.org/docs/benchmark); PromptQuorum no ha reproducido ninguna cifra.',
        ],
        items: [
          'Puntuación global: 0.907 en modo híbrido frente a 0.831 sin él.',
          'Precisión en tablas (TEDS): 0.928 en modo híbrido frente a 0.489 sin él.',
          'Detección de encabezados: Docling 0.824, híbrido 0.821, no híbrido 0.739, así que la afirmación no se cumple en todas las categorías.',
          'Velocidad por página: Nutrient 0.008 segundos, OpenDataLoader en local 0.015, híbrido 0.463; las preguntas frecuentes del README también dicen "60+ pages per second".',
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Licencia y precio',
        content: [
          '**El código tiene licencia Apache 2.0, según el [archivo LICENSE](https://github.com/opendataloader-project/opendataloader-pdf/blob/main/LICENSE) del repositorio; las versiones anteriores a la 2.0 tenían licencia MPL 2.0.** Core, Audit y Auto-tag son de uso gratuito.',
          'Un nivel empresarial añade la exportación a PDF/UA y un estudio de edición visual. No se publica ningún precio y las solicitudes se hacen por la [página de contacto](https://opendataloader.org/contact).',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Quienes construyen RAG** y necesitan Markdown o JSON estructurado con posiciones a partir de PDF que ya tienen.',
          '**Equipos con un entorno de Java** que aceptan instalar un JDK antes de un paquete de Python.',
          '**Equipos de accesibilidad** que quieren etiquetar automáticamente PDF existentes y comprobarlos con veraPDF.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Precisión y velocidad.** Todas las cifras son del proyecto; PromptQuorum no midió ninguna.',
          '**Telemetría.** No se encontró ninguna declaración, así que no se da por sentado nada en ningún sentido.',
          '**Docker.** La página de inicio muestra una vía con contenedor, pero el README no y no se encontró ninguna imagen.',
          '**Sistemas operativos.** No se publica ninguna lista de compatibilidad y los flujos de CI revisados se ejecutan en Linux.',
          '**Otros tipos de archivo.** El núcleo no procesa entradas de Word, Excel, PowerPoint ni imágenes; Hancom Data Loader está anunciado, no publicado.',
          '**Mantenedor.** No se nombra la entidad jurídica que está detrás del proyecto.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        columns: [
          'App',
          'Plataformas',
          'Precio / licencia',
          'Diferencia principal',
        ],
        rows: [
          {
            App: '[Xberg](/es/power-local-llm/xberg-review)',
            Plataformas: 'Mac, Windows, Linux',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia principal': 'Motor en Rust que además lee archivos de Office, audio y URL; OpenDataLoader PDF solo lee PDF',
          },
          {
            App: '[CocoIndex](/es/power-local-llm/cocoindex-review)',
            Plataformas: 'Mac, Windows, Linux',
            'Precio / licencia': 'Gratis / Apache 2.0',
            'Diferencia principal': 'Framework de pipelines que mantiene un índice al día; necesita un parser como este y no lo sustituye',
          },
          {
            App: '[Unstructured](/es/power-local-llm/unstructured-review)',
            Plataformas: 'Mac, Windows, Linux',
            'Precio / licencia': 'Biblioteca gratis / Apache 2.0; API en la nube de pago opcional',
            'Diferencia principal': 'Biblioteca ETL de Python que lee PDF, DOCX, PPTX, HTML, correos e imágenes y los convierte en elementos JSON; OpenDataLoader PDF solo lee PDF',
          },
          {
            App: '[Nutrient](/es/power-local-llm/nutrient-review)',
            Plataformas: 'iOS, Android, Mac, Windows, Linux, Web',
            'Precio / licencia': 'De pago / comercial',
            'Diferencia principal': 'SDK PDF comercial y de código cerrado para edición, firma, OCR y extracción de datos; OpenDataLoader PDF usa Apache 2.0',
          },
        ],
        note: 'Docling y Nutrient aparecen en la tabla de benchmarks del propio proyecto, que es la única comparación en la que se apoya esta reseña. Confirma el precio, la licencia y las plataformas actuales de cada herramienta en su propia ficha antes de elegir.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Puedo usarlo sin escribir Python?',
            a: 'Sí. El paquete de pip instala una herramienta de línea de comandos y existen SDK para Node.js y Java, pero todas las vías necesitan Java 11 o posterior en el equipo.',
          },
          {
            q: '¿Por qué cada llamada va lenta cuando recorro archivos en un bucle?',
            a: 'El README dice que cada llamada a `convert()` inicia un proceso de JVM, por lo que recomienda pasar muchos archivos o una carpeta en una sola llamada.',
          },
          {
            q: '¿Funciona con PDF escaneados?',
            a: 'Solo mediante el modo híbrido, que ejecuta OCR; el modo predeterminado no lo hace.',
          },
          {
            q: '¿Hancom Data Loader es el mismo producto?',
            a: 'No. Es un producto empresarial aparte, previsto para leer DOCX, XLSX, PPTX, HWP e imágenes; el README daba como objetivo el segundo o tercer trimestre de 2026 y seguía sin publicarse cuando se consultó.',
          },
          {
            q: '¿Cómo lo añado a un pipeline de LangChain?',
            a: 'Instala `langchain-opendataloader-pdf` y usa su `OpenDataLoaderPDFLoader`, tal como describe el README.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: 'OpenDataLoader PDF es una forma Apache 2.0, con versiones publicadas de manera activa, de obtener Markdown y JSON estructurados con posiciones a partir de PDF, y su modo predeterminado está documentado como totalmente local. En contra, necesita Java antes que pip, solo lee PDF, queda primero en un benchmark escrito por el propio proyecto y solo en modo híbrido, no declara la telemetría ni quién lo mantiene, y PromptQuorum no lo ha probado. Encaja con desarrolladores que alimentan RAG con PDF y aceptan una configuración por terminal; para archivos que no sean PDF, compara [Xberg](/es/power-local-llm/xberg-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de OpenDataLoader](https://opendataloader.org) — resumen del producto, benchmarks y nivel empresarial, consultado el 15 de noviembre de 2026.',
          '[OpenDataLoader PDF en GitHub](https://github.com/opendataloader-project/opendataloader-pdf) — README, licencia, versión 2.5.22 y actividad del repositorio, consultados el 15 de noviembre de 2026.',
          '[opendataloader-pdf en PyPI](https://pypi.org/project/opendataloader-pdf/) — versión 2.5.22 del paquete y requisito de Python, consultados el 15 de noviembre de 2026.',
          '[Inicio rápido de Python](https://opendataloader.org/docs/quick-start-python) — pasos de instalación y la versión de Python que indica, consultados el 15 de noviembre de 2026.',
          '[Metodología del benchmark](https://opendataloader.org/docs/benchmark) — cómo se obtienen las puntuaciones del propio proyecto, consultada el 15 de noviembre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Xberg](/es/power-local-llm/xberg-review) — un motor de inteligencia documental para muchos tipos de archivo.',
          '[Reseña de CocoIndex](/es/power-local-llm/cocoindex-review) — un framework que mantiene al día los índices de RAG.',
          '[Directorio de software de LLM local](/es/directory) — el catálogo completo de herramientas de IA locales.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Reseña de OpenDataLoader PDF: parser de PDF de código abierto para RAG',
      description: 'Reseña de OpenDataLoader PDF: un parser de PDF Apache 2.0 para pipelines de RAG con JSON, Markdown y cuadros delimitadores. Requisitos de instalación, flujo de datos local e híbrido, benchmarks del fabricante y lo que las fuentes dejan sin confirmar.',
      url: 'https://www.promptquorum.com/es/power-local-llm/opendataloader-pdf-review',
      inLanguage: 'es',
      datePublished: '2026-11-15',
      dateModified: '2026-11-17',
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      educationalLevel: 'Advanced',
      proficiencyLevel: 'Advanced',
      audience: {
        '@type': 'Audience',
        audienceType: 'Desarrolladores que evalúan un parser de PDF de código abierto para pipelines de RAG y de LLM',
      },
      about: [
        {
          '@type': 'Thing',
          name: 'OpenDataLoader PDF',
        },
        {
          '@type': 'Thing',
          name: 'Análisis de PDF',
        },
        {
          '@type': 'Thing',
          name: 'Generación aumentada por recuperación (RAG)',
        },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/es/power-local-llm/opendataloader-pdf-review',
      },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Inicio',
          item: 'https://www.promptquorum.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Power Local LLM',
          item: 'https://www.promptquorum.com/es/power-local-llm',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Reseña de OpenDataLoader PDF',
          item: 'https://www.promptquorum.com/es/power-local-llm/opendataloader-pdf-review',
        },
      ],
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-15',
    dateModified: '2026-11-17',
    next_refresh_due: '2027-05-15',
    theme: 'RAG & Document Chat',
    heroImage: '/images/opendataloader-pdf-review-hero-pt.webp',
    title: 'Análise do OpenDataLoader PDF: parser de PDF de código aberto para RAG',
    seoTitle: 'Análise do OpenDataLoader PDF: parser de PDF aberto',
    intro: 'O OpenDataLoader PDF é um parser de código aberto que transforma arquivos PDF em dados estruturados para pipelines de RAG e de LLM, e que também pode etiquetar PDFs automaticamente para acessibilidade. É uma biblioteca e uma ferramenta de linha de comando, não um aplicativo de desktop nem um serviço hospedado. Esta análise se baseia no [opendataloader.org](https://opendataloader.org), no [repositório do GitHub](https://github.com/opendataloader-project/opendataloader-pdf) e no PyPI, consultados em 15 de novembro de 2026; o PromptQuorum não o instalou nem o executou.',
    metaDescription: 'Análise do OpenDataLoader PDF: parser Apache 2.0 para RAG com JSON. Exige Java 11+; segundo o README, o modo padrão é local. Benchmarks do fabricante.',
    twitterDescription: 'Análise do OpenDataLoader PDF: um parser de PDF de código aberto para RAG. O que roda localmente, o que o modo híbrido muda, o que exige Java e o que as fontes deixam em aberto.',
    audience: 'Desenvolvedores que criam pipelines de RAG ou de LLM sobre PDFs e querem saber o que o OpenDataLoader PDF gera, o que ele precisa para rodar, o quanto ele é realmente local e quais afirmações são do próprio fabricante.',
    readTime: '7 min de leitura',
    educationalLevel: 'Advanced',
    affiliateDisclosure: false,
    primaryTerm: 'análise do OpenDataLoader PDF',
    targetKeywords: [
      'análise opendataloader pdf',
      'instalar opendataloader pdf',
      'opendataloader pdf modo híbrido',
      'parser de pdf para rag',
      'pdf para markdown para llm',
      'opendataloader vs docling',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock: '**O OpenDataLoader PDF (versão 2.5.22) é um parser de código aberto (Apache 2.0) que converte PDFs em JSON com caixas delimitadoras, Markdown e HTML para pipelines de RAG.** Ele exige Java 11 ou superior e um terminal, então é uma ferramenta para desenvolvedores, não um aplicativo.',
    quickAnswerTop: {
      pt: {
        question: 'O OpenDataLoader PDF envia meus PDFs para um serviço na nuvem?',
        answer: 'Não no modo padrão: o README diz que ele processa os arquivos "100% localmente", sem chamadas de API e sem transmissão de dados. São afirmações do fabricante; o PromptQuorum não inspecionou o tráfego de rede nem o código, e a telemetria não está documentada. O modo híbrido, que acrescenta OCR e um tratamento melhor de tabelas, usa um backend separado que você pode apontar para um endereço remoto; nesse caso, suas páginas vão para onde você apontar.',
        bullets: [
          'Entrada: apenas arquivos PDF; arquivos do Word, Excel e PowerPoint não são processados.',
          'Saída: Markdown, JSON com caixas delimitadoras e níveis de título, HTML ou um PDF anotado.',
          'Repositório: ' + st.pt('opendataloader-pdf') + ' estrelas no GitHub.',
        ],
        updatedDate: '2026-11-15',
      },
    },
    toc: [
      {
        label: 'Resposta rápida',
        anchor: 'quick-answer',
      },
      {
        label: 'O que é o OpenDataLoader PDF?',
        anchor: 'what-is-opendataloader-pdf',
      },
      {
        label: 'Onde obter',
        anchor: 'get-it',
      },
      {
        label: 'Fluxo de dados local e híbrido',
        anchor: 'privacy',
      },
      {
        label: 'Recursos confirmados pelas fontes',
        anchor: 'key-features',
      },
      {
        label: 'Benchmarks: as afirmações do fabricante',
        anchor: 'benchmarks',
      },
      {
        label: 'Licença e preço',
        anchor: 'pricing',
      },
      {
        label: 'Para quem é',
        anchor: 'who-should-use',
      },
      {
        label: 'O que não conseguimos verificar',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Concorrentes e alternativas',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Perguntas frequentes',
        anchor: 'faq',
      },
      {
        label: 'Veredito',
        anchor: 'verdict',
      },
      {
        label: 'Fontes',
        anchor: 'sources',
      },
      {
        label: 'Leitura relacionada',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Pontos principais',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O OpenDataLoader PDF lê um PDF e devolve seu texto, tabelas, títulos e posições dos elementos como dados estruturados que um pipeline de RAG ou um modelo de linguagem podem usar.',
          },
          {
            type: 'plain-terms',
            text: 'Você o executa a partir de Python, Node.js, Java ou da linha de comando sobre um PDF, e ele grava um arquivo Markdown ou JSON que mantém títulos, tabelas e ordem de leitura em vez de um bloco de texto corrido.',
          },
        ],
        items: [
          'Manutenção: a versão mais recente, a 2.5.22, é de 12 de novembro de 2026 e o repositório foi atualizado pela última vez em 14 de novembro de 2026, então nenhum aviso de projeto abandonado se aplica.',
          'Escopo: uma biblioteca de parsing para desenvolvedores, limitada à entrada em PDF, com um recurso opcional de etiquetagem automática para acessibilidade.',
          'Custo: o núcleo é gratuito; existe um nível empresarial sem preço divulgado.',
          'Benchmarks: o primeiro lugar ("#1") é do próprio projeto e vale apenas para o modo híbrido.',
          'Não verificado: o projeto não informa nada sobre telemetria, empacotamento em Docker nem a lista de sistemas operacionais.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia no site do projeto, no repositório do GitHub e no PyPI, consultados em 15 de novembro de 2026. O PromptQuorum não testou o OpenDataLoader PDF, então velocidade, precisão e uso de memória não são avaliados aqui.',
          },
        ],
      },
      overview: {
        id: 'what-is-opendataloader-pdf',
        title: 'O que é o OpenDataLoader PDF?',
        content: [
          '**O OpenDataLoader PDF transforma PDFs em dados prontos para IA: Markdown para dividir em trechos, JSON com caixas delimitadoras para citar fontes, HTML ou um PDF anotado.** Ele lê títulos, tabelas, listas e ordem de leitura, e o JSON mantém os níveis de título, as fontes tipográficas e a posição de cada elemento. É distribuído como biblioteca, com SDKs para Python, Node.js e Java, e como ferramenta de linha de comando.',
          'O fabricante é a organização do GitHub opendataloader-project, e o rodapé do site diz "© 2026 OpenDataLoader". A página inicial diz que o trabalho de acessibilidade foi desenvolvido com a Hancom e com a Dual Lab, que a página descreve como desenvolvedora do veraPDF; ela não diz que a Hancom fabrica o parser. As fontes não informam qual entidade jurídica mantém o projeto. Um produto empresarial separado, o Hancom Data Loader, aparece como "Coming Soon" e não faz parte do núcleo de código aberto.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Onde obter',
        content: [
          '**O OpenDataLoader PDF é instalado a partir de um gerenciador de pacotes depois que um ambiente de execução do Java está instalado.** Não há instalador de desktop nem página em loja de aplicativos.',
        ],
        columns: [
          'Opção',
          'Como obter',
        ],
        rows: [
          {
            'Opção': 'Python (pip)',
            'Como obter': 'Java 11+ e depois `pip install -U opendataloader-pdf` ([PyPI](https://pypi.org/project/opendataloader-pdf/)); adiciona a CLI',
          },
          {
            'Opção': 'Node.js',
            'Como obter': '`@opendataloader/pdf` no npm, conforme o [início rápido do Node.js](https://opendataloader.org/docs/quick-start-nodejs)',
          },
          {
            'Opção': 'Java (Maven)',
            'Como obter': '`org.opendataloader:opendataloader-pdf-core`, conforme o [início rápido do Java](https://opendataloader.org/docs/quick-start-java)',
          },
          {
            'Opção': 'Modo híbrido',
            'Como obter': '`pip install "opendataloader-pdf[hybrid]"`; o README diz que o primeiro download do modelo pode levar minutos',
          },
          {
            'Opção': 'Arquivo da CLI',
            'Como obter': '`opendataloader-pdf-cli-2.5.22.zip` no [GitHub Releases](https://github.com/opendataloader-project/opendataloader-pdf/releases/tag/v2.5.22)',
          },
          {
            'Opção': 'Site',
            'Como obter': '[opendataloader.org](https://opendataloader.org)',
          },
          {
            'Opção': 'Política de privacidade',
            'Como obter': '[Política de privacidade](https://accounts.hancom.com/policy/privacy/current/en), com link no rodapé do site; a página precisa de JavaScript para ser exibida',
          },
          {
            'Opção': 'Código-fonte',
            'Como obter': '[github.com/opendataloader-project/opendataloader-pdf](https://github.com/opendataloader-project/opendataloader-pdf), Apache 2.0',
          },
        ],
        note: 'Versão analisada: 2.5.22, lançada em 12 de novembro de 2026; última atualização do projeto em 14 de novembro de 2026. São necessários um terminal e um ambiente de desenvolvimento: o Java 11 ou superior precisa estar no PATH (verifique com `java -version`) e a via pip exige Python 3.11 ou superior. A página de início rápido diz Python 3.10, enquanto o README e o PyPI dizem 3.11, então siga o PyPI. O projeto não publica uma lista de sistemas operacionais; o PyPI marca o pacote como independente de sistema operacional.',
      },
      privacy: {
        id: 'privacy',
        title: 'Fluxo de dados local e híbrido',
        content: [
          '**No modo padrão, o parser roda na sua máquina: o README diz "100% locally", "No API calls, no data transmission", e a página inicial diz "No API keys, no cloud".** Não é necessária GPU, e nenhum valor de RAM é divulgado.',
          'O modo híbrido acrescenta OCR, tratamento de fórmulas e gráficos e maior precisão em tabelas, enviando as páginas difíceis para um backend de IA. Por padrão, esse backend é um servidor local em 127.0.0.1 e as descrições de imagens usam um modelo local SmolVLM-256M, mas a opção `--hybrid-url` aceita qualquer endereço. Se você apontar para um servidor remoto, suas páginas são enviadas para lá e a frase "sem nuvem" deixa de descrever a sua configuração.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'São afirmações do fabricante, não resultados de auditoria. O PromptQuorum não inspecionou o tráfego de rede nem o código.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Cada item abaixo vem do site, do README ou do PyPI; nenhum foi testado aqui.**',
        ],
        items: [
          '**Análise de layout.** O algoritmo XY-Cut++ recupera a ordem de leitura; as tabelas são extraídas, inclusive com células mescladas.',
          '**Citações.** Cada elemento do JSON traz uma caixa delimitadora, de modo que uma resposta pode apontar de volta para um lugar da página.',
          '**OCR.** Disponível apenas no modo híbrido; o mecanismo padrão é o EasyOCR, com RapidOCR, Tesseract, Apple Vision (somente macOS), NVIDIA Nemotron (Linux x86_64 com CUDA) e uma escolha automática como alternativas. O projeto afirma suportar mais de 80 idiomas, sem detalhamento por mecanismo.',
          '**Filtragem de segurança para IA.** Texto oculto, conteúdo fora da página e padrões de injeção de prompt podem ser filtrados antes de o texto chegar a um modelo.',
          '**LangChain.** O pacote `langchain-opendataloader-pdf` fornece um `OpenDataLoaderPDFLoader`, e há um [guia de integração com RAG](https://opendataloader.org/docs/rag-integration) publicado.',
          '**Etiquetagem automática de acessibilidade.** PDFs sem etiquetas podem ser etiquetados conforme a especificação Well-Tagged PDF, com validação pelo veraPDF; a exportação para PDF/UA pertence ao nível empresarial.',
        ],
        note: 'O README não cita nenhuma integração com LlamaIndex ou MCP, e esta análise também não afirma que exista.',
      },
      benchmarks: {
        id: 'benchmarks',
        title: 'Benchmarks: as afirmações do fabricante',
        content: [
          '**A afirmação "#1 in benchmarks" da página inicial e do README vem do opendataloader-bench, o benchmark do próprio projeto, e vale apenas para o modo híbrido.** O método é descrito na [página do benchmark](https://opendataloader.org/docs/benchmark); o PromptQuorum não reproduziu nenhum número.',
        ],
        items: [
          'Pontuação geral: 0.907 no modo híbrido contra 0.831 sem ele.',
          'Precisão em tabelas (TEDS): 0.928 no modo híbrido contra 0.489 sem ele.',
          'Detecção de títulos: Docling 0.824, híbrido 0.821, não híbrido 0.739, então a afirmação não vale para todas as categorias.',
          'Velocidade por página: Nutrient 0.008 segundo, OpenDataLoader local 0.015, híbrido 0.463; o FAQ do README também diz "60+ pages per second".',
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Licença e preço',
        content: [
          '**O código é licenciado sob a Apache 2.0, conforme o [arquivo LICENSE](https://github.com/opendataloader-project/opendataloader-pdf/blob/main/LICENSE) do repositório; as versões anteriores à 2.0 usavam a MPL 2.0.** Core, Audit e Auto-tag são de uso gratuito.',
          'Um nível empresarial acrescenta a exportação para PDF/UA e um estúdio de edição visual. Nenhum preço é divulgado, e as solicitações são feitas pela [página de contato](https://opendataloader.org/contact).',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem é',
        items: [
          '**Quem constrói RAG** e precisa de Markdown ou JSON estruturado com posições a partir de PDFs que já possui.',
          '**Equipes com um ambiente Java** que aceitam instalar um JDK antes de um pacote Python.',
          '**Equipes de acessibilidade** que querem etiquetar automaticamente PDFs existentes e verificá-los com o veraPDF.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Precisão e velocidade.** Todos os números são do projeto; nenhum foi medido pelo PromptQuorum.',
          '**Telemetria.** Nenhuma declaração foi encontrada, então nada é presumido em nenhum sentido.',
          '**Docker.** A página inicial mostra uma via com contêiner, mas o README não mostra e nenhuma imagem foi encontrada.',
          '**Sistemas operacionais.** Nenhuma lista de suporte é publicada, e os fluxos de CI verificados rodam em Linux.',
          '**Outros tipos de arquivo.** O núcleo não processa entradas do Word, Excel, PowerPoint nem imagens; o Hancom Data Loader foi anunciado, não lançado.',
          '**Mantenedor.** A entidade jurídica por trás do projeto não é nomeada.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        columns: [
          'App',
          'Plataformas',
          'Preço / licença',
          'Diferença principal',
        ],
        rows: [
          {
            App: '[Xberg](/pt/power-local-llm/xberg-review)',
            Plataformas: 'Mac, Windows, Linux',
            'Preço / licença': 'Grátis / MIT',
            'Diferença principal': 'Motor em Rust que também lê arquivos do Office, áudio e URLs; o OpenDataLoader PDF lê apenas PDFs',
          },
          {
            App: '[CocoIndex](/pt/power-local-llm/cocoindex-review)',
            Plataformas: 'Mac, Windows, Linux',
            'Preço / licença': 'Grátis / Apache 2.0',
            'Diferença principal': 'Framework de pipelines que mantém um índice atualizado; precisa de um parser como este e não o substitui',
          },
          {
            App: '[Unstructured](/pt/power-local-llm/unstructured-review)',
            Plataformas: 'Mac, Windows, Linux',
            'Preço / licença': 'Biblioteca grátis / Apache 2.0; API em nuvem paga opcional',
            'Diferença principal': 'Biblioteca ETL Python que lê PDF, DOCX, PPTX, HTML, e-mails e imagens como elementos JSON; o OpenDataLoader PDF lê apenas PDFs',
          },
          {
            App: '[Nutrient](/pt/power-local-llm/nutrient-review)',
            Plataformas: 'iOS, Android, Mac, Windows, Linux, Web',
            'Preço / licença': 'Pago / comercial',
            'Diferença principal': 'SDK PDF comercial e de código fechado para edição, assinatura, OCR e extração de dados; o OpenDataLoader PDF usa Apache 2.0',
          },
        ],
        note: 'Docling e Nutrient aparecem na tabela de benchmarks do próprio projeto, que é a única comparação em que esta análise se apoia. Confirme o preço, a licença e as plataformas atuais de cada ferramenta na página dela antes de escolher.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Posso usá-lo sem escrever Python?',
            a: 'Sim. O pacote do pip instala uma ferramenta de linha de comando, e existem SDKs para Node.js e Java, mas todas as vias exigem Java 11 ou superior na máquina.',
          },
          {
            q: 'Por que cada chamada fica lenta quando percorro arquivos em um laço?',
            a: 'O README diz que cada chamada a `convert()` inicia um processo da JVM, por isso recomenda passar vários arquivos ou uma pasta em uma única chamada.',
          },
          {
            q: 'Funciona com PDFs escaneados?',
            a: 'Somente pelo modo híbrido, que executa OCR; o modo padrão não faz isso.',
          },
          {
            q: 'O Hancom Data Loader é o mesmo produto?',
            a: 'Não. É um produto empresarial separado, planejado para ler DOCX, XLSX, PPTX, HWP e imagens; o README indicava como meta o segundo ou terceiro trimestre de 2026, e ele ainda não tinha sido lançado quando foi consultado.',
          },
          {
            q: 'Como o adiciono a um pipeline do LangChain?',
            a: 'Instale `langchain-opendataloader-pdf` e use o `OpenDataLoaderPDFLoader`, conforme descrito no README.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: 'O OpenDataLoader PDF é uma forma Apache 2.0, com versões lançadas de maneira ativa, de obter Markdown e JSON estruturados com posições a partir de PDFs, e seu modo padrão está documentado como totalmente local. Em contrapartida, ele exige Java antes do pip, lê apenas PDFs, fica em primeiro lugar em um benchmark escrito pelo próprio projeto e só no modo híbrido, não declara a telemetria nem quem o mantém, e não foi testado pelo PromptQuorum. Serve para desenvolvedores que alimentam RAG com PDFs e aceitam uma configuração por terminal; para arquivos além de PDF, compare o [Xberg](/pt/power-local-llm/xberg-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do OpenDataLoader](https://opendataloader.org) — visão geral do produto, benchmarks e nível empresarial, consultado em 15 de novembro de 2026.',
          '[OpenDataLoader PDF no GitHub](https://github.com/opendataloader-project/opendataloader-pdf) — README, licença, versão 2.5.22 e atividade do repositório, consultados em 15 de novembro de 2026.',
          '[opendataloader-pdf no PyPI](https://pypi.org/project/opendataloader-pdf/) — versão 2.5.22 do pacote e requisito de Python, consultados em 15 de novembro de 2026.',
          '[Início rápido do Python](https://opendataloader.org/docs/quick-start-python) — passos de instalação e a versão de Python que ele indica, consultados em 15 de novembro de 2026.',
          '[Metodologia do benchmark](https://opendataloader.org/docs/benchmark) — como as pontuações do próprio projeto são produzidas, consultada em 15 de novembro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura relacionada',
        items: [
          '[Análise do Xberg](/pt/power-local-llm/xberg-review) — um mecanismo de inteligência documental para muitos tipos de arquivo.',
          '[Análise do CocoIndex](/pt/power-local-llm/cocoindex-review) — um framework que mantém atualizados os índices de RAG.',
          '[Diretório de software de LLM local](/pt/directory) — o catálogo completo de ferramentas de IA local.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Análise do OpenDataLoader PDF: parser de PDF de código aberto para RAG',
      description: 'Análise do OpenDataLoader PDF: um parser de PDF Apache 2.0 para pipelines de RAG com JSON, Markdown e caixas delimitadoras. Requisitos de instalação, fluxo de dados local e híbrido, benchmarks do fabricante e o que as fontes deixam sem confirmação.',
      url: 'https://www.promptquorum.com/pt/power-local-llm/opendataloader-pdf-review',
      inLanguage: 'pt-BR',
      datePublished: '2026-11-15',
      dateModified: '2026-11-17',
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      educationalLevel: 'Advanced',
      proficiencyLevel: 'Advanced',
      audience: {
        '@type': 'Audience',
        audienceType: 'Desenvolvedores que avaliam um parser de PDF de código aberto para pipelines de RAG e de LLM',
      },
      about: [
        {
          '@type': 'Thing',
          name: 'OpenDataLoader PDF',
        },
        {
          '@type': 'Thing',
          name: 'Análise de PDF',
        },
        {
          '@type': 'Thing',
          name: 'Geração aumentada por recuperação (RAG)',
        },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/pt/power-local-llm/opendataloader-pdf-review',
      },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Início',
          item: 'https://www.promptquorum.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Power Local LLM',
          item: 'https://www.promptquorum.com/pt/power-local-llm',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Análise do OpenDataLoader PDF',
          item: 'https://www.promptquorum.com/pt/power-local-llm/opendataloader-pdf-review',
        },
      ],
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-15',
    dateModified: '2026-11-17',
    next_refresh_due: '2027-05-15',
    theme: 'RAG & Document Chat',
    heroImage: '/images/opendataloader-pdf-review-hero-ar.webp',
    title: 'مراجعة OpenDataLoader PDF: محلّل PDF مفتوح المصدر لـ RAG',
    seoTitle: 'مراجعة OpenDataLoader PDF: محلّل PDF مفتوح المصدر',
    intro: 'OpenDataLoader PDF محلّل مفتوح المصدر يحوّل ملفات PDF إلى بيانات منظمة لخطوط RAG وLLM، ويستطيع أيضًا وسم ملفات PDF تلقائيًا لإمكانية الوصول. وهو مكتبة وأداة سطر أوامر، وليس تطبيق سطح مكتب ولا خدمة مستضافة. تستند هذه المراجعة إلى [opendataloader.org](https://opendataloader.org) و[مستودع GitHub](https://github.com/opendataloader-project/opendataloader-pdf) وPyPI، وقد روجعت في 15 نوفمبر 2026؛ ولم تثبّت PromptQuorum البرنامج ولم تشغّله.',
    metaDescription: 'مراجعة OpenDataLoader PDF: محلّل PDF بترخيص Apache 2.0 لـ RAG. يحتاج Java 11+؛ وفق README يعمل الوضع الافتراضي محليًا. القياسات من المطوّر.',
    twitterDescription: 'مراجعة OpenDataLoader PDF: محلّل PDF مفتوح المصدر لـ RAG. ما يعمل محليًا، وما يغيّره الوضع الهجين، وما يحتاج إلى Java، وما تتركه المصادر مفتوحًا.',
    audience: 'مطورون يبنون خطوط RAG أو LLM فوق ملفات PDF ويريدون معرفة ما يخرجه OpenDataLoader PDF، وما يحتاجه للعمل، ومدى محليته فعلًا، وأي الادعاءات من المشروع نفسه.',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Advanced',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة OpenDataLoader PDF',
    targetKeywords: [
      'مراجعة opendataloader pdf',
      'تثبيت opendataloader pdf',
      'الوضع الهجين opendataloader pdf',
      'محلل pdf لـ rag',
      'تحويل pdf إلى markdown لـ llm',
      'opendataloader مقابل docling',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock: '**OpenDataLoader PDF (الإصدار 2.5.22) محلّل مفتوح المصدر بترخيص Apache 2.0 يحوّل ملفات PDF إلى JSON مع مربعات إحاطة وMarkdown وHTML لخطوط RAG.** يحتاج إلى Java 11 أو أحدث وإلى طرفية، لذا فهو أداة للمطورين وليس تطبيقًا.',
    quickAnswerTop: {
      ar: {
        question: 'هل يرسل OpenDataLoader PDF ملفات PDF الخاصة بي إلى خدمة سحابية؟',
        answer: 'ليس في وضعه الافتراضي: يقول README إنه يعالج الملفات "100% محليًا" دون استدعاءات API ودون نقل بيانات. هذه تصريحات الجهة المطوِّرة؛ ولم تفحص PromptQuorum حركة الشبكة ولا الشيفرة، كما أن القياس عن بُعد غير موثّق. أما الوضع الهجين، الذي يضيف OCR ومعالجة أفضل للجداول، فيستخدم خلفية منفصلة يمكنك توجيهها إلى عنوان بعيد، وعندها تذهب صفحاتك إلى حيث توجّهها.',
        bullets: [
          'المدخلات: ملفات PDF فقط؛ ولا تُعالَج ملفات Word وExcel وPowerPoint.',
          'المخرجات: Markdown، أو JSON مع مربعات الإحاطة ومستويات العناوين، أو HTML، أو ملف PDF موضَّح بتعليقات.',
          'المستودع: ' + st.ar('opendataloader-pdf') + ' نجمة على GitHub.',
        ],
        updatedDate: '2026-11-15',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو OpenDataLoader PDF؟', anchor: 'what-is-opendataloader-pdf' },
      { label: 'كيف تحصل عليه', anchor: 'get-it' },
      { label: 'تدفق البيانات المحلي والهجين', anchor: 'privacy' },
      { label: 'الميزات التي أكدتها المصادر', anchor: 'key-features' },
      { label: 'القياسات: ادعاءات المطوّر', anchor: 'benchmarks' },
      { label: 'الترخيص والتسعير', anchor: 'pricing' },
      { label: 'لمن يناسب', anchor: 'who-should-use' },
      { label: 'ما لم نتمكن من التحقق منه', anchor: 'who-should-not-use' },
      { label: 'المنافسون والبدائل', anchor: 'vs-alternatives' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'الخلاصة', anchor: 'verdict' },
      { label: 'المصادر', anchor: 'sources' },
      { label: 'قراءات ذات صلة', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'النقاط الرئيسية',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'يقرأ OpenDataLoader PDF ملف PDF ويعيد نصه وجداوله وعناوينه ومواضع عناصره كبيانات منظمة يمكن لخط RAG أو لنموذج لغوي استخدامها.',
          },
          {
            type: 'plain-terms',
            text: 'تشغّله من Python أو Node.js أو Java أو سطر الأوامر على ملف PDF، فيكتب ملف Markdown أو JSON يحافظ على العناوين والجداول وترتيب القراءة بدل كتلة نص مسطحة.',
          },
        ],
        items: [
          'الصيانة: أحدث إصدار، 2.5.22، صدر في 12 نوفمبر 2026 وحُدّث المستودع آخر مرة في 14 نوفمبر 2026، لذا لا ينطبق تحذير المشروع المتوقف.',
          'النطاق: مكتبة تحليل للمطورين، تقتصر على مدخلات PDF، مع ميزة اختيارية لوسم ملفات PDF تلقائيًا لإمكانية الوصول.',
          'التكلفة: النواة مجانية؛ وتوجد فئة مؤسسية دون سعر معلن.',
          'القياسات: ترتيب "#1" يخص المشروع نفسه، ويصح في الوضع الهجين فقط.',
          'غير متحقق منه: القياس عن بُعد وحزمة Docker وقائمة أنظمة التشغيل لا يذكرها المشروع.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى موقع المشروع ومستودع GitHub وPyPI، وقد روجعت في 15 نوفمبر 2026. لم تختبر PromptQuorum برنامج OpenDataLoader PDF، لذا لم تُقيَّم السرعة ولا الدقة ولا استهلاك الذاكرة.',
          },
        ],
      },
      overview: {
        id: 'what-is-opendataloader-pdf',
        title: 'ما هو OpenDataLoader PDF؟',
        content: [
          '**يحوّل OpenDataLoader PDF ملفات PDF إلى بيانات جاهزة للذكاء الاصطناعي: Markdown للتقسيم، وJSON مع مربعات إحاطة للاستشهاد بالمصادر، وHTML، أو ملف PDF موضَّح بتعليقات.** يقرأ العناوين والجداول والقوائم وترتيب القراءة، ويحتفظ JSON بمستويات العناوين والخطوط وموضع كل عنصر. ويأتي كمكتبة مع حزم SDK لـ Python وNode.js وJava وأداة سطر أوامر.',
          'الجهة المطوِّرة هي منظمة GitHub باسم opendataloader-project، ويرد في تذييل الموقع "© 2026 OpenDataLoader". وتقول الصفحة الرئيسية إن عمل إمكانية الوصول طُوّر مع Hancom ومع Dual Lab التي تصفها الصفحة الرئيسية بأنها من مطوّري veraPDF؛ ولا تقول إن Hancom هي التي تصنع المحلّل. ولا تسمّي المصادر الكيان القانوني الذي يصون المشروع. أما المنتج المؤسسي المنفصل Hancom Data Loader فمدرج بعبارة "قريبًا" وليس جزءًا من النواة مفتوحة المصدر.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**يُثبَّت OpenDataLoader PDF من مدير حزم بعد توفر بيئة تشغيل Java.** لا يوجد مثبّت لسطح المكتب ولا صفحة في متجر تطبيقات.',
        ],
        columns: ['الخيار', 'مصدر الحصول عليه'],
        rows: [
          { 'الخيار': 'Python (pip)', 'مصدر الحصول عليه': 'Java 11+، ثم `pip install -U opendataloader-pdf` ([PyPI](https://pypi.org/project/opendataloader-pdf/))؛ ويضيف أداة سطر الأوامر' },
          { 'الخيار': 'Node.js', 'مصدر الحصول عليه': '`@opendataloader/pdf` على npm، وفق [البدء السريع لـ Node.js](https://opendataloader.org/docs/quick-start-nodejs)' },
          { 'الخيار': 'Java (Maven)', 'مصدر الحصول عليه': '`org.opendataloader:opendataloader-pdf-core`، وفق [البدء السريع لـ Java](https://opendataloader.org/docs/quick-start-java)' },
          { 'الخيار': 'الوضع الهجين', 'مصدر الحصول عليه': '`pip install "opendataloader-pdf[hybrid]"`؛ ويقول README إن أول تنزيل للنموذج قد يستغرق دقائق' },
          { 'الخيار': 'أرشيف CLI', 'مصدر الحصول عليه': '`opendataloader-pdf-cli-2.5.22.zip` على [GitHub Releases](https://github.com/opendataloader-project/opendataloader-pdf/releases/tag/v2.5.22)' },
          { 'الخيار': 'الموقع الرسمي', 'مصدر الحصول عليه': '[opendataloader.org](https://opendataloader.org)' },
          { 'الخيار': 'سياسة الخصوصية', 'مصدر الحصول عليه': '[سياسة الخصوصية](https://accounts.hancom.com/policy/privacy/current/en)، المرتبطة من تذييل الموقع؛ وتحتاج الصفحة إلى JavaScript لتُعرض' },
          { 'الخيار': 'الشيفرة المصدرية', 'مصدر الحصول عليه': '[github.com/opendataloader-project/opendataloader-pdf](https://github.com/opendataloader-project/opendataloader-pdf)، Apache 2.0' },
        ],
        note: 'الإصدار الذي رُوجع: 2.5.22، الصادر في 12 نوفمبر 2026؛ وآخر تحديث من المشروع في 14 نوفمبر 2026. يلزم طرفية وبيئة تطوير: يجب أن يكون Java 11 أو أحدث في PATH (تحقق بالأمر `java -version`) ويلزم Python 3.11 أو أحدث لمسار pip. وتذكر صفحة البدء السريع Python 3.10 بينما يذكر README وPyPI الإصدار 3.11، لذا اتبع PyPI. ولا ينشر المشروع قائمة بأنظمة التشغيل؛ وتصف PyPI الحزمة بأنها مستقلة عن نظام التشغيل.',
      },
      privacy: {
        id: 'privacy',
        title: 'تدفق البيانات المحلي والهجين',
        content: [
          '**في وضعه الافتراضي يعمل المحلّل على جهازك: يقول README "100% locally" و"No API calls, no data transmission"، وتقول الصفحة الرئيسية "No API keys, no cloud".** لا يلزم GPU، ولا يُنشر رقم لـ RAM.',
          'يضيف الوضع الهجين OCR ومعالجة المعادلات والمخططات ودقة أفضل للجداول بإرسال الصفحات الصعبة إلى خلفية ذكاء اصطناعي. وهذه الخلفية افتراضيًا خادم محلي على 127.0.0.1، ووصف الصور يستخدم نموذج SmolVLM-256M محليًا، لكن الخيار `--hybrid-url` يقبل أي عنوان. وإذا وجّهته إلى خادم بعيد فستُرسل صفحاتك إليه، ولن تصف عبارة "لا سحابة" إعدادك.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'هذه تصريحات الجهة المطوِّرة وليست نتائج تدقيق. لم تفحص PromptQuorum حركة الشبكة ولا الشيفرة.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي أكدتها المصادر',
        content: [
          '**كل بند أدناه مأخوذ من الموقع أو README أو PyPI؛ ولم يُختبر أي منها هنا.**',
        ],
        items: [
          '**تحليل التخطيط.** تستعيد خوارزمية XY-Cut++ ترتيب القراءة؛ وتُستخرج الجداول بما فيها الخلايا المدموجة.',
          '**الاستشهادات.** يحمل كل عنصر في JSON مربع إحاطة، فيمكن لإجابة ما أن تشير إلى موضع في الصفحة.',
          '**OCR.** متاح في الوضع الهجين فقط؛ والمحرك الافتراضي EasyOCR، ومن البدائل RapidOCR وTesseract وApple Vision (على macOS فقط) وNVIDIA Nemotron (على Linux x86_64 مع CUDA) واختيار تلقائي. ويزعم المشروع دعم أكثر من 80 لغة دون تفصيل لكل محرك.',
          '**تصفية سلامة الذكاء الاصطناعي.** يمكن تصفية النص المخفي والمحتوى خارج الصفحة وأنماط حقن الأوامر (prompt injection) قبل وصول النص إلى النموذج.',
          '**LangChain.** توفّر الحزمة `langchain-opendataloader-pdf` محمّلًا باسم `OpenDataLoaderPDFLoader`، ويوجد [دليل تكامل RAG](https://opendataloader.org/docs/rag-integration) منشور.',
          '**الوسم التلقائي لإمكانية الوصول.** يمكن وسم ملفات PDF غير الموسومة وفق مواصفة Well-Tagged PDF والتحقق منها بـ veraPDF؛ أما تصدير PDF/UA فيعود إلى الفئة المؤسسية.',
        ],
        note: 'لا يذكر README أي تكامل مع LlamaIndex أو MCP، ولا تزعم هذه المراجعة وجود تكامل.',
      },
      benchmarks: {
        id: 'benchmarks',
        title: 'القياسات: ادعاءات المطوّر',
        content: [
          '**ادعاء "#1 in benchmarks" على الصفحة الرئيسية وفي README مصدره opendataloader-bench الخاص بالمشروع نفسه، وينطبق على الوضع الهجين فقط.** وتُوصف المنهجية في [صفحة القياس](https://opendataloader.org/docs/benchmark)؛ ولم تعِد PromptQuorum إنتاج أي رقم.',
        ],
        items: [
          'الدرجة الإجمالية: 0.907 في الوضع الهجين مقابل 0.831 بدونه.',
          'دقة الجداول (TEDS): 0.928 في الوضع الهجين مقابل 0.489 بدونه.',
          'اكتشاف العناوين: Docling 0.824، والوضع الهجين 0.821، وغير الهجين 0.739، فالادعاء لا يصح في كل فئة.',
          'السرعة لكل صفحة: Nutrient 0.008 ثانية، وOpenDataLoader محليًا 0.015، والوضع الهجين 0.463؛ ويقول قسم الأسئلة الشائعة في README أيضًا "60+ pages per second".',
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'الترخيص والتسعير',
        content: [
          '**الشيفرة مرخّصة بموجب Apache 2.0، وفق [ملف LICENSE](https://github.com/opendataloader-project/opendataloader-pdf/blob/main/LICENSE) في المستودع؛ أما الإصدارات السابقة للإصدار 2.0 فكانت بموجب MPL 2.0.** النواة وAudit وAuto-tag مجانية الاستخدام.',
          'تضيف فئة مؤسسية تصدير PDF/UA واستوديو تحرير مرئيًا. ولا يُنشر سعر، وتُرسل الطلبات عبر [صفحة الاتصال](https://opendataloader.org/contact).',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**بُناة RAG** الذين يحتاجون Markdown أو JSON منظمًا مع المواضع من ملفات PDF التي يملكونها بالفعل.',
          '**الفرق التي لديها بيئة Java** وتقبل تثبيت JDK قبل حزمة Python.',
          '**فرق إمكانية الوصول** التي تريد وسم ملفات PDF الموجودة تلقائيًا وفحصها بـ veraPDF.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**الدقة والسرعة.** كل الأرقام من المشروع؛ ولم تقِس PromptQuorum أيًّا منها.',
          '**القياس عن بُعد.** لم يُعثر على أي تصريح، فلا يُفترض شيء في أي اتجاه.',
          '**Docker.** تعرض الصفحة الرئيسية مسار حاوية، لكن README لا يذكره ولم يُعثر على صورة.',
          '**أنظمة التشغيل.** لا تُنشر قائمة دعم، وتعمل مسارات CI التي فُحصت على Linux.',
          '**أنواع الملفات الأخرى.** لا تعالج النواة مدخلات Word وExcel وPowerPoint والصور؛ وHancom Data Loader معلن عنه ولم يصدر.',
          '**الجهة المسؤولة عن الصيانة.** لا يُسمّى الكيان القانوني وراء المشروع.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: ['التطبيق', 'المنصات', 'السعر / الترخيص', 'الفرق الرئيسي'],
        rows: [
          {
            'التطبيق': '[Xberg](/ar/power-local-llm/xberg-review)',
            'المنصات': 'Mac وWindows وLinux',
            'السعر / الترخيص': 'مجاني / MIT',
            'الفرق الرئيسي': 'محرك Rust يقرأ أيضًا ملفات Office والصوت وعناوين URL؛ بينما يقرأ OpenDataLoader PDF ملفات PDF فقط',
          },
          {
            'التطبيق': '[CocoIndex](/ar/power-local-llm/cocoindex-review)',
            'المنصات': 'Mac وWindows وLinux',
            'السعر / الترخيص': 'مجاني / Apache 2.0',
            'الفرق الرئيسي': 'إطار خطوط معالجة يُبقي الفهرس محدّثًا؛ ويحتاج إلى محلّل مثل هذا ولا يحل محله',
          },
          {
            'التطبيق': '[Unstructured](/ar/power-local-llm/unstructured-review)',
            'المنصات': 'Mac وWindows وLinux',
            'السعر / الترخيص': 'مكتبة مجانية / Apache 2.0؛ واجهة سحابية مدفوعة اختيارية',
            'الفرق الرئيسي': 'مكتبة Python ETL تقرأ PDF وDOCX وPPTX وHTML والبريد الإلكتروني والصور إلى عناصر JSON؛ بينما يقرأ OpenDataLoader PDF ملفات PDF فقط',
          },
          {
            'التطبيق': '[Nutrient](/ar/power-local-llm/nutrient-review)',
            'المنصات': 'iOS وAndroid وMac وWindows وLinux وWeb',
            'السعر / الترخيص': 'مدفوع / تجاري',
            'الفرق الرئيسي': 'SDK PDF تجاري مغلق المصدر للتحرير والتوقيع وOCR واستخراج البيانات؛ أما OpenDataLoader PDF فبترخيص Apache 2.0',
          },
        ],
        note: 'يظهر Docling وNutrient في جدول القياس الخاص بالمشروع، وهو المقارنة الوحيدة التي تعتمد عليها هذه المراجعة. تأكد من السعر والترخيص والمنصات الحالية لكل أداة في صفحتها الخاصة قبل الاختيار.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يمكنني استخدامه دون كتابة Python؟',
            a: 'نعم. تثبّت حزمة pip أداة سطر أوامر، وتوجد حزم SDK لـ Node.js وJava، لكن كل المسارات تتطلب Java 11 أو أحدث على الجهاز.',
          },
          {
            q: 'لماذا يكون كل استدعاء بطيئًا عند المرور على الملفات في حلقة؟',
            a: 'يقول README إن كل استدعاء لـ `convert()` يبدأ عملية JVM، لذا يوصي بتمرير ملفات كثيرة أو مجلد كامل في استدعاء واحد.',
          },
          {
            q: 'هل يعمل مع ملفات PDF الممسوحة ضوئيًا؟',
            a: 'عبر الوضع الهجين فقط، الذي يشغّل OCR؛ ولا يفعل الوضع الافتراضي ذلك.',
          },
          {
            q: 'هل Hancom Data Loader هو المنتج نفسه؟',
            a: 'لا. إنه منتج مؤسسي منفصل يُخطَّط أن يقرأ DOCX وXLSX وPPTX وHWP والصور؛ وقد ذكر README هدفًا في الربع الثاني أو الثالث من 2026، وكان لا يزال غير صادر وقت المراجعة.',
          },
          {
            q: 'كيف أضيفه إلى خط LangChain؟',
            a: 'ثبّت `langchain-opendataloader-pdf` واستخدم `OpenDataLoaderPDFLoader` فيه، كما يوضح README.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: 'OpenDataLoader PDF طريقة تصدر إصداراتها بنشاط وبترخيص Apache 2.0 للحصول على Markdown وJSON منظمين مع المواضع من ملفات PDF، ويُوثَّق وضعه الافتراضي بأنه محلي بالكامل. في المقابل، يحتاج إلى Java قبل pip، ويقرأ ملفات PDF فقط، ويحتل المرتبة الأولى في قياس كتبه المشروع بنفسه وفي الوضع الهجين فقط، ويترك القياس عن بُعد وجهة الصيانة دون تصريح، ولم تختبره PromptQuorum. يناسب المطورين الذين يغذّون RAG بملفات PDF ويقبلون إعدادًا عبر الطرفية؛ أما للملفات غير PDF فقارن مع [Xberg](/ar/power-local-llm/xberg-review).',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع OpenDataLoader](https://opendataloader.org) — نظرة عامة على المنتج والقياسات والفئة المؤسسية، روجع في 15 نوفمبر 2026.',
          '[OpenDataLoader PDF على GitHub](https://github.com/opendataloader-project/opendataloader-pdf) — README والترخيص والإصدار 2.5.22 ونشاط المستودع، روجع في 15 نوفمبر 2026.',
          '[opendataloader-pdf على PyPI](https://pypi.org/project/opendataloader-pdf/) — إصدار الحزمة 2.5.22 ومتطلب Python، روجع في 15 نوفمبر 2026.',
          '[البدء السريع لـ Python](https://opendataloader.org/docs/quick-start-python) — خطوات التثبيت وإصدار Python الذي تذكره، روجع في 15 نوفمبر 2026.',
          '[منهجية القياس](https://opendataloader.org/docs/benchmark) — كيف تُنتَج درجات المشروع الخاصة، روجع في 15 نوفمبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Xberg](/ar/power-local-llm/xberg-review) — محرك لفهم المستندات يدعم أنواع ملفات كثيرة.',
          '[مراجعة CocoIndex](/ar/power-local-llm/cocoindex-review) — إطار يُبقي فهارس RAG محدّثة.',
          '[دليل برمجيات LLM المحلية](/ar/directory) — الفهرس الكامل لأدوات الذكاء الاصطناعي المحلية.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'مراجعة OpenDataLoader PDF: محلّل PDF مفتوح المصدر لـ RAG',
      description: 'مراجعة OpenDataLoader PDF: محلّل PDF بترخيص Apache 2.0 لخطوط RAG بمخرجات JSON وMarkdown ومربعات إحاطة. متطلبات التثبيت، وتدفق البيانات المحلي والهجين، وقياسات المطوّر، وما تتركه المصادر غير مؤكد.',
      url: 'https://www.promptquorum.com/ar/power-local-llm/opendataloader-pdf-review',
      inLanguage: 'ar',
      datePublished: '2026-11-15',
      dateModified: '2026-11-17',
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      educationalLevel: 'Advanced',
      proficiencyLevel: 'Advanced',
      audience: {
        '@type': 'Audience',
        audienceType: 'مطورون يقيّمون محلّل PDF مفتوح المصدر لخطوط RAG وLLM',
      },
      about: [
        { '@type': 'Thing', name: 'OpenDataLoader PDF' },
        { '@type': 'Thing', name: 'تحليل ملفات PDF' },
        { '@type': 'Thing', name: 'التوليد المعزز بالاسترجاع (RAG)' },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/ar/power-local-llm/opendataloader-pdf-review',
      },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/ar/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'مراجعة OpenDataLoader PDF', item: 'https://www.promptquorum.com/ar/power-local-llm/opendataloader-pdf-review' },
      ],
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-15',
    dateModified: '2026-11-17',
    next_refresh_due: '2027-05-15',
    theme: 'RAG & Document Chat',
    heroImage: '/images/opendataloader-pdf-review-hero-ko.webp',
    title: 'OpenDataLoader PDF 리뷰: RAG를 위한 오픈소스 PDF 파서',
    seoTitle: 'OpenDataLoader PDF 리뷰: 오픈소스 PDF 파서',
    intro: 'OpenDataLoader PDF는 PDF 파일을 RAG와 LLM 파이프라인용 구조화 데이터로 변환하는 오픈소스 파서이며, 접근성을 위한 PDF 자동 태깅도 지원합니다. 라이브러리이자 명령줄 도구이며, 데스크톱 앱도 호스팅 서비스도 아닙니다. 이 리뷰는 [opendataloader.org](https://opendataloader.org), [GitHub 저장소](https://github.com/opendataloader-project/opendataloader-pdf), PyPI를 2026년 11월 15일에 확인한 내용에 기반하며, PromptQuorum은 설치하거나 실행하지 않았습니다.',
    metaDescription: 'OpenDataLoader PDF 리뷰: JSON 출력 Apache 2.0 PDF 파서. Java 11 이상 필요, README 기준 기본 모드는 로컬 실행. 벤치마크는 개발 측 수치입니다.',
    twitterDescription: 'OpenDataLoader PDF 리뷰: RAG를 위한 오픈소스 PDF 파서. 로컬에서 실행되는 범위, 하이브리드 모드가 바꾸는 점, Java가 필요한 이유, 출처가 남겨 둔 내용.',
    audience: 'PDF를 대상으로 RAG나 LLM 파이프라인을 구축하면서, OpenDataLoader PDF가 무엇을 출력하는지, 실행에 무엇이 필요한지, 실제로 얼마나 로컬에서 처리되는지, 어떤 주장이 개발 측 자체 주장인지 알고 싶은 개발자.',
    readTime: '7분 읽기',
    educationalLevel: 'Advanced',
    affiliateDisclosure: false,
    primaryTerm: 'OpenDataLoader PDF 리뷰',
    targetKeywords: [
      'opendataloader pdf 리뷰',
      'opendataloader pdf 설치',
      'opendataloader pdf 하이브리드 모드',
      'rag pdf 파서',
      'pdf markdown 변환 llm',
      'opendataloader vs docling',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock: '**OpenDataLoader PDF(버전 2.5.22)는 PDF를 경계 상자가 포함된 JSON, Markdown, HTML로 변환해 RAG 파이프라인에서 쓸 수 있게 하는 Apache 2.0 오픈소스 파서입니다.** Java 11 이상과 터미널이 필요하므로 앱이 아니라 개발자용 도구입니다.',
    quickAnswerTop: {
      ko: {
        question: 'OpenDataLoader PDF는 내 PDF를 클라우드 서비스로 보냅니까?',
        answer: '기본 모드에서는 보내지 않습니다. README는 API 호출과 데이터 전송 없이 "100% locally" 처리한다고 밝힙니다. 이는 개발 측의 설명이며, PromptQuorum은 네트워크 트래픽이나 코드를 검사하지 않았고 텔레메트리는 문서화되어 있지 않습니다. OCR과 표 처리를 강화하는 하이브리드 모드는 별도의 백엔드를 사용하며, 이 백엔드는 원격 주소로 지정할 수 있어 그 경우 페이지가 지정한 곳으로 전송됩니다.',
        bullets: [
          '입력: PDF 파일만 해당하며, Word, Excel, PowerPoint 파일은 처리되지 않습니다.',
          '출력: Markdown, 경계 상자와 제목 수준이 포함된 JSON, HTML 또는 주석이 달린 PDF.',
          '저장소: GitHub 스타 ' + st.ko('opendataloader-pdf') + '.',
        ],
        updatedDate: '2026-11-15',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'OpenDataLoader PDF란?', anchor: 'what-is-opendataloader-pdf' },
      { label: '설치 방법', anchor: 'get-it' },
      { label: '로컬 및 하이브리드 데이터 흐름', anchor: 'privacy' },
      { label: '출처가 확인한 기능', anchor: 'key-features' },
      { label: '벤치마크: 개발 측의 주장', anchor: 'benchmarks' },
      { label: '라이선스와 가격', anchor: 'pricing' },
      { label: '이런 분께 적합합니다', anchor: 'who-should-use' },
      { label: '확인하지 못한 내용', anchor: 'who-should-not-use' },
      { label: '경쟁 앱과 대안', anchor: 'vs-alternatives' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '총평', anchor: 'verdict' },
      { label: '출처', anchor: 'sources' },
      { label: '관련 글', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '핵심 내용',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'OpenDataLoader PDF는 PDF를 읽어 텍스트, 표, 제목, 요소 위치를 RAG 파이프라인이나 언어 모델이 쓸 수 있는 구조화 데이터로 반환합니다.',
          },
          {
            type: 'plain-terms',
            text: 'Python, Node.js, Java 또는 명령줄에서 PDF에 대해 실행하면, 평평한 텍스트 덩어리 대신 제목, 표, 읽기 순서를 유지한 Markdown 또는 JSON 파일을 생성합니다.',
          },
        ],
        items: [
          '유지 관리: 최신 릴리스 2.5.22는 2026년 11월 12일에 나왔고 저장소는 2026년 11월 14일에 마지막으로 업데이트되었으므로, 방치 프로젝트 경고는 해당되지 않습니다.',
          '범위: 개발자를 위한 파싱 라이브러리로, 입력은 PDF로 한정되며 선택 기능으로 접근성 자동 태깅이 있습니다.',
          '비용: 핵심 부분은 무료이며, 가격이 공개되지 않은 엔터프라이즈 등급이 있습니다.',
          '벤치마크: "#1" 순위는 프로젝트 자체 주장이며 하이브리드 모드에서만 성립합니다.',
          '미확인: 텔레메트리, Docker 패키징, 운영체제 목록은 프로젝트가 밝히지 않았습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 프로젝트 웹사이트, GitHub 저장소, PyPI를 2026년 11월 15일에 확인한 내용에 기반합니다. PromptQuorum은 OpenDataLoader PDF를 테스트하지 않았으므로 속도, 정확도, 메모리 사용량은 평가하지 않았습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-opendataloader-pdf',
        title: 'OpenDataLoader PDF란?',
        content: [
          '**OpenDataLoader PDF는 PDF를 AI에 쓸 수 있는 데이터로 변환합니다. 청킹용 Markdown, 출처 표시용 경계 상자 포함 JSON, HTML, 또는 주석이 달린 PDF입니다.** 제목, 표, 목록, 읽기 순서를 인식하며, JSON에는 제목 수준, 글꼴, 각 요소의 위치가 유지됩니다. Python, Node.js, Java SDK와 명령줄 도구를 갖춘 라이브러리로 제공됩니다.',
          '개발 주체는 GitHub 조직 opendataloader-project이며, 사이트 하단에는 "© 2026 OpenDataLoader"라고 적혀 있습니다. 홈페이지는 접근성 관련 작업이 Hancom, 그리고 홈페이지가 veraPDF 개발자 중 하나로 설명하는 Dual Lab과 함께 개발되었다고 하지만, 파서를 Hancom이 만든다고는 하지 않습니다. 어느 법인이 프로젝트를 유지 관리하는지는 출처에 나와 있지 않습니다. 별도의 엔터프라이즈 제품 Hancom Data Loader는 "Coming Soon"으로 표시되어 있으며 오픈소스 핵심에는 포함되지 않습니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '설치 방법',
        content: [
          '**OpenDataLoader PDF는 Java 런타임을 준비한 뒤 패키지 관리자로 설치합니다.** 데스크톱 설치 프로그램도, 스토어 등록도 없습니다.',
        ],
        columns: ['옵션', '입수 방법'],
        rows: [
          { '옵션': 'Python(pip)', '입수 방법': 'Java 11+를 준비한 뒤 `pip install -U opendataloader-pdf`([PyPI](https://pypi.org/project/opendataloader-pdf/)); CLI도 함께 추가됩니다' },
          { '옵션': 'Node.js', '입수 방법': 'npm의 `@opendataloader/pdf`, [Node.js 퀵스타트](https://opendataloader.org/docs/quick-start-nodejs) 기준' },
          { '옵션': 'Java(Maven)', '입수 방법': '`org.opendataloader:opendataloader-pdf-core`, [Java 퀵스타트](https://opendataloader.org/docs/quick-start-java) 기준' },
          { '옵션': '하이브리드 모드', '입수 방법': '`pip install "opendataloader-pdf[hybrid]"`; README에 따르면 처음 모델을 내려받는 데 몇 분이 걸릴 수 있습니다' },
          { '옵션': 'CLI 아카이브', '입수 방법': '[GitHub Releases](https://github.com/opendataloader-project/opendataloader-pdf/releases/tag/v2.5.22)의 `opendataloader-pdf-cli-2.5.22.zip`' },
          { '옵션': '웹사이트', '입수 방법': '[opendataloader.org](https://opendataloader.org)' },
          { '옵션': '개인정보 처리방침', '입수 방법': '사이트 하단에 링크된 [개인정보 처리방침](https://accounts.hancom.com/policy/privacy/current/en); 표시하려면 JavaScript가 필요합니다' },
          { '옵션': '소스 코드', '입수 방법': '[github.com/opendataloader-project/opendataloader-pdf](https://github.com/opendataloader-project/opendataloader-pdf), Apache 2.0' },
        ],
        note: '확인한 버전: 2.5.22(2026년 11월 12일 출시), 마지막 업스트림 업데이트는 2026년 11월 14일. 터미널과 개발 환경이 필요합니다. Java 11 이상이 PATH에 있어야 하고(`java -version`으로 확인) pip 방식에는 Python 3.11 이상이 필요합니다. 퀵스타트 페이지는 Python 3.10이라고 적었지만 README와 PyPI는 3.11이라고 하므로 PyPI를 따르십시오. 프로젝트는 운영체제 목록을 공개하지 않으며, PyPI는 이 패키지를 운영체제에 독립적인 것으로 표시합니다.',
      },
      privacy: {
        id: 'privacy',
        title: '로컬 및 하이브리드 데이터 흐름',
        content: [
          '**기본 모드에서 파서는 사용자의 기기에서 실행됩니다. README는 "100% locally", "No API calls, no data transmission"이라고 밝히고, 홈페이지는 "No API keys, no cloud"라고 밝힙니다.** GPU는 필요하지 않으며 RAM 사양은 공개되어 있지 않습니다.',
          '하이브리드 모드는 어려운 페이지를 AI 백엔드로 보내 OCR, 수식과 차트 처리, 표 정확도를 높입니다. 이 백엔드는 기본적으로 127.0.0.1의 로컬 서버이고 이미지 설명에는 로컬 SmolVLM-256M 모델이 쓰이지만, `--hybrid-url` 옵션은 어떤 주소든 받습니다. 원격 서버를 지정하면 페이지가 그곳으로 전송되며, "클라우드 없음"이라는 설명은 더 이상 사용자의 구성에 해당하지 않습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이는 개발 측의 설명이며 감사 결과가 아닙니다. PromptQuorum은 네트워크 트래픽이나 코드를 검사하지 않았습니다.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '출처가 확인한 기능',
        content: [
          '**아래 항목은 모두 웹사이트, README 또는 PyPI에 나온 내용이며, 여기서는 하나도 테스트하지 않았습니다.**',
        ],
        items: [
          '**레이아웃 분석.** XY-Cut++ 알고리즘으로 읽기 순서를 복원하며, 표는 병합된 셀을 포함해 추출됩니다.',
          '**출처 표시.** JSON의 모든 요소에 경계 상자가 있어, 답변이 페이지의 특정 위치를 가리킬 수 있습니다.',
          '**OCR.** 하이브리드 모드에서만 사용할 수 있으며, 기본 엔진은 EasyOCR이고 대안으로 RapidOCR, Tesseract, Apple Vision(macOS 전용), NVIDIA Nemotron(CUDA가 있는 Linux x86_64), 자동 선택이 있습니다. 프로젝트는 80개 이상의 언어를 지원한다고 하지만 엔진별 내역은 없습니다.',
          '**AI 안전 필터링.** 숨겨진 텍스트, 페이지 밖 콘텐츠, 프롬프트 인젝션 패턴을 텍스트가 모델에 도달하기 전에 걸러낼 수 있습니다.',
          '**LangChain.** `langchain-opendataloader-pdf` 패키지가 `OpenDataLoaderPDFLoader`를 제공하며, [RAG 통합 가이드](https://opendataloader.org/docs/rag-integration)도 공개되어 있습니다.',
          '**접근성 자동 태깅.** 태그가 없는 PDF에 Well-Tagged PDF 사양에 따라 태그를 달고 veraPDF로 검증할 수 있으며, PDF/UA 내보내기는 엔터프라이즈 등급에 속합니다.',
        ],
        note: 'README에는 LlamaIndex나 MCP와의 통합이 언급되어 있지 않으며, 이 리뷰도 그런 통합이 있다고 주장하지 않습니다.',
      },
      benchmarks: {
        id: 'benchmarks',
        title: '벤치마크: 개발 측의 주장',
        content: [
          '**홈페이지와 README의 "#1 in benchmarks" 주장은 프로젝트 자체의 opendataloader-bench에서 나온 것이며, 하이브리드 모드에만 적용됩니다.** 방법은 [벤치마크 페이지](https://opendataloader.org/docs/benchmark)에 설명되어 있으며, PromptQuorum은 어떤 수치도 재현하지 않았습니다.',
        ],
        items: [
          '전체 점수: 하이브리드 모드 0.907, 하이브리드 없이 0.831.',
          '표 정확도(TEDS): 하이브리드 모드 0.928, 하이브리드 없이 0.489.',
          '제목 감지: Docling 0.824, 하이브리드 0.821, 비하이브리드 0.739로, 모든 범주에서 이 주장이 성립하는 것은 아닙니다.',
          '페이지당 속도: Nutrient 0.008초, OpenDataLoader 로컬 0.015초, 하이브리드 0.463초이며, README FAQ에는 "60+ pages per second"라고도 적혀 있습니다.',
        ],
      },
      pricing: {
        id: 'pricing',
        title: '라이선스와 가격',
        content: [
          '**저장소의 [LICENSE 파일](https://github.com/opendataloader-project/opendataloader-pdf/blob/main/LICENSE)에 따르면 코드는 Apache 2.0 라이선스이며, 2.0 이전 릴리스는 MPL 2.0이었습니다.** Core, Audit, Auto-tag는 무료로 사용할 수 있습니다.',
          '엔터프라이즈 등급은 PDF/UA 내보내기와 시각적 편집 스튜디오를 추가합니다. 가격은 공개되어 있지 않으며 [문의 페이지](https://opendataloader.org/contact)를 통해 요청합니다.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**RAG를 구축하는 분** 중 이미 가지고 있는 PDF에서 위치 정보가 있는 구조화된 Markdown 또는 JSON이 필요한 분.',
          '**Java 런타임을 쓸 수 있는 팀** 중 Python 패키지 전에 JDK를 설치하는 것을 받아들일 수 있는 팀.',
          '**접근성 담당 팀** 중 기존 PDF에 자동으로 태그를 달고 veraPDF로 확인하려는 팀.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 내용',
        items: [
          '**정확도와 속도.** 모든 수치는 프로젝트 자체의 것이며, PromptQuorum이 측정한 것은 없습니다.',
          '**텔레메트리.** 관련 설명을 찾지 못했으므로 어느 쪽도 가정하지 않습니다.',
          '**Docker.** 홈페이지에는 컨테이너 방식이 나오지만 README에는 없고 이미지도 찾지 못했습니다.',
          '**운영체제.** 지원 목록이 공개되어 있지 않으며, 확인한 CI 워크플로는 Linux에서 실행됩니다.',
          '**다른 파일 형식.** Word, Excel, PowerPoint, 이미지 입력은 핵심에서 처리되지 않으며, Hancom Data Loader는 발표만 되었을 뿐 출시되지 않았습니다.',
          '**유지 관리 주체.** 프로젝트 뒤의 법인은 밝혀져 있지 않습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 앱과 대안',
        columns: ['앱', '플랫폼', '가격 / 라이선스', '핵심 차이'],
        rows: [
          {
            '앱': '[Xberg](/ko/power-local-llm/xberg-review)',
            '플랫폼': 'Mac, Windows, Linux',
            '가격 / 라이선스': '무료 / MIT',
            '핵심 차이': 'Office 파일, 오디오, URL도 읽는 Rust 엔진. OpenDataLoader PDF는 PDF만 읽음',
          },
          {
            '앱': '[CocoIndex](/ko/power-local-llm/cocoindex-review)',
            '플랫폼': 'Mac, Windows, Linux',
            '가격 / 라이선스': '무료 / Apache 2.0',
            '핵심 차이': '인덱스를 최신으로 유지하는 파이프라인 프레임워크. 이 도구 같은 파서가 필요하며 대체하지 않음',
          },
          {
            '앱': '[Unstructured](/ko/power-local-llm/unstructured-review)',
            '플랫폼': 'Mac, Windows, Linux',
            '가격 / 라이선스': '무료 라이브러리 / Apache 2.0. 유료 클라우드 API는 선택',
            '핵심 차이': 'PDF·DOCX·PPTX·HTML·이메일·이미지를 JSON 요소로 읽는 Python ETL 라이브러리. OpenDataLoader PDF는 PDF만 읽음',
          },
          {
            '앱': '[Nutrient](/ko/power-local-llm/nutrient-review)',
            '플랫폼': 'iOS, Android, Mac, Windows, Linux, Web',
            '가격 / 라이선스': '유료 / 상용',
            '핵심 차이': '상용 비공개 소스 PDF SDK로 편집·서명·OCR·데이터 추출 지원. OpenDataLoader PDF는 Apache 2.0',
          },
        ],
        note: 'Docling과 Nutrient는 프로젝트 자체의 벤치마크 표에 나오며, 이 리뷰가 의존하는 비교는 그것뿐입니다. 선택하기 전에 각 도구의 최신 가격, 라이선스, 지원 플랫폼을 해당 페이지에서 확인하세요.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Python을 작성하지 않고도 쓸 수 있습니까?',
            a: '예. pip 패키지가 명령줄 도구를 설치하고 Node.js와 Java SDK도 있지만, 어느 방식이든 기기에 Java 11 이상이 필요합니다.',
          },
          {
            q: '파일을 반복문으로 처리하면 호출마다 느린 이유는 무엇입니까?',
            a: 'README에 따르면 `convert()`를 호출할 때마다 JVM 프로세스가 시작되므로, 여러 파일이나 폴더를 한 번의 호출로 전달하기를 권장합니다.',
          },
          {
            q: '스캔한 PDF에서도 작동합니까?',
            a: 'OCR을 실행하는 하이브리드 모드를 통해서만 가능하며, 기본 모드는 지원하지 않습니다.',
          },
          {
            q: 'Hancom Data Loader는 같은 제품입니까?',
            a: '아니요. DOCX, XLSX, PPTX, HWP, 이미지를 읽을 예정인 별도의 엔터프라이즈 제품이며, README는 2026년 2분기 또는 3분기를 목표로 제시했으나 확인 시점에는 아직 출시되지 않았습니다.',
          },
          {
            q: 'LangChain 파이프라인에는 어떻게 추가합니까?',
            a: 'README에 설명된 대로 `langchain-opendataloader-pdf`를 설치하고 `OpenDataLoaderPDFLoader`를 사용합니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '총평',
        content: 'OpenDataLoader PDF는 활발하게 릴리스되는 Apache 2.0 방식으로, PDF에서 위치 정보가 있는 구조화된 Markdown과 JSON을 얻을 수 있고 기본 모드는 완전히 로컬이라고 문서화되어 있습니다. 반면 pip 전에 Java가 필요하고, PDF만 읽으며, 1위라는 순위는 프로젝트가 직접 만든 벤치마크에서 하이브리드 모드에 한해서만 나왔고, 텔레메트리와 유지 관리 주체는 밝혀져 있지 않으며, PromptQuorum이 테스트하지도 않았습니다. PDF를 RAG에 투입하고 터미널 설정을 받아들일 수 있는 개발자에게 적합하며, PDF 이외의 파일이 필요하다면 [Xberg](/ko/power-local-llm/xberg-review)를 비교해 보십시오.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[OpenDataLoader 웹사이트](https://opendataloader.org) — 제품 개요, 벤치마크, 엔터프라이즈 등급(2026년 11월 15일 확인).',
          '[GitHub의 OpenDataLoader PDF](https://github.com/opendataloader-project/opendataloader-pdf) — README, 라이선스, 릴리스 2.5.22, 저장소 활동(2026년 11월 15일 확인).',
          '[PyPI의 opendataloader-pdf](https://pypi.org/project/opendataloader-pdf/) — 패키지 버전 2.5.22와 Python 요구 사항(2026년 11월 15일 확인).',
          '[Python 퀵스타트](https://opendataloader.org/docs/quick-start-python) — 설치 절차와 해당 페이지가 명시한 Python 버전(2026년 11월 15일 확인).',
          '[벤치마크 방법론](https://opendataloader.org/docs/benchmark) — 프로젝트 자체 점수를 산출하는 방법(2026년 11월 15일 확인).',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Xberg 리뷰](/ko/power-local-llm/xberg-review) — 다양한 파일 형식을 위한 문서 인텔리전스 엔진.',
          '[CocoIndex 리뷰](/ko/power-local-llm/cocoindex-review) — RAG 인덱스를 최신으로 유지하는 프레임워크.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구 전체 카탈로그.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'OpenDataLoader PDF 리뷰: RAG를 위한 오픈소스 PDF 파서',
      description: 'OpenDataLoader PDF 리뷰: JSON, Markdown, 경계 상자를 출력하는 RAG 파이프라인용 Apache 2.0 PDF 파서. 설치 요구 사항, 로컬 및 하이브리드 데이터 흐름, 개발 측 벤치마크, 출처가 확인하지 못한 내용을 다룹니다.',
      url: 'https://www.promptquorum.com/ko/power-local-llm/opendataloader-pdf-review',
      inLanguage: 'ko',
      datePublished: '2026-11-15',
      dateModified: '2026-11-17',
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      educationalLevel: 'Advanced',
      proficiencyLevel: 'Advanced',
      audience: {
        '@type': 'Audience',
        audienceType: 'RAG와 LLM 파이프라인용 오픈소스 PDF 파서를 검토하는 개발자',
      },
      about: [
        { '@type': 'Thing', name: 'OpenDataLoader PDF' },
        { '@type': 'Thing', name: 'PDF 파싱' },
        { '@type': 'Thing', name: '검색 증강 생성(RAG)' },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/ko/power-local-llm/opendataloader-pdf-review',
      },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/ko/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'OpenDataLoader PDF 리뷰', item: 'https://www.promptquorum.com/ko/power-local-llm/opendataloader-pdf-review' },
      ],
    },
  },
}
