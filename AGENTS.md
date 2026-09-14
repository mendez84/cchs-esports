# AGENTS.md — CCHS Esports (Team Uproar)

Guidelines for AI assistants (Antigravity, Claude Code, Codex) working on this repository.

## 🎯 Project Baseline & Design Standard

- **Design System:** Apple Human Interface Design (HIG) + Modern W3C Standards.
- **Canvas:** Crisp, warm off-white (`#fbfbfd`), frosted glassmorphic navigation (`backdrop-filter: saturate(180%) blur(20px)`), hairline borders (`rgba(0, 0, 0, 0.06)`), and Apple pill buttons (`border-radius: 980px`).
- **Typography:** Apple system font stack (`-apple-system, BlinkMacSystemFont, "SF Pro Display", "Plus Jakarta Sans", "Inter"`).
- **Layout Architecture:** Keynote-style hero headline, Bento Grid highlights, timeline schedule rows, and clean game cards. Do NOT revert to raw markdown or busy dark-arcade themes.

---

## 🔒 Mandatory Student Privacy & FERPA Rules

1. **🔴 Zero Student PII in Git or Public Code:**
   - NEVER commit student legal names, student ID numbers, grades, attendance logs, phone numbers, or private emails.
   - When celebrating match results, use approved gamer tags or first name + last initial only with signed district media waivers.
   - Never commit raw survey response sheets (`*(Responses)*.xlsx`).

2. **🔴 Zero Commercial Tracking or Analytics:**
   - No tracking cookies, no Google Analytics, no Facebook/Meta pixels, no third-party telemetry.
   - All student signups MUST route exclusively through district-authenticated Google Forms (`@psusd.us`).

3. **🔴 Child Safety & Communication:**
   - Never post public, unmoderated Discord invite links on this site.
   - All team communications and lab sessions must remain teacher-supervised in school facilities.

4. **⚡ No-Build Toolchain:**
   - Plain HTML5, CSS3, and modern vanilla JavaScript. No node_modules, no webpack/vite bundlers. Runs natively on GitHub Pages and local files.
