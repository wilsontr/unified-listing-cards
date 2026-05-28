"use client";

import {
  ListingCard,
  getListingCardVariant,
  useFeaturedListing,
} from "@workspace/shared";

export function WebListingShowcase() {
  const { cycleListing, listing, listingCount } = useFeaturedListing();
  const variant = getListingCardVariant("listing-card-highlight");

  return (
    <section className="grid gap-8 rounded-[2rem] border border-slate-200/70 bg-white/90 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
      <div className="space-y-5">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
          Next.js + Tailwind
        </p>
        <h2 className="max-w-lg text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Shared hooks keep the card content in sync while each platform renders
          the UI in its own native idiom.
        </h2>
        <p className="max-w-xl text-base leading-7 text-slate-600">
          This client component consumes the shared listing hook and the shared
          card export from the workspace package.
        </p>
        <button
          className="inline-flex w-fit items-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          onClick={cycleListing}
          type="button"
        >
          Rotate listing ({listingCount} total)
        </button>
      </div>
      <ListingCard
        actionLabel="Open listing"
        listing={listing}
        onPress={cycleListing}
        variant={variant}
      />
    </section>
  );
}
