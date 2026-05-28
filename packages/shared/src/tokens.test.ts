import { describe, expect, it } from "vitest";

import { nativeTokens, webTokens } from "./tokens";

const REQUIRED_KEYS = [
  "surface",
  "textPrimary",
  "accentFg",
  "badgeBg",
] as const;

describe("webTokens", () => {
  it.each(REQUIRED_KEYS)("exports key %s", (key) => {
    expect(webTokens).toHaveProperty(key);
    expect(typeof webTokens[key]).toBe("string");
    expect(webTokens[key].length).toBeGreaterThan(0);
  });
});

describe("nativeTokens", () => {
  it.each(REQUIRED_KEYS)("exports key %s", (key) => {
    expect(nativeTokens).toHaveProperty(key);
    expect(typeof nativeTokens[key]).toBe("string");
    expect(nativeTokens[key].length).toBeGreaterThan(0);
  });
});
