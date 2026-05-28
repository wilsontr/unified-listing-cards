import { describe, expect, it } from "vitest";

import { FEATURED_LISTINGS } from "./listings";

describe("FEATURED_LISTINGS contract", () => {
  it("contains at least one listing", () => {
    expect(FEATURED_LISTINGS.length).toBeGreaterThan(0);
  });

  it.each(FEATURED_LISTINGS)(
    "listing $id has all required fields",
    (listing) => {
      expect(typeof listing.id).toBe("string");
      expect(listing.id.length).toBeGreaterThan(0);

      expect(typeof listing.title).toBe("string");
      expect(listing.title.length).toBeGreaterThan(0);

      expect(typeof listing.price).toBe("string");
      expect(listing.price.length).toBeGreaterThan(0);

      expect(typeof listing.badge).toBe("string");
      expect(listing.badge.length).toBeGreaterThan(0);

      expect(typeof listing.location).toBe("string");
      expect(listing.location.length).toBeGreaterThan(0);

      expect(typeof listing.summary).toBe("string");
      expect(listing.summary.length).toBeGreaterThan(0);

      expect(Array.isArray(listing.amenities)).toBe(true);
      expect(listing.amenities.length).toBeGreaterThan(0);
      listing.amenities.forEach((a) => {
        expect(typeof a).toBe("string");
        expect(a.length).toBeGreaterThan(0);
      });
    },
  );

  it("has unique ids", () => {
    const ids = FEATURED_LISTINGS.map((l) => l.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it.each(FEATURED_LISTINGS)(
    "listing $id has a non-empty allInPrice",
    (listing) => {
      expect(typeof listing.allInPrice).toBe("string");
      expect((listing.allInPrice as string).length).toBeGreaterThan(0);
    },
  );

  it.each(FEATURED_LISTINGS)(
    "listing $id has a string scarcityNote when present",
    (listing) => {
      if (listing.scarcityNote !== undefined) {
        expect(typeof listing.scarcityNote).toBe("string");
        expect(listing.scarcityNote.length).toBeGreaterThan(0);
      }
    },
  );
});
