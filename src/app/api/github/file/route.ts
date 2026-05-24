import { NextRequest, NextResponse } from 'next/server';

const ALLOWED_ORIGIN = 'https://www.promptquorum.com';
const ALLOWED_OWNER = 'HansHKApps';
const ALLOWED_REPO = 'promptquorum-website';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
  'Access-Control-Allow-Methods': 'GET, PUT, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

function getToken(request: NextRequest): string | null {
  const auth = request.headers.get('authorization');
  if (!auth) return null;
  return auth.replace(/^Bearer\s+/i, '').trim() || null;
}

function repoAllowed(owner: string | null, repo: string | null): boolean {
  return owner === ALLOWED_OWNER && repo === ALLOWED_REPO;
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 200, headers: CORS_HEADERS });
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const owner = searchParams.get('owner');
  const repo = searchParams.get('repo');
  const path = searchParams.get('path');

  if (!owner || !repo || !path) {
    return NextResponse.json(
      { error: 'Missing required parameters: owner, repo, path' },
      { status: 400, headers: CORS_HEADERS }
    );
  }

  if (!repoAllowed(owner, repo)) {
    return NextResponse.json(
      { error: 'Repository not allowed' },
      { status: 403, headers: CORS_HEADERS }
    );
  }

  const token = getToken(request);
  if (!token) {
    return NextResponse.json(
      { error: 'Authorization header with Bearer token required' },
      { status: 401, headers: CORS_HEADERS }
    );
  }

  const fileUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;

  try {
    const res = await fetch(fileUrl, {
      headers: {
        'Authorization': `token ${token}`,
        'Accept': 'application/vnd.github+json',
        'User-Agent': 'PromptQuorum-SEO-Manager'
      }
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: `GitHub API error: ${res.status}` },
        { status: res.status, headers: CORS_HEADERS }
      );
    }

    const data = await res.json();
    return NextResponse.json(data, { headers: CORS_HEADERS });
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to fetch from GitHub: ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500, headers: CORS_HEADERS }
    );
  }
}

export async function PUT(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const owner = searchParams.get('owner');
  const repo = searchParams.get('repo');
  const path = searchParams.get('path');

  if (!owner || !repo || !path) {
    return NextResponse.json(
      { error: 'Missing required parameters: owner, repo, path' },
      { status: 400, headers: CORS_HEADERS }
    );
  }

  if (!repoAllowed(owner, repo)) {
    return NextResponse.json(
      { error: 'Repository not allowed' },
      { status: 403, headers: CORS_HEADERS }
    );
  }

  const token = getToken(request);
  if (!token) {
    return NextResponse.json(
      { error: 'Authorization header with Bearer token required' },
      { status: 401, headers: CORS_HEADERS }
    );
  }

  const fileUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
  const body = await request.json();

  try {
    const res = await fetch(fileUrl, {
      method: 'PUT',
      headers: {
        'Authorization': `token ${token}`,
        'Content-Type': 'application/json',
        'User-Agent': 'PromptQuorum-SEO-Manager'
      },
      body: JSON.stringify(body)
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      return NextResponse.json(
        { error: `GitHub API error: ${res.status}`, details: errorData },
        { status: res.status, headers: CORS_HEADERS }
      );
    }

    const data = await res.json();
    return NextResponse.json(data, { headers: CORS_HEADERS });
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to update on GitHub: ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500, headers: CORS_HEADERS }
    );
  }
}
