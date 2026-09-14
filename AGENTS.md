# AGENTS.md — CCHS Esports

Guidelines for AI assistants (Antigravity, Claude Code, Codex) working on this repository.

## 🔴 Rules

1. **No private student data in public repos:**
   - Never commit student ID numbers, student full legal names, grades, or raw survey response spreadsheets (`*(Responses)*.xlsx`).
   - Use gamer tags or first name + initial only if authorized by the coach.

2. **No complex dependencies / build steps:**
   - Keep this site plain HTML, CSS, and JS.
   - Anyone should be able to open `index.html` directly in a browser without `npm install` or bundlers.

3. **CCHS Branding:**
   - Colors: CCHS Gold (`#ffc72c`), Deep Navy Slate (`#0b111e`, `#131c2e`).
   - Typography: Google Fonts `Chakra Petch` (headings) and `Inter` (body).

4. **GitHub Pages Deployment:**
   - The site deploys directly from the root of the `main` branch.
   - Any commit pushed to `main` deploys to `https://mendez84.github.io/cchs-esports/`.
