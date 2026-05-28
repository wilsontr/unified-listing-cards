import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

// next/font/google calls a font loading service at build time which doesn't
// exist in jsdom. Return a plain object with the CSS variable name instead.
vi.mock("next/font/google", () => ({
  Geist: () => ({ variable: "--font-geist-sans" }),
  Geist_Mono: () => ({ variable: "--font-geist-mono" }),
}));
