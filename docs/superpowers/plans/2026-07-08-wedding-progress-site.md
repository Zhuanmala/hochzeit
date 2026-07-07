# Wedding Progress Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a static wedding preparation progress webpage that can be opened locally and shared later through Git hosting.

**Architecture:** A single `index.html` page consumes copied local images from `assets/` and styling from `styles.css`. A lightweight Node verification script checks required text, assets, and responsive styling.

**Tech Stack:** Static HTML, CSS, Node.js verification script.

## Global Constraints

- Keep the site static and dependency-free.
- Store all site files under `website/`.
- Copy image assets to ASCII filenames under `website/assets/`.
- Verify with `node website/tests/verify-site.js`.

---

### Task 1: Verification Script

**Files:**
- Create: `website/tests/verify-site.js`

**Interfaces:**
- Consumes: `website/index.html`, `website/styles.css`, `website/assets/*`
- Produces: a Node command that exits 0 only when the static site contains required content and assets.

- [x] Create the verification script.
- [x] Run it before implementation and confirm it fails because `index.html` is missing.

### Task 2: Static Page

**Files:**
- Create: `website/index.html`
- Create: `website/styles.css`
- Copy: `website/assets/car-phantom.jpg`
- Copy: `website/assets/car-cullinan.jpg`
- Copy: `website/assets/car-bentley-flying-spur.jpg`
- Copy: `website/assets/robot-price-list.jpg`

**Interfaces:**
- Consumes: wedding preparation markdown content and local image files.
- Produces: a shareable static page for browser viewing.

- [x] Copy image assets.
- [x] Create `index.html`.
- [x] Create `styles.css`.
- [x] Run verification.

### Task 3: Local Preview

**Files:**
- Read: `website/index.html`

**Interfaces:**
- Consumes: generated static site.
- Produces: final local file path for sharing and optional Git hosting.

- [x] Run static verification.
- [x] Check repository status.
