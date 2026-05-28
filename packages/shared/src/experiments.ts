export type ListingCardVariant = "control" | "compact" | "highlighted";

/** Static local flag map. Keys are experiment flag names; values are the active variant. */
const FLAG_MAP: Record<string, ListingCardVariant> = {
  "listing-card-highlight": "highlighted",
  "listing-card-compact": "compact",
};

/**
 * Returns the active {@link ListingCardVariant} for the given experiment key.
 * Falls back to `defaultVariant` (or `"control"` when omitted) if the key is
 * not present in the static flag map.
 */
export function getListingCardVariant(
  key: string,
  defaultVariant: ListingCardVariant = "control",
): ListingCardVariant {
  return FLAG_MAP[key] ?? defaultVariant;
}
