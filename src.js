let blockedPatterns = [];

function loadBlocklist() {
  browser.storage.local
    .get("blockedSites")
    .then((data) => {
      const domains = data.blockedSites || [];

      // ✅ Build patterns HERE, after data arrives
      blockedPatterns = domains.map((domain) => {
        // Escape special regex characters (not just dots!)
        const escapedDomain = domain.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        return new RegExp(
          `^https?://(?:[^/]*\\.)?${escapedDomain}(/.*)?$`,
          "i",
        );
      });

      console.log("[Blocker] Loaded blocklist:", domains);
      console.log("[Blocker] Patterns:", blockedPatterns);
    })
    .catch((err) => {
      console.error("Failed to load blocklist:", err);
      blockedPatterns = []; // reset on error
    });
}

// Initial load
loadBlocklist();

// Listen for storage changes (don't need to reload extension)
browser.storage.onChanged.addListener((changes, area) => {
  if (area === "local" && changes.blockedSites) {
    loadBlocklist();
  }
});

browser.webRequest.onBeforeRequest.addListener(
  (details) => {
    // Only block top-level page loads (not images, scripts, iframes, etc.)
    if (details.type !== "main_frame") {
      return { cancel: false };
    }

    const url = details.url;
    for (const pattern of blockedPatterns) {
      if (pattern.test(url)) {
        const blockedPage = browser.runtime.getURL("blocked.html");
        return { redirectUrl: blockedPage };
      }
    }
    return { cancel: false };
  },
  { urls: ["<all_urls>"] },
  ["blocking"],
);
