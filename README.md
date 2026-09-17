# Del American — Next.js site

Recreation of [delamerican.com](https://www.delamerican.com/) built with Next.js (App Router), TypeScript and Tailwind CSS, ready to deploy on Vercel.

## Develop

```bash
npm install
npm run dev
```

## Deploy to Vercel

Import the repository in Vercel; no extra configuration is needed. Optional environment variables for the contact form:

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Sends contact form submissions by email via [Resend](https://resend.com). Without it, submissions are logged only. |
| `CONTACT_TO` | Recipient address (defaults to `info@delamerican.com`). |
| `CONTACT_FROM` | Verified sender address for Resend. |

## Content

All copy, projects, press posts, partners and team members live in `src/lib/data.ts`. Images are currently loaded from the original site's CDN; move them into `public/` to make the site fully self-hosted.
