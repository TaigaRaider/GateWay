# GateWay

Personal portfolio for **Adetunji Timothy Ojo** — freelance full-stack engineer. A neo-brutalist, motion-led single page built with Next.js 16, React 19, Tailwind CSS v4 and GSAP, with a small WebGL hero.

Live: [gate-way-one.vercel.app](https://gate-way-one.vercel.app)

## Stack

- **Framework:** Next.js 16 (App Router, Turbopack, Cache Components)
- **UI:** React 19, Tailwind CSS v4
- **Motion:** GSAP + ScrollTrigger, Framer Motion, Lenis smooth scroll
- **3D:** three.js via `@react-three/fiber` and `@react-three/drei`
- **Email:** Resend (optional) with a mailto fallback

## Getting started

```bash
npm install
cp .env.example .env.local   # optional — see Environment
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Environment

All variables are optional for local development.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for metadata, Open Graph, sitemap and robots. Defaults to `http://localhost:3000`. |
| `RESEND_API_KEY` | Enables the contact form to send email through Resend. If unset, the form opens the visitor's mail client with the message pre-filled. |
| `CONTACT_TO` | Enquiry recipient. Defaults to the address in the API route. |
| `CONTACT_FROM` | Verified Resend sender. |

## Structure

```
src/
  app/          # Layout, page, metadata routes, contact API
  components/   # Sections, motion primitives, SVG artwork
  components/providers/
```

Design tokens (colour, type scale, spacing) live in `src/app/globals.css`. Update them there rather than hard-coding values in components.

## Accessibility and motion

The site respects `prefers-reduced-motion` and includes an in-page motion toggle. Both smooth scroll and scroll-triggered animation fall back to native scrolling when motion is disabled.
