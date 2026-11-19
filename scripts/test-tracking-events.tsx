// Unit tests for the 2026-11-19 analytics fixes: the Umami-ready retry (promo landing dropped most
// arrivals because window.umami wasn't attached yet on mount), the affiliate_click internal-link guard
// (an on-page anchor must never produce a fake "partner" hostname), the restored
// ask_hans_button_impression event, and locale/page/placement/target completeness on promo_* events.
// Run: npx -y tsx@4.21.0 scripts/test-tracking-events.tsx
import assert from 'node:assert/strict'
import fs from 'node:fs'

let failed = 0
const t = (name: string, fn: () => void) => {
  try {
    fn()
    console.log(`PASS ${name}`)
  } catch (e) {
    failed++
    console.log(`FAIL ${name}\n  ${e instanceof Error ? e.message : e}`)
  }
}

/** Minimal window/document stand-in — just enough surface for the tracking modules under test. */
function stubBrowser(pathname: string, search = '', host = 'www.promptquorum.com') {
  const calls: { name: string; data: Record<string, unknown> }[] = []
  const timers: { fn: () => void; ms: number }[] = []
  const win: any = {
    location: { pathname, search, href: `https://${host}${pathname}${search}`, hostname: host },
    matchMedia: () => ({ matches: false }),
    setTimeout: (fn: () => void, ms: number) => {
      timers.push({ fn, ms })
      return timers.length
    },
    umami: undefined,
  }
  ;(globalThis as any).window = win
  ;(globalThis as any).document = { title: '' }
  return {
    win,
    calls,
    /** Attach umami.track AFTER the stub exists, capturing every call. */
    attachUmami: () => {
      win.umami = { track: (name: string, data: Record<string, unknown>) => calls.push({ name, data }) }
    },
    runTimers: () => {
      while (timers.length) timers.shift()!.fn()
    },
  }
}

