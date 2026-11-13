// Local AI App Directory — Argos Translate: open-source offline neural machine translation for Python, the command line and (separate package) a desktop GUI (layer: translation library)
// Added 2026-11-13. Facts verified 2026-11-13 against argosopentech.com (home), the GitHub API/README/pyproject of argosopentech/argos-translate
// (MIT licence, 6,647 stars, homepage www.argosopentech.com, pushed 2026-08-08T12:09:57Z), PyPI argostranslate 1.11.0 (uploaded 2026-02-02), the argospm-index
// repo (index.json: 100 language-pair packages, 50 language codes), argos-translate.readthedocs.io and the GitHub/PyPI pages of argos-translate-gui.
// Local claim (README + site): "Open-source offline translation library written in Python"; OpenNMT/CTranslate2 inference on the computer, language packages
// (.argosmodel zip archives) are downloaded once through `argospm` / the package index and then used without a connection. Package index updates and downloads, and pip itself, use the network.
// Install path: `pip install argostranslate` (one command), then `argospm update` + `argospm install translate-en_de`; GUI is a separate package (`pip install argostranslategui`,
// PyPI 1.6.5 of 2023-06-02, repo last pushed 2025-03-26, no GitHub Releases). The only GitHub Release (v1.4.0, 2021-08-24) is an old argostranslate.app.zip; the library ships via PyPI.
// No installer (.dmg/.exe) found on the site, GitHub Releases or PyPI -> installEffort = one-command.
// Latest version = PyPI 1.11.0 (tag v1.11.0, 2026-02-02). Newest default-branch commit 2026-08-08 ("Make Stanza an optional dep") -> lastUpstreamUpdate 2026-08-08, 97 days before 2026-11-13,
// so the 3-month stale warning is ON (quiet). LibreTranslate (web app + API on top of Argos Translate) is a separate project and NOT part of this tile.
// Custom models trained on your own data are offered as a paid service ($1000/language, negotiable, README); donations/sponsor on the README. Not checked: translation quality, speed, network traffic. No hands-on testing by PromptQuorum.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'argos-translate',
  name: 'Argos Translate',
  categories: ['translation', 'sdks-libraries'],
  interfaces: ['library', 'cli'],
  locality: 'local', // README + site: offline translation library; OpenNMT/CTranslate2 runs on the computer once language packages are downloaded; pip install, package-index updates and package downloads use the network
  platforms: ['mac', 'win', 'linux'], // Python library; the maker lists no OS, but its CTranslate2 dependency publishes macOS (arm64, x86_64), Windows (amd64) and Linux (x86_64, aarch64) wheels (PyPI, read 2026-11-13)
  worksWith: ['OpenNMT', 'CTranslate2', 'SentencePiece', 'Stanza', 'LibreTranslate'], // README/docs; LibreTranslate is a web app + API built on top of it, maintained as its own project
  engine: 'library', // ships as a Python library with its own CTranslate2 inference; no external model server
  license: 'MIT',
  price: 'free', // free and open source; the maker sells custom-trained language models ($1000/language) and takes donations
  hardware: { ramGb: null, vramGb: null, cpuOnly: true, variesByModel: false }, // no RAM requirement stated; README: GPU is opt-in via ARGOS_DEVICE_TYPE=cuda|auto (CTranslate2), so CPU is the default
  stars: 6647, // GitHub API read 2026-11-13
  addedDate: '2026-11-13',
  status: 'listed',
  uses: ['docs', 'build'],
  url: 'argosopentech.com',
  storeLinks: {
    github: 'https://github.com/argosopentech/argos-translate',
    web: 'https://www.argosopentech.com',
  },
  installEffort: 'one-command',
  installEvidence: 'README install section checked 2026-11-13: `pip install argostranslate` (PyPI 1.11.0, 2026-02-02), then `argospm update` and `argospm install translate-en_de`; GUI is a separate `pip install argostranslategui`; GitHub Releases hold only an old v1.4.0 argostranslate.app.zip (2021); no .dmg/.exe/.AppImage or store listing found on the site or PyPI',
  tagline: {
    en: 'Free, MIT-licensed offline translation library for Python and the command line that translates on your own computer with downloadable language packages',
    de: 'Kostenlose Offline-Übersetzungsbibliothek unter MIT-Lizenz für Python und die Kommandozeile, die mit herunterladbaren Sprachpaketen auf Ihrem eigenen Rechner übersetzt',
    fr: 'Bibliothèque de traduction hors ligne gratuite sous licence MIT pour Python et la ligne de commande, qui traduit sur votre propre ordinateur grâce à des paquets de langues téléchargeables',
    ja: 'MITライセンスの無料オフライン翻訳ライブラリ（PythonとCLI対応）。ダウンロードした言語パッケージで、お使いのPC上で翻訳します',
    zh: '采用 MIT 许可证的免费离线翻译库，支持 Python 和命令行，使用可下载的语言包在你自己的电脑上翻译',
    es: 'Biblioteca de traducción sin conexión, gratuita y con licencia MIT, para Python y la línea de comandos, que traduce en tu propio ordenador con paquetes de idiomas descargables',
    pt: 'Biblioteca de tradução offline gratuita com licença MIT para Python e linha de comando, que traduz no seu próprio computador com pacotes de idiomas baixáveis',
    ar: 'مكتبة ترجمة مجانية دون اتصال بترخيص MIT لـ Python وسطر الأوامر، تترجم على حاسوبك باستخدام حزم لغات قابلة للتنزيل',
    ko: 'Python과 명령줄용 MIT 라이선스 무료 오프라인 번역 라이브러리로, 내려받은 언어 패키지로 내 컴퓨터에서 번역합니다',
  },
  // Comparison attributes: the translation category has no comparison segment yet, so none are set.
  reviewSlug: 'argos-translate-review',
  pqReview: {
    date: '2026-11-13',
    version: '1.11.0',
    versionSourceUrl: 'https://pypi.org/project/argostranslate/',
  },
  verdict: 'Best for developers and technical users who want free, open-source translation that runs on their own machine through Python or the command line and who accept a terminal install, language packages that must be downloaded per language pair, a desktop GUI that is a separate and older package, and a repository with no update since August 2026; PromptQuorum did not test translation quality or speed.',
  lastVerifiedDate: '2026-11-13',
  lastUpstreamUpdate: '2026-08-08', // GitHub: newer of latest release (PyPI 1.11.0, 2026-02-02) and last push to the default branch (2026-08-08T12:09:52Z commit "Make Stanza an optional dep"); read 2026-11-13
  lastUpstreamUpdateSource: 'https://github.com/argosopentech/argos-translate',
}
