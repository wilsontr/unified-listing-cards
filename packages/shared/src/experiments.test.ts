import { describe, expect, it } from "vitest";

import { getListingCardVariant } from "./experiments";

describe("getListingCardVariant", () => {
  it("returns 'control' for an unknown key", () => {
    expect(getListingCardVariant("unknown-flag-xyz")).toBe("control");
  });

  it("returns the explicit defaultVariant when the key is unknown", () => {
    expect(getListingCardVariant("unknown-flag-xyz", "compact")).toBe(
      "compact",
    );
  });

  it("returns the correct variant for a known key", () => {
    const result = getListingCardVariant("listing-card-highlight");
    expect(["control", "compact", "highlighted"]).toContain(result);
  });

  it("returns 'highlighted' for the listing-card-highlight key", () => {
    expect(getListingCardVariant("listing-card-highlight")).toBe("highlighted");
  });

  it("returns 'compact' for the listing-card-compact key", () => {
    expect(getListingCardVariant("listing-card-compact")).toBe("compact");
  });

  it("known key overrides an explicit defaultVariant", () => {
    expect(getListingCardVariant("listing-card-highlight", "control")).toBe(
      "highlighted",
    );
  });
});
