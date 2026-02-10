# AAA Advertising & Signage — Company Site

A React + TypeScript + Vite project for AAA Advertising & Signage’s marketing website. It includes responsive pages, a contact form powered by Web3Forms and hCaptcha, and Tailwind CSS styling.

## Tech Stack
- React 19 + TypeScript
- Vite 7
- Tailwind CSS 4
- SweetAlert2 (user feedback)
- Web3Forms + hCaptcha (contact form)

## Requirements
- Node.js 18+ (recommended 20+)
- npm 9+

## Getting Started
```bash
npm install
npm run dev
```
The dev server starts locally and supports hot reload.

## Available Scripts
- `dev`: Start Vite dev server
- `build`: Type-check then build production assets to `dist/`
- `preview`: Preview the production build locally
- `lint`: Run ESLint on the project

## Project Structure
- Pages: see [src/pages](src/pages)
  - Contact form: [src/pages/Contact.tsx](src/pages/Contact.tsx)
  - Footer: [src/pages/Footer.tsx](src/pages/Footer.tsx)
  - Home/Featured/Services: under [src/pages](src/pages)
- Entry: [src/main.tsx](src/main.tsx), [index.html](index.html)
- Config: [vite.config.ts](vite.config.ts), [tailwind.config.js](tailwind.config.js)

## Contact Form Keys
The contact form posts to Web3Forms and uses hCaptcha:
- Web3Forms `access_key` is currently set in code within [src/pages/Contact.tsx](src/pages/Contact.tsx).
- hCaptcha `sitekey` is set in [src/pages/Contact.tsx](src/pages/Contact.tsx).

For production, consider moving these to environment variables and loading them at runtime.

## Build & Deploy
```bash
npm run build
npm run preview
```
Deploy the `dist/` folder to any static hosting (Netlify, Vercel, Cloudflare Pages, S3, etc.).

## Troubleshooting
- Contact form fails: verify network access and keys; on failure, a descriptive error alert is shown.
- Styling issues: ensure Tailwind CSS is installed and processed via PostCSS.
