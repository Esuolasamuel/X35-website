# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (binds to 0.0.0.0 for LAN access)
npm run build    # Production build
npm start        # Start production server
npm run lint     # ESLint check
npx prettier --write .  # Format all files
```

## Architecture

**X35 Website** — portfolio site for an architecture, interior design, and construction company. Built with Next.js App Router (no TypeScript), Tailwind CSS v4, and Framer Motion.

### Routing

All routes live under `src/app/`:
- `/` — Landing page
- `/about` — About page
- `/Projects` — Portfolio grid
- `/Projects/[slug]` — Individual project (static slugs: `adino`, `robs-place`, `chevron`, `sunplanet`, `ogadentist`, `thebrook`)
- `/blog` — Blog listing
- `/blogpost/[slug]` — Individual blog post (slugs from `/data/blogcard.js`)
- `api/contact` — Contact form handler (Nodemailer via Gmail SMTP)
- `api/notify` — Secondary notification endpoint

### Component Structure

Section-level components live in `src/components/section/` — these are full-width page sections composed directly in page files, not reusable primitives. The folder contains ~29 components covering heroes, content blocks, grids, CTAs, and carousels.

Layout shell: `Header` and `Footer` wrap all pages. `HeaderStyleContext` allows child pages to push styling state up to the Header (e.g., transparent vs. solid background).

UI primitives live in `src/components/ui/`, form components in `src/components/forms/`, image gallery in `src/components/gallery/`.

### Data Layer

Static content — no database. Blog and project data live in:
- `src/data/blogcard.js` — blog listing metadata
- `src/data/blogpost.js` — full blog post content

Dynamic routes (`[slug]`) resolve against these data files.

### Styling

Tailwind CSS v4 with custom breakpoints defined in `tailwind.config.js`:

| Name | Width |
|------|-------|
| `xs` | 375px |
| `sm` | 576px |
| `md` | 768px |
| `lg` | 992px |
| `xl` | 1200px |
| `xxl` | 1400px |
| `xxxl` | 1401px |

Note these differ from Tailwind defaults — use project breakpoints when writing responsive classes.

Path alias `@/*` maps to the project root (configured in `jsconfig.json`).

### Environment Variables

Required in `.env.local` for the contact form API route:

```
SMTP_FROM=       # Gmail address used to send emails
SMTP_PASS=       # Gmail app password
CONTACT_EMAIL=   # Admin email to receive form submissions
VERCEL_URL=      # Set automatically on Vercel; needed for metadata
```
