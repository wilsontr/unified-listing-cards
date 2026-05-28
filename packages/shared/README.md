# @workspace/shared

Shared package for the unified-listing-cards monorepo. Contains data fixtures, hooks, view-model, token constants, and the experiment module consumed by both the web and mobile apps.

## Extension points

### Adding a model field

1. Add the new property to the `Listing` type in `src/listings.ts`.
2. Update all three entries in `FEATURED_LISTINGS` with the new field value.
3. Add an assertion for the new field in `src/listings.test.ts` — the contract test runs against every fixture.
4. If the field needs a derived display value, add it to `ListingViewModel` in `src/listing-view-model.ts` and update `getListingViewModel()` and `src/listing-view-model.test.ts`.

### Adding a token role

1. Add the role name to the `SemanticTokens` type in `src/tokens.ts`.
2. Provide a Tailwind class string value in both `webTokens` (light theme) and `nativeTokens` (dark theme).
3. Add the new key to the `REQUIRED_KEYS` tuple in `src/tokens.test.ts`.
4. Reference the new token in the relevant `ListingCard` component instead of a hardcoded class.

### Adding a variant value

1. Add the new variant name to the `ListingCardVariant` union in `src/experiments.ts`.
2. Optionally add a flag key → variant entry to `FLAG_MAP` in the same file.
3. Extend `src/experiments.test.ts` to cover the new flag key (and "control" fallback if applicable).
4. Add the new visual treatment to `src/components/ListingCard.web.tsx` and `src/components/ListingCard.native.tsx` under the variant condition.
5. Export any new types from `src/index.ts`.

## Module resolution

The shared package ships both `.web.tsx` and `.native.tsx` implementations of `ListingCard`. The host app's TypeScript and bundler config controls which suffix is resolved:

- Web (`apps/web`): Vitest and Next.js turbopack prioritise `.web.tsx`
- Mobile (`apps/mobile`): Expo's Metro and TypeScript config prioritise `.native.tsx`

Always use the appropriate suffix. A bare `.tsx` file in `src/components/` would be picked up by both platforms and break the intended split.
