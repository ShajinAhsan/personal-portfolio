# Shajin Ahsan Shuvo — Portfolio

Next.js (App Router) + Tailwind CSS v4. Content renders on the server; only the theme toggle,
mobile menu and contact form are client components.

## Run

```bash
npm install
cp .env.example .env.local   # fill in the values for your deployment
npm run dev
```

## Environment variables

- `NEXT_PUBLIC_SITE_URL` — canonical HTTPS URL for metadata, robots and the sitemap.
- `RESEND_API_KEY` — required for the contact form.
- `CONTACT_TO_EMAIL` — optional recipient; defaults to the portfolio owner's email.
- `CONTACT_FROM_EMAIL` — optional verified Resend sender. Use a verified domain in production.
- `OPENWEATHER_API_KEY` — optional; the weather preview shows a fallback when it is absent.

## Contact form

`app/actions.ts` is a Server Action that sends mail with [Resend](https://resend.com).
Set `RESEND_API_KEY` (and optionally `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`) in `.env.local`
and in your Vercel project settings. Configure `CONTACT_FROM_EMAIL` with a sender from a
verified domain before production deployment. The action includes a bounded per-instance
rate limit; for multi-instance deployments, add a shared Redis/Upstash rate limiter.

## Edit content

All text lives in `data/` (`profile.ts`, `projects.ts`, `skills.ts`). Section layout is in `components/`.
