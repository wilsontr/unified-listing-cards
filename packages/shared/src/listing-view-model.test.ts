import { describe, expect, it } from "vitest";

import { FEATURED_LISTINGS } from "./listings";
import { getListingViewModel } from "./listing-view-model";

const [desert, canal, forest] = FEATURED_LISTINGS;

describe("getListingViewModel", () => {
  describe("formattedPrice", () => {
    it("returns a non-empty display string for each fixture", () => {
      for (const listing of FEATURED_LISTINGS) {
        const vm = getListingViewModel(listing);
        expect(typeof vm.formattedPrice).toBe("string");
        expect(vm.formattedPrice.length).toBeGreaterThan(0);
      }
    });

    it("includes the price value from the listing", () => {
      const vm = getListingViewModel(desert);
      expect(vm.formattedPrice).toContain("420");
    });
  });

  describe("dealQualityLabel", () => {
    it("returns a non-empty string derived from badge for each fixture", () => {
      for (const listing of FEATURED_LISTINGS) {
        const vm = getListingViewModel(listing);
        expect(typeof vm.dealQualityLabel).toBe("string");
        expect(vm.dealQualityLabel.length).toBeGreaterThan(0);
      }
    });

    it("reflects the badge value", () => {
      expect(getListingViewModel(desert).dealQualityLabel).toBe(desert.badge);
      expect(getListingViewModel(canal).dealQualityLabel).toBe(canal.badge);
      expect(getListingViewModel(forest).dealQualityLabel).toBe(forest.badge);
    });
  });

  describe("isHighlighted", () => {
    it("returns a boolean for each fixture", () => {
      for (const listing of FEATURED_LISTINGS) {
        const vm = getListingViewModel(listing);
        expect(typeof vm.isHighlighted).toBe("boolean");
      }
    });

    it("is true for the Editor pick listing", () => {
      expect(getListingViewModel(desert).isHighlighted).toBe(true);
    });

    it("is false for non-Editor-pick listings", () => {
      expect(getListingViewModel(canal).isHighlighted).toBe(false);
      expect(getListingViewModel(forest).isHighlighted).toBe(false);
    });
  });

  describe("allInPriceLabel", () => {
    it("returns the allInPrice value when present", () => {
      expect(getListingViewModel(desert).allInPriceLabel).toBe(
        desert.allInPrice,
      );
      expect(getListingViewModel(canal).allInPriceLabel).toBe(canal.allInPrice);
      expect(getListingViewModel(forest).allInPriceLabel).toBe(
        forest.allInPrice,
      );
    });

    it("falls back to formattedPrice when allInPrice is absent", () => {
      const listing = { ...desert, allInPrice: undefined };
      const vm = getListingViewModel(listing);
      expect(vm.allInPriceLabel).toBe(vm.formattedPrice);
    });

    it("returns a non-empty string for every fixture", () => {
      for (const listing of FEATURED_LISTINGS) {
        const vm = getListingViewModel(listing);
        expect(typeof vm.allInPriceLabel).toBe("string");
        expect(vm.allInPriceLabel.length).toBeGreaterThan(0);
      }
    });
  });

  describe("scarcityLabel", () => {
    it("returns the scarcityNote value when present", () => {
      expect(getListingViewModel(desert).scarcityLabel).toBe(
        desert.scarcityNote,
      );
    });

    it("returns an empty string when scarcityNote is absent", () => {
      expect(getListingViewModel(canal).scarcityLabel).toBe("");
      expect(getListingViewModel(forest).scarcityLabel).toBe("");
    });

    it("returns a string for every fixture", () => {
      for (const listing of FEATURED_LISTINGS) {
        expect(typeof getListingViewModel(listing).scarcityLabel).toBe(
          "string",
        );
      }
    });
  });
});
