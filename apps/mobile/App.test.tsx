import { fireEvent, render } from "@testing-library/react-native";

import { FEATURED_LISTINGS, ListingCard } from "@workspace/shared";

import App from "./App";

describe("App", () => {
  it("cycles shared listings when the card is pressed", () => {
    const { getByText } = render(<App />);

    expect(getByText("Desert Modern Hideaway")).toBeTruthy();

    fireEvent.press(getByText(/show another listing/i));

    expect(getByText("Canal Loft Retreat")).toBeTruthy();
  });

  it("renders a Pressable wrapper as the root interactive element", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("listing-card-pressable")).toBeTruthy();
  });

  it("renders the first shared listing fixture on mount", () => {
    const { getByText } = render(<App />);
    const first = FEATURED_LISTINGS[0];
    expect(getByText(first.title)).toBeTruthy();
    expect(getByText(first.badge)).toBeTruthy();
    expect(getByText(first.location)).toBeTruthy();
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
