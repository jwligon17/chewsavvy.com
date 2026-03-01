## Chewsavvy Web

Marketing site built with Next.js App Router, TypeScript, and Tailwind CSS.

## Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

## Components

- Layout components: `src/components/layout`
- Section components: `src/components/sections`
- UI primitives: `src/components/ui`
- Edit marketing/site copy and nav links in: `src/content/chewsavvy.ts`

## Capabilities Statement PDF

- Public download path: `/capabilities-statement.pdf`
- To update it, replace `web/public/capabilities-statement.pdf` with the final Capabilities Statement PDF.

## Quality Checks

```bash
npm run lint
npm run build
```

## Deployment (Vercel)

Set these in Vercel Project Settings -> Environment Variables:

```bash
RESEND_API_KEY=your_resend_api_key
```

Optional:

```bash
CONTACT_FROM_EMAIL=Chewsavvy <noreply@example.com>
```

### Test Contact API Locally

1. Add env vars to `.env.local`:

```bash
RESEND_API_KEY=your_resend_api_key
CONTACT_FROM_EMAIL=Chewsavvy <noreply@example.com>
```

2. Start the app:

```bash
npm run dev
```

3. Send a test request:

```bash
curl -sS -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "organization": "Chewsavvy QA",
    "message": "This is a local contact endpoint test."
  }'
```

## Next.js Docs

- [Next.js Documentation](https://nextjs.org/docs)
