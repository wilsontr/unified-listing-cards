import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { WebListingShowcase } from "./web-listing-showcase";

describe("WebListingShowcase", () => {
  it("cycles through shared listing data", () => {
    render(<WebListingShowcase />);

    expect(screen.getByText("Desert Modern Hideaway")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /rotate listing/i }));

    expect(screen.getByText("Canal Loft Retreat")).toBeInTheDocument();
  });
});
