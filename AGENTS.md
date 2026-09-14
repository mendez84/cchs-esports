# AGENTS.md — CCHS Esports

Guidelines for AI assistants (Antigravity, Claude Code, Codex) working on this repository.

## 🔴 Rules

1. **No private student data in public repos:**
   - Never commit student ID numbers, student full legal names, grades, or raw survey response spreadsheets (`*(Responses)*.xlsx`).
   - Use gamer tags or first name + initial only if authorized by the coach.

2. **No complex dependencies / build steps:**
   - Keep this site plain semantic HTML, CSS, and JS.
   - Anyone should be able to open `index.html` directly in a browser without `npm install` or bundlers.

3. **CCHS Branding & Design Language:**
   - **Colors:** CCHS Royal/Lion Blue (`#2563eb`, `#39518f`) and Silver/Slate (`#cbd5e1`, `#94a3b8`, `#111827`).
   - **Style:** Clean, Notion-inspired document layout (Inter font, subtle borders, callouts with emoji icons, no noisy gamer neon).
   - **Logo:** `assets/cchs-logo.png` (official blue & black lion head emblem).

4. **GitHub Pages Deployment:**
   - The site deploys directly from the root of the `main` branch.
   - Any commit pushed to `main` deploys automatically to `https://mendez84.github.io/cchs-esports/`.
