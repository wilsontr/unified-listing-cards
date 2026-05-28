# unified-listing-cards

Monorepo with a Next.js web app, an Expo mobile app, and a shared React package.

## Workspace layout

- `apps/web`: Next.js + React + Tailwind + Vitest
- `apps/mobile`: Expo + React Native + Nativewind + Jest
- `packages/shared`: shared hooks, fixtures, and cross-platform component exports

## Shared surface

Both apps import from `@workspace/shared`.

- `useFeaturedListing()` provides shared listing rotation state
- `ListingCard` resolves to `ListingCard.web.tsx` in the web app
- `ListingCard` resolves to `ListingCard.native.tsx` in the Expo app

## Commands

Install from the repo root:

```bash
npm install
```

Run the web app:

```bash
npm run dev:web
```

Run the Expo app:

```bash
npm run dev:mobile
```

Typecheck everything:

```bash
npm run typecheck
```

Run unit tests:

```bash
npm test
```
