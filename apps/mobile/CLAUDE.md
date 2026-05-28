# Mobile App Guardrails

These rules apply to the `apps/mobile` package.

## File naming

- All platform-specific components for native **must** use the `.native.tsx` suffix (e.g., `ListingCard.native.tsx`).
- Never create a `ListingCard.tsx` without a suffix in `packages/shared/src/components/`. The native resolver prioritises `.native.tsx` and a bare `.tsx` would shadow it.

## Interaction primitives

- The root interactive element of `ListingCard.native.tsx` must be `<Pressable>` (not `<TouchableOpacity>` or `<TouchableHighlight>`).
- Use `active:opacity-90` on `<Pressable>` for touch feedback rather than JS-driven style manipulation.

## Shared package boundary

- Business logic, data formatting, and display derivations belong in `packages/shared/src/`.
- Do not inline formatting logic (e.g., price display) inside components. Use `getListingViewModel()` from `@workspace/shared` instead.
- Do not add new listing fields by editing the `Listing` type in `listings.ts` — derive display values in `listing-view-model.ts`.

## Experiment decisions

- Resolved variants must come from `getListingCardVariant()` imported from `@workspace/shared`.
- Do not write inline ternaries for variant logic inside components or `App.tsx`.
- The `variant` prop is set once at the call site (`App.tsx`) and passed down — components do not decide their own variant.
