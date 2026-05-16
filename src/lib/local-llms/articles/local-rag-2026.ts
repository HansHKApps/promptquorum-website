// Auto-generated from src/lib/local-llms/content.ts
// Slug: local-rag-2026
// Generated: 2026-05-03T11:33:08.370Z

import type { Language } from "@/lib/blog/blogContent";

import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
    en: {
      freshness_tier: 'annual',
      theme: 'Advanced Techniques',
      title: 'Local RAG 2026: Build Document Q&A Systems Without Cloud APIs',
      seoTitle: 'Local RAG 2026 Guide',
      intro: 'Retrieval-Augmented Generation (RAG) lets your local LLM answer questions about your own documents. You upload PDFs and text files, the system converts them to embeddings, stores them in a vector database, and retrieves relevant chunks when answering questions. As of April 2026, local RAG is production-ready and eliminates API costs.',
      metaDescription: 'Local RAG 2026: build document Q&A systems, vector databases, chunking strategies, and retrieval optimization. Complete guide.',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**Retrieval-Augmented Generation (RAG) lets your local LLM answer questions about your own documents. You upload PDFs and text files, the system converts them to embeddings, stores them in a vector database, and retrieves relevant chunks when answering questions.**',
      audience: 'Beginners running their first local LLM on consumer hardware',
      readTime: '14 min read',
      educationalLevel: 'Intermediate to Advanced',
      primaryTerm: 'local RAG pipeline',
      toc: [
        { label: 'Key Takeaways', anchor: '#key-takeaways' },
        { label: 'How RAG Works', anchor: '#how-rag-works' },
        { label: 'Document Chunking Strategy', anchor: '#chunking' },
        { label: 'Vector Databases 2026', anchor: '#vector-databases' },
        { label: 'Embedding Models', anchor: '#embedding-models' },
        { label: 'Retrieval Pipeline', anchor: '#retrieval' },
        { label: 'Evaluation and Optimization', anchor: '#evaluation' },
        { label: 'Production RAG Patterns', anchor: '#production' },
        { label: 'Common Mistakes', anchor: '#common-mistakes' },
        { label: 'Common Questions', anchor: '#common-questions' },
        { label: 'Related Reading', anchor: '#related-reading' },
        { label: 'Sources', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            'RAG = upload documents + retrieval + local LLM answering. No training required.',
            'Five steps: (1) Load documents, (2) chunk into 500-1000 token pieces, (3) generate embeddings, (4) store in vector DB, (5) retrieve on query.',
            'Best embedding model: nomic-embed-text (137M, runs locally, 768-dim vectors).',
            'Best vector DB: Chroma (simple, embedded) for <1M documents; Qdrant (distributed) for production.',
            'As of April 2026, local RAG is faster and cheaper than cloud APIs. Quality depends on retrieval accuracy and prompt engineering.',
          ],
        },
        howRag: {
          title: 'How Does RAG Work Step-by-Step?',
          numberedItems: [
            '**Document ingestion:** Load PDFs, text files, or web pages.',
            '**Chunking:** Split documents into 500-1000 token chunks (overlap 20% to prevent context breaks).',
            '**Embedding:** Convert each chunk to a vector (768-1536 dimensions) using a local embedding model.',
            '**Storage:** Store vectors in a vector database (Chroma, Qdrant, Milvus) with metadata (document name, page, timestamp).',
            '**Query time:** Convert user question to embedding, search vector DB for top K similar chunks (k=5-10).',
            '**Context assembly:** Combine retrieved chunks into a prompt with instructions for the local LLM.',
            '**Generation:** Local LLM generates answer based on retrieved context.',
            '**Attribution:** Return which documents the answer came from.',
          ],
        },
        chunking: {
          title: 'What Is the Optimal Chunking Strategy?',
          content: [
            '**Chunking strategy determines retrieval quality.** Bad chunking = relevant information split across chunks, retrieval fails.',
            '**Semantic chunking (recommended):** Split by sentences or paragraphs, preserving meaning. Example: each paragraph = 1 chunk.',
            '**Fixed-size chunking:** 500 tokens per chunk, 20% overlap. Simple but may split sentences.',
            '**Recursive chunking:** Split by paragraphs first, then by sentences if too large. Preserves hierarchy.',
            'As of April 2026, semantic chunking with 500-1000 token chunks and 20% overlap is optimal for most use cases.',
          ],
          codeBlock: '# Python: semantic chunking example\nfrom langchain.text_splitter import RecursiveCharacterTextSplitter\n\nsplitter = RecursiveCharacterTextSplitter(\n  chunk_size=1000,\n  chunk_overlap=200,  # 20% overlap\n  separators=["\\n\\n", "\\n", ".", " "]  # Split on paragraph, then sentence\n)\nchunks = splitter.split_documents(documents)\nprint(f"Created {len(chunks)} chunks")',
          codeLanguage: 'python',
        },
        vectorDatabases: {
          title: 'Which Vector Database Should You Use?',
          rows: [
            { 'Database': 'Chroma', 'Type': 'Embedded', 'Capacity': '<1M docs', 'Setup': 'pip install', 'Best For': 'Prototyping, small RAG' },
            { 'Database': 'Qdrant', 'Type': 'Distributed', 'Capacity': 'Unlimited', 'Setup': 'Docker or cloud', 'Best For': 'Production, scalable' },
            { 'Database': 'Milvus', 'Type': 'Distributed', 'Capacity': 'Unlimited', 'Setup': 'Complex', 'Best For': 'Enterprise, massive scale' },
            { 'Database': 'Weaviate', 'Type': 'Graph + Vector', 'Capacity': 'Unlimited', 'Setup': 'Docker', 'Best For': 'Complex queries, relationships' },
            { 'Database': 'Pinecone (cloud)', 'Type': 'Managed', 'Capacity': 'Unlimited', 'Setup': 'API key', 'Best For': 'Serverless, hands-off' },
          ],
          columns: ['Database', 'Type', 'Capacity', 'Setup Effort', 'Best For'],
        },
        embeddings: {
          title: 'What Embedding Model Should You Choose?',
          rows: [
            { 'Model': 'nomic-embed-text (local)', 'Dimensions': '768', 'Speed': 'Fast', 'Quality': 'Excellent', 'Recommendation': 'Best for local RAG' },
            { 'Model': 'bge-m3 (local)', 'Dimensions': '1024', 'Speed': 'Fast', 'Quality': 'Excellent', 'Recommendation': 'Multilingual support' },
            { 'Model': 'OpenAI text-embedding-3 (cloud)', 'Dimensions': '3072', 'Speed': 'Very fast', 'Quality': 'Best in class', 'Recommendation': 'Hybrid approach' },
            { 'Model': 'Cohere (cloud)', 'Dimensions': '4096', 'Speed': 'Fast', 'Quality': 'Excellent', 'Recommendation': 'Production cloud RAG' },
          ],
          columns: ['Model', 'Vector Dimensions', 'Speed', 'Quality', 'Recommendation'],
        },
        retrieval: {
          title: 'How Do You Optimize Retrieval Quality?',
          content: [
            '**Retrieval quality** determines RAG success. Good retrieval = good answers. Bad retrieval = hallucinations.',
          ],
          items: [
            '**Top K selection:** Retrieve k=5-10 chunks. Higher k = more context (slower), lower k = fewer distractions.',
            '**Similarity threshold:** Filter results by minimum similarity score (e.g., >0.75). Avoids low-relevance chunks.',
            '**Reranking:** Use a reranker (cross-encoder) to re-rank retrieved chunks by relevance. Small accuracy boost.',
            '**Hybrid search:** Combine semantic search (embeddings) with BM25 keyword search. Catches documents with exact keywords.',
            '**Query expansion:** Expand user query with synonyms or related terms. Improves recall.',
          ],
        },
        evaluation: {
          title: 'How Do You Evaluate RAG Quality?',
          content: [
            '**RAG quality has two dimensions: (1) retrieval quality (did we get relevant chunks?), and (2) generation quality (did the LLM answer well?).**',
            '**Retrieval evaluation:** Create test queries with known correct documents. Measure precision (how many retrieved are relevant?) and recall (did we get all relevant documents?).',
            '**Generation evaluation:** Run LLM on retrieved chunks, manually score answers (0-5 scale) for accuracy and completeness.',
            'As of April 2026, automated evaluation tools (like Ragas) can measure retrieval and generation metrics automatically.',
          ],
        },
        production: {
          title: 'Production RAG Patterns',
          content: 'For production services, use these patterns:',
          items: [
            '**Caching:** Cache embeddings of frequently-queried documents to avoid recomputing.',
            '**Incremental indexing:** Add new documents without reindexing everything. Qdrant and Milvus support this.',
            '**Monitoring:** Track retrieval latency, cache hit rate, and user feedback on answer quality.',
            '**Fallback:** If retrieval fails (no relevant chunks), respond with "I don\'t have information about that" instead of hallucinating.',
            '**Versioning:** Keep document versions for audit trails. Store which version was used for each answer.',
          ],
        },
        commonMistakes: {
          title: 'Common Mistakes in Local RAG Implementation',
          items: [
            '**Chunking documents wrong.** Too many small chunks = retrieval noise. Too few large chunks = split information. Test chunk sizes empirically.',
            '**Not evaluating retrieval.** Building RAG without testing if retrieval works is like building a car without testing the engine. Always measure precision/recall.',
            '**Using generic embeddings for domain-specific documents.** Legal, medical, or technical documents may need fine-tuned embeddings. Consider domain-specific models.',
            '**Forgetting about update frequency.** If documents change weekly, your vector DB gets stale. Build a pipeline to re-embed and update.',
            '**Expecting RAG to replace fine-tuning.** RAG is context injection. Fine-tuning is model adaptation. For best results, combine both.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Common Questions About Local RAG',
          faqs: [
            {
              q: 'How many documents can local RAG handle?',
              a: 'Chroma handles 100K-1M documents on consumer hardware. Qdrant scales to billions with distributed setup. Beyond 1M, use Qdrant or Milvus.',
            },
            {
              q: 'What latency should I expect?',
              a: 'Embedding query (nomic-embed-text on CPU): 50-200ms. Retrieval (Chroma on disk): 10-50ms. LLM generation: 2-10 seconds (depends on model size). Total: 2-10 seconds per query.',
            },
            {
              q: 'Can RAG handle real-time document updates?',
              a: 'Yes. Add new documents to the vector DB dynamically. Indexing latency is 100-500ms per document, so real-time updates are practical.',
            },
            {
              q: 'Is local RAG cheaper than cloud APIs?',
              a: 'Yes. No per-token cost, no API calls to external services. One-time setup of embeddings, then free queries.',
            },
            {
              q: 'Can I use cloud embeddings with local LLMs?',
              a: 'Yes. Use OpenAI, Cohere, or other cloud embeddings for indexing, then use local LLMs for generation. Hybrid approach.',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Related Reading',
          items: [
            '[Best Local RAG Tools](/local-llms/best-local-rag-tools) -- Vector databases and frameworks.',
            '[Prompt Engineering Guide](/prompt-engineering) -- Optimize prompts for RAG.',
            '[Local LLM OpenAI-Compatible API](/local-llms/local-llm-openai-compatible-api) -- Expose RAG as API.',
            '[Fine-Tuning Local LLMs LoRA](/local-llms/fine-tuning-local-llms-lora) -- Combine fine-tuning with RAG.',
          ],
        },
        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            'LlamaIndex Documentation -- docs.llamaindex.ai',
            'LangChain RAG Guide -- python.langchain.com/docs/use_cases/question_answering',
            'Chroma Documentation -- docs.trychroma.com',
            'Qdrant Vector Search Engine -- qdrant.tech',
            'RAG Paper (Lewis et al.) -- arxiv.org/abs/2005.11401',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Local RAG 2026: Build Document Q&A Systems Without Cloud APIs',
        'description': 'Local RAG 2026: build document Q&A systems, vector databases, chunking strategies, and retrieval optimization. Complete guide.',
        'url': 'https://www.promptquorum.com/local-llms/local-rag-2026',
        'inLanguage': 'en',
        'datePublished': '2026-04-04',
        'author': { '@type': 'Organization', 'name': 'PromptQuorum' },
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways', 'h2'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'inLanguage': 'en',
        'mainEntity': [
          { '@type': 'Question', 'name': 'How many documents can local RAG handle?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Chroma handles 100K-1M documents on consumer hardware. Qdrant scales to billions with distributed setup. Beyond 1M, use Qdrant or Milvus.' } },
          { '@type': 'Question', 'name': 'What latency should I expect?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Embedding query (nomic-embed-text on CPU): 50-200ms. Retrieval (Chroma on disk): 10-50ms. LLM generation: 2-10 seconds. Total: 2-10 seconds per query.' } },
          { '@type': 'Question', 'name': 'Can RAG handle real-time document updates?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. Add new documents to the vector DB dynamically. Indexing latency is 100-500ms per document, so real-time updates are practical.' } },
          { '@type': 'Question', 'name': 'Is local RAG cheaper than cloud APIs?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. No per-token cost, no API calls to external services. One-time setup of embeddings, then free queries.' } },
          { '@type': 'Question', 'name': 'Can I use cloud embeddings with local LLMs?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. Use OpenAI, Cohere, or other cloud embeddings for indexing, then use local LLMs for generation. Hybrid approach.' } },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Local RAG 2026 Essentials',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Chunk documents correctly', 'description': 'Split documents into 500-1000 token chunks with 20% overlap. Semantic chunking preserves meaning better than fixed-size.' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Choose a vector database', 'description': 'Chroma for <1M documents on consumer hardware. Qdrant for distributed, production-scale RAG.' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Evaluate retrieval quality', 'description': 'Measure precision and recall. Bad retrieval = hallucinations. Use automated tools like Ragas for evaluation.' },
        ]
      },
    },
    de: {
      freshness_tier: 'annual',
      theme: 'Advanced Techniques',
      title: 'Lokale RAG 2026: Erstellen Sie Dokumenten-Q&A-Systeme ohne Cloud-APIs',
      seoTitle: 'Lokale RAG 2026 Anleitung',
      intro: 'Retrieval-Augmented Generation (RAG) lässt Ihr lokales LLM Fragen zu Ihren eigenen Dokumenten beantworten. Sie laden PDFs und Textdateien hoch, das System konvertiert sie in Embeddings, speichert sie in einer Vektordatenbank und ruft relevante Chunks bei der Beantwortung von Fragen ab. Ab April 2026 ist lokales RAG produktionsbereit und eliminiert API-Kosten.',
      metaDescription: 'Lokale RAG 2026: erstellen Sie Dokumenten-Q&A-Systeme, Vektordatenbanken, Chunk-Strategien und Abrufoptimierung. Vollständiger Leitfaden.',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**Retrieval-Augmented Generation (RAG) lässt Ihr lokales LLM Fragen zu Ihren eigenen Dokumenten beantworten. Sie laden PDFs und Textdateien hoch, das System konvertiert sie in Embeddings, speichert sie in einer Vektordatenbank und ruft relevante Chunks bei der Beantwortung von Fragen ab.**',
      audience: 'Anfänger, die ihr erstes lokales LLM auf Consumer-Hardware ausführen',
      readTime: '14 Min. Lesezeit',
      educationalLevel: 'Intermediate to Advanced',
      primaryTerm: 'lokale RAG-Pipeline',
      toc: [
        { label: 'Zusammenfassung', anchor: '#key-takeaways' },
        { label: 'Wie RAG funktioniert', anchor: '#how-rag-works' },
        { label: 'Dokumenten-Chunk-Strategie', anchor: '#chunking' },
        { label: 'Vektordatenbanken 2026', anchor: '#vector-databases' },
        { label: 'Embedding-Modelle', anchor: '#embedding-models' },
        { label: 'Abruf-Pipeline', anchor: '#retrieval' },
        { label: 'Evaluierung und Optimierung', anchor: '#evaluation' },
        { label: 'Produktions-RAG-Muster', anchor: '#production' },
        { label: 'Häufige Fehler', anchor: '#common-mistakes' },
        { label: 'Häufig gestellte Fragen', anchor: '#common-questions' },
        { label: 'Weiterführende Literatur', anchor: '#related-reading' },
        { label: 'Quellen', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            'RAG = Dokumente hochladen + Abruf + lokales LLM antwortet. Kein Training erforderlich.',
            'Fünf Schritte: (1) Dokumente laden, (2) in 500-1000-Token-Stücke aufteilen, (3) Embeddings generieren, (4) in Vektor-DB speichern, (5) beim Abfragen abrufen.',
            'Bestes Embedding-Modell: nomic-embed-text (137M, läuft lokal, 768-dim Vektoren).',
            'Beste Vektor-DB: Chroma (einfach, eingebettet) für <1M Dokumente; Qdrant (verteilt) für Produktion.',
            'Ab April 2026 ist lokales RAG schneller und billiger als Cloud-APIs. Qualität hängt von Abruf-Genauigkeit und Prompt-Engineering ab.',
          ],
        },
        howRag: {
          title: 'Wie funktioniert RAG Schritt für Schritt?',
          numberedItems: [
            '**Dokumentaufnahme:** PDFs, Textdateien oder Webseiten laden.',
            '**Chunking:** Dokumente in 500-1000-Token-Chunks aufteilen (20% Überlappung, um Kontextbrüche zu verhindern).',
            '**Embedding:** Jeden Chunk in einen Vektor (768-1536 Dimensionen) mit lokalem Embedding-Modell konvertieren.',
            '**Speicherung:** Vektoren in Vektordatenbank (Chroma, Qdrant, Milvus) mit Metadaten (Dokumentname, Seite, Zeitstempel) speichern.',
            '**Abfragezeit:** Benutzerfrage in Embedding konvertieren, Vektor-DB nach Top-K ähnlichen Chunks durchsuchen (k=5-10).',
            '**Kontext-Zusammenstellung:** Abgerufene Chunks in einen Prompt mit Anweisungen für lokales LLM kombinieren.',
            '**Generierung:** Lokales LLM generiert Antwort basierend auf abgerufenem Kontext.',
            '**Attribution:** Zurückgeben, aus welchen Dokumenten die Antwort kam.',
          ],
        },
        chunking: {
          title: 'Was ist die optimale Chunk-Strategie?',
          content: [
            '**Chunk-Strategie bestimmt Abruf-Qualität.** Schlechtes Chunking = relevante Informationen auf Chunks verteilt, Abruf schlägt fehl.',
            '**Semantisches Chunking (empfohlen):** Nach Sätzen oder Absätzen aufteilen, Bedeutung bewahren. Beispiel: jeder Absatz = 1 Chunk.',
            '**Fest-Größe-Chunking:** 500 Token pro Chunk, 20% Überlappung. Einfach, aber kann Sätze aufteilen.',
            '**Rekursives Chunking:** Zuerst nach Absätzen, dann nach Sätzen wenn zu groß. Hierarchie bewahren.',
            'Ab April 2026 ist semantisches Chunking mit 500-1000-Token-Chunks und 20% Überlappung optimal für die meisten Anwendungsfälle.',
          ],
          codeBlock: '# Python: semantisches Chunking Beispiel\nfrom langchain.text_splitter import RecursiveCharacterTextSplitter\n\nsplitter = RecursiveCharacterTextSplitter(\n  chunk_size=1000,\n  chunk_overlap=200,  # 20% Überlappung\n  separators=["\\n\\n", "\\n", ".", " "]  # Nach Absatz, dann Satz aufteilen\n)\nchunks = splitter.split_documents(documents)\nprint(f"Erstellt {len(chunks)} Chunks")',
          codeLanguage: 'python',
        },
        vectorDatabases: {
          title: 'Welche Vektordatenbank sollten Sie verwenden?',
          rows: [
            { 'Datenbank': 'Chroma', 'Typ': 'Eingebettet', 'Kapazität': '<1M Dokumente', 'Einrichtungsaufwand': 'pip install', 'Am besten für': 'Prototyping, kleine RAG' },
            { 'Datenbank': 'Qdrant', 'Typ': 'Verteilt', 'Kapazität': 'Unbegrenzt', 'Einrichtungsaufwand': 'Docker oder Cloud', 'Am besten für': 'Produktion, skalierbar' },
            { 'Datenbank': 'Milvus', 'Typ': 'Verteilt', 'Kapazität': 'Unbegrenzt', 'Einrichtungsaufwand': 'Komplex', 'Am besten für': 'Unternehmensgroßstab' },
            { 'Datenbank': 'Weaviate', 'Typ': 'Graph + Vektor', 'Kapazität': 'Unbegrenzt', 'Einrichtungsaufwand': 'Docker', 'Am besten für': 'Komplexe Abfragen, Beziehungen' },
            { 'Datenbank': 'Pinecone (Cloud)', 'Typ': 'Verwaltet', 'Kapazität': 'Unbegrenzt', 'Einrichtungsaufwand': 'API-Schlüssel', 'Am besten für': 'Serverlos, wartungsfrei' },
          ],
          columns: ['Datenbank', 'Typ', 'Kapazität', 'Einrichtungsaufwand', 'Am besten für'],
        },
        embeddings: {
          title: 'Welches Embedding-Modell sollten Sie wählen?',
          rows: [
            { 'Modell': 'nomic-embed-text (lokal)', 'Dimensionen': '768', 'Geschwindigkeit': 'Schnell', 'Qualität': 'Ausgezeichnet', 'Empfehlung': 'Best für lokale RAG' },
            { 'Modell': 'bge-m3 (lokal)', 'Dimensionen': '1024', 'Geschwindigkeit': 'Schnell', 'Qualität': 'Ausgezeichnet', 'Empfehlung': 'Mehrsprachigkeit' },
            { 'Modell': 'OpenAI text-embedding-3 (Cloud)', 'Dimensionen': '3072', 'Geschwindigkeit': 'Sehr schnell', 'Qualität': 'Beste Klasse', 'Empfehlung': 'Hybrid-Ansatz' },
            { 'Modell': 'Cohere (Cloud)', 'Dimensionen': '4096', 'Geschwindigkeit': 'Schnell', 'Qualität': 'Ausgezeichnet', 'Empfehlung': 'Produktions-Cloud-RAG' },
          ],
          columns: ['Modell', 'Dimensionen', 'Geschwindigkeit', 'Qualität', 'Empfehlung'],
        },
        retrieval: {
          title: 'Wie optimieren Sie die Abruf-Qualität?',
          content: [
            '**Abruf-Qualität** bestimmt RAG-Erfolg. Guter Abruf = gute Antworten. Schlechter Abruf = Halluzinationen.',
          ],
          items: [
            '**Top K Auswahl:** K=5-10 Chunks abrufen. Höher K = mehr Kontext (langsamer), niedriger K = weniger Ablenkung.',
            '**Ähnlichkeitsschwelle:** Ergebnisse nach Mindestsimilaritätsscore filtern (z.B. >0,75). Vermeidet niedrig-relevante Chunks.',
            '**Reranking:** Cross-Encoder-Reranker zum erneuten Ranken nach Relevanz verwenden. Kleine Genauigkeitssteigerung.',
            '**Hybrid-Suche:** Semantische Suche (Embeddings) mit BM25-Keyword-Suche kombinieren. Erfasst exakte Keyword-Dokumente.',
            '**Query-Erweiterung:** Benutzerfrage mit Synonymen oder verwandten Begriffen erweitern. Verbessert Recall.',
          ],
        },
        evaluation: {
          title: 'Wie bewerten Sie RAG-Qualität?',
          content: [
            '**RAG-Qualität hat zwei Dimensionen: (1) Abruf-Qualität (bekamen wir relevante Chunks?), und (2) Generierungs-Qualität (antwortete das LLM gut?)**',
            '**Abruf-Bewertung:** Test-Abfragen mit bekannten korrekten Dokumenten erstellen. Präzision (wie viele abgerufene sind relevant?) und Recall (bekamen wir alle relevanten Dokumente?) messen.',
            '**Generierungs-Bewertung:** LLM auf abgerufenen Chunks ausführen, Antworten manuell bewerten (0-5 Skala) für Genauigkeit und Vollständigkeit.',
            'Ab April 2026 können automatisierte Evaluierungs-Tools (wie Ragas) Abruf- und Generierungs-Metriken automatisch messen.',
          ],
        },
        production: {
          title: 'Produktions-RAG-Muster',
          content: 'Verwenden Sie für Produktionsdienste diese Muster:',
          items: [
            '**Caching:** Embeddings häufig abgerufener Dokumente zwischenspeichern, um Neubrechnung zu vermeiden.',
            '**Inkrementelle Indizierung:** Neue Dokumente hinzufügen ohne alles neu zu indizieren. Qdrant und Milvus unterstützen dies.',
            '**Überwachung:** Abruf-Latenz, Cache-Hit-Rate und Benutzer-Feedback zur Antwortqualität nachverfolggen.',
            '**Fallback:** Falls Abruf fehlschlägt (keine relevanten Chunks), mit "Ich habe keine Informationen dazu" antworten statt zu halluzinieren.',
            '**Versionierung:** Dokumentversionen für Audit-Trails behalten. Speichern, welche Version für jede Antwort verwendet wurde.',
          ],
        },
        commonMistakes: {
          title: 'Häufige Fehler bei lokaler RAG-Implementierung',
          items: [
            '**Dokumente falsch chunken.** Zu viele kleine Chunks = Abruf-Rauschen. Zu wenige große Chunks = Information verteilt. Chunk-Größen empirisch testen.',
            '**Abruf nicht bewerten.** RAG bauen ohne Abruf-Test ist wie Auto ohne Motor-Test. Präzision/Recall immer messen.',
            '**Generische Embeddings für Domänen-Dokumente.** Rechts-, medizinische oder technische Dokumente brauchen möglicherweise feingestimmte Embeddings. Domain-spezifische Modelle erwägen.',
            '**Update-Häufigkeit vergessen.** Wenn Dokumente wöchentlich ändern, wird Vektor-DB veraltet. Pipeline zum Neu-Embedding und Update bauen.',
            '**RAG ersetzt Fine-Tuning erwartet.** RAG ist Kontext-Injektion. Fine-Tuning ist Modell-Anpassung. Für beste Ergebnisse beide kombinieren.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Häufig gestellte Fragen zu lokalem RAG',
          faqs: [
            {
              q: 'Wie viele Dokumente kann lokales RAG handhaben?',
              a: 'Chroma handhabet 100K-1M Dokumente auf Consumer-Hardware. Qdrant skaliert zu Milliarden mit verteiltem Setup. Über 1M verwenden Sie Qdrant oder Milvus.',
            },
            {
              q: 'Welche Latenz sollte ich erwarten?',
              a: 'Embedding-Abfrage (nomic-embed-text auf CPU): 50-200ms. Abruf (Chroma auf Disk): 10-50ms. LLM-Generierung: 2-10 Sekunden (hängt von Modellgröße ab). Gesamt: 2-10 Sekunden pro Abfrage.',
            },
            {
              q: 'Kann RAG Echtzeit-Dokument-Updates handhaben?',
              a: 'Ja. Neue Dokumente dynamisch zur Vektor-DB hinzufügen. Indizierungs-Latenz ist 100-500ms pro Dokument, also Echtzeit-Updates sind praktisch.',
            },
            {
              q: 'Ist lokales RAG billiger als Cloud-APIs?',
              a: 'Ja. Keine Pro-Token-Kosten, keine API-Aufrufe an externe Services. One-Time Setup von Embeddings, dann kostenlose Abfragen.',
            },
            {
              q: 'Kann ich Cloud-Embeddings mit lokalen LLMs verwenden?',
              a: 'Ja. OpenAI-, Cohere- oder andere Cloud-Embeddings zur Indizierung verwenden, dann lokale LLMs zur Generierung. Hybrid-Ansatz.',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Weiterführende Literatur',
          items: [
            '[Beste lokale RAG-Tools](/local-llms/best-local-rag-tools?lang=de) -- Vektordatenbanken und Frameworks.',
            '[Prompt-Engineering-Anleitung](/prompt-engineering?lang=de) -- Prompts für RAG optimieren.',
            '[Lokale LLM OpenAI-kompatible API](/local-llms/local-llm-openai-compatible-api?lang=de) -- RAG als API bereitstellen.',
            '[Fine-Tuning lokaler LLMs LoRA](/local-llms/fine-tuning-local-llms-lora?lang=de) -- Fine-Tuning mit RAG kombinieren.',
          ],
        },
        sources: {
          id: 'sources',
          title: 'Quellen',
          items: [
            'LlamaIndex Dokumentation -- docs.llamaindex.ai',
            'LangChain RAG-Anleitung -- python.langchain.com/docs/use_cases/question_answering',
            'Chroma Dokumentation -- docs.trychroma.com',
            'Qdrant Vector Search Engine -- qdrant.tech',
            'RAG-Paper (Lewis et al.) -- arxiv.org/abs/2005.11401',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Lokale RAG 2026: Erstellen Sie Dokumenten-Q&A-Systeme ohne Cloud-APIs',
        'description': 'Lokale RAG 2026: erstellen Sie Dokumenten-Q&A-Systeme, Vektordatenbanken, Chunk-Strategien und Abrufoptimierung. Vollständiger Leitfaden.',
        'url': 'https://www.promptquorum.com/local-llms/local-rag-2026?lang=de',
        'inLanguage': 'de',
        'datePublished': '2026-04-04',
        'author': { '@type': 'Organization', 'name': 'PromptQuorum' },
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways', 'h2'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'inLanguage': 'de',
        'mainEntity': [
          { '@type': 'Question', 'name': 'Wie viele Dokumente kann lokales RAG handhaben?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Chroma handhabet 100K-1M Dokumente auf Consumer-Hardware. Qdrant skaliert zu Milliarden mit verteiltem Setup. Über 1M verwenden Sie Qdrant oder Milvus.' } },
          { '@type': 'Question', 'name': 'Welche Latenz sollte ich erwarten?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Embedding-Abfrage (nomic-embed-text auf CPU): 50-200ms. Abruf (Chroma auf Disk): 10-50ms. LLM-Generierung: 2-10 Sekunden. Gesamt: 2-10 Sekunden pro Abfrage.' } },
          { '@type': 'Question', 'name': 'Kann RAG Echtzeit-Dokument-Updates handhaben?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja. Neue Dokumente dynamisch zur Vektor-DB hinzufügen. Indizierungs-Latenz ist 100-500ms pro Dokument, also Echtzeit-Updates sind praktisch.' } },
          { '@type': 'Question', 'name': 'Ist lokales RAG billiger als Cloud-APIs?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja. Keine Pro-Token-Kosten, keine API-Aufrufe an externe Services. One-Time Setup von Embeddings, dann kostenlose Abfragen.' } },
          { '@type': 'Question', 'name': 'Kann ich Cloud-Embeddings mit lokalen LLMs verwenden?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja. OpenAI-, Cohere- oder andere Cloud-Embeddings zur Indizierung verwenden, dann lokale LLMs zur Generierung. Hybrid-Ansatz.' } },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Lokale RAG 2026 Essentials',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Dokumente richtig chunken', 'description': 'Dokumente in 500-1000-Token-Chunks mit 20% Überlappung aufteilen. Semantisches Chunking bewahrt Bedeutung besser als feste Größe.' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Vektordatenbank wählen', 'description': 'Chroma für <1M Dokumente auf Consumer-Hardware. Qdrant für verteilt, produktions-skalierbare RAG.' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Abruf-Qualität bewerten', 'description': 'Präzision und Recall messen. Schlechter Abruf = Halluzinationen. Automatisierte Tools wie Ragas zur Bewertung verwenden.' },
        ]
      },
    },
  };
