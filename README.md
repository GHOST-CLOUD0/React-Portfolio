# Mark Kinyanjui — Portfolio

Personal portfolio site for **Mark Kinyanjui**, a full-stack developer based in Nairobi, Kenya.
Built with React 19 and Vite, with a hand-rolled design system — no UI framework.

🔗 **Live:** _add your deployment URL here_

## Features

- **Single-page portfolio** — hero, about, skills, projects, experience and contact sections
- **Light & dark themes** — respects `prefers-color-scheme`, remembers the choice in `localStorage`, and applies before first paint so there is no flash
- **Project search & filtering** — instant client-side search plus tag-based filters
- **Accessible** — semantic landmarks, skip link, visible focus rings, ARIA on interactive controls, `prefers-reduced-motion` support
- **Responsive** — fluid type and spacing scales from 320px to ultrawide
- **Content-driven** — every string lives in one data file
- **Zero runtime dependencies** beyond React (~70 kB gzipped bundle)

## Tech stack

| Area     | Choice                                        |
| -------- | --------------------------------------------- |
| UI       | React 19 (with the React Compiler)            |
| Build    | Vite 8                                        |
| Styling  | Plain CSS — custom properties, grid, `clamp()` |
| Quality  | ESLint 10                                     |

## Getting started

```bash
npm install     # install dependencies
npm run dev     # start the dev server at http://localhost:5173
npm run build   # production build into dist/
npm run preview # preview the production build
npm run lint    # lint the project
```

## Making it yours

All content lives in [`src/data/portfolio.js`](src/data/portfolio.js):

| Export       | What it controls                                     |
| ------------ | ---------------------------------------------------- |
| `profile`    | Name, role, tagline, summary, email, location, status |
| `socials`    | Links shown in the hero, contact panel and footer     |
| `stats`      | The three headline numbers under the hero             |
| `skills`     | Skill groups and their tags                           |
| `projects`   | Project cards (`featured: true` highlights one)       |
| `experience` | Timeline entries                                      |
| `navLinks`   | Nav items — each `href` must match a section `id`     |

Update the `<title>` and meta description in `index.html` to match, then drop a `resume.pdf`
into `public/` if you want the résumé link to resolve.

## Project structure

```
src/
├── App.jsx                 # section composition + theme wiring
├── main.jsx                # React entry point
├── index.css               # design tokens, resets, base typography
├── App.css                 # component styles
├── data/
│   └── portfolio.js        # ← all site content
├── hooks/
│   ├── useTheme.js         # persisted light/dark theme
│   ├── useActiveSection.js # scroll-spy for the nav
│   └── useScrollReveal.js  # fade-in on scroll
└── components/
    ├── Navbar.jsx  Hero.jsx    About.jsx     Skills.jsx
    ├── Projects.jsx  ProjectList.jsx  ProjectCard.jsx  SearchBar.jsx
    ├── Experience.jsx  Contact.jsx  Footer.jsx
    └── Section.jsx  Icon.jsx  ThemeToggle.jsx
```

## Deployment

The build output is a static `dist/` folder — deploy it to Netlify, Vercel, Cloudflare Pages or
GitHub Pages. For GitHub Pages, set `base: '/React-Portfolio/'` in `vite.config.js` first.

## License

MIT © Mark Kinyanjui
