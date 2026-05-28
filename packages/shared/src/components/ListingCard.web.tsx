import { getListingViewModel } from "../listing-view-model";
import type { Listing } from "../listings";
import { webTokens } from "../tokens";
import type { ListingCardVariant } from "../experiments";

type ListingCardProps = {
  actionLabel: string;
  listing: Listing;
  onPress?: () => void;
  variant?: ListingCardVariant;
};

export function ListingCard({
  actionLabel,
  listing,
  onPress,
  variant = "control",
}: ListingCardProps) {
  const vm = getListingViewModel(listing);
  return (
    <>
      {variant === "highlighted" && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[2rem] ring-2 ring-teal-500"
          data-testid="accent-border"
        />
      )}
      <article
        className={`relative flex h-full flex-col justify-between rounded-[2rem] border border-slate-200 ${webTokens.surface} p-6 shadow-[0_18px_48px_rgba(15,23,42,0.08)]`}
      >
        <div className="space-y-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p
                className={`text-xs font-semibold uppercase tracking-[0.24em] ${webTokens.accentFg}`}
              >
                {vm.dealQualityLabel}
              </p>
              <h3
                className={`mt-3 text-3xl font-semibold tracking-tight ${webTokens.textPrimary}`}
              >
                {listing.title}
              </h3>
              <p className="mt-2 text-base text-slate-500">
                {listing.location}
              </p>
            </div>
            <span
              className={`rounded-full ${webTokens.badgeBg} px-4 py-2 text-sm font-semibold text-white`}
            >
              {vm.allInPriceLabel}
            </span>
          </div>
          <p className="text-base leading-7 text-slate-600">
            {listing.summary}
          </p>
          {vm.scarcityLabel && (
            <p className={`text-xs font-semibold ${webTokens.accentFg}`}>
              {vm.scarcityLabel}
            </p>
          )}
          <ul className="flex flex-wrap gap-2">
            {listing.amenities.map((amenity) => (
              <li
                key={amenity}
                className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-600"
              >
                {amenity}
              </li>
            ))}
          </ul>
        </div>
        <button
          className="mt-6 inline-flex w-fit items-center rounded-full bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-500"
          onClick={onPress}
          type="button"
        >
          {actionLabel}
        </button>
      </article>
    </>
  );
}
