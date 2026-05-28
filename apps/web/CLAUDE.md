# Web App Guardrails

These rules apply to the `apps/web` package.

## File naming

- All platform-specific components for web **must** use the `.web.tsx` suffix (e.g., `ListingCard.web.tsx`).
- Never create a `ListingCard.tsx` without a suffix in `packages/shared/src/components/`. The web module resolver prioritises `.web.tsx` and a bare `.tsx` would break native resolution.

## SSR safety

- `ListingCard.web.tsx` must remain SSR-renderable with no hooks or client-only APIs at module level.
- State and event handlers belong in the `"use client"` components that import it (e.g., `WebListingShowcase`).
- The initial server-rendered HTML must include the listing title, badge, and location without requiring JavaScript.

## Shared package boundary

- Business logic, data formatting, and display derivations belong in `packages/shared/src/`.
- Do not inline formatting logic (e.g., price display) inside components. Use `getListingViewModel()` from `@workspace/shared` instead.
- Do not add new listing fields by editing the `Listing` type in `listings.ts` — derive display values in `listing-view-model.ts`.

## Experiment decisions

- Resolved variants must come from `getListingCardVariant()` imported from `@workspace/shared`.
- Do not write inline ternaries like `badge === 'Editor pick' ? 'highlighted' : 'control'` inside components or pages.
- The `variant` prop is set once at the call site (e.g., `WebListingShowcase`) and passed down — components do not decide their own variant.
