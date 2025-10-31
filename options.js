// DOM elements
const newSiteInput = document.getElementById("new-site");
const addSiteButton = document.getElementById("add-site");
const siteList = document.getElementById("site-list");

// Load saved sites and render
function loadBlockedSites() {
  browser.storage.local.get("blockedSites").then((data) => {
    const sites = data.blockedSites || [];
    renderSiteList(sites);
  }, onError);
}

// Render list in UI
function renderSiteList(sites) {
  siteList.innerHTML = "";
  sites.forEach((site, index) => {
    const li = document.createElement("li");
    li.textContent = site;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";
    removeBtn.onclick = () => removeSite(index);

    li.appendChild(removeBtn);
    siteList.appendChild(li);
  });
}
// Helper to clean and validate a domain
function cleanAndValidateDomain(input) {
  if (typeof input !== "string") return null;

  let domain = input.trim().toLowerCase();

  // Remove protocol (http://, https://, even //)
  domain = domain.replace(/^(https?:)?\/\//, "");

  // Remove path, query, fragment (everything after first / or ? or #)
  domain = domain.split(/[/?#]/)[0];

  // Remove leading 'www.'
  domain = domain.replace(/^www\./, "");

  // Must not be empty
  if (!domain) return null;

  // Must contain at least one dot, and end with a valid TLD (2+ letters)
  // Allow letters, digits, hyphens, and dots — but not at start/end of label
  const domainRegex =
    /^[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*\.[a-z]{2,}$/;

  if (!domainRegex.test(domain)) {
    return null;
  }

  return domain;
}

// Add new site
addSiteButton.addEventListener("click", () => {
  const userInput = newSiteInput.value;
  const cleanDomain = cleanAndValidateDomain(userInput);

  if (!cleanDomain) {
    alert("Please enter a valid domain (e.g., youtube.com, reddit.com)");
    return;
  }

  browser.storage.local.get("blockedSites").then((data) => {
    let sites = data.blockedSites || [];
    if (!sites.includes(cleanDomain)) {
      sites.push(cleanDomain);
      browser.storage.local.set({ blockedSites: sites }).then(() => {
        newSiteInput.value = "";
        loadBlockedSites();
      }, onError);
    }
  }, onError);
});

// Remove site by index
function removeSite(index) {
  browser.storage.local.get("blockedSites").then((data) => {
    let sites = data.blockedSites || [];
    sites.splice(index, 1);
    browser.storage.local.set({ blockedSites: sites }).then(() => {
      loadBlockedSites();
    }, onError);
  }, onError);
}

// Error handler
function onError(error) {
  console.error("Error:", error);
}

// Initialize
loadBlockedSites();
