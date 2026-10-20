# Shajin Ahsan Shuvo — Portfolio

Next.js (App Router) + Tailwind CSS v4. Content renders on the server; only the theme toggle,
mobile menu and contact form are client components.

## Run

```bash
npm install
cp .env.example .env.local   # fill in RESEND_API_KEY
npm run dev
```

## Contact form

`app/actions.ts` is a Server Action that sends mail with [Resend](https://resend.com).
Set `RESEND_API_KEY` (and optionally `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`) in `.env.local`
and in your Vercel project settings. Without a verified domain, keep the default sender
`onboarding@resend.dev` — Resend only delivers those to your own account email.

## Edit content

All text lives in `data/` (`profile.ts`, `projects.ts`, `skills.ts`). Section layout is in `components/`.
