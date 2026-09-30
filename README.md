# Portfolio

Personal site, built with Next.js (App Router), Tailwind CSS, and Framer Motion.

## Develop

```bash
npm run dev
```

## Editing content

All real content lives in two files — no need to touch components for text changes:

- `src/lib/site.ts` — name, role, tagline, location, email, social links, resume path
- `src/lib/data.ts` — education, experience, projects, skills, achievements

## Before deploying

- Set `NEXT_PUBLIC_SITE_URL` (in Vercel project settings, or `.env.local` for testing) to your real domain once you have one. It defaults to a placeholder Vercel URL, used for the sitemap, robots.txt, and Open Graph metadata.
- Replace `public/prem-charan-resume.pdf` whenever the resume changes.

## Deploy

Push to GitHub, then import the repo on [Vercel](https://vercel.com/new). Zero config needed.
