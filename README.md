# mdouaour.portfolio

Personal portfolio for **Mohammed Yassine Douaouria** — Full-Stack Engineer building impactful digital products across Africa and beyond.

> **"Engineering for Impact"**

## 🌐 Live site

_Coming soon_

## ✨ Features

- **Hero** — Introduction with profile picture, brand statement, and CTAs
- **About** — Bio, background, and tech stack
- **Projects** — StoryAfrika (African market discovery platform) and POS System (retail point-of-sale)
- **Contact** — Email CTA and social links (GitHub, LinkedIn)
- Dark-mode design with smooth scroll navigation

## 🛠 Tech stack

| Layer | Technology |
|---|---|
| UI framework | React 19 |
| Build tool | Vite 8 |
| Styling | Tailwind CSS v4 |
| Language | JavaScript (JSX) |

## 🚀 Getting started

### Prerequisites

- Node.js 18+
- npm 9+

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Other commands

```bash
npm run build    # Production build → dist/
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

## 📁 Project structure

```
src/
├── assets/
│   └── profile.jpg        ← Your profile photo
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## 🖼 Adding your profile photo

Place your photo at `src/assets/profile.jpg`. The Hero component will automatically pick it up. Any common image format (`.jpg`, `.png`, `.webp`) works — just update the import in `src/components/Hero.jsx` if you use a different filename.

## 📄 License

MIT
