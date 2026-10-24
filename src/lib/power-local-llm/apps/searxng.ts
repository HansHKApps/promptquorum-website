// Local AI App Directory — SearXNG: self-hosted privacy metasearch backend for local LLM web search (layer: search, Local search)
// Added 2026-10-24. Facts verified 2026-10-24 against docs.searxng.org (front page: "Search without being tracked", up to 261 search
// services, about 70 instances on searx.space; user/about.html privacy statements; installation-docker.html; dev/search_api.html),
// the GitHub repo searxng/searxng (GitHub API: AGPL-3.0, homepage docs.searxng.org, last push 2026-10-24, not archived),
// container/docker-compose.yml and searx/settings.yml on master (search.formats default [html], server.limiter default false,
// bind_address 127.0.0.1) and Docker Hub searxng/searxng tags (latest 2026.10.24-ef0ec03da pushed 2026-10-24).
// Rolling release: docs/CHANGELOG.rst says the version number is based on the git commit; the repo has no GitHub releases or tags,
// so pqReview.version is the newest dated container tag and versionSourceUrl is the Docker Hub tag list.
// SearXNG is not an AI model: it is the search backend that front ends such as Open WebUI, Farfalle and Vane call. No hands-on test.
// There is no separate privacy-policy document; the privacy statements are on docs.searxng.org/user/about.html.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'searxng',
  name: 'SearXNG',
  categories: ['local-search'],
  interfaces: ['web'],
  locality: 'hybrid', // the metasearch engine runs on your own machine, but each query is forwarded to the upstream search engines (docs: "mixing your queries with searches on other platforms")
  platforms: ['linux', 'mac', 'win'], // delivered as a container image (Docker or Podman) plus install scripts; the docs page does not list host operating systems, so this is an inference from the container route
  worksWith: ['Open WebUI', 'Farfalle', 'Vane'], // front ends that name SearXNG as a search provider (Open WebUI docs, Farfalle review, Vane tile)
  engine: 'external', // contains no language model; results are consumed by whichever LLM front end calls it
  license: 'AGPL-3.0', // GitHub API licence field, 2026-10-24
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: null }, // the docs state no hardware requirement
  stars: 38794, // GitHub API stargazers_count, 2026-10-24
  addedDate: '2026-10-24',
  status: 'listed',
  uses: ['serve'],
  url: 'docs.searxng.org',
  storeLinks: {
    web: 'https://docs.searxng.org',
    github: 'https://github.com/searxng/searxng',
  },
  installEffort: 'terminal-setup',
  installEvidence: 'docs.searxng.org/admin/installation-docker.html (checked 2026-10-24): recommended route is Docker Compose (download docker-compose.yml and .env.example, edit core-config/settings.yml, docker compose up -d); the manual docker run example is for advanced users. GitHub has no Releases assets; container tags on Docker Hub. Using it as an LLM search backend also needs the json output format enabled in settings.yml',
  tagline: {
    en: 'Self-hosted privacy metasearch engine that local LLM front ends such as Open WebUI can call as a web-search backend',
    de: 'Selbst gehostete Datenschutz-Metasuchmaschine, die sich von lokalen LLM-Oberflächen wie Open WebUI als Websuche-Backend ansprechen lässt',
    fr: "Métamoteur de recherche auto-hébergé axé sur la confidentialité, utilisable comme backend de recherche web par des interfaces LLM locales comme Open WebUI",
    ja: 'Open WebUIなどのローカルLLMフロントエンドからWeb検索バックエンドとして呼び出せる、セルフホスト型のプライバシー重視メタ検索エンジン',
    zh: '自托管、注重隐私的元搜索引擎，Open WebUI 等本地 LLM 前端可将其作为网页搜索后端调用',
    es: 'Metabuscador autoalojado centrado en la privacidad que interfaces de LLM locales como Open WebUI pueden usar como backend de búsqueda web',
    pt: 'Metabuscador auto-hospedado focado em privacidade que interfaces de LLM locais, como o Open WebUI, podem usar como backend de busca na web',
    ar: 'محرك بحث وصفي مستضاف ذاتيًا يركّز على الخصوصية، يمكن لواجهات النماذج المحلية مثل Open WebUI استخدامه كخلفية للبحث في الويب',
    ko: 'Open WebUI 같은 로컬 LLM 프런트엔드가 웹 검색 백엔드로 호출할 수 있는 셀프호스팅 프라이버시 메타 검색 엔진',
  },
  reviewSlug: 'searxng-review',
  pqReview: {
    date: '2026-10-24',
    version: '2026.10.24-ef0ec03da',
    versionSourceUrl: 'https://hub.docker.com/r/searxng/searxng/tags',
  },
  // Comparison attributes: verified against docs.searxng.org on 2026-10-24; a missing key = not stated there, never false.
  compare: { webSearch: true },
  verdict: 'Best for people who already run a local LLM front end and want a self-hosted web-search backend they control; limited by a Docker-based setup, a json setting that is off by default, queries that still reach upstream search engines and privacy claims PromptQuorum could not audit.',
  lastVerifiedDate: '2026-10-24',
  lastUpstreamUpdate: '2026-10-24', // GitHub API pushed_at 2026-10-24T08:49Z; newest Docker Hub tag 2026.10.24-ef0ec03da pushed the same day (no GitHub releases exist)
  lastUpstreamUpdateSource: 'https://github.com/searxng/searxng',
}
