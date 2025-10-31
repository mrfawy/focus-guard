# 🔒 FocusGuard

A lightweight, privacy-focused Firefox extension that blocks distracting websites

> ✨ **No tracking. No ads. No data collection. 100% open source.**

---

## Features

- Blocks sites **only on direct navigation** (typing in URL bar or using bookmarks)
  - **Does NOT block** embedded content (e.g., YouTube videos on news sites)
- Blocks **all subdomains automatically** (`facebook.com` → also blocks `m.facebook.com`)
- Simple settings: add/remove domains via easy UI
- **Zero permissions beyond what’s necessary**
- **Fully offline** — your blocklist stays on your device

## How to Use

1. **Install** the extension (see below)
2. Go to `about:addons` → click the ⚙️ icon next to **FocusGuard** → **Preferences**
3. Add domains like:
   - `instagram.com`
   - `reddit.com`
4. Try visiting them — you’ll see a blocked page!
5. To unblock, return to settings and click **Remove**

> 💡 **Tip**: Enter only the domain (e.g., `netflix.com`).

---

## Installation

### Option 1: Install from GitHub (manual)

1. Download the latest release: [`release.zip`](https://github.com/mrfawy/focus-guard/releases/latest)
2. Open Firefox → go to `about:addons`
3. Click ⚙️ → **"Install Add-on From File..."**
4. Select the downloaded `.zip` file

> ⚠️ Firefox will warn: “This add-on is not signed.” This is normal for self-distributed extensions.

### Option 2: Load as temporary extension (for developers)

1. Clone this repo
2. Go to `about:debugging#/runtime/this-firefox`
3. Click **"Load Temporary Add-on"**
4. Select `manifest.json`

---

## 🔒 Privacy

- Your blocklist is stored **only in your browser**
- **No data is sent to any server**
- **No telemetry, analytics, or tracking. No BS policy**

## icons

- Generated via [favicon](https://favicon.io/favicon-generator)
