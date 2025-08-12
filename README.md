# HighlineTales

HighlineTales is a hiking-themed web application created to support my JavaScript learning journey. It’s inspired by my wife’s and my vacation to Glacier National Park, specifically our hike along the iconic Highline Trail. The app blends "trailing" stories and planning tools centered around the breathtaking landscapes of Glacier National Park’s Highline Trail.



  <a href="https://vitejs.dev" target="_blank"><img alt="Vite" height="26" src="https://img.shields.io/badge/Vite-7.0-646CFF?logo=vite&logoColor=white"></a>
  <a href="https://react.dev" target="_blank"><img alt="React" height="26" src="https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white"></a>
  <a href="https://reactrouter.com" target="_blank"><img alt="React Router" height="26" src="https://img.shields.io/badge/React%20Router-7-EA1E63?logo=reactrouter&logoColor=white"></a>
  <a href="https://supabase.com" target="_blank"><img alt="Supabase" height="26" src="https://img.shields.io/badge/Supabase-2-3ECF8E?logo=supabase&logoColor=060606"></a>
  <a href="https://vitest.dev" target="_blank"><img alt="Vitest" height="26" src="https://img.shields.io/badge/Vitest-2-6E9F18?logo=vitest&logoColor=white"></a>
  <a href="https://eslint.org" target="_blank"><img alt="ESLint" height="26" src="https://img.shields.io/badge/ESLint-9-4B32C3?logo=eslint&logoColor=white"></a>



## Overview

HighlineTales is a React + Vite application that shares trail information, hiking tips, and personal stories for Glacier National Park. It also includes helpful UI like info cards, visitor analytics (via Supabase), and a clean CSS architecture combining global tokens and CSS Modules.


## Features

- Trail and activity pages with images, stats, and details
- Blog with individual post pages (data loaders, error elements)
- Hiking checklist/essentials page
- Visitor counter backed by Supabase (RPC function increment_page_view)
- Responsive layout with CSS Modules and global typography/utilities
- Robust routing with error boundaries


## Tech Stack

- App: React 19, React Router 7 (react-router-dom)
- Bundler: Vite 7 with @vitejs/plugin-react, alias @ → src
- Styles: Global CSS (globals.css, typography.css, prose.css, utilities.css) + CSS Modules
- Data/Backend: Supabase JS v2 client for simple analytics/features
- Testing: Vitest + Testing Library (jsdom environment)
- Linting: ESLint 9 (react-hooks, react-refresh) configured via eslint.config.js


## Architecture at a glance

```mermaid
flowchart LR
  A[index.html] --> B(src/main.jsx)
  B --> C(App.jsx)
  C --> D[ThemeProvider]
  C --> E[GlobalErrorBoundary]
  C --> F(AppRouter)
  F -->|/| G[HomePage]
  F -->|/activities| H[ActivityPage]
  F -->|/activities/:slug| I[ActivityPost\n(loader: getActivityBySlug)]
  F -->|/hiking-checklist| J[EssentialsPage]
  F -->|/blog| K[BlogPage]
  F -->|/blog/:slug| L[BlogPost\n(loader: getPostBySlug)]
  subgraph Services
    M[activitiesService]
    N[blogService]
    O[supabase client]
  end
  subgraph Styles
    P[globals.css]
    Q[typography.css]
    R[prose.css]
    S[utilities.css]
  end
  E -. catches .-> F
```


## Project structure

```
├─ index.html
├─ vite.config.js
├─ eslint.config.js
├─ jsconfig.json              # @/* → src/* alias for editor/tooling
├─ package.json
├─ package-lock.json
├─ README.md
├─ public/                    # Static assets served as-is
├─ dist/                      # Production build output (generated)
└─ src/
   ├─ App.jsx
   ├─ main.jsx
   ├─ routes/
   │  └─ AppRouter.jsx        # Central routes + loaders + error elements
   ├─ layouts/
   │  └─ MainLayout.jsx
   ├─ components/
   │  ├─ navigation/          # Nav bars, menus
   │  ├─ errors/              # Global error UIs
   │  ├─ ui/                  # Reusable UI (cards, counter, etc.)
   │  ├─ blog/                # Blog components/styles
   │  └─ activities/          # Activity components (posts, errors)
   ├─ pages/
   │  ├─ HomePage.jsx(.css)
   │  ├─ blog/BlogPage.jsx(.css)
   │  ├─ activities/ActivityPage.jsx(.css)
   │  └─ essentials/EssentialsPage.jsx(.css)
   ├─ services/
   │  ├─ activitiesService.js
   │  ├─ blogService.js
   │  └─ supabase/supabase.js
   ├─ data/                   # Sample/static data sources
   ├─ utils/                  # Utilities (e.g., subpageHeaderContent.js, parsers)
   ├─ styles/
   │  ├─ globals.css
   │  ├─ typography.css
   │  ├─ prose.css
   │  └─ utilities.css
   ├─ assets/
   └─ test/setupTests.js      # Vitest setup (jest-dom)
```

