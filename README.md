# Unitrend International

Corporate website for Unitrend International, built with **Next.js (App Router) + TypeScript + Tailwind CSS**.

## Getting Started

```bash
pnpm install
pnpm dev        # dev server on http://localhost:8000
pnpm build      # production build
pnpm start      # run the production build on port 8000
```

## Tech stack

- **Next.js 14** (App Router, static prerendering for all routes)
- **TypeScript** throughout
- **Tailwind CSS** — custom theme colors (primary, secondary, golden, …), fonts (Comfortaa / Montserrat via `next/font`), and responsive breakpoints (`mobileL`, `tablet`, `laptop`, `laptopL`, `desktop`)
- **react-icons** for icons
- **@emailjs/browser** for the contact form

## Structure

```
src/
  app/            # routes: /, /about, /product, /support, /blog, /contact,
                  # /login, /signup, /profile (PDF viewer), not-found
  components/     # UI components (Navbar, Carousel, Footer, Products, …)
  constants/      # data.ts (site content), tailwind theme lives in tailwind.config.ts
  assets/         # static images (imported via next/image)
public/           # static files (favicon, map background)
```

## Docker

```bash
docker compose up --build          # production (port 80)
docker compose up --build dev      # dev with hot reload (port 8000)
```
