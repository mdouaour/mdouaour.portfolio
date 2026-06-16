# Portfolio Project Rules

## AUTO-SKILL-LOAD RULE (CRITICAL)
- When user gives any task, automatically analyze which skills are relevant and load them ALL via `skill()` before starting work.
- Do NOT ask user which skills to load. Do NOT skip this step.
- Load every skill that could improve the output: design, code, content, accessibility, SEO, testing, etc.
- Never proceed to implementation without loading skills first.
- This applies to ALL tasks, even "simple" ones.

## Project Stack
- Vite + React + TypeScript
- Tailwind CSS
- framer-motion for animations
- Formspree for contact form
- Deployed on Vercel

## Conventions
- Use `useLang()` and `translations` for i18n
- framer-motion for all animations
- Tailwind utility classes only (no CSS modules)
- Mobile-first responsive design
- No comments in code

## Git
- **ALWAYS commit and push after completing meaningful work** — don't leave changes uncommitted
- Commit message format: `type: concise description`
- Auto-deploys via Vercel on push to main
