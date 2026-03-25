# Sasank M Portfolio

Static portfolio site built with Vite and Tailwind CSS v4.

## Stack

- Vite
- Tailwind CSS v4
- Vercel Web Analytics
- Vercel Speed Insights

## Local Development

Install dependencies:

```bash
pnpm install
```

Start the dev server:

```bash
pnpm dev
```

Build for production:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

## Project Structure

- `index.html` - main document and portfolio markup
- `src/main.js` - Vite entry, Tailwind import, Vercel analytics injection
- `src/style.css` - Tailwind v4 theme tokens and custom styles
- `public/` - static assets copied to the site root
- `vercel.json` - response headers and CSP for Vercel deployments

## SEO and Static Files

The following files are served from the root of the deployed site:

- `public/robots.txt`
- `public/sitemap.xml`
- `public/favicon.svg`
- `public/og-preview.png`

## Vercel

This project is set up for:

- Vercel Web Analytics via `@vercel/analytics`
- Vercel Speed Insights via `@vercel/speed-insights`

To collect production data, both features must also be enabled in the Vercel dashboard for the project.

## Notes

- Google Fonts are loaded from `fonts.googleapis.com` and `fonts.gstatic.com`
- Security headers and Content Security Policy are configured in `vercel.json`
- Static asset caching is handled by Vercel automatically
