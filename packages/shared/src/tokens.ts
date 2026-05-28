export type SemanticTokens = {
  surface: string;
  textPrimary: string;
  accentFg: string;
  badgeBg: string;
};

/** Tailwind class strings for the web (light theme) card. */
export const webTokens: SemanticTokens = {
  surface: "bg-slate-50/90",
  textPrimary: "text-slate-950",
  accentFg: "text-teal-700",
  badgeBg: "bg-slate-950",
};

/** Tailwind/Nativewind class strings for the native (dark theme) card. */
export const nativeTokens: SemanticTokens = {
  surface: "bg-slate-900",
  textPrimary: "text-white",
  accentFg: "text-teal-300",
  badgeBg: "bg-white/10",
};
