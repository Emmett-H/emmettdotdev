# emmett.dev

Personal portfolio site built with React, TypeScript, Vite, and Tailwind CSS.

## Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui (Radix UI primitives)
- Framer Motion

## Running locally

Use Node.js 22 (see `.node-version`), then:

```bash
npm install
npm run dev
```

The site will be available at http://localhost:5173.

## Other commands

```bash
npm run build    # type-check and build for production
npm run preview  # preview the production build locally
npm run lint     # run ESLint
```

## Cloudflare hosting

Deploy this static site through Cloudflare Pages with its GitHub integration:

- Project: [`emmettdotdev`](https://dash.cloudflare.com/ce4f4a533bc2795d7cdf22f5c5d9eeb4/pages/view/emmettdotdev)
- Default hostname: https://emmettdotdev.pages.dev
- Repository: `Emmett-H/emmettdotdev`
- Production branch: `main`
- Root directory: repository root
- Build command: `npm run build`
- Build output directory: `dist`
- Node.js version: 22, selected by `.node-version`

Enable automatic production deployments so each push to `main` builds and
publishes the site. No server functions or build-time secrets are required;
the contact form continues to use Web3Forms directly.

Enable Cloudflare Web Analytics in the Pages project's **Metrics** tab, then
deploy again. Pages injects the analytics beacon into the deployed HTML, so
the app does not need an analytics package or a manually embedded script.
Traffic reports are available in Cloudflare's **Web Analytics** dashboard,
including visits, page views, countries, referrers, browsers, and devices.
These are aggregate statistics, not the identities of individual visitors.

[Open this site's Web Analytics dashboard](https://dash.cloudflare.com/ce4f4a533bc2795d7cdf22f5c5d9eeb4/web-analytics/overview?siteTag~in=3fa2a946e61d4ea48c72e26ea0097be6).
Filter by host `www.emmett.dev` to inspect traffic on the public domain.

Keep the existing canonical domain, `www.emmett.dev`, and the permanent
redirect from `emmett.dev`. Associate both domains with the Pages project
before updating DNS. Cloudflare requires its nameservers for a Pages apex
domain; preserve all existing mail and verification records during that move.
