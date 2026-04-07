# Mohammed Yassine Douaouria — Portfolio

[![CI — Lint & Build](https://github.com/mdouaour/mdouaour.portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/mdouaour/mdouaour.portfolio/actions/workflows/ci.yml)

A production-ready personal portfolio website built with **React 19**, **Vite**, and **Tailwind CSS v4**.

## ✨ Features

- **Hero** — Name, title, social links (GitHub, LinkedIn, Twitter)
- **About** — Background, education, and certification details
- **Skills** — Proficiency bars for languages, frontend, and backend tools
- **Projects** — Cards for Gestion-Commerce, Gestion-de-Stock, StoryAfrika, and ALX Projects
- **Contact** — Social/contact link cards
- Responsive design (mobile-first)
- Dark theme with violet accent color
- CI/CD via GitHub Actions (lint + build on every push)

## 🛠️ Tech Stack

| Layer     | Technology              |
|-----------|-------------------------|
| Framework | React 19                |
| Bundler   | Vite 8                  |
| Styling   | Tailwind CSS v4         |
| Linting   | ESLint 9                |
| CI        | GitHub Actions          |

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Install dependencies

```bash
npm install
```

### Run in development mode

```bash
npm run dev
```

Opens `http://localhost:5173` with hot-module replacement.

### Lint

```bash
npm run lint
```

### Build for production

```bash
npm run build
```

Output is placed in `dist/`. Preview the production build locally:

```bash
npm run preview
```

## 📦 Deployment

### GitHub Pages

1. Install the Pages plugin:
   ```bash
   npm install -D gh-pages
   ```
2. Add to `package.json` scripts:
   ```json
   "deploy": "gh-pages -d dist"
   ```
3. Run:
   ```bash
   npm run build && npm run deploy
   ```

### Vercel / Netlify

Connect the repo — both platforms auto-detect Vite and deploy automatically.

## 🗂️ Project Structure

```
mdouaour.portfolio/
├── .github/
│   └── workflows/
│       └── ci.yml          # CI: lint & build
├── public/                 # Static assets
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx             # Root component
│   ├── index.css           # Global styles + Tailwind entry
│   └── main.jsx            # React entry point
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

## 👤 Author

**Mohammed Yassine Douaouria**
- GitHub: [@mdouaour](https://github.com/mdouaour)
- LinkedIn: [mdouaour](https://www.linkedin.com/in/mdouaour)
- Twitter: [@mdoer](https://twitter.com/mdoer)

## 📄 License

MIT