async function main() {
  // ---- item 1: ask_hans_button_impression is registered again (consent:false, like click) ----
  const { CTA_EVENTS } = await import('../src/lib/askhans/experiment/config')
  t('CTA_EVENTS carries ask_hans_button_impression, anonymous like the click event', () => {
    assert.ok('ask_hans_button_impression' in CTA_EVENTS, 'impression event must be registered again')
    assert.deepEqual((CTA_EVENTS as any).ask_hans_button_impression, { consent: false })
    assert.deepEqual((CTA_EVENTS as any).ask_hans_button_click, { consent: false })
  })

  // ---- item 4: adblock sample rate halved to 0.025 (2,000/28 days ~ 71/day) ----
  t('adblock SAMPLE_RATE is 0.025, not the old 0.05', () => {
    const src = fs.readFileSync(new URL('../src/lib/tracking/umami-events.ts', import.meta.url), 'utf8')
    const m = /const SAMPLE_RATE = ([0-9.]+)/.exec(src)
    assert.ok(m, 'SAMPLE_RATE constant not found')
    assert.equal(Number(m![1]), 0.025)
  })

  // ---- item 2: sendWhenUmamiReady retries instead of silently dropping the event on a cold mount ----
  {
    const { sendWhenUmamiReady } = await import('../src/lib/tracking/umami-events')

    t('sendWhenUmamiReady sends immediately when umami is already attached', () => {
      const { attachUmami, calls } = stubBrowser('/directory')
      attachUmami()
      sendWhenUmamiReady('directory_promo_landing', { target: 'directory' })
      assert.equal(calls.length, 1)
      assert.equal(calls[0].name, 'directory_promo_landing')
    })

    t('sendWhenUmamiReady retries until umami attaches, then sends the event (the actual landing-loss bug)', () => {
      const { win, calls, runTimers } = stubBrowser('/mcp-stats')
      sendWhenUmamiReady('mcp_promo_landing', { target: 'mcp' })
      assert.equal(calls.length, 0, 'must not send before umami exists')
      // Simulate the afterInteractive script finishing load after a couple of retries.
      win.umami = { track: (name: string, data: Record<string, unknown>) => calls.push({ name, data }) }
      runTimers()
      assert.equal(calls.length, 1, 'must send once umami becomes available')
      assert.equal(calls[0].name, 'mcp_promo_landing')
    })

    t('sendWhenUmamiReady gives up silently after ~5 s if umami never attaches (ad/script blocked)', () => {
      const { calls, runTimers } = stubBrowser('/directory')
      sendWhenUmamiReady('directory_promo_landing', { target: 'directory' })
      runTimers()
      assert.equal(calls.length, 0, 'must never throw or send a broken event when umami is genuinely absent')
    })
  }

  // ---- item 5: affiliate_click never fires for an in-page anchor / same-site link ----
  {
    const { trackAffiliateClick, affiliateDestinationDomain } = await import('../src/lib/tracking/affiliate')

    t('an in-page anchor (the gmktec-g3-plus "#vs-eq14" bug) never fires affiliate_click', () => {
      const { attachUmami, calls } = stubBrowser('/smart-home/gmktec-g3-plus-local-ai-review')
      attachUmami()
      trackAffiliateClick({ url: '#vs-eq14', productName: 'Beelink EQ14 comparison', productCategory: 'Mini PC', lang: 'en' })
      assert.equal(calls.length, 0, 'an on-page jump link is not an affiliate click')
    })

    t('a same-site relative link never fires affiliate_click', () => {
      const { attachUmami, calls } = stubBrowser('/power-local-llm/some-review')
      attachUmami()
      trackAffiliateClick({ url: '/power-local-llm/other-review', productName: 'x', productCategory: 'y', lang: 'en' })
      assert.equal(calls.length, 0)
    })

    t('a real retailer URL still fires affiliate_click with a real hostname as partner', () => {
      const { attachUmami, calls } = stubBrowser('/power-local-llm/some-review')
      attachUmami()
      trackAffiliateClick({ url: 'https://www.amazon.de/dp/B0XYZ', productName: 'Thing', productCategory: 'gpu', lang: 'de' })
      assert.equal(calls.length, 1)
      assert.equal(calls[0].data.partner, 'amazon.de')
      assert.ok(!String(calls[0].data.partner).startsWith('#'), 'partner must never be a raw fragment')
    })

    t('affiliateDestinationDomain still falls back to the raw string on a truly unparseable URL (unchanged behavior)', () => {
      assert.equal(affiliateDestinationDomain('not a url'), 'not a url')
    })
  }

  // ---- item 6: every promo_* event carries locale, page, placement, target ----
  {
    const { trackPromo, trackPromoOpen, trackPromoLanding } = await import('../src/lib/tracking/promo')

    t('<target>_promo_view / click carry target, placement, locale, page', () => {
      const { attachUmami, calls } = stubBrowser('/de/directory')
      attachUmami()
      trackPromo('view', { target: 'directory', placement: 'P1', variant: 'card', locale: 'de' })
      trackPromo('click', { target: 'mcp', placement: 'P2', variant: 'strip', locale: 'ja' })
      assert.equal(calls.length, 2)
      for (const c of calls) for (const key of ['target', 'placement', 'locale', 'page']) assert.ok(key in c.data, `${c.name} missing ${key}`)
    })

    t('<target>_promo_open carries target, placement, locale, page', () => {
      const { attachUmami, calls } = stubBrowser('/power-local-llm/ollama-review')
      attachUmami()
      trackPromoOpen('promo_ask_hans_p3')
      assert.equal(calls.length, 1)
      for (const key of ['target', 'placement', 'locale', 'page']) assert.ok(key in calls[0].data, `promo_open missing ${key}`)
    })

    t('directory_promo_landing / mcp_promo_landing carry target, placement, locale, page (and need the Umami-ready retry)', () => {
      const { win, calls, runTimers } = stubBrowser('/ja/directory', '?via=promo_directory_p1')
      trackPromoLanding()
      win.umami = { track: (name: string, data: Record<string, unknown>) => calls.push({ name, data }) }
      runTimers()
      assert.equal(calls.length, 1)
      assert.equal(calls[0].name, 'directory_promo_landing')
      for (const key of ['target', 'placement', 'locale', 'page']) assert.ok(key in calls[0].data, `landing missing ${key}`)
    })
  }

  if (failed) {
    console.log(`\n${failed} test(s) failed`)
    process.exit(1)
  }
  console.log('\nAll tracking-events tests passed')
}

main()
