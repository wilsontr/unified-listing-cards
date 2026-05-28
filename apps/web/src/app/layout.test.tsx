import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import RootLayout from "./layout";

describe("RootLayout", () => {
  it("renders children", () => {
    render(
      <RootLayout>
        <span>hello</span>
      </RootLayout>,
    );
    expect(screen.getByText("hello")).toBeInTheDocument();
  });
});
