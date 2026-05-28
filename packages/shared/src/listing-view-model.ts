import type { Listing } from "./listings";

export type ListingViewModel = {
  formattedPrice: string;
  dealQualityLabel: string;
  isHighlighted: boolean;
  allInPriceLabel: string;
  scarcityLabel: string;
};

export function getListingViewModel(listing: Listing): ListingViewModel {
  const formattedPrice = listing.price;
  return {
    formattedPrice,
    dealQualityLabel: listing.badge,
    isHighlighted: listing.badge === "Editor pick",
    allInPriceLabel: listing.allInPrice ?? formattedPrice,
    scarcityLabel: listing.scarcityNote ?? "",
  };
}
