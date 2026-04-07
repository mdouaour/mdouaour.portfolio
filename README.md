# mdouaour.portfolio

Personal portfolio website for **Mohammed Yassine Douaouria** — CS Graduate, ALX SE Certified Software Engineer.

## ✅ Build Status

All production-ready files are in this repository and ready for deployment.

| File | Description | Status |
|------|-------------|--------|
| `index.html` | Full single-page portfolio (HTML5, semantic, SEO meta tags) | ✅ Ready |
| `style.css` | Dark-theme responsive stylesheet (CSS custom properties, grid, flexbox) | ✅ Ready |
| `script.js` | Interactive features: navbar scroll, mobile menu, scroll-reveal, animated counters | ✅ Ready |

## Stack

- Pure **HTML5 / CSS3 / Vanilla JS** — zero dependencies, no build step required
- **Google Fonts** (Inter) loaded via CDN

## Sections

- **Hero** — name, tagline, dual CTA buttons, scroll hint
- **About** — bio, social links (GitHub · Twitter · LinkedIn), fact cards
- **Skills** — Languages, Frameworks & Libraries, Databases, Tools & Practices
- **Projects** — Gestion-Commerce, Gestion-de-Stock, StoryAfrika, ALX SE Projects
- **Results** — animated number counters ("Results That Punch")
- **Contact** — quick-link cards: Email, GitHub, LinkedIn, Twitter

## Running Locally

Open `index.html` directly in a browser — **no server or build tool required**.

```bash
# Option 1: just open the file
open index.html          # macOS
xdg-open index.html      # Linux
start index.html         # Windows

# Option 2: quick local server (Python)
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Deployment

### GitHub Pages (free, recommended)
1. Go to **Settings → Pages** in this repository
2. Source: **Deploy from a branch** → `main` → `/ (root)`
3. Click **Save** — site will be live at `https://mdouaour.github.io/mdouaour.portfolio/`

### Netlify (drag-and-drop)
1. Go to [netlify.com/drop](https://app.netlify.com/drop)
2. Drag the repository folder onto the page
3. Your site gets a live URL instantly

### Vercel
1. Import this repo at [vercel.com/new](https://vercel.com/new)
2. Framework preset: **Other** (no build command needed)
3. Deploy — Vercel will serve `index.html` automatically

## Remaining Steps

- [ ] Update the email placeholder `mdouaour@example.com` in `index.html` with your real email address
- [ ] (Optional) Add a profile photo to the Hero section
- [ ] (Optional) Add a `favicon.ico`
- [ ] Enable GitHub Pages in repository Settings for a free live URL