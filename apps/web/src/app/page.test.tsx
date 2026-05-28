import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import Home from "./page";

vi.mock("@/components/web-listing-showcase", () => ({
  WebListingShowcase: () => <div data-testid="web-listing-showcase" />,
}));

describe("Home page", () => {
  it("renders a main element as the root", () => {
    const { container } = render(<Home />);
    expect(container.querySelector("main")).not.toBeNull();
  });

  it("renders the WebListingShowcase component", () => {
    render(<Home />);
    expect(screen.getByTestId("web-listing-showcase")).toBeInTheDocument();
  });

  it("renders the hero heading", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { level: 1 }),
    ).toBeInTheDocument();
  });

  it("renders the stats section with Apps, Shared, and Tests labels", () => {
    render(<Home />);
    expect(screen.getByText("Apps")).toBeInTheDocument();
    expect(screen.getByText("Shared")).toBeInTheDocument();
    expect(screen.getByText("Tests")).toBeInTheDocument();
  });
});
