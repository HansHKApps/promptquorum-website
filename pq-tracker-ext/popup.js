// Popup script — reads event log from chrome.storage.session and renders table

document.addEventListener('DOMContentLoaded', () => {
  const contentDiv = document.getElementById('content');
  const eventCountDiv = document.getElementById('eventCount');
  const clearBtn = document.getElementById('clearBtn');

  function renderEvents() {
    chrome.storage.session.get(['events'], (result) => {
      const events = result.events || [];

      if (events.length === 0) {
        contentDiv.innerHTML = '<div class="empty">No events captured yet. Click an outbound link on PromptQuorum to see events here.</div>';
        eventCountDiv.textContent = '0 events';
        return;
      }

      let html = `
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Source</th>
              <th>Vendor</th>
              <th>Article</th>
              <th>Lang</th>
            </tr>
          </thead>
          <tbody>
      `;

      events.forEach((event) => {
        const sourceBadge = `<span class="source-badge ${event.source}">${event.source.toUpperCase()}</span>`;
        html += `
          <tr>
            <td>${event.timestamp}</td>
            <td>${sourceBadge}</td>
            <td><strong>${event.vendor}</strong></td>
            <td style="max-width: 200px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${event.article}">${event.article}</td>
            <td>${event.lang}</td>
          </tr>
        `;
      });

      html += `
          </tbody>
        </table>
      `;

      contentDiv.innerHTML = html;
      eventCountDiv.textContent = `${events.length} event${events.length !== 1 ? 's' : ''}`;
    });
  }

  // Clear button
  clearBtn.addEventListener('click', () => {
    chrome.storage.session.set({ events: [], count: 0 }, () => {
      renderEvents();
    });
  });

  // Render on load
  renderEvents();

  // Listen for updates from content script
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === 'EVENT_LOGGED') {
      renderEvents();
    }
  });

  // Poll for updates every 500ms (in case events come in while popup is open)
  setInterval(renderEvents, 500);
});
