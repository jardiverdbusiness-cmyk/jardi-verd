# Jardí Verd

Marketing website for Jardí Verd, a gardening & arboriculture business in Tarragona and Reus. Next.js (App Router) + TypeScript + Tailwind CSS, localized in Catalan (default), Spanish and English with fully localized URLs.

## Stack

- **Next.js 15** (App Router) + TypeScript + Tailwind CSS
- **next-intl** for i18n with localized routing (`/ca/serveis/...`, `/es/servicios/...`, `/en/services/...`)
- **Supabase** for storing contact-form leads
- **Resend** for owner notification + lead confirmation emails
- Target deploy: **Vercel**

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in real values, see below
npm run dev
```

Visit `http://localhost:3000` (redirects to `/ca`).

## Environment variables

See [.env.example](.env.example). Required for the contact form to fully work:

| Variable | Where to get it |
| --- | --- |
| `SUPABASE_URL` | Supabase project → Settings → API |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase project → Settings → API (service role, **server-only**, never expose client-side) |
| `RESEND_API_KEY` | resend.com → API Keys |
| `CONTACT_TO_EMAIL` | The owner's inbox for new-lead notifications |
| `CONTACT_FROM_EMAIL` | Optional; defaults to Resend's test sender until you verify your own domain in Resend |
| `NEXT_PUBLIC_SITE_URL` | Production URL, used in `sitemap.xml` and Open Graph tags |

Without Supabase/Resend configured, the contact form still validates input but will return an error when trying to save the lead — set the env vars before going live.

## Supabase setup

1. Create a project at supabase.com.
2. Open the SQL editor and run [supabase/schema.sql](supabase/schema.sql) — creates the `leads` table with row-level security restricted to the service role.
3. Copy the project URL and **service role key** (not the anon key) into `.env.local` / your Vercel project's environment variables.

## Resend setup

1. Create an account at resend.com and generate an API key.
2. For testing, the default `onboarding@resend.dev` sender works without verification.
3. For production, verify your own sending domain in Resend and set `CONTACT_FROM_EMAIL` accordingly (e.g. `Jardí Verd <hola@jardiverd.com>`).

## Content & i18n

- All UI copy lives in [messages/ca.json](messages/ca.json), [messages/es.json](messages/es.json), [messages/en.json](messages/en.json).
- Service data (titles, localized slugs, descriptions) lives in [lib/services-data.ts](lib/services-data.ts) — add a service by adding one entry here.
- Areas served live in [lib/areas-data.ts](lib/areas-data.ts), which also holds the phone/WhatsApp number used throughout the site.
- Routing + localized static-page slugs are defined in [i18n/routing.ts](i18n/routing.ts).

## Legal pages

`/privacy-policy`, `/cookies` and `/legal-notice` (and their localized equivalents) currently render placeholder text from the `Legal` namespace in each locale's message file — replace with real legal content before launch.

## Deploying to Vercel

1. Push this repo to GitHub/GitLab/Bitbucket and import it in Vercel.
2. Add the environment variables above in the Vercel project settings.
3. Deploy — the build is fully static/SSG for content pages, with a serverless function for `/api/contact`.
