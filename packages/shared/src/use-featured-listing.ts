import { useCallback, useMemo, useState } from "react";

import { FEATURED_LISTINGS } from "./listings";

export function useFeaturedListing() {
  const [index, setIndex] = useState(0);

  const listing = useMemo(
    () => FEATURED_LISTINGS[index % FEATURED_LISTINGS.length],
    [index],
  );

  const cycleListing = useCallback(() => {
    setIndex((currentIndex) => (currentIndex + 1) % FEATURED_LISTINGS.length);
  }, []);

  return {
    cycleListing,
    listing,
    listingCount: FEATURED_LISTINGS.length,
  };
}