# 🔒 FocusGuard

A lightweight, privacy-focused Firefox extension that blocks distracting websites

> ✨ **No tracking. No ads. No data collection. 100% open source.**

---

## Features

- Blocks **direct navigation** (typing in URL bar or using bookmarks)
  - Does NOT block embedded content (e.g., YouTube videos on news sites)
  - Subdomains (`facebook.com` → also blocks `m.facebook.com`)
- Simple UI settings
- Privacy: Fully offline. No telemetry, analytics, or tracking.

## How to Use

1. Install (see below)
2. Go to `about:addons` → click the ⚙️ icon next to FocusGuard → Preferences
3. Add domains like:
   - `instagram.com`
   - `reddit.com`
4. Try visiting them, you should see a blocked page!

---

## Installation

### Load as temporary extension (for developers)

1. Clone this repo
2. Go to `about:debugging#/runtime/this-firefox`
3. Click **"Load Temporary Add-on"**
4. Select `manifest.json`

---

## Icons

- Generated via [favicon](https://favicon.io/favicon-generator)
