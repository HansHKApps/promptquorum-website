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
}

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-15',
    dateModified: '2026-11-15',
    next_refresh_due: '2027-05-15',
    theme: 'RAG & Document Chat',
    heroImage: '/images/opendataloader-pdf-review-hero-en.webp',
    title: 'OpenDataLoader PDF Review: Open-Source PDF Parser for RAG',
    seoTitle: 'OpenDataLoader PDF Review: Open-Source PDF Parser',
    intro: 'OpenDataLoader PDF is an open-source parser that turns PDF files into structured data for RAG and LLM pipelines, and it can also auto-tag PDFs for accessibility. It is a library and command-line tool, not a desktop app and not a hosted service. This review is based on [opendataloader.org](https://opendataloader.org), the [GitHub repository](https://github.com/opendataloader-project/opendataloader-pdf) and PyPI, checked on 15 November 2026; PromptQuorum has not installed or run it.',
    metaDescription: 'OpenDataLoader PDF review: Apache 2.0 PDF parser for RAG with JSON, Markdown and bounding boxes. Needs Java 11+, runs locally. Benchmarks are the vendor\'s.',
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
        answer: 'Not in its default mode: the README says it processes files "100% locally" with no API calls and no data transmission. Hybrid mode, which adds OCR and better table handling, uses a separate backend that you can point at a remote address, and then your pages go wherever you point it.',
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
          'The maker is the GitHub organisation opendataloader-project, and the site footer reads "© 2026 OpenDataLoader". The homepage says the accessibility work was developed with Hancom and Dual Lab, the veraPDF developers; it does not say that Hancom makes the parser. The sources do not name which legal entity maintains the project. A separate enterprise product, Hancom Data Loader, is listed as "Coming Soon" and is not part of the open-source core.',
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
      dateModified: '2026-11-15',
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
}
