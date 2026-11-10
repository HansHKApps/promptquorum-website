// Local AI App Directory — StratoSort (repo name StratoSortStack): desktop app that reads file contents, proposes names and folders, searches and chats over documents with local GGUF models (layer: desktop file-organisation + document search, Knowledge & Retrieval / Local search)
// Added 2026-11-10 at the operator's request (link https://stratosort.com/). Independent PromptQuorum entry; not hands-on tested.
// 2026-11-10 maker update (unsigned note from the maker of StratoSort, sent via the owner): 3 corrections (vision runtime + OCR data ship with installers, speech model is the only one-off extra download; "no automatic network traffic" dropped from Who Should Not Use; raw GitHub markdown link in step 1 fixed),
// plus renaming optional (keep-original), folder watching, Relate/Atlas/Timeline graph views, exact-term + semantic search with cited sources, read-only MCP on 127.0.0.1, signed Windows installers / notarized Mac builds since v4.0.0, air-gapped install guide, demo video (https://stratosort.com/assets/strato-ad.mp4, linked in Get It),
// new One Sentence and Knowledge OS framing. `founder` set (maker note, signed Ben Kennedy, Ph.D.); `founderReviewedDate` set 2026-11-10 on the OWNER's explicit instruction ("mark the Maker Notes and the Founder Badge"). Single review, so no founderReviewDates.
// Facts verified 2026-11-10 against stratosort.com (home, /privacy.html, /docs/, /docs/CONFIG.html, /docs/NETWORK_TRANSPARENCY.html) and the GitHub API/Releases/LICENSE of iLevyTate/StratoSortStack
// (homepage field https://stratosort.com/docs/; LICENSE file: "PolyForm Noncommercial License 1.0.0", Copyright Kennedy Applied Sciences, Inc.; GitHub API reports NOASSERTION; 2 stars).
// Latest release v5.1.2 (not a pre-release) published 2026-11-01T04:46:55Z; newest default-branch push 2026-11-10T02:33:08Z. So the 3-month stale warning is OFF.
// Assets on v5.1.2: StratoSortStack-Setup-5.1.2.exe (+ arm64), StratoSortStack-5.1.2-win-x64.zip, StratoSortStack-5.1.2-mac-arm64.dmg, -mac-x64.dmg (+ zips), linux x86_64 and arm64 AppImage, linux amd64 and arm64 .deb, SHA-256 checksum files.
// Local claim (site, privacy.html, NETWORK_TRANSPARENCY.html): in-process node-llama-cpp (llama.cpp) with GGUF models, Orama search store, bundled llama-server for vision, Whisper (whisper.cpp) for audio;
// "Once the models are installed, StratoSort runs without internet"; Base profile Llama-3.2-3B-Instruct Q4_K_M + llava-v1.6-mistral-7b + all-MiniLM-L6-v2 (~7 GB), Better Quality profile Qwen2.5-7B-Instruct Q4_K_M + nomic-embed-text-v1.5 (~10 GB, 16 GB RAM + 8 GB GPU suggested).
// Network per NETWORK_TRANSPARENCY: model downloads from huggingface.co, GitHub Releases update check ON by default in packaged builds (every 4 hours, can be disabled), optional cloud AI only with the user's own Anthropic/OpenAI-compatible key, optional MCP server on 127.0.0.1.
// Privacy wording (privacy.html, updated 2026-10-29): "The app does not include analytics, telemetry, crash reporters, or feature-flag SDKs that phone home." Not verified by PromptQuorum (no traffic inspection, no source audit).
// Price: free for personal and noncommercial use with all features; commercial use needs a paid per-seat licence from Kennedy Applied Sciences, Inc. quoted by email (no published price).
// Hardware: 8 GB RAM minimum, GPU optional (CUDA, Metal, Vulkan, CPU fallback), disk ~7 GB (Base) or ~10 GB (Better Quality) for models.
// Not checked: accuracy of renaming/sorting, speed, install on each OS, the Install Guide / User Guide / Terms pages, AI_PROVIDERS and MCP_SERVER docs.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'stratosort',
  name: 'StratoSort',
  categories: ['file-organization', 'local-search', 'document-pdf-chat'],
  interfaces: ['desktop'], // Electron desktop app; opt-in local MCP server for Claude Desktop, Cursor, Zed
  locality: 'local', // site + docs: in-process llama.cpp, models run on the computer and work offline once installed; cloud AI only with the user's own API key (off by default); model downloads and update checks use the network
  platforms: ['mac', 'win', 'linux'], // Windows 10 22H2/11 x64+arm64, macOS 13+ Apple Silicon + Intel, Ubuntu 22.04+ x64+arm64 (AppImage, .deb)
  worksWith: ['llama.cpp', 'GGUF', 'Whisper', 'Ollama', 'LM Studio', 'MCP', 'Claude Desktop', 'Cursor', 'Zed'], // node-llama-cpp runtime; optional own Anthropic/OpenAI-compatible key which may point to a local Ollama or LM Studio endpoint; opt-in MCP server
  engine: 'builtin', // node-llama-cpp (llama.cpp) in-process, bundled llama-server for vision, whisper.cpp for audio; GGUF models downloaded in-app
  license: 'Source-available (PolyForm Noncommercial 1.0.0)', // LICENSE file read 2026-11-10: personal and other noncommercial use free, commercial use needs a paid licence; site says "Source available"; GitHub API reports NOASSERTION
  price: 'freemium', // free for personal/noncommercial use with every feature; paid per-seat commercial licence by email quote
  hardware: { ramGb: 8, vramGb: null, cpuOnly: true }, // docs: 8 GB RAM minimum; GPU optional (CUDA/Metal/Vulkan) with CPU fallback; Better Quality profile suggests 16 GB RAM and an 8 GB GPU
  stars: 2, // GitHub API read 2026-11-10
  addedDate: '2026-11-10',
  status: 'listed',
  uses: ['docs'],
  url: 'stratosort.com',
  storeLinks: {
    github: 'https://github.com/iLevyTate/StratoSortStack',
    web: 'https://stratosort.com',
  },
  installEffort: 'installer',
  installEvidence: 'GitHub Releases v5.1.2 (2026-11-01) checked 2026-11-10: StratoSortStack-Setup-5.1.2.exe and -arm64.exe, StratoSortStack-5.1.2-mac-arm64.dmg and -mac-x64.dmg, StratoSortStack-5.1.2-linux-x86_64.AppImage and -arm64.AppImage, linux amd64/arm64 .deb, SHA-256 checksum files; the AI models (about 7 GB Base) are downloaded inside the app after install',
  tagline: {
    en: 'Desktop app that reads your files, suggests names and folders you can review and undo, and adds semantic search and document chat with local llama.cpp models that work offline once installed',
    de: 'Desktop-App, die Ihre Dateien liest, Namen und Ordner vorschlägt, die Sie prüfen und rückgängig machen können, und semantische Suche sowie Dokument-Chat mit lokalen llama.cpp-Modellen bietet, die nach der Installation offline funktionieren',
    fr: 'Application de bureau qui lit vos fichiers, propose des noms et des dossiers que vous pouvez vérifier et annuler, et ajoute recherche sémantique et chat avec vos documents grâce à des modèles llama.cpp locaux qui fonctionnent hors ligne une fois installés',
    ja: 'ファイルの内容を読み取り、確認・取り消しできる名前とフォルダーを提案し、セマンティック検索やドキュメントとのチャットも備えたデスクトップアプリ。ローカルのllama.cppモデルはインストール後オフラインで動作します',
    zh: '桌面应用，读取你的文件内容，建议可审阅、可撤销的文件名和文件夹，并提供语义搜索和文档对话；本地 llama.cpp 模型安装后可离线运行',
    es: 'Aplicación de escritorio que lee tus archivos, sugiere nombres y carpetas que puedes revisar y deshacer, y añade búsqueda semántica y chat con documentos mediante modelos llama.cpp locales que funcionan sin conexión una vez instalados',
    pt: 'Aplicativo de desktop que lê seus arquivos, sugere nomes e pastas que você pode revisar e desfazer, e acrescenta busca semântica e chat com documentos usando modelos llama.cpp locais que funcionam offline depois de instalados',
    ar: 'تطبيق سطح مكتب يقرأ ملفاتك ويقترح أسماءً ومجلدات يمكنك مراجعتها والتراجع عنها، ويضيف بحثًا دلاليًا ودردشة مع المستندات بنماذج llama.cpp محلية تعمل دون اتصال بعد التثبيت',
    ko: '파일 내용을 읽고 검토하고 되돌릴 수 있는 이름과 폴더를 제안하며, 설치 후 오프라인으로 작동하는 로컬 llama.cpp 모델로 시맨틱 검색과 문서 채팅까지 제공하는 데스크톱 앱입니다',
  },
  reviewSlug: 'stratosort-review',
  pqReview: {
    date: '2026-11-10',
    version: '5.1.2',
    versionSourceUrl: 'https://github.com/iLevyTate/StratoSortStack/releases/latest',
  },
  verdict: 'Best for people with messy document, scan, image and audio folders on Mac, Windows or Linux who want AI-suggested names and folders they can review and undo, with local models that run offline after a one-time download of about 7 GB; limited by a noncommercial licence (commercial use needs a paid per-seat licence), an update check that is on by default, a very young public project, and privacy claims PromptQuorum did not test.',
  lastVerifiedDate: '2026-11-10',
  lastUpstreamUpdate: '2026-11-10', // GitHub: newer of release v5.1.2 (2026-11-01) and last push to main (2026-11-10T02:33:08Z); read 2026-11-10
  lastUpstreamUpdateSource: 'https://github.com/iLevyTate/StratoSortStack',
  founderReviewedDate: '2026-11-10', // Owner instruction 2026-11-10 ("mark the Maker Notes and the Founder Badge"): Ben Kennedy, Ph.D. sent corrections and a note; drives the Founder-reviewed banner + star. Single review, so no founderReviewDates.
  founder: {
    who: {
      en: "Ben Kennedy, Ph.D., maker of StratoSort",
      de: "Ben Kennedy, Ph.D., Hersteller von StratoSort",
      es: "Ben Kennedy, Ph.D., desarrollador de StratoSort",
      fr: "Ben Kennedy, Ph.D., éditeur de StratoSort",
      ja: "Ben Kennedy, Ph.D.、StratoSortの開発元",
      pt: "Ben Kennedy, Ph.D., desenvolvedor do StratoSort",
      ar: "Ben Kennedy, Ph.D.، مطوّر StratoSort",
      zh: "Ben Kennedy, Ph.D.，StratoSort的开发者",
      ko: "Ben Kennedy, Ph.D., StratoSort 개발사",
    },
    providedDate: '2026-11-10',
    why: {
      en: "I built StratoSort for people whose files are too private to upload to a cloud AI service.",
      de: "Ich habe StratoSort für Menschen gebaut, deren Dateien zu privat sind, um sie bei einem Cloud-KI-Dienst hochzuladen.",
      es: "Creé StratoSort para personas cuyos archivos son demasiado privados para subirlos a un servicio de IA en la nube.",
      fr: " J'ai créé StratoSort pour les personnes dont les fichiers sont trop privés pour être envoyés à un service d'IA dans le cloud.",
      ja: "StratoSortは、ファイルがあまりにプライベートで、クラウドのAIサービスにアップロードできない人のために作りました。",
      pt: "Criei o StratoSort para pessoas cujos arquivos são particulares demais para enviar a um serviço de IA na nuvem.",
      ar: "بنيت StratoSort لأصحاب الملفات الخاصة جدًا بحيث لا يمكن رفعها إلى خدمة ذكاء اصطناعي سحابية.",
      zh: "我开发StratoSort，是为了那些文件太私密、不能上传到云端AI服务的人。",
      ko: "저는 파일이 너무 사적이라 클라우드 AI 서비스에 올릴 수 없는 사람들을 위해 StratoSort를 만들었습니다.",
    },
    fullQuote: {
      en: ["I built StratoSort for people whose files are too private to upload to a cloud AI service. After the models download, sorting, search, chat and transcription all run on your machine. There's no account and no telemetry, and with update checks off and no cloud key it makes no outbound requests. I've built it solo over about 17 months of part-time work. If anything behaves differently from what the docs say, open an issue on GitHub and I'll look at it."],
      de: ["Ich habe StratoSort für Menschen gebaut, deren Dateien zu privat sind, um sie bei einem Cloud-KI-Dienst hochzuladen. Nachdem die Modelle heruntergeladen sind, laufen Sortieren, Suche, Chat und Transkription auf Ihrem Rechner. Es gibt kein Konto und keine Telemetrie, und mit ausgeschalteter Update-Prüfung und ohne Cloud-Schlüssel stellt die App keine ausgehenden Anfragen. Ich habe es allein in etwa 17 Monaten Teilzeitarbeit gebaut. Wenn sich etwas anders verhält, als es in der Dokumentation steht, eröffnen Sie ein Issue auf GitHub, und ich schaue es mir an."],
      es: ["Creé StratoSort para personas cuyos archivos son demasiado privados para subirlos a un servicio de IA en la nube. Una vez descargados los modelos, la ordenación, la búsqueda, el chat y la transcripción se ejecutan en tu equipo. No hay cuenta ni telemetría, y con las comprobaciones de actualizaciones desactivadas y sin clave de la nube no hace ninguna solicitud saliente. Lo he construido yo solo a lo largo de unos 17 meses de trabajo a tiempo parcial. Si algo se comporta de forma distinta a lo que dice la documentación, abre una incidencia en GitHub y le echaré un vistazo."],
      fr: [" J'ai créé StratoSort pour les personnes dont les fichiers sont trop privés pour être envoyés à un service d'IA dans le cloud. Une fois les modèles téléchargés, le tri, la recherche, le chat et la transcription fonctionnent tous sur votre machine. Il n'y a ni compte ni télémétrie, et, avec les vérifications de mises à jour désactivées et sans clé cloud, l'application n'effectue aucune requête sortante. Je l'ai développée seul, en environ 17 mois de travail à temps partiel. Si quelque chose se comporte autrement que ce qu'indique la documentation, ouvrez un ticket sur GitHub et je regarderai. "],
      ja: ["StratoSortは、ファイルがあまりにプライベートで、クラウドのAIサービスにアップロードできない人のために作りました。モデルをダウンロードしたあとは、整理、検索、チャット、文字起こしのすべてがお使いのマシン上で動作します。アカウントもテレメトリーもなく、更新の確認をオフにしてクラウドのキーも設定しなければ、外部へのリクエストは一切行いません。私は約17か月、パートタイムで一人で開発してきました。ドキュメントと動作が違う点があれば、GitHubでissueを立ててください。確認します。"],
      pt: ["Criei o StratoSort para pessoas cujos arquivos são particulares demais para enviar a um serviço de IA na nuvem. Depois que os modelos são baixados, organização, busca, chat e transcrição rodam todos na sua máquina. Não há conta nem telemetria, e com as verificações de atualização desativadas e sem chave de nuvem ele não faz nenhuma requisição de saída. Desenvolvi o app sozinho ao longo de cerca de 17 meses de trabalho em meio período. Se algo se comportar de forma diferente do que a documentação diz, abra uma issue no GitHub que eu vou analisar."],
      ar: ["بنيت StratoSort لأصحاب الملفات الخاصة جدًا بحيث لا يمكن رفعها إلى خدمة ذكاء اصطناعي سحابية. فبعد تنزيل النماذج، تعمل عمليات الترتيب والبحث والمحادثة والتفريغ الصوتي كلها على جهازك. لا يوجد حساب ولا قياس عن بُعد (telemetry)، ومع إيقاف فحص التحديثات وعدم وجود مفتاح سحابي لا يجري أي طلبات صادرة. بنيته بمفردي خلال نحو 17 شهرًا من العمل بدوام جزئي. وإذا تصرّف أي شيء بخلاف ما تقوله الوثائق، فافتح بلاغًا (issue) على GitHub وسأنظر فيه."],
      zh: ["我开发StratoSort，是为了那些文件太私密、不能上传到云端AI服务的人。模型下载完成后，整理、搜索、问答和转写都在你的电脑上运行。没有账号，没有遥测；关闭更新检查且没有云端密钥时，它不会发出任何对外请求。我独自开发了大约17个月，都是利用业余时间。如果有任何表现与文档所述不同，请在GitHub上提交issue，我会去查看。"],
      ko: ["저는 파일이 너무 사적이라 클라우드 AI 서비스에 올릴 수 없는 사람들을 위해 StratoSort를 만들었습니다. 모델을 내려받고 나면 정리, 검색, 대화, 전사가 모두 사용자의 컴퓨터에서 실행됩니다. 계정도 원격 측정도 없으며, 업데이트 확인을 끄고 클라우드 키를 추가하지 않으면 외부로 나가는 요청이 전혀 없습니다. 저는 약 17개월 동안 파트타임으로 혼자 만들었습니다. 동작이 문서와 다르다면 GitHub에 이슈를 열어 주시면 확인하겠습니다."],
    },
  },
}
