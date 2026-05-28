import { fireEvent, render } from "@testing-library/react-native";

import App from "./App";

describe("App", () => {
  it("cycles shared listings when the card is pressed", () => {
    const { getByText } = render(<App />);

    expect(getByText("Desert Modern Hideaway")).toBeTruthy();

    fireEvent.press(getByText(/show another listing/i));

    expect(getByText("Canal Loft Retreat")).toBeTruthy();
  });
});
