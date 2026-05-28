import { renderHook, act } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { FEATURED_LISTINGS } from "./listings";
import { useFeaturedListing } from "./use-featured-listing";

describe("useFeaturedListing", () => {
  it("returns the first listing initially", () => {
    const { result } = renderHook(() => useFeaturedListing());
    expect(result.current.listing).toBe(FEATURED_LISTINGS[0]);
  });

  it("reports the correct listingCount", () => {
    const { result } = renderHook(() => useFeaturedListing());
    expect(result.current.listingCount).toBe(FEATURED_LISTINGS.length);
  });

  it("cycles to the next listing on each call to cycleListing", () => {
    const { result } = renderHook(() => useFeaturedListing());

    act(() => {
      result.current.cycleListing();
    });
    expect(result.current.listing).toBe(FEATURED_LISTINGS[1]);

    act(() => {
      result.current.cycleListing();
    });
    expect(result.current.listing).toBe(FEATURED_LISTINGS[2]);
  });

  it("wraps back to the first listing after the last one", () => {
    const { result } = renderHook(() => useFeaturedListing());

    for (let i = 0; i < FEATURED_LISTINGS.length; i++) {
      act(() => {
        result.current.cycleListing();
      });
    }

    expect(result.current.listing).toBe(FEATURED_LISTINGS[0]);
  });
});
