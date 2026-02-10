# AAA Advertising & Signage — Company Site

A React + TypeScript + Vite project for AAA Advertising & Signage’s marketing website. It includes responsive pages, a contact form powered by Web3Forms and hCaptcha, and Tailwind CSS styling.

# Output
<img width="1054" height="2048" alt="image" src="https://github.com/user-attachments/assets/2d114fea-c3b1-4137-9ab1-a27330e11519" />

## Tech Stack
- React 19 + TypeScript
- Vite 7
- Tailwind CSS 4
- SweetAlert2 (user feedback)
- Web3Forms + hCaptcha (contact form)

## Requirements
- Node.js 18+ (recommended 20+)
- npm 9+

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

## Troubleshooting
- Contact form fails: verify network access and keys; on failure, a descriptive error alert is shown.
- Styling issues: ensure Tailwind CSS is installed and processed via PostCSS.
