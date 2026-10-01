# Vishal Kumar - Portfolio

Personal portfolio of Vishal Kumar, a software engineer working across full-stack web, React Native and applied machine learning.

Live site: https://www.vishaljaiswal.tech

## Features

- Single-page layout with sections for About, Experience, Work, Skills, Recognition and Contact
- Project grid with filters (Selected, All, AI / ML, Web, Mobile)
- Achievements, certifications and positions of responsibility, each linked to its certificate
- Contact form that opens a pre-filled email to the site owner
- Responsive layout with a fixed navigation bar and a mobile menu
- Motion that respects the operating system's reduced-motion setting
- SEO metadata: Open Graph and Twitter cards, a share image, structured data (schema.org Person), `robots.txt` and `sitemap.xml`
- A local content editor at `/admin` for previewing edits in the browser

## Tech stack

| Area | Technology |
|---|---|
| UI | React 18 |
| Build tool | Vite 5 |
| Styling | Tailwind CSS 3 with CSS design tokens |
| Animation | Framer Motion |
| Routing | React Router 6 |
| Icons | lucide-react |
| Hosting | Vercel |

## Getting started

Requirements: Node.js 18 or later (the version in `.nvmrc` is recommended) and npm.

```bash
npm install
npm run dev
```

The development server prints its local address, usually http://localhost:5173.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Starts the development server with hot reload |
| `npm run build` | Builds the production site into `dist/` |
| `npm run preview` | Serves the production build locally |

## Project structure

```
.
├── public/                  Static files served as-is
│   ├── favicon.svg
│   ├── og-image.jpg         Share image for social previews (1200 x 630)
│   ├── profile.jpg          Profile photo used in the hero
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/          One component per page section
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── context/
│   │   └── DataContext.jsx  All portfolio content and the data provider
│   ├── pages/
│   │   ├── Portfolio.jsx    The main page
│   │   └── Admin.jsx        Local content editor
│   ├── App.jsx              Routes
│   ├── main.jsx             Entry point
│   └── index.css            Design tokens and global styles
├── index.html               HTML shell, metadata and structured data
├── vercel.json              Rewrites, security headers and caching
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Updating content

All content lives in `DEFAULT_DATA` in `src/context/DataContext.jsx`: personal details, social links, education, experience, positions, projects, skills, achievements and certifications.

After changing it, increase `DATA_VERSION` in the same file. Visitors' browsers keep a saved copy of the content, and a new version number makes them load the new content instead.

The share image and structured data in `index.html` are separate from `DataContext.jsx`. Update them too when your name, role, phone number or profile links change.

### Admin editor

`/admin` opens an editor for the same content. Changes made there are saved only in that browser's local storage. They are not published and other visitors do not see them, so use it to try out edits and copy the result into `DataContext.jsx`. The page is excluded from search engines.

## Deployment

The site deploys to Vercel from the `main` branch. Vercel installs dependencies and runs `npm run build` on every push, so `node_modules/` and `dist/` are not committed.

`vercel.json` configures:

- A rewrite to `index.html` so client-side routes such as `/admin` load correctly
- Security headers: `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy` and `Strict-Transport-Security`
- Long-term caching for the fingerprinted files in `/assets/`

## License

Copyright (c) 2026 Vishal Kumar. All rights reserved. The content of this site, including text and images, may not be reused without permission.
