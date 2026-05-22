// PromptQuorum Outbound Click Tracker
// Intercepts events from Umami, GA4, and Vercel Analytics
// Shows toast notifications and stores event log in chrome.storage.session

(function () {
  const MAX_EVENTS = 20;
  const TOAST_DURATION = 4000;

  // Ring buffer for events (max 20)
  let eventLog = [];

  // Inject styles for toast and tracking indicator
  const style = document.createElement('style');
  style.textContent = `
    .pq-tracker-toast {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: white;
      border-radius: 8px;
      padding: 12px 16px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 13px;
      z-index: 999999;
      display: flex;
      align-items: center;
      gap: 10px;
      animation: slideIn 0.3s ease-out;
    }

    @keyframes slideIn {
      from {
        transform: translateX(400px);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }

    .pq-tracker-pill {
      display: inline-block;
      padding: 2px 8px;
      border-radius: 4px;
      font-weight: 600;
      font-size: 11px;
      color: white;
    }

    .pq-tracker-pill.umami {
      background: #8b5cf6;
    }

    .pq-tracker-pill.ga4 {
      background: #f97316;
    }

    .pq-tracker-pill.vercel {
      background: #000;
    }

    .pq-tracker-content {
      flex: 1;
    }

    .pq-tracker-row {
      margin: 0;
      padding: 2px 0;
      font-size: 12px;
    }

    .pq-tracker-label {
      color: #666;
      font-weight: 500;
    }

    .pq-tracker-value {
      color: #333;
      font-weight: 600;
    }
  `;
  document.head.appendChild(style);

  // Log event to chrome.storage.session and show toast
  function logEvent(source, name, props) {
    const timestamp = new Date().toLocaleTimeString('en-US', { hour12: false });

    const event = {
      timestamp,
      source,
      name,
      vendor: props?.vendor || props?.['vendor'] || '?',
      article: props?.article || props?.['article'] || '?',
      lang: props?.lang || props?.['lang'] || '?',
      position: props?.position || props?.['position'] || '?',
      cluster: props?.cluster || props?.['cluster'] || '?',
      fullPayload: props
    };

    // Add to ring buffer
    eventLog.push(event);
    if (eventLog.length > MAX_EVENTS) {
      eventLog.shift();
    }

    // Persist to chrome.storage.session
    chrome.storage.session.set({ events: eventLog, count: eventLog.length }, () => {
      if (chrome.runtime.lastError) {
        console.warn('Failed to store event:', chrome.runtime.lastError);
      }
    });

    // Update badge count
    chrome.runtime.sendMessage({
      type: 'UPDATE_BADGE',
      count: eventLog.length
    }).catch(() => {
      // Ignore if background script not ready
    });

    // Show toast
    showToast(event);
  }

  function showToast(event) {
    const toast = document.createElement('div');
    toast.className = 'pq-tracker-toast';

    const pill = document.createElement('span');
    pill.className = `pq-tracker-pill ${event.source}`;
    pill.textContent = event.source.toUpperCase();

    const content = document.createElement('div');
    content.className = 'pq-tracker-content';
    content.innerHTML = `
      <div class="pq-tracker-row"><span class="pq-tracker-label">vendor:</span> <span class="pq-tracker-value">${event.vendor}</span></div>
      <div class="pq-tracker-row"><span class="pq-tracker-label">article:</span> <span class="pq-tracker-value">${event.article}</span></div>
      <div class="pq-tracker-row"><span class="pq-tracker-label">lang:</span> <span class="pq-tracker-value">${event.lang}</span></div>
    `;

    toast.appendChild(pill);
    toast.appendChild(content);
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = 'slideIn 0.3s ease-out reverse';
      setTimeout(() => toast.remove(), 300);
    }, TOAST_DURATION);
  }

  // Intercept Umami
  if (window.umami) {
    const originalTrack = window.umami.track.bind(window.umami);
    window.umami.track = function(name, props) {
      if (name === 'outbound_click') {
        logEvent('umami', name, props);
      }
      return originalTrack(name, props);
    };
  }

  // Intercept gtag (GA4)
  if (window.gtag) {
    const originalGtag = window.gtag;
    window.gtag = function(...args) {
      if (args[0] === 'event' && args[1] === 'outbound_click') {
        logEvent('ga4', 'outbound_click', args[2]);
      }
      return originalGtag(...args);
    };
  }

  // Intercept Vercel Analytics (via __vercel_insights_track if exposed)
  // Vercel's analytics is loaded dynamically, so we watch for it
  const checkVercel = setInterval(() => {
    if (window.__vercel_insights_track) {
      clearInterval(checkVercel);
      const originalTrack = window.__vercel_insights_track;
      window.__vercel_insights_track = function(name, props) {
        if (name === 'outbound_click') {
          logEvent('vercel', name, props);
        }
        return originalTrack(name, props);
      };
    }
  }, 100);

  // Clean up interval after 5 seconds if Vercel not found
  setTimeout(() => clearInterval(checkVercel), 5000);
})();