Tip: Import using the @ alias, e.g. import App from '@/App.jsx'.


## Routing map

- / → HomePage
- /activities → ActivityPage
- /activities/:slug → ActivityPost (loader: getActivityBySlug, 404 → ActivityNotFound)
- /hiking-checklist → EssentialsPage
- /blog → BlogPage
- /blog/:slug → BlogPost (loader: getPostBySlug, 404 → BlogPostNotFound)


## Getting started

### Prerequisites
- Node.js 18+ (LTS recommended) and npm
- Optional: Supabase project (for VisitorCounter)

### Installation

- Clone and install
  - git clone https://github.com/yourusername/highline-tales.git
  - cd highline-tales
  - npm install

- Environment variables
  - Create a .env file in the repository root:
    - VITE_PUBLIC_SUPABASE_URL=your_supabase_url
    - VITE_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
  - If you don’t plan to use Supabase locally, you can omit these; Supabase features should be disabled gracefully in development if not configured.

- Development server
  - npm run dev
  - Open http://localhost:5173


## Available scripts

- npm run dev → Start Vite dev server (with --host)
- npm run build → Production build to dist/
- npm run preview → Serve the production build locally
- npm run clean → Remove dist/ (safe helper)
- npm run lint → Lint JS/JSX with ESLint 9 (no warnings allowed)
- npm test → Run Vitest in CI mode
- npm run test:watch → Run Vitest in watch mode


## Styling approach

- Global CSS provides design tokens and base typography: globals.css, typography.css
- prose.css styles rich text for blog posts
- CSS Modules encapsulate component styles throughout components and pages
- Utilities: utilities.css offers a small set of global helpers (gap, visibility, etc.). A future enhancement could split utilities into utilities.module.css and surfaces.module.css for better encapsulation.


## Data and Supabase

- The Supabase client lives at src/services/supabase/supabase.js and reads env vars VITE_PUBLIC_SUPABASE_URL and VITE_PUBLIC_SUPABASE_ANON_KEY
- VisitorCounter uses a Supabase RPC named increment_page_view and basic reads for totals
- Ensure Row Level Security policies and RPC exist in your Supabase project if you enable this feature


## Testing

- Vitest is configured with jsdom and React Testing Library
- Setup file: src/test/setupTests.js (adds jest-dom matchers)
- Run tests: npm test or npm run test:watch


## Linting & code quality

- ESLint 9 with react-hooks and react-refresh plugins
- Config: eslint.config.js (dist/ ignored; JSX enabled)
- Run lint: npm run lint


## Accessibility & performance

- Typography and color tokens are centralized for consistency
- Error boundaries prevent full-app crashes
- Where possible, provide descriptive alt text; decorative images should use empty alt=""
- Consider Lighthouse and Axe DevTools checks during development; maintain an internal checklist in issues/PR templates rather than separate docs/ files.


## Deployment

- **Production Site**: [https://www.highlinetales.com](https://www.highlinetales.com)
- **Hosting**: Deployed on [Vercel](https://vercel.com) with continuous deployment from the main branch
- **Domain**: Registered with [Hostinger](https://www.hostinger.com) with DNS configured to use Vercel nameservers
- **Build Process**:
    - Vercel automatically builds the project using `npm run build` on each push to the main branch
    - The build creates optimized static files in the directory `dist/`
    - Vercel handles SPA routing configuration automatically, redirecting all routes to `index.html`

- **Environment Variables**:
    - Supabase connection details are configured in the Vercel project settings
    - Environment variables for production are managed through the Vercel dashboard

- **Deployment Options**:
    - **Manual Deployment**: `npm run build` followed by uploading to Vercel `dist/`
    - **Preview Locally**: `npm run preview` to test the production build before deployment
    - **Preview Deployments**: Each pull request gets a unique preview URL through Vercel's PR integration

For local development, you can still use `npm run dev` to start the Vite development server and preview at [http://localhost:5173](http://localhost:5173).

## License

This project is licensed under the MIT License.



