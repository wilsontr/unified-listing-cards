import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { FEATURED_LISTINGS, ListingCard } from "@workspace/shared";

import { WebListingShowcase } from "./web-listing-showcase";

describe("WebListingShowcase", () => {
  it("cycles through shared listing data", () => {
    render(<WebListingShowcase />);

    expect(screen.getByText("Desert Modern Hideaway")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /rotate listing/i }));

    expect(screen.getByText("Canal Loft Retreat")).toBeInTheDocument();
  });

  it("renders initial listing content in SSR-compatible output before interaction", () => {
    render(<WebListingShowcase />);
    const first = FEATURED_LISTINGS[0];

    expect(screen.getByText(first.title)).toBeInTheDocument();
    expect(screen.getByText(first.badge)).toBeInTheDocument();
    expect(screen.getByText(first.location)).toBeInTheDocument();
  });

  it("renders an <article> element for the listing card", () => {
    const { container } = render(<WebListingShowcase />);
    expect(container.querySelector("article")).not.toBeNull();
  });
});

describe("ListingCard variant", () => {
  it("renders an accent border element when variant is 'highlighted'", () => {
    const { getByTestId } = render(
      <ListingCard
        actionLabel="Open listing"
        listing={FEATURED_LISTINGS[0]}
        variant="highlighted"
      />,
    );
    expect(getByTestId("accent-border")).toBeTruthy();
  });

  it("does not render the accent border element for the control variant", () => {
    const { queryByTestId } = render(
      <ListingCard
        actionLabel="Open listing"
        listing={FEATURED_LISTINGS[0]}
        variant="control"
      />,
    );
    expect(queryByTestId("accent-border")).toBeNull();
  });
});
